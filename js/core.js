import { FIELDS, SUBFIELDS, subfieldOf, normalizeAnalysisFilter, matchesAnalysis } from './classification.js';
export { FIELDS } from './classification.js';
export const COUNTS = { A: [5, 10, 20], B: [1, 3, 5] };
export const freshState = () => ({
  version: 1,
  settings: {
    subject: 'A',
    field: '全分野',
    count: 5
  },
  review: [],
  history: [],
  active: null
});
const isObjectRecord = x => x !== null && typeof x === 'object' && !Array.isArray(x);
const isNonEmptyString = x => typeof x === 'string' && x.trim().length > 0;
const isIsoDate = x => typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && Number.isFinite(Date.parse(x)) &&
  new Date(x).toISOString().slice(0, 10) === x;
const isOfficialUrl = x => {
  try {
    const u = new URL(x);
    return typeof x === 'string' && u.protocol === 'https:' &&
      (u.hostname === 'ipa.go.jp' || u.hostname.endsWith('.ipa.go.jp')) &&
      !u.username &&
      !u.password &&
      !u.port;
  }
  catch {
    return false;
  }
};
const normalizeText = x => x.normalize('NFKC').replace(/\s+/gu, '');

function questionContentKey(question) {
  // コードの字下げは意味を持つため保持する。選択肢の並べ替えは同一問題とする。
  const code = question.code?.replace(/\r\n?/g, '\n').split('\n').map(s => s.trimEnd()).join('\n') ?? '';
  const table = question.table
    ? [question.table.headers.map(normalizeText), question.table.rows.map(r => r.map(c => typeof c === 'string' ? normalizeText(c) : c))]
    : null;
  return JSON.stringify([question.subject, normalizeText(question.prompt), question.choices.map(normalizeText).sort(), code, table]);
}

export function formatSource(question) {
  const source = question.source;
  if (source.type !== 'ipa')
    return source.title;
  return `${source.year}年度 ${source.session} 基本情報技術者試験 ${source.section} 問${source.questionNumber}${source.modified ? `（改変：${source.modificationNote}）` : ''}`;
}

