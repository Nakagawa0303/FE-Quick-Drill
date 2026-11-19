import test from 'node:test';
import assert from 'node:assert/strict';
import {questions} from '../data/questions.js';
import {validateQuestions,selectQuestions,freshState} from '../js/core.js';
import {report} from '../scripts/verify-b-seven-drafts.js';

test('アレンジ7問の独立検算・原稿との一致・全240問とB80:20・独自出典を確認',()=>{
  assert.equal(report.stage,'installed');
  assert.equal(report.checks.reduce((n,c)=>n+c.cases,0),3393);
  assert.equal(questions.length,240);
  assert.equal(questions.filter(q=>q.subject==='A').length,180);
  const b=questions.filter(q=>q.subject==='B');
  assert.equal(b.length,60);
  assert.equal(b.filter(q=>q.field==='アルゴリズム・プログラミング').length,48);
  assert.equal(b.filter(q=>q.field==='情報セキュリティ').length,12);
  validateQuestions(questions);
  const arranged=questions.filter(q=>q.id.startsWith('ARR-B-'));
  assert.equal(arranged.length,7);
  validateQuestions(arranged,{requireReviewEvidence:true});
  for(const q of arranged){
    assert.equal(q.source.type,'original');
    assert(q.source.title.includes('IPA公式問題ではありません'));
    assert(!Object.hasOwn(q.source,'answerUrl'),'公式解答URLを偽装しない');
    assert(questions.some(x=>x.id===q.inspiredBy&&x.source.type==='ipa'));
    const s=freshState();s.settings={subject:'B',field:q.field,count:1};s.review=[q.id];
    assert.deepEqual(selectQuestions([q],s),[q.id]);
    assert.deepEqual(selectQuestions([q],s,true),[q.id]);
    assert.deepEqual(selectQuestions([{...q,verification:{status:'pending'}}],s),[]);
  }
});
