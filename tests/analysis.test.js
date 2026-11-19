import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {questions} from '../data/questions.js';
import {analyzeHistory,freshState,grade,stats,validateQuestions,validateState,selectQuestions} from '../js/core.js';
import {subfieldOf,subfieldOptions,changeAnalysisFilter,freshAnalysisFilter,normalizeAnalysisFilter} from '../js/classification.js';
import {load,save} from '../js/storage.js';

const old=JSON.parse(await readFile(new URL('./fixtures/bank-1930ef1.json',import.meta.url),'utf8'));
const q=id=>questions.find(q=>q.id===id);
const block=(id,ids,answers,day=1)=>({id,finishedAt:`2026-11-${String(day).padStart(2,'0')}T00:00:00Z`,elapsedMs:60000,items:grade({ids,answers},questions)});
const fixture=()=>({...freshState(),history:[
  block('db-ok',['A-T03'],{'A-T03':2},3),
  block('mixed',['A-T03','A-T04','B-S01'],{'A-T03':0,'A-T04':1,'B-S01':0},1),
  block('db-blank',['A-T03'],{},2),
],active:{id:'paused',ids:['A-T03'],index:0,answers:{'A-T03':2},elapsedMs:100}});

test('1930ef1の全72問は小分野メタデータ以外を厳密に維持',()=>{
  assert.equal(old.length,72);
  for(const before of old){const after=structuredClone(q(before.id));delete after.subfield;assert.deepEqual(after,before,before.id);}
  assert.equal(questions.filter(q=>q.subject==='A'&&!q.subfield).length,0);
  assert.equal(questions.filter(q=>q.subject==='B'&&Object.hasOwn(q,'subfield')).length,0);
});

test('小分野の欠落だけ未分類へフォールバック・不正名と親子不一致を拒否',()=>{
  const legacy=structuredClone(q('A-T03'));delete legacy.subfield;
  assert.equal(subfieldOf(legacy),'未分類');validateQuestions([legacy]);
  assert.throws(()=>validateQuestions([legacy],{requireSubfield:true}),/subfield/);
  for(const subfield of ['',null,undefined,'未知分類','未分類','法務'])assert.throws(()=>validateQuestions([{...legacy,subfield}]),/subfield/);
  const state={...freshState(),history:[block('legacy',[legacy.id],{[legacy.id]:legacy.answer})]};
  assert.equal(analyzeHistory(state,[legacy],{subject:'A',subfield:'未分類'}).summary.attempts,1);
  assert.equal(subfieldOf(q('B-S01')),null);
});

test('全体2/5・A2/4・DB1/3・B0/1、未解答と繰返しを含め中断は除外',()=>{
  const state=fixture(),before=JSON.stringify(state);
  for(const [filter,correct,attempts,unique] of [[{},2,5,3],[{subject:'A'},2,4,2],[{subject:'A',subfield:'データベース'},1,3,1],[{subject:'B'},0,1,1]]){
    const a=analyzeHistory(state,questions,filter);
    assert.deepEqual(a.summary,{attempts,correct,uniqueQuestions:unique,rate:correct/attempts});
    assert.equal(a.groups.reduce((n,g)=>n+g.attempts,0),attempts);
    assert.equal(Object.values(a.perQuestion).reduce((n,s)=>n+s.attempts,0),attempts);
  }
  assert.deepEqual(stats(state)['A-T03'],{attempts:3,correct:1});
  assert.equal(JSON.stringify(state),before);
  const none=analyzeHistory(state,questions,{subject:'A',field:'ストラテジ',subfield:'法務'});
  assert.deepEqual(none.summary,{attempts:0,correct:0,uniqueQuestions:0,rate:null});
  assert.equal(none.recent.length,0);
});

