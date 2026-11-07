import assert from 'node:assert/strict';
import {mkdtemp,readFile,writeFile,rm,readdir} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,dirname,resolve,basename} from 'node:path';
import {sampleQuestions} from '../data/questions.js';
import {validateQuestions,selectQuestions,freshState,validateState,formatSource} from '../js/core.js';
import {prepareQuestionBank,serializeQuestionBank} from '../js/question-bank.js';
import {buildQuestions} from '../scripts/build-questions.js';

// テスト専用の架空データ。公式問題・検証済み問題として実バンクに収録しない。
const pending=()=>({id:'TEST-A-001',subject:'A',field:'テクノロジ',prompt:'テスト専用の形式確認問題',choices:['候補1','候補2'],answer:0,explanation:{brief:'説明案',detail:'詳細説明案'},source:{type:'ai',title:'テストfixture'},verification:{status:'pending'}});
const reviewed=()=>({...pending(),verification:{status:'verified',method:'テスト用の架空確認記録',date:'2026-11-08',review:{reviewer:'TEST-ONLY',reference:'テスト用根拠',answerIndex:0,answerChecked:true,explanationChecked:true}}});
const ipa=()=>({...reviewed(),id:'TEST-IPA-A-001',choiceLabels:['ア','イ'],explanation:{brief:'説明',detail:'詳細説明',author:'テスト専用作成者'},source:{type:'ipa',title:'架空のテスト用資料',year:2025,session:'公開問題',exam:'FE',section:'科目A',questionNumber:1,url:'https://www.ipa.go.jp/test-question.pdf',answerUrl:'https://www.ipa.go.jp/test-answer.pdf',termsUrl:'https://www.ipa.go.jp/shiken/faq.html',accessedAt:'2026-11-08',modified:false,answerKey:{label:'ア',index:0}},verification:{...reviewed().verification,review:{...reviewed().verification.review,transcriptionChecked:true}}});
const payload=q=>({version:1,questions:q});