export function validateQuestions(list, { requireReviewEvidence = false, allowEmpty = false, requireSubfield = false } = {}) {
  if (!Array.isArray(list) || (!allowEmpty && !list.length))
    throw new Error('問題配列が空、または配列形式ではありません。');
  const errors = [],
    ids = new Map(),
    contents = new Map(),
    sources = new Map();
  const duplicate = (map, key, id, name) => {
    if (map.has(key))
      errors.push(`${id}: ${name}が ${map.get(key)} と重複しています。`);
    else
      map.set(key, id);
  };
  list.forEach((question, index) => {
    const id = isNonEmptyString(question?.id) ? question.id : `配列[${index}]`;
    const start = errors.length;
    const check = (ok, field, message = '必須データの欠落、または形式が不正です。') => {
      if (!ok)
        errors.push(`${id}: ${field} — ${message}`);
    };
    if (!isObjectRecord(question)) {
      check(false, 'question');
      return;
    }
    check(isNonEmptyString(question.id) && /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(question.id) &&
      !Object.hasOwn(Object.prototype, question.id), 'id');
    check(Object.hasOwn(FIELDS, question.subject), 'subject');
    check(Object.hasOwn(FIELDS, question.subject) && FIELDS[question.subject].includes(question.field), 'field');
    if (Object.hasOwn(question, 'subfield'))
      check(question.subject === 'A' && SUBFIELDS[question.field]?.includes(question.subfield), 'subfield', '小分野名と親分野を確認してください。旧問題の未分類はプロパティを省略します。');
    if (requireSubfield && question.subject === 'A')
      check(Object.hasOwn(question, 'subfield'), 'subfield', '新規科目A問題には小分野が必要です。');
    check(isNonEmptyString(question.prompt), 'prompt');
    const validChoices = Array.isArray(question.choices) && question.choices.length >= 2 && question.choices.length <= 20 &&
      question.choices.every(isNonEmptyString);
    check(validChoices, 'choices');
    if (validChoices)
      check(new Set(question.choices.map(normalizeText)).size === question.choices.length, 'choices', '同一の選択肢が重複しています。');
    check(validChoices && Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.choices.length, 'answer', '正答は選択肢内の0始まり整数で指定してください。');
    check(isNonEmptyString(question.explanation?.brief), 'explanation.brief');
    check(isNonEmptyString(question.explanation?.detail), 'explanation.detail');
    check(['ai', 'ipa', 'original'].includes(question.source?.type), 'source.type');
    check(isNonEmptyString(question.source?.title), 'source.title');
    check(['verified', 'pending'].includes(question.verification?.status), 'verification.status');
    if (question.choiceLabels !== undefined)
      check(validChoices && Array.isArray(question.choiceLabels) && question.choiceLabels.length === question.choices.length &&
        question.choiceLabels.every(isNonEmptyString) &&
        new Set(question.choiceLabels.map(normalizeText)).size === question.choiceLabels.length, 'choiceLabels');
    for (const field of ['table', 'trace'])
      if (question[field] !== undefined) {
        const table = question[field];
        check(isObjectRecord(table) && Array.isArray(table.headers) && table.headers.length > 0 &&
          table.headers.every(isNonEmptyString) &&
          Array.isArray(table.rows) &&
          table.rows.length > 0 &&
          table.rows.every(r => Array.isArray(r) && r.length === table.headers.length &&
            r.every(c => typeof c === 'string' || (typeof c === 'number' && Number.isFinite(c)))), field);
      }
    if (question.code !== undefined)
      check(isNonEmptyString(question.code), 'code');
    const verification = question.verification;
    if (verification?.status === 'verified') {
      check(isNonEmptyString(verification.method), 'verification.method');
      check(isIsoDate(verification.date), 'verification.date');
      if (requireReviewEvidence || verification.review !== undefined) {
        const review = verification.review;
        check(isObjectRecord(review), 'verification.review', '検証済みには確認記録が必要です。');
        check(isNonEmptyString(review?.reviewer), 'verification.review.reviewer');
        check(isNonEmptyString(review?.reference), 'verification.review.reference');
        check(review?.answerChecked === true, 'verification.review.answerChecked');
        check(review?.explanationChecked === true, 'verification.review.explanationChecked');
        check(Number.isInteger(review?.answerIndex) && review.answerIndex === question.answer, 'verification.review.answerIndex', '確認した正答と answer が一致しません。');
        if (question.source?.type === 'ipa')
          check(review?.transcriptionChecked === true, 'verification.review.transcriptionChecked');
        if (question.trace !== undefined)
          check(review?.traceChecked === true, 'verification.review.traceChecked');
      }
    }
    if (question.source?.type === 'ipa') {
      const source = question.source;
      check(Number.isInteger(source.year) && source.year >= 1900 && source.year <= 9999, 'source.year');
      check(isNonEmptyString(source.session), 'source.session');
      check(source.exam === 'FE', 'source.exam');
      check(source.section === `科目${question.subject}`, 'source.section');
      check(Number.isInteger(source.questionNumber) && source.questionNumber > 0, 'source.questionNumber');
      for (const key of ['url', 'answerUrl', 'termsUrl'])
        check(isOfficialUrl(source[key]), `source.${key}`, 'IPAの公式HTTPS URLを指定してください。');
      check(isIsoDate(source.accessedAt), 'source.accessedAt');
      check(typeof source.modified === 'boolean', 'source.modified');
      if (source.modified)
        check(isNonEmptyString(source.modificationNote), 'source.modificationNote');
      check(Array.isArray(question.choiceLabels), 'choiceLabels', '公式の選択肢記号を順番どおり記録してください。');
      check(isNonEmptyString(question.explanation?.author), 'explanation.author', '独自解説の作成主体を記録してください。');
      if (source.answerKey !== undefined || verification?.status === 'verified') {
        check(isObjectRecord(source.answerKey) && Number.isInteger(source.answerKey.index) &&
          source.answerKey.index === question.answer, 'source.answerKey.index', '公式解答の転記記録と answer が一致しません。');
        check(isNonEmptyString(source.answerKey?.label) && Array.isArray(question.choiceLabels) &&
          source.answerKey.label === question.choiceLabels[source.answerKey.index], 'source.answerKey.label', '公式解答の記号と選択肢の対応が一致しません。');
      }
    }
    if (isNonEmptyString(question.id))
      duplicate(ids, question.id, id, 'ID');
    if (errors.length === start) {
      duplicate(contents, questionContentKey(question), id, '問題内容');
      if (question.source.type === 'ipa')
        duplicate(sources, JSON.stringify([question.source.year, normalizeText(question.source.session), question.source.exam, question.source.section, question.source.questionNumber]), id, '公式出典');
    }
  });
  if (errors.length) {
    const error = new Error(`問題データの検証に失敗しました。\n${errors.join('\n')}`);
    error.issues = errors;
    throw error;
  }
  return list;
}