test('全科目/A/B・親子フィルターと下位リセット・演習出題条件から独立',()=>{
  let f=freshAnalysisFilter();
  assert.deepEqual(normalizeAnalysisFilter({subject:'すべて',field:'テクノロジ',subfield:'データベース'}),f);
  f=changeAnalysisFilter(f,'subject','A');assert(subfieldOptions().includes('法務'));
  f=changeAnalysisFilter(f,'subfield','法務');assert.equal(f.subfield,'法務');
  f=changeAnalysisFilter(f,'field','テクノロジ');assert.equal(f.subfield,'全小分野');
  assert(!subfieldOptions(f.field).includes('法務'));assert(subfieldOptions(f.field).includes('未分類'));
  f=changeAnalysisFilter(f,'subfield','データベース');
  f=changeAnalysisFilter(f,'subject','B');assert.deepEqual(f,{subject:'B',field:'全分野',subfield:'全小分野'});
  f=changeAnalysisFilter(f,'field','情報セキュリティ');
  assert.equal(analyzeHistory(fixture(),questions,f).summary.attempts,1);
  const state=fixture(),before=JSON.stringify(state),ids=selectQuestions(questions,state,false,()=>.5);
  analyzeHistory(state,questions,{subject:'A',field:'テクノロジ',subfield:'データベース'});
  assert.deepEqual(selectQuestions(questions,state,false,()=>.5),ids);assert.equal(JSON.stringify(state),before);
});

test('最近の演習は日時で並べ一致分だけ集計、最大20件で時間を転用しない',()=>{
  const state=fixture(),a=analyzeHistory(state,questions,{subject:'A',subfield:'データベース'});
  assert.deepEqual(a.recent.map(b=>b.id),['db-ok','db-blank','mixed']);
  assert.deepEqual(a.recent[2],{id:'mixed',finishedAt:state.history[1].finishedAt,attempts:1,correct:0,totalItems:3});
  assert(!Object.hasOwn(a.recent[2],'elapsedMs'));
  state.history=Array.from({length:25},(_,i)=>block(`b${i}`,['A-T03'],{},i+1));
  const recent=analyzeHistory(state,questions).recent;
  assert.equal(recent.length,20);assert.equal(recent[0].id,'b24');assert.equal(recent.at(-1).id,'b5');
});

test('旧72問で作った履歴・復習・中断のload→解答変更→再開採点→JSON再復元',()=>{
  const legacy=freshState();
  legacy.history=old.map((q,i)=>({id:`old-${i}`,finishedAt:'2026-11-01T00:00:00Z',elapsedMs:1234,items:[{id:q.id,answer:i%3===0?null:q.answer,correct:i%3!==0}]}));
  legacy.review=old.map(q=>q.id);
  legacy.active={id:'old-active',ids:old.slice(0,20).map(q=>q.id),index:4,answers:{[old[0].id]:old[0].answer},elapsedMs:5678};
  assert.deepEqual(validateState(legacy,old),legacy);
  const prior=Object.getOwnPropertyDescriptor(globalThis,'localStorage');let raw=JSON.stringify(legacy);
  try{
    globalThis.localStorage={getItem:key=>{assert.equal(key,'fe-quick-drill:v1');return raw;},setItem:(key,value)=>{assert.equal(key,'fe-quick-drill:v1');raw=value;}};
    const loaded=load(questions);assert.equal(loaded.error,null);assert.deepEqual(loaded.state,legacy);
    save(loaded.state);assert.deepEqual(JSON.parse(raw),legacy);
    const next=loaded.state;const first=q(next.active.ids[0]);next.active.answers[first.id]=(first.answer+1)%first.choices.length;next.active.answers[first.id]=first.answer;
    const items=grade(next.active,questions);next.history.push({id:next.active.id,finishedAt:'2026-11-13T00:00:00Z',elapsedMs:next.active.elapsedMs,items});next.active=null;
    save(next);assert.deepEqual(validateState(JSON.parse(raw),questions),next);assert.equal(items[0].correct,true);assert.equal(items[1].correct,false);
    assert(!raw.includes('subfield'));assert(!raw.includes('analysis'));
    const bad=structuredClone(next);bad.history[0].items[0].id='UNKNOWN';assert.throws(()=>validateState(bad,questions));
    bad.history[0].items[0]= {...next.history[0].items[0],correct:!next.history[0].items[0].correct};assert.throws(()=>validateState(bad,questions));
  }finally{if(prior)Object.defineProperty(globalThis,'localStorage',prior);else delete globalThis.localStorage;}
});
