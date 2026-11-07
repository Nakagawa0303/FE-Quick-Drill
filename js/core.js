export const FIELDS = { A: ['テクノロジ','マネジメント','ストラテジ'], B: ['アルゴリズム・プログラミング','情報セキュリティ'] };
export const COUNTS = { A: [5,10,20], B: [1,3,5] };
export const freshState = () => ({version:1,settings:{subject:'A',field:'全分野',count:5},review:[],history:[],active:null});
const plain = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const str = x => typeof x === 'string' && x.trim().length > 0;
const isoDate = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && Number.isFinite(Date.parse(x)) && new Date(x).toISOString().slice(0,10) === x;
const officialUrl = x => {
  try {const u=new URL(x);return typeof x==='string' && u.protocol==='https:' && (u.hostname==='ipa.go.jp'||u.hostname.endsWith('.ipa.go.jp')) && !u.username && !u.password && !u.port;}
  catch {return false;}
};
const normalized = x => x.normalize('NFKC').replace(/\s+/gu,'');
function contentKey(q) {
  // コードの字下げは意味を持つため保持する。選択肢の並べ替えは同一問題とする。
  const code=q.code?.replace(/\r\n?/g,'\n').split('\n').map(s=>s.trimEnd()).join('\n')??'';
  const table=q.table ? [q.table.headers.map(normalized),q.table.rows.map(r=>r.map(c=>typeof c==='string'?normalized(c):c))] : null;
  return JSON.stringify([q.subject,normalized(q.prompt),q.choices.map(normalized).sort(),code,table]);
}
export function formatSource(q) {
  const s=q.source;
  if(s.type!=='ipa')return s.title;
  return `${s.year}年度 ${s.session} 基本情報技術者試験 ${s.section} 問${s.questionNumber}${s.modified?`（改変：${s.modificationNote}）`:''}`;
}
export function validateQuestions(list, {requireReviewEvidence=false,allowEmpty=false}={}) {
  if (!Array.isArray(list) || (!allowEmpty && !list.length)) throw new Error('問題配列が空、または配列形式ではありません。');
  const errors=[],ids=new Map(),contents=new Map(),sources=new Map();
  const duplicate=(map,key,id,name)=>{if(map.has(key))errors.push(`${id}: ${name}が ${map.get(key)} と重複しています。`);else map.set(key,id);};
  list.forEach((q,index)=>{
    const id=str(q?.id)?q.id:`配列[${index}]`;
    const start=errors.length;
    const check=(ok,field,message='必須データの欠落、または形式が不正です。')=>{if(!ok)errors.push(`${id}: ${field} — ${message}`);};
    if(!plain(q)){check(false,'question');return;}
    check(str(q.id)&&/^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(q.id)&&!Object.hasOwn(Object.prototype,q.id),'id');
    check(Object.hasOwn(FIELDS,q.subject),'subject');
    check(Object.hasOwn(FIELDS,q.subject)&&FIELDS[q.subject].includes(q.field),'field');
    check(str(q.prompt),'prompt');
    const validChoices=Array.isArray(q.choices)&&q.choices.length>=2&&q.choices.length<=20&&q.choices.every(str);
    check(validChoices,'choices');
    if(validChoices)check(new Set(q.choices.map(normalized)).size===q.choices.length,'choices','同一の選択肢が重複しています。');
    check(validChoices&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.choices.length,'answer','正答は選択肢内の0始まり整数で指定してください。');
    check(str(q.explanation?.brief),'explanation.brief');
    check(str(q.explanation?.detail),'explanation.detail');
    check(['ai','ipa','original'].includes(q.source?.type),'source.type');
    check(str(q.source?.title),'source.title');
    check(['verified','pending'].includes(q.verification?.status),'verification.status');
    if(q.choiceLabels!==undefined)check(validChoices&&Array.isArray(q.choiceLabels)&&q.choiceLabels.length===q.choices.length&&q.choiceLabels.every(str)&&new Set(q.choiceLabels.map(normalized)).size===q.choiceLabels.length,'choiceLabels');
    for(const field of ['table','trace'])if(q[field]!==undefined){
      const t=q[field];
      check(plain(t)&&Array.isArray(t.headers)&&t.headers.length>0&&t.headers.every(str)&&Array.isArray(t.rows)&&t.rows.length>0&&t.rows.every(r=>Array.isArray(r)&&r.length===t.headers.length&&r.every(c=>typeof c==='string'||(typeof c==='number'&&Number.isFinite(c)))),field);
    }
    if(q.code!==undefined)check(str(q.code),'code');
    const v=q.verification;
    if(v?.status==='verified'){
      check(str(v.method),'verification.method');check(isoDate(v.date),'verification.date');
      if(requireReviewEvidence||v.review!==undefined){
        const r=v.review;
        check(plain(r),'verification.review','検証済みには確認記録が必要です。');
        check(str(r?.reviewer),'verification.review.reviewer');
        check(str(r?.reference),'verification.review.reference');
        check(r?.answerChecked===true,'verification.review.answerChecked');
        check(r?.explanationChecked===true,'verification.review.explanationChecked');
        check(Number.isInteger(r?.answerIndex)&&r.answerIndex===q.answer,'verification.review.answerIndex','確認した正答と answer が一致しません。');
        if(q.source?.type==='ipa')check(r?.transcriptionChecked===true,'verification.review.transcriptionChecked');
        if(q.trace!==undefined)check(r?.traceChecked===true,'verification.review.traceChecked');
      }
    }
    if(q.source?.type==='ipa'){
      const s=q.source;
      check(Number.isInteger(s.year)&&s.year>=1900&&s.year<=9999,'source.year');
      check(str(s.session),'source.session');check(s.exam==='FE','source.exam');
      check(s.section===`科目${q.subject}`,'source.section');
      check(Number.isInteger(s.questionNumber)&&s.questionNumber>0,'source.questionNumber');
      for(const key of ['url','answerUrl','termsUrl'])check(officialUrl(s[key]),`source.${key}`,'IPAの公式HTTPS URLを指定してください。');
      check(isoDate(s.accessedAt),'source.accessedAt');
      check(typeof s.modified==='boolean','source.modified');
      if(s.modified)check(str(s.modificationNote),'source.modificationNote');
      check(Array.isArray(q.choiceLabels),'choiceLabels','公式の選択肢記号を順番どおり記録してください。');
      check(str(q.explanation?.author),'explanation.author','独自解説の作成主体を記録してください。');
      if(s.answerKey!==undefined||v?.status==='verified'){
        check(plain(s.answerKey)&&Number.isInteger(s.answerKey.index)&&s.answerKey.index===q.answer,'source.answerKey.index','公式解答の転記記録と answer が一致しません。');
        check(str(s.answerKey?.label)&&Array.isArray(q.choiceLabels)&&s.answerKey.label===q.choiceLabels[s.answerKey.index],'source.answerKey.label','公式解答の記号と選択肢の対応が一致しません。');
      }
    }
    if(str(q.id))duplicate(ids,q.id,id,'ID');
    if(errors.length===start){
      duplicate(contents,contentKey(q),id,'問題内容');
      if(q.source.type==='ipa')duplicate(sources,JSON.stringify([q.source.year,normalized(q.source.session),q.source.exam,q.source.section,q.source.questionNumber]),id,'公式出典');
    }
  });
  if(errors.length){const error=new Error(`問題データの検証に失敗しました。\n${errors.join('\n')}`);error.issues=errors;throw error;}
  return list;
}
export function stats(state) {
  const result = {};
  for (const block of state.history) for (const item of block.items) {
    const s = result[item.id] ??= {attempts:0,correct:0};
    s.attempts++; s.correct += Number(item.correct);
  }
  return result;
}
function shuffle(list, random) {
  const a = [...list];
  for (let i=a.length-1;i>0;i--) { const j=Math.floor(random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}
export function selectQuestions(bank, state, reviewOnly = false, random = Math.random) {
  const {subject,field,count} = state.settings;
  const pool = bank.filter(q=>q.verification.status==='verified' && q.subject===subject && (field==='全分野'||q.field===field) && (!reviewOnly||state.review.includes(q.id)));
  const seen = stats(state);
  // 中断ブロックも「出題済み」として扱う。通常は再開・採点後にのみ新規開始可能。
  for (const id of state.active?.ids ?? []) seen[id] ??= {attempts:0,correct:0};
  return [...shuffle(pool.filter(q=>!seen[q.id]),random),...shuffle(pool.filter(q=>seen[q.id]),random)].slice(0,count).map(q=>q.id);
}
export function grade(active, bank) {
  return active.ids.map(id=> { const q=bank.find(q=>q.id===id); const answer=active.answers[id]??null; return {id,answer,correct:answer===q.answer}; });
}
export function validateState(value, bank) {
  const fail = () => { throw new Error('学習データの形式・バージョン、または問題IDが一致しません。'); };
  const byId = new Map(bank.map(q=>[q.id,q]));
  const known = id=>typeof id==='string' && byId.has(id);
  const uniqueIds = a=>Array.isArray(a)&&a.every(known)&&new Set(a).size===a.length;
  const validAnswer = (id,a)=>a===null || (Number.isInteger(a)&&a>=0&&a<byId.get(id).choices.length);
  const finite = n=>typeof n==='number'&&Number.isFinite(n)&&n>=0;
  const date = s=>typeof s==='string'&&Number.isFinite(Date.parse(s));
  if (!plain(value)||value.version!==1||!plain(value.settings)||!FIELDS[value.settings.subject]||!['全分野',...FIELDS[value.settings.subject]].includes(value.settings.field)||!COUNTS[value.settings.subject].includes(value.settings.count)||!uniqueIds(value.review)||!Array.isArray(value.history)) fail();
  const historyIds = new Set();
  for (const b of value.history) {
    if (!plain(b)||!str(b.id)||historyIds.has(b.id)||!date(b.finishedAt)||!finite(b.elapsedMs)||!Array.isArray(b.items)||!b.items.length||b.items.length>20||!uniqueIds(b.items.map(x=>x?.id))) fail();
    historyIds.add(b.id);
    for (const i of b.items) if (!plain(i)||!validAnswer(i.id,i.answer)||typeof i.correct!=='boolean'||i.correct!==(i.answer===byId.get(i.id).answer)) fail();
  }
  if (value.active !== null) {
    const a=value.active;
    if (!plain(a)||!str(a.id)||historyIds.has(a.id)||!uniqueIds(a.ids)||!a.ids.length||a.ids.length>20||!a.ids.every(id=>byId.get(id).verification.status==='verified')||!Number.isInteger(a.index)||a.index<0||a.index>=a.ids.length||!finite(a.elapsedMs)||!plain(a.answers)||!Object.keys(a.answers).every(id=>a.ids.includes(id)&&a.answers[id]!==null&&validAnswer(id,a.answers[id]))) fail();
  }
  // 既知のプロパティのみを採用する。
  return {version:1,settings:{subject:value.settings.subject,field:value.settings.field,count:value.settings.count},review:[...value.review],history:value.history.map(b=>({id:b.id,finishedAt:b.finishedAt,elapsedMs:b.elapsedMs,items:b.items.map(i=>({id:i.id,answer:i.answer,correct:i.correct}))})),active:value.active===null?null:{id:value.active.id,ids:[...value.active.ids],index:value.active.index,elapsedMs:value.active.elapsedMs,answers:Object.fromEntries(Object.entries(value.active.answers))}};
}
