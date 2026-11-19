import {validateQuestions} from './core.js';

// 学習履歴のJSONとは別形式。検査で status を変更することはない。
export function prepareQuestionBank(sampleQuestions, payload) {
  if(!payload||payload.version!==1||!Array.isArray(payload.questions))throw new Error('問題JSONは {"version":1,"questions":[...]} の形式にしてください。');
  validateQuestions(payload.questions,{requireReviewEvidence:true,allowEmpty:true,requireSubfield:true});
  validateQuestions([...sampleQuestions,...payload.questions]);
  return payload.questions;
}
export function serializeQuestionBank(questions) {
  return `// data/additional-questions.json から生成。直接編集せず questions:build を実行してください。\nexport const additionalQuestions = ${JSON.stringify(questions,null,2)};\n`;
}
