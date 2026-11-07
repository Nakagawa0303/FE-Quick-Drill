export const FIELDS = { A: ['テクノロジ','マネジメント','ストラテジ'], B: ['アルゴリズム・プログラミング','情報セキュリティ'] };
export const COUNTS = { A: [5,10,20], B: [1,3,5] };
export const freshState = () => ({version:1,settings:{subject:'A',field:'全分野',count:5},review:[],history:[],active:null});
const plain = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const str = x => typeof x === 'string' && x.length > 0;
export function validateQuestions(list) {
  if (!Array.isArray(list) || !list.length) throw new Error('問題配列が空です。');
  const ids = new Set();
  for (const q of list) {
    if (!plain(q) || !str(q.id) || ids.has(q.id) || !FIELDS[q.subject]?.includes(q.field) || !str(q.prompt) || !Array.isArray(q.choices) || q.choices.length < 2 || q.choices.length > 20 || !q.choices.every(str) || !Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.choices.length || !str(q.explanation?.brief) || !str(q.explanation?.detail) || !['ai','ipa','original'].includes(q.source?.type) || !str(q.source?.title) || !['verified','pending'].includes(q.verification?.status) || (q.verification.status === 'verified' && (!str(q.verification.method) || !str(q.verification.date)))) throw new Error(`問題形式が不正です: ${q?.id ?? 'IDなし'}`);
    for (const table of [q.table,q.trace].filter(Boolean)) if (!Array.isArray(table.headers) || !table.headers.length || !table.headers.every(str) || !Array.isArray(table.rows) || !table.rows.every(r => Array.isArray(r) && r.length === table.headers.length && r.every(c=>typeof c==='string'||typeof c==='number'))) throw new Error(`表形式が不正です: ${q.id}`);
    if (q.code !== undefined && !str(q.code)) throw new Error(`疑似言語形式が不正です: ${q.id}`);
    ids.add(q.id);
  }
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