export function registerBankTests(test) {
  test('JSON全件追加と既存16問・保存データの互換性',()=>{
    const before=JSON.stringify(sampleQuestions),q=reviewed();
    const additions=prepareQuestionBank(sampleQuestions,payload([q]));
    assert.equal(additions.length,1);assert.equal(additions[0],q);
    assert.equal(JSON.stringify(sampleQuestions),before);
    const state=freshState();state.active={id:'old',ids:[sampleQuestions[0].id],index:0,answers:{[sampleQuestions[0].id]:2},elapsedMs:10};
    assert.deepEqual(validateState(state,[...sampleQuestions,...additions]),state);
    assert.deepEqual(prepareQuestionBank(sampleQuestions,payload([])),[]);
    for(const invalid of [[],null,{},payload(null),{version:2,questions:[]}])assert.throws(()=>prepareQuestionBank(sampleQuestions,invalid));
  });
  test('必須フィールド欠落・空白・不正正答・日付・危険なIDを検出',()=>{
    for(const key of ['id','subject','field','prompt','choices','answer','explanation','source','verification']){
      const q=pending();delete q[key];assert.throws(()=>validateQuestions([q]),key);
    }
    for(const change of [{prompt:'  \n'},{answer:-1},{answer:2},{answer:0.5},{choices:['同じ',' 同じ ']},{id:'constructor'},{id:'toString'}])assert.throws(()=>validateQuestions([{...pending(),...change}]));
    const q=reviewed();q.verification.date='2026-02-30';assert.throws(()=>validateQuestions([q]));
  });
  test('ID・正規化内容・選択肢順変更・公式出典の重複を検出',()=>{
    const q=pending();assert.throws(()=>prepareQuestionBank(sampleQuestions,payload([q,{...q}])) ,/ID/);
    assert.throws(()=>validateQuestions([q,{...q,id:'TEST-A-002',prompt:'テスト 専用の形式確認問題',choices:[...q.choices].reverse(),answer:1}]),/問題内容/);
    const p=ipa();assert.throws(()=>validateQuestions([p,{...p,id:'TEST-IPA-A-002',prompt:'別の問題文'}]),/公式出典/);
    assert.throws(()=>prepareQuestionBank(sampleQuestions,payload([{...sampleQuestions[0],id:'DUPLICATE',verification:{status:'pending'}}])),/問題内容/);
  });
  test('科目Bのコード・表・トレース・可変選択肢と不正表',()=>{
    const q={...pending(),subject:'B',field:'アルゴリズム・プログラミング',choices:['a','b','c','d','e','f'],answer:5,code:'if (x)\n  y ← 1\nendif',table:{headers:['列1','列2'],rows:[[1,'値']]},trace:{headers:['x'],rows:[[1],[2]]}};
    assert.equal(validateQuestions([q])[0].choices.length,6);
    for(const table of [null,{}, {headers:['列'],rows:[[1,2]]},{headers:['列'],rows:[[Infinity]]},{headers:['列'],rows:[]}])assert.throws(()=>validateQuestions([{...q,table}]));
    assert.throws(()=>validateQuestions([{...q,code:' '}]),/code/);
    const v={...q,verification:reviewed().verification,answer:0};
    assert.throws(()=>validateQuestions([v],{requireReviewEvidence:true}),/traceChecked/);
  });
  test('検証済みへの自動昇格なし・通常演習と復習の未検証除外',()=>{
    const q=pending(),before=JSON.stringify(q);prepareQuestionBank(sampleQuestions,payload([q]));assert.equal(JSON.stringify(q),before);
    const state=freshState();state.review=[q.id];assert.deepEqual(selectQuestions([q],state),[]);assert.deepEqual(selectQuestions([q],state,true),[]);
    const old={...q,verification:{status:'verified',method:'記録だけ',date:'2026-11-08'}};
    assert.throws(()=>prepareQuestionBank(sampleQuestions,payload([old])),/verification.review/);
    for(const change of [{answerChecked:false},{explanationChecked:false},{reviewer:''},{reference:''},{answerIndex:1}]){
      const v=reviewed();v.verification.review={...v.verification.review,...change};assert.throws(()=>prepareQuestionBank(sampleQuestions,payload([v])));
    }
  });
  test('IPAの必須出典・改変記録・独自解説作成者・公式URLを検査',()=>{
    assert.equal(prepareQuestionBank([],payload([ipa()])).length,1);
    for(const key of ['title','year','session','exam','section','questionNumber','url','answerUrl','termsUrl','accessedAt','modified','answerKey']){
      const q=ipa();delete q.source[key];assert.throws(()=>validateQuestions([q]),key);
    }
    for(const url of ['javascript:alert(1)','https://ipa.go.jp.evil.example/x','https://evil.example/x','http://www.ipa.go.jp/x']){const q=ipa();q.source.url=url;assert.throws(()=>validateQuestions([q]),/source.url/);}
    const q=ipa();q.source.modified=true;assert.throws(()=>validateQuestions([q]),/modificationNote/);
    q.source.modificationNote='数値を変更';assert(formatSource(q).includes('改変：数値を変更'));
    delete q.explanation.author;assert.throws(()=>validateQuestions([q]),/explanation.author/);
    const candidate=ipa();candidate.verification={status:'pending'};delete candidate.source.answerKey;assert.equal(validateQuestions([candidate]).length,1);
  });
  test('公式正答記号・添字・レビュー正答の不一致を検出',()=>{
    for(const answerKey of [{label:'イ',index:0},{label:'イ',index:1},{label:'ア',index:99}]){const q=ipa();q.source.answerKey=answerKey;assert.throws(()=>validateQuestions([q]),/answerKey/);}
    const q=ipa();q.verification.review.transcriptionChecked=false;assert.throws(()=>prepareQuestionBank([],payload([q])),/transcriptionChecked/);
    q.verification.review.transcriptionChecked=true;assert(formatSource(q).includes('2025年度 公開問題 基本情報技術者試験 科目A 問1'));
  });
  test('JSON生成・同期検査・不正入力時に出力を変更しない',async()=>{
    const dir=await mkdtemp(join(tmpdir(),'fe-bank-test-'));
    const input=join(dir,'input.json'),output=join(dir,'output.js');
    try{
      await writeFile(input,JSON.stringify(payload([pending()])));
      await assert.rejects(buildQuestions({input,output}),/一致しません/);
      const report=await buildQuestions({input,output,write:true});assert.equal(report.additional,1);assert.equal(report.verified,0);
      await buildQuestions({input,output});const before=await readFile(output,'utf8');
      assert.equal(before,serializeQuestionBank([pending()]));
      for(const raw of ['{invalid',JSON.stringify(payload([{...pending(),answer:99}])),JSON.stringify(payload([reviewed(),{...pending(),prompt:''}]))]){
        await writeFile(input,raw);await assert.rejects(buildQuestions({input,output,write:true}));assert.equal(await readFile(output,'utf8'),before);
      }
      assert.equal((await readdir(dir)).sort().join(','),'input.json,output.js');
    } finally {
      assert.equal(dirname(resolve(dir)),resolve(tmpdir()));
      assert(basename(dir).startsWith('fe-bank-test-'));
      await rm(dir,{recursive:true,force:true});
    }
  });
}
