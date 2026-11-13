import assert from 'node:assert/strict';
import {questions,additionalQuestions,sampleQuestions} from '../data/questions.js';
import {freshState,validateState,formatSource} from '../js/core.js';
import {load} from '../js/storage.js';

// 実アプリのイベント処理を使う。実ブラウザの描画・タップ確認とは区別する。
export async function stage1ApplicationFlows(){
  assert.equal(questions.filter(q=>q.subject==='A').length,65);
  assert.equal(questions.filter(q=>q.subject==='B').length,13);
  assert.equal(additionalQuestions.length,62);
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const keys=['document','window','localStorage','setInterval','setTimeout','clearTimeout'];
  const originals=new Map(keys.map(k=>[k,Object.getOwnPropertyDescriptor(globalThis,k)]));
  const legacy={id:'preserved-old-session',finishedAt:'2026-11-07T00:00:00Z',elapsedMs:1234,items:[{id:sampleQuestions[0].id,answer:sampleQuestions[0].answer,correct:true}]};
  const callbacks={},memory=new Map();
  const root={innerHTML:'',addEventListener:(type,fn)=>callbacks[type]=fn,querySelector:()=>({focus(){}})};
  try{
    Object.assign(globalThis,{
      document:{hidden:false,querySelector:s=>s==='#app'?root:s==='#notice'?{textContent:''}:null,addEventListener(){}},
      window:{confirm:()=>true,scrollTo(){},addEventListener(){}},
      localStorage:{getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,v)},
      setInterval:()=>0,setTimeout:()=>0,clearTimeout(){},
    });
    await import('../js/app.js');
    const click=(action,data={})=>callbacks.click({target:{closest:()=>({disabled:false,dataset:{action,...data},setAttribute(){}})}});
    const saved=()=>JSON.parse(memory.get('fe-quick-drill:v1'));
    for(const q of additionalQuestions){
      const state=freshState();state.settings={subject:q.subject,field:'全分野',count:q.subject==='A'?5:1};state.review=[q.id];state.history=[legacy];
      click('home');click('tab',{tab:'records'});
      const text=JSON.stringify(state);
      await callbacks.change({target:{id:'import-file',files:[{size:text.length,text:async()=>text}],value:'fixture.json'}});
      click('tab',{tab:'review'});click('start');assert.deepEqual(saved().active.ids,[q.id],q.id);
      assert(root.innerHTML.includes(escape(q.prompt)),q.id);
      if(q.code)assert(root.innerHTML.includes(escape(q.code)),q.id+' code');
      if(q.table)assert(root.innerHTML.includes('<table>'),q.id+' table');
      assert(!root.innerHTML.includes('正答：'));assert(!root.innerHTML.includes(escape(q.explanation.brief)));
      click('answer',{answer:String((q.answer+1)%q.choices.length)});click('pause');click('resume');click('finish');
      assert.equal(saved().history[1].items[0].correct,false,q.id);
      assert(root.innerHTML.includes(escape(q.explanation.brief)),q.id+' brief');
      assert(root.innerHTML.includes(escape(q.explanation.detail)),q.id+' detail');
      assert(root.innerHTML.includes(escape(formatSource(q))),q.id+' attribution');
      assert(root.innerHTML.includes(q.source.answerUrl),q.id+' official answer link');
      assert(saved().review.includes(q.id));
      click('home');click('tab',{tab:'review'});click('start');
      assert.deepEqual(saved().active.ids,[q.id]);click('answer',{answer:String(q.answer)});click('finish');
      assert.equal(saved().history[2].items[0].correct,true,q.id);
      assert.deepEqual(saved().history[0],legacy,q.id+' old history');
      assert.deepEqual(validateState(saved(),questions),saved());
      assert.equal(load(questions).error,null);
      click('mark',{id:q.id});assert(!saved().review.includes(q.id));
    }
  }finally{
    for(const [k,d] of originals){if(d)Object.defineProperty(globalThis,k,d);else delete globalThis[k];}
  }
  return {questions:additionalQuestions.length,gradedSessions:additionalQuestions.length*2};
}