export function stats(state) {
  const result = {};
  for (const block of state.history)
    for (const item of block.items) {
      const s = result[item.id] ??= { attempts: 0, correct: 0 };
      s.attempts++;
      s.correct += Number(item.correct);
    }
  return result;
}
// 履歴は変更せず、現在の問題バンクの分類で全集計をそろえる。

export function analyzeHistory(state, bank, conditions = {}) {
  const filter = normalizeAnalysisFilter(conditions),
    byId = new Map(bank.map(question => [question.id, question]));
  const eligible = bank.filter(question => matchesAnalysis(question, filter));
  const summary = {
    attempts: 0,
    correct: 0,
    uniqueQuestions: 0,
    rate: null
  };
  const perQuestion = {},
    groups = new Map(),
    recent = [];
  const groupKey = question => JSON.stringify([question.subject, question.field, subfieldOf(question)]);
  for (const question of eligible) {
    const key = groupKey(question);
    if (!groups.has(key))
      groups.set(key, {
        subject: question.subject,
        field: question.field,
        subfield: subfieldOf(question),
        attempts: 0,
        correct: 0,
        rate: null
      });
  }
  for (const block of state.history) {
    let attempts = 0,
      correct = 0;
    for (const item of block.items) {
      const question = byId.get(item.id);
      if (!question)
        throw new Error(`履歴の問題IDが見つかりません: ${item.id}`);
      if (!matchesAnalysis(question, filter))
        continue;
      attempts++;
      correct += Number(item.correct);
      const s = perQuestion[item.id] ??= {
        attempts: 0,
        correct: 0,
        rate: null
      };
      s.attempts++;
      s.correct += Number(item.correct);
      const g = groups.get(groupKey(question));
      g.attempts++;
      g.correct += Number(item.correct);
    }
    summary.attempts += attempts;
    summary.correct += correct;
    if (attempts)
      recent.push({
        id: block.id,
        finishedAt: block.finishedAt,
        attempts,
        correct,
        totalItems: block.items.length
      });
  }
  summary.uniqueQuestions = Object.keys(perQuestion).length;
  for (const s of [summary, ...Object.values(perQuestion), ...groups.values()])
    s.rate = s.attempts ? s.correct / s.attempts : null;
  recent.sort((a, b) => Date.parse(b.finishedAt) - Date.parse(a.finishedAt));
  return {
    filter,
    summary,
    groups: [...groups.values()],
    perQuestion,
    recent: recent.slice(0, 20)
  };
}

