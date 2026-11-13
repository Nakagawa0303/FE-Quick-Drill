import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {additionalQuestions} from '../data/questions.js';
import {freshState,selectQuestions,validateQuestions} from '../js/core.js';

test('承認されたA5/B1の出典・公式解答・レビュー時の内容と原本ハッシュを維持',async()=>{
  const review=JSON.parse(await readFile(new URL('../docs/ipa-stage2-review.json',import.meta.url),'utf8'));
  const ledger=JSON.parse(await readFile(new URL('../docs/ipa-stage1-sources.json',import.meta.url),'utf8'));
  assert.equal(review.questions.length,6);
  const additions=review.questions.map(r=>additionalQuestions.find(q=>q.id===r.id));
  assert.equal(additions.filter(q=>q.subject==='A').length,5);assert.equal(additions.filter(q=>q.subject==='B').length,1);
  validateQuestions(additions,{requireReviewEvidence:true,requireSubfield:true});
  for(const r of review.questions){
    const q=additions.find(q=>q.id===r.id),s=q.source,official=ledger.find(x=>x.year===s.year&&x.subject===q.subject);
    assert.equal(q.choiceLabels[q.answer],official.answers[s.questionNumber]);
    assert.equal(r.officialLabel,official.answers[s.questionNumber]);
    assert.equal(s.questionSha256,official.questionSha256);assert.equal(s.answerSha256,official.answerSha256);
    assert.equal(s.url,official.questionUrl);assert.equal(s.answerUrl,official.answerUrl);
    assert.equal(createHash('sha256').update(JSON.stringify([q.prompt,q.choices,q.answer,q.table??null,q.explanation])).digest('hex'),r.contentSha256,q.id+' 変更時は再レビューが必要');
    const pending={...q,verification:{status:'pending'}},state=freshState();state.settings.subject=q.subject;state.settings.count=q.subject==='A'?5:1;state.review=[q.id];
    assert.deepEqual(selectQuestions([pending],state),[]);assert.deepEqual(selectQuestions([pending],state,true),[]);
  }
});

test('2026 B6はルール3と表1から違反集合を求め、十択中ケだけが一致',()=>{
  const q=additionalQuestions.find(q=>q.id==='IPA-FE-2026-KOUKAI-B-006');
  assert.equal(q.table.rows.length,4);assert.equal(q.choices.length,10);
  assert(q.prompt.includes('Y サーバ上の全てのファイルが編集可能'));
  assert(q.prompt.includes('運用担当者は複数名にすること'));
  assert(q.prompt.includes('運用担当者だけがアクセスできるようにすること'));
  // 原本から独立に整理：人数2名→1名、Yサーバの編集可能者に一般従業員を含む。
  const operators=['C'],readersOfY=['C','D','一般従業員'];
  const violations=[];
  if(operators.length<2)violations.push('二');
  if(readersOfY.some(person=>!operators.includes(person)))violations.push('四');
  const matches=q.choices.map((choice,i)=>({i,items:[...choice.matchAll(/[一二三四]/g)].map(x=>x[0])})).filter(c=>JSON.stringify(c.items)===JSON.stringify(violations));
  assert.deepEqual(matches.map(c=>c.i),[8]);assert.equal(q.answer,8);assert.equal(q.choiceLabels[8],'ケ');
  assert(!q.code);assert(!q.trace);
});
