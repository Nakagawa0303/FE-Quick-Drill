import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {questions,additionalQuestions} from '../data/questions.js';
import {freshState,validateState,grade,analyzeHistory,validateQuestions,selectQuestions} from '../js/core.js';
import {load,save} from '../js/storage.js';

const json=async name=>JSON.parse(await readFile(new URL(name,import.meta.url),'utf8'));
const before=await json('./fixtures/bank-before-expansion.json');
const oldIds=new Set(before.map(q=>q.id));
const additions=questions.filter(q=>!oldIds.has(q.id));
const digest=q=>createHash('sha256').update(JSON.stringify([q.prompt,q.choices,q.answer,q.code??null,q.table??null,q.trace??null,q.explanation])).digest('hex');

test('追加前78問を全プロパティ厳密一致で保持し、verifiedのA150/B30を達成',()=>{
  assert.equal(before.length,78);
  for(const old of before)assert.deepEqual(questions.find(q=>q.id===old.id),old,old.id);
  assert.equal(questions.filter(q=>q.subject==='A'&&q.verification.status==='verified').length,150);
  assert.equal(questions.filter(q=>q.subject==='B'&&q.verification.status==='verified').length,30);
  assert.equal(additions.filter(q=>q.subject==='A').length,85);assert.equal(additions.filter(q=>q.subject==='B').length,17);
  assert.equal(additions.filter(q=>q.source.type!=='ipa').length,0);
  validateQuestions(additionalQuestions,{requireReviewEvidence:true,requireSubfield:true});
});

test('全追加問題の出典・公式解答・確認時の内容ハッシュと3区切りの照合記録',async()=>{
  const review=await json('../docs/expansion-review.json'),sources=await json('../docs/expansion-sources.json');
  const entries=review.batches.flatMap(b=>b.questions);
  assert.deepEqual(review.batches.map(b=>b.questions.reduce((s,q)=>(s[q.id.includes('-B-')?'B':'A']++,s),{A:0,B:0})),[{A:30,B:5},{A:30,B:5},{A:25,B:7}]);
  assert.equal(entries.length,102);assert.equal(new Set(entries.map(r=>r.id)).size,102);
  for(const q of additions){
    const r=entries.find(r=>r.id===q.id),s=q.source,official=sources.find(x=>x.year===s.year&&x.subject===q.subject);
    assert(r,q.id);assert.equal(r.contentSha256,digest(q),q.id+' 再レビューが必要');
    assert.equal(q.choiceLabels[q.answer],official.answers[s.questionNumber],q.id);
    assert.equal(r.officialAnswer,official.answers[s.questionNumber]);
    assert.equal(s.questionSha256,official.questionSha256);assert.equal(s.answerSha256,official.answerSha256);
    assert.equal(s.url,official.questionUrl);assert.equal(s.answerUrl,official.answerUrl);
    assert.equal(r.answerChecked,true);assert.equal(r.transcriptionChecked,true);assert.equal(r.explanationChecked,true);
    assert.equal(q.verification.status,'verified');
    const sampleChoiceCounts={1:6,2:5,3:7,4:4,5:7,6:4,7:6,8:4,9:4,10:6,11:4,12:4,17:10,18:10,19:5,20:7};
    assert.equal(q.choices.length,q.subject==='A'?4:s.year===2022?sampleChoiceCounts[s.questionNumber]:4,q.id+' 全選択肢を保持');
    if(s.year===2019){assert.equal(s.originalSection,'午前');assert(s.session.includes('旧制度'));assert(s.title.includes('午前'));}
  }
  const computed=await json('../docs/expansion-computations.json');
  assert.equal(Object.keys(computed).length,28);
  for(const [id,c] of Object.entries(computed)){assert.equal(c.contentSha256,digest(questions.find(q=>q.id===id)));assert.equal(c.uniqueChoice,true);}
});

test('追加後も旧78問の履歴・復習・中断をload/save・採点・JSON再復元できる',()=>{
  const state=freshState();
  state.review=before.map(q=>q.id);
  state.history=before.map((q,i)=>({id:`before-${i}`,finishedAt:'2026-11-01T00:00:00Z',elapsedMs:100,items:[{id:q.id,answer:i%2?q.answer:null,correct:!!(i%2)}]}));
  state.active={id:'old-paused',ids:before.slice(-20).map(q=>q.id),index:10,answers:{[before.at(-1).id]:before.at(-1).answer},elapsedMs:2345};
  assert.deepEqual(validateState(state,before),state);
  let raw=JSON.stringify(state);const original=Object.getOwnPropertyDescriptor(globalThis,'localStorage');
  try{
    globalThis.localStorage={getItem:key=>{assert.equal(key,'fe-quick-drill:v1');return raw;},setItem:(key,value)=>{assert.equal(key,'fe-quick-drill:v1');raw=value;}};
    const restored=load(questions);assert.equal(restored.error,null);assert.deepEqual(restored.state,state);
    save(restored.state);assert.deepEqual(JSON.parse(raw),state);
    const next=restored.state,first=questions.find(q=>q.id===next.active.ids[0]);
    next.active.answers[first.id]=(first.answer+1)%first.choices.length;next.active.answers[first.id]=first.answer;
    next.history.push({id:next.active.id,finishedAt:'2026-11-13T00:00:00Z',elapsedMs:next.active.elapsedMs,items:grade(next.active,questions)});next.active=null;
    save(next);assert.deepEqual(validateState(JSON.parse(raw),questions),next);assert(!raw.includes('subfield'));assert(!raw.includes('analysisFilter'));
    assert.equal(analyzeHistory(next,questions).summary.attempts,98);
    const goodRaw=raw,unknown=JSON.parse(raw);unknown.history[0].items[0].id='NOT-IN-BANK';
    assert.throws(()=>validateState(unknown,questions));
    raw=JSON.stringify(unknown);const rejectedRaw=raw;
    assert(load(questions).error);assert.equal(raw,rejectedRaw,'復元失敗だけでは保存データを変更しない');raw=goodRaw;
    const bad=JSON.parse(raw);bad.history[0].items[0].correct=!bad.history[0].items[0].correct;assert.throws(()=>validateState(bad,questions));
  }finally{if(original)Object.defineProperty(globalThis,'localStorage',original);else delete globalThis.localStorage;}
});

test('追加全102問が復習で出題でき、同じ問題をpendingにすると通常・復習から除外',()=>{
  for(const q of additions){
    const state=freshState();state.settings={subject:q.subject,field:q.field,count:q.subject==='A'?5:1};state.review=[q.id];
    assert.deepEqual(selectQuestions([q],state),[q.id]);
    assert.deepEqual(selectQuestions([q],state,true),[q.id]);
    const pending={...q,verification:{status:'pending'}};
    assert.deepEqual(selectQuestions([pending],state),[]);assert.deepEqual(selectQuestions([pending],state,true),[]);
    assert.equal(grade({ids:[q.id],answers:{[q.id]:q.answer}},[q])[0].correct,true);
    assert.equal(grade({ids:[q.id],answers:{}},[q])[0].correct,false);
  }
});