function shuffle(list, random) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function selectQuestions(bank, state, reviewOnly = false, random = Math.random) {
  const { subject, field, count } = state.settings;
  const pool = bank.filter(question => question.verification.status === 'verified' && question.subject === subject &&
    (field === '全分野' || question.field === field) &&
    (!reviewOnly || state.review.includes(question.id)));
  const seen = stats(state);
  // 中断ブロックも「出題済み」として扱う。通常は再開・採点後にのみ新規開始可能。
  for (const id of state.active?.ids ?? [])
    seen[id] ??= { attempts: 0, correct: 0 };
  return [...shuffle(pool.filter(question => !seen[question.id]), random), ...shuffle(pool.filter(question => seen[question.id]), random)].slice(0, count).map(question => question.id);
}

export function grade(active, bank) {
  return active.ids.map(id => {
    const question = bank.find(question => question.id === id);
    const answer = active.answers[id] ?? null;
    return {
      id,
      answer,
      correct: answer === question.answer
    };
  });
}

export function validateState(value, bank) {
  const fail = () => {
    throw new Error('学習データの形式・バージョン、または問題IDが一致しません。');
  };
  const byId = new Map(bank.map(question => [question.id, question]));
  const known = id => typeof id === 'string' && byId.has(id);
  const uniqueIds = a => Array.isArray(a) && a.every(known) && new Set(a).size === a.length;
  const validAnswer = (id, a) => a === null || (Number.isInteger(a) && a >= 0 && a < byId.get(id).choices.length);
  const finite = n => typeof n === 'number' && Number.isFinite(n) && n >= 0;
  const date = s => typeof s === 'string' && Number.isFinite(Date.parse(s));
  if (!isObjectRecord(value) || value.version !== 1 || !isObjectRecord(value.settings) ||
    !FIELDS[value.settings.subject] ||
    !['全分野', ...FIELDS[value.settings.subject]].includes(value.settings.field) ||
    !COUNTS[value.settings.subject].includes(value.settings.count) ||
    !uniqueIds(value.review) ||
    !Array.isArray(value.history))
    fail();
  const historyIds = new Set();
  for (const b of value.history) {
    if (!isObjectRecord(b) || !isNonEmptyString(b.id) || historyIds.has(b.id) || !date(b.finishedAt) ||
      !finite(b.elapsedMs) ||
      !Array.isArray(b.items) ||
      !b.items.length ||
      b.items.length > 20 ||
      !uniqueIds(b.items.map(x => x?.id)))
      fail();
    historyIds.add(b.id);
    for (const i of b.items)
      if (!isObjectRecord(i) || !validAnswer(i.id, i.answer) || typeof i.correct !== 'boolean' ||
        i.correct !== (i.answer === byId.get(i.id).answer))
        fail();
  }
  if (value.active !== null) {
    const a = value.active;
    if (!isObjectRecord(a) || !isNonEmptyString(a.id) || historyIds.has(a.id) || !uniqueIds(a.ids) ||
      !a.ids.length ||
      a.ids.length > 20 ||
      !a.ids.every(id => byId.get(id).verification.status === 'verified') ||
      !Number.isInteger(a.index) ||
      a.index < 0 ||
      a.index >= a.ids.length ||
      !finite(a.elapsedMs) ||
      !isObjectRecord(a.answers) ||
      !Object.keys(a.answers).every(id => a.ids.includes(id) && a.answers[id] !== null && validAnswer(id, a.answers[id])))
      fail();
  }
  // 既知のプロパティのみを採用する。
  return {
    version: 1,
    settings: {
      subject: value.settings.subject,
      field: value.settings.field,
      count: value.settings.count
    },
    review: [...value.review],
    history: value.history.map(b => ({
      id: b.id,
      finishedAt: b.finishedAt,
      elapsedMs: b.elapsedMs,
      items: b.items.map(i => ({
        id: i.id,
        answer: i.answer,
        correct: i.correct
      }))
    })),
    active: value.active === null
      ? null
      : {
        id: value.active.id,
        ids: [...value.active.ids],
        index: value.active.index,
        elapsedMs: value.active.elapsedMs,
        answers: Object.fromEntries(Object.entries(value.active.answers))
      }
  };
}
