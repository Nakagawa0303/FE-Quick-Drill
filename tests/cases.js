import assert from 'node:assert/strict';
import {sampleQuestions as questions} from '../data/questions.js';
import {freshState,validateQuestions,selectQuestions,grade,stats,validateState} from '../js/core.js';

export function registerTests(test) {
  test('問題の形式・サンプル数・重複ID検証',()=>{
    assert.equal(validateQuestions(questions),questions);
    assert.equal(questions.filter(q=>q.subject==='A').length,12);
    assert.equal(questions.filter(q=>q.subject==='B').length,4);
    assert.throws(()=>validateQuestions([...questions,questions[0]]));
    assert.throws(()=>validateQuestions([{...questions[0],answer:99}]));
  });
  test('未出題優先・重複なし・一巡後再出題・分野絞り込み',()=>{
    const s=freshState();s.settings.count=20;
    s.history=[{items:[{id:questions[0].id,correct:true}]}];
    const ids=selectQuestions(questions,s,false,()=>0.5);
    assert.equal(ids.length,12);assert.equal(new Set(ids).size,12);assert.equal(ids.at(-1),questions[0].id);
    s.settings.field='ストラテジ';assert.equal(selectQuestions(questions,s).length,3);
    s.settings={subject:'B',field:'全分野',count:5};assert.equal(selectQuestions(questions,s).length,4);
  });
  test('未検証問題の除外・復習対象限定',()=>{
    const s=freshState();s.review=[questions[0].id];
    assert.deepEqual(selectQuestions(questions,s,true),[questions[0].id]);
    const pending={...questions[0],id:'pending',verification:{status:'pending'}};
    s.settings.count=20;assert(!selectQuestions([...questions,pending],s).includes('pending'));
  });
  test('解答変更・未解答・可変選択肢の採点と記録集計',()=>{
    const a={ids:[questions[0].id,questions[1].id,'B-P03'],answers:{[questions[0].id]:0,'B-P03':2}};
    a.answers[questions[0].id]=questions[0].answer;
    const result=grade(a,questions);
    assert.deepEqual(result.map(i=>i.correct),[true,false,true]);assert.equal(result[1].answer,null);
    assert.deepEqual(stats({history:[{items:result},{items:result}]})[questions[0].id],{attempts:2,correct:2});
  });
  test('中断状態と履歴のJSON往復',()=>{
    const s=freshState();s.active={id:'session1',ids:[questions[0].id],index:0,answers:{[questions[0].id]:2},elapsedMs:12345};
    assert.deepEqual(validateState(JSON.parse(JSON.stringify(s)),questions),s);
    s.history=[{id:'completed',finishedAt:'2026-11-07T00:00:00Z',elapsedMs:100,items:grade(s.active,questions)}];
    assert.deepEqual(validateState(s,questions),s);
  });
  test('不正な復元データ・成績改ざんの拒否',()=>{
    const base=freshState();
    for(const change of [{version:2},{review:['unknown']},{review:[questions[0].id,questions[0].id]},{settings:{subject:'A',field:'情報セキュリティ',count:5}},{history:[null]},{active:{}}])assert.throws(()=>validateState({...base,...change},questions));
    const active={id:'test',ids:[questions[0].id],index:0,answers:{[questions[0].id]:99},elapsedMs:0};
    assert.throws(()=>validateState({...base,active},questions));
    assert.throws(()=>validateState({...base,history:[{id:'b',finishedAt:'2026-11-07',elapsedMs:0,items:[{id:questions[0].id,answer:0,correct:true}]}]},questions));
  });
  test('数値・疑似言語サンプルの独立計算とトレース照合',()=>{
    let total=0;const totals=[2,3,4,6].map(n=>{if(n%2===0)total+=n;return total;});
    const p=questions.find(q=>q.id==='B-P01');assert.equal(Number(p.choices[p.answer]),total);assert.deepEqual(p.trace.rows.map(r=>r[2]),totals);
    let a=18,b=12;const trace=[[a,b]];while(b!==0){[a,b]=[b,a%b];trace.push([a,b]);}
    const gcd=questions.find(q=>q.id==='B-P02');assert.equal(Number(gcd.choices[gcd.answer]),a);assert.deepEqual(gcd.trace.rows.map(r=>r.slice(1)),trace);
    assert.equal(Number(questions[0].choices[questions[0].answer]),parseInt('101101',2));
  });
}
