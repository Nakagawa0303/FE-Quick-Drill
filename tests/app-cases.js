import assert from 'node:assert/strict';
import {questions} from '../data/questions.js';
import {validateState} from '../js/core.js';

// DOMアダプターで操作フローを確認する。実ブラウザの表示検証の代用ではない。
export async function applicationSmoke() {
  const names=['document','window','localStorage','setInterval','setTimeout','clearTimeout'];
  const original=new Map(names.map(k=>[k,Object.getOwnPropertyDescriptor(globalThis,k)]));
  const listeners={},docListeners={},windowListeners={},memory=new Map(),notice={textContent:''};
  const root={innerHTML:'',addEventListener:(type,fn)=>listeners[type]=fn,querySelector:()=>({focus(){},click(){}})};
  let approved=true;
  let exported=false;
  try {
    Object.assign(globalThis,{
      document:{hidden:false,querySelector:s=>s==='#app'?root:s==='#notice'?notice:null,addEventListener:(type,fn)=>docListeners[type]=fn,createElement:()=>({click(){exported=true;}})},
      localStorage:{getItem:k=>memory.get(k)??null,setItem:(k,v)=>memory.set(k,v)},
      window:{confirm:()=>approved,scrollTo(){},addEventListener:(type,fn)=>windowListeners[type]=fn},
      setInterval:()=>0,setTimeout:()=>0,clearTimeout:()=>{},
    });
    await import('../js/app.js');
    const click=(action,data={})=>listeners.click({target:{closest:()=>({disabled:false,dataset:{action,...data},setAttribute(){}})}});
    const saved=()=>JSON.parse(memory.get('fe-quick-drill:v1'));
    assert(root.innerHTML.includes('今日の演習をはじめる'));
    click('subject',{subject:'B'});click('count',{count:'3'});
    assert.equal(saved().settings.subject,'B');assert.equal(saved().settings.count,3);
    click('subject',{subject:'A'});click('start');
    assert(root.innerHTML.includes('問題 1'));assert(!root.innerHTML.includes('正答：'));
    click('answer',{answer:'1'});click('next');click('answer',{answer:'2'});click('prev');click('answer',{answer:'0'});
    click('pause');assert(root.innerHTML.includes('中断中の演習'));
    assert.equal(Object.keys(saved().active.answers).length,2);
    assert.equal(saved().active.answers[saved().active.ids[0]],0);
    click('resume');assert(root.innerHTML.includes('問題 1'));
    approved=false;click('finish');assert(saved().active);assert.equal(saved().history.length,0);
    approved=true;click('finish');assert(root.innerHTML.includes('おつかれさまでした'));
    const completed=saved();assert.equal(completed.history.length,1);assert.equal(completed.active,null);assert(completed.review.length>=3);
    assert.equal(validateState(completed,questions).history.length,1);
    const id=completed.history[0].items[0].id;
    click('mark',{id});assert.notEqual(saved().review.includes(id),completed.review.includes(id));
    click('home');click('tab',{tab:'records'});assert(root.innerHTML.includes('分野別の正答率'));
    const before=memory.get('fe-quick-drill:v1');
    const filter=(key,value)=>listeners.change({target:{id:`analysis-${key}`,value}});
    assert.match(root.innerHTML,/id="analysis-field" disabled/);
    await filter('subject','A');assert(root.innerHTML.includes('法務'));
    await filter('subfield','データベース');
    assert.match(root.innerHTML,/value="データベース" selected/);
    await filter('field','マネジメント');assert.match(root.innerHTML,/value="全小分野" selected/);
    assert(!root.innerHTML.includes('value="データベース"'));
    await filter('subfield','未分類');assert(root.innerHTML.includes('—／未学習'));
    await filter('subject','B');assert(!root.innerHTML.includes('id="analysis-subfield"'));
    assert.match(root.innerHTML,/value="全分野" selected/);
    await filter('subject','すべて');
    assert(root.innerHTML.includes('演習全体の解説'));
    assert(!root.innerHTML.includes('一致分の時間'));
    assert.equal(memory.get('fe-quick-drill:v1'),before);
    click('result',{id:completed.history[0].id});
    assert.equal((root.innerHTML.match(/class="card review-card"/g)||[]).length,completed.history[0].items.length);
    assert(completed.history[0].items.every(i=>root.innerHTML.includes(questions.find(q=>q.id===i.id).subfield)));
    const first=questions.find(q=>q.id===completed.history[0].items[0].id),subfield=first.subfield;
    delete first.subfield;click('result',{id:completed.history[0].id});assert(root.innerHTML.includes('未分類'));
    first.subfield='<img src=x onerror="bad">';click('result',{id:completed.history[0].id});
    assert(root.innerHTML.includes('&lt;img src=x onerror=&quot;bad&quot;&gt;'));assert(!root.innerHTML.includes('<img src=x'));
    first.subfield=subfield;
    click('home');click('tab',{tab:'records'});
    click('export');assert(exported);assert.deepEqual(saved(),JSON.parse(before));
    const fileEvent=text=>({target:{id:'import-file',files:[{size:text.length,text:async()=>text}],value:'sample.json'}});
    await listeners.change(fileEvent('{broken'));assert.equal(memory.get('fe-quick-drill:v1'),before);assert(notice.textContent.includes('復元できませんでした'));
    approved=false;await listeners.change(fileEvent(JSON.stringify(completed)));assert.equal(memory.get('fe-quick-drill:v1'),before);
    approved=true;await listeners.change(fileEvent(JSON.stringify(completed)));assert.deepEqual(saved(),completed);
    click('tab',{tab:'review'});click('start');assert(saved().active.ids.every(id=>completed.review.includes(id)));
  } finally {
    for(const [key,descriptor] of original) {if(descriptor)Object.defineProperty(globalThis,key,descriptor);else delete globalThis[key];}
  }
}
