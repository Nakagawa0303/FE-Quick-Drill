import { questions, additionalQuestions } from '../data/questions.js';
import { COUNTS, validateQuestions, selectQuestions, grade, stats, validateState, formatSource, analyzeHistory } from './core.js';
import { FIELDS, subfieldOf, subfieldOptions, freshAnalysisFilter, changeAnalysisFilter } from './classification.js';
import { load, save } from './storage.js';

const root = document.querySelector('#app');
try {
  validateQuestions(additionalQuestions, { requireReviewEvidence: true, allowEmpty: true });
  validateQuestions(questions);
} catch (error) {
  root.textContent = `問題データの読み込みに失敗しました: ${error.message}`;
  throw error;
}
const loaded = load(questions);
// 読込失敗時の原文は、検証済みデータを明示的に復元するまで保護する。
let recovery = loaded.error ? loaded : null;
// view/tab は表示状態、state は保存対象の学習データ。
let state = loaded.state,
  view = 'home',
  tab = 'practice',
  resultId = null,
  runningSince = null,
  toastTimer;
let analysisFilter = freshAnalysisFilter();
const questionsById = new Map(questions.map(question => [question.id, question]));
const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[c]));
const formatElapsedTime = ms => {
  const totalSeconds = Math.floor(ms / 1000);
  return `${Math.floor(totalSeconds / 60).toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`;
};
const formatDate = s => new Date(s).toLocaleString('ja-JP', {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});
const formatPercent = (n, d) => d ? `${Math.round(n / d * 100)}%` : '—';

function notify(message) {
  document.querySelector('#notice').textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => document.querySelector('#notice').textContent = '', 6500);
}

function persist() {
  if (recovery)
    return;
  try {
    save(state);
  } catch {
    notify('ブラウザに保存できません。保存領域やプライベートモードの設定を確認し、学習データを書き出してください。');
  }
}

function accrueElapsedTime() {
  if (runningSince !== null && state.active) {
    state.active.elapsedMs += Math.max(0, performance.now() - runningSince);
    runningSince = performance.now();
  }
}

function currentElapsedTime() {
  return (state.active?.elapsedMs ?? 0) + (runningSince === null ? 0 : Math.max(0, performance.now() - runningSince));
}

function tableMarkup(table) {
  return table
    ? `<div class="table-wrap"><table><thead><tr>${table.headers.map(x => `<th scope="col">${escapeHtml(x)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(r => `<tr>${r.map(x => `<td>${escapeHtml(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`
    : '';
}

function problemMarkup(question) {
  return `<p class="question">${escapeHtml(question.prompt)}</p>${question.code ? `<pre><code>${escapeHtml(question.code)}</code></pre>` : ''}${tableMarkup(question.table)}`;
}

function sourceMarkup(question) {
  const source = question.source;
  const links = source.type === 'ipa'
    ? `<br><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">問題冊子</a> · <a href="${escapeHtml(source.answerUrl)}" target="_blank" rel="noopener noreferrer">公式解答例</a> · <a href="${escapeHtml(source.termsUrl)}" target="_blank" rel="noopener noreferrer">利用条件</a>（出典確認 ${escapeHtml(source.accessedAt)}）`
    : '';
  return `<p class="muted">出典：${escapeHtml(formatSource(question))}${links}${question.explanation.author ? `<br>解説作成：${escapeHtml(question.explanation.author)}` : ''}<br>検証：${escapeHtml(question.verification.method)}（${escapeHtml(question.verification.date)}）${question.verification.review ? `<br>確認担当：${escapeHtml(question.verification.review.reviewer)}` : ''}</p>`;
}

function reviewButtonMarkup(id) {
  const marked = state.review.includes(id);
  return `<button class="review-toggle" data-action="mark" data-id="${escapeHtml(id)}" aria-pressed="${marked}">${marked ? '★ 復習対象' : '☆ 復習に追加'}</button>`;
}

function classificationMarkup(question) {
  return `<span class="pill">科目${escapeHtml(question.subject)}</span> <span class="pill">${escapeHtml(question.field)}</span>${question.subject === 'A' ? ` <span class="pill">${escapeHtml(subfieldOf(question))}</span>` : ''}`;
}

function render() {
  if (view === 'quiz' && state.active)
    renderQuiz();
  else if (view === 'result')
    renderResult();
  else
    renderHome();
  if (recovery) {
    root.innerHTML = `<section class="card" role="alert"><h2>保存データを保護しています</h2><p>${escapeHtml(recovery.error)}</p><p>元の保存内容を上書きしないよう、自動保存を停止しています。この状態での演習や設定変更は保存されません。</p><p>元データを退避するには下のボタンを使ってください。復元は「学習記録」の「復元」から行えます。書き出した元データは修復・互換性確認が必要な場合があります。</p><button data-action="export-original" ${recovery.raw === null ? 'disabled' : ''}>元データを書き出し</button></section>${root.innerHTML}`;
  }
}

function renderHome() {
  view = 'home';
  const questionStats = stats(state),
    attempts = Object.values(questionStats).reduce((n, x) => n + x.attempts, 0),
    correct = Object.values(questionStats).reduce((n, x) => n + x.correct, 0);
  root.innerHTML = `
  ${state.active
      ? `<div class="resume meta-row"><div><strong>中断中の演習</strong><div class="muted">${Object.keys(state.active.answers).length} / ${state.active.ids.length}問 解答済み · ${formatElapsedTime(state.active.elapsedMs)}</div></div><button class="primary" data-action="resume">再開</button></div>`
      : ''}
  <nav class="tabs" aria-label="メイン"><button data-action="tab" data-tab="practice" class="${tab === 'practice' ? 'active' : ''}" ${tab === 'practice' ? 'aria-current="page"' : ''}>演習</button><button data-action="tab" data-tab="review" class="${tab === 'review' ? 'active' : ''}" ${tab === 'review' ? 'aria-current="page"' : ''}>復習 <span class="pill">${state.review.length}</span></button><button data-action="tab" data-tab="records" class="${tab === 'records' ? 'active' : ''}" ${tab === 'records' ? 'aria-current="page"' : ''}>学習記録</button></nav>
  ${tab === 'records'
      ? recordsMarkup()
      : `<div class="grid"><section class="card"><h2>${tab === 'review' ? '復習' : '演習'}</h2>${tab === 'review' ? '<p class="muted">不正解と要復習にした問題から出題します。</p>' : ''}${settingsMarkup()}<button class="primary start" data-action="start" ${state.active ? 'disabled' : ''}>開始</button><p class="muted" id="pool-note">${poolNoteText()}</p>${state.active ? '<p class="muted">中断中の演習を再開し、採点してから新しい演習を始められます。</p>' : ''}</section><aside><section class="card"><h2>学習状況</h2><div class="stat-grid"><div class="stat"><strong>${attempts}</strong><small>解答数</small></div><div class="stat"><strong>${formatPercent(correct, attempts)}</strong><small>正答率</small></div><div class="stat"><strong>${state.review.length}</strong><small>復習対象</small></div></div><p class="sidebar-note">未出題の問題を優先。演習中は答えを表示せず、最後にまとめて振り返ります。</p><p class="muted">PCでは数字キーで解答、← → で問題を移動できます。</p></section><section class="card"><span class="pill">収録問題</span><p>科目A <strong>${questions.filter(question => question.subject === 'A' && question.verification.status === 'verified').length}問</strong> / 科目B <strong>${questions.filter(question => question.subject === 'B' && question.verification.status === 'verified').length}問</strong></p><p class="muted">検証済みの問題数です。未検証の問題は出題されません。</p></section></aside></div>`}`;
}

function settingsMarkup() {
  const settings = state.settings;
  return `<div class="field"><span class="field-label"><span class="step">01</span>科目</span><div class="segments subject">${['A', 'B'].map(x => `<button data-action="subject" data-subject="${x}" class="${settings.subject === x ? 'selected' : ''}" aria-pressed="${settings.subject === x}">科目${x}<small>${x === 'A' ? '知識' : '読解・思考'}</small></button>`).join('')}</div></div><div class="field"><label class="field-label" for="field"><span class="step">02</span>分野</label><select id="field">${['全分野', ...FIELDS[settings.subject]].map(x => `<option ${settings.field === x ? 'selected' : ''}>${x}</option>`).join('')}</select></div><div class="field"><span class="field-label"><span class="step">03</span>問題数</span><div class="segments">${COUNTS[settings.subject].map(x => `<button data-action="count" data-count="${x}" class="${settings.count === x ? 'selected' : ''}" aria-pressed="${settings.count === x}">${x}問</button>`).join('')}</div></div>`;
}

function poolNoteText() {
  const questionCount = selectQuestions(questions, state, tab === 'review').length;
  return questionCount
    ? `${questionCount}問で開始します。${questionCount < state.settings.count ? 'この条件では問題数が設定より少ないため、全' + questionCount + '問を出題。' : ''} ブロック内の重複はありません。`
    : 'この条件に該当する問題はありません。科目・分野を変更してください。';
}

function renderQuiz() {
  const active = state.active,
    question = questionsById.get(active.ids[active.index]);
  root.innerHTML = `<div class="wide"><div class="meta-row"><button class="text" data-action="pause">中断</button><span class="muted">経過時間 <strong id="timer">${formatElapsedTime(currentElapsedTime())}</strong></span></div><div class="progress"><span style="width:${(active.index + 1) / active.ids.length * 100}%"></span></div><section class="card"><div class="meta-row"><div>${classificationMarkup(question)}</div><strong>問題 ${active.index + 1} <span class="muted">/ ${active.ids.length}</span></strong></div>${problemMarkup(question)}<div class="options" role="group" aria-label="解答選択肢">${question.choices.map((x, i) => `<button class="option ${active.answers[question.id] === i ? 'selected' : ''}" data-action="answer" data-answer="${i}" aria-pressed="${active.answers[question.id] === i}"><span class="key">${i + 1}</span><span>${escapeHtml(x)}</span></button>`).join('')}</div><div class="actions"><button data-action="prev" ${active.index === 0 ? 'disabled' : ''}>前へ</button>${active.index < active.ids.length - 1
    ? '<button class="primary" data-action="next">次へ</button>'
    : '<button class="primary" data-action="finish">採点</button>'}</div><div class="jump" aria-label="問題へ移動">${active.ids.map((id, i) => `<button data-action="jump" data-index="${i}" class="${active.answers[id] !== undefined ? 'answered' : ''} ${i === active.index ? 'current' : ''}" aria-label="問題${i + 1}${active.answers[id] !== undefined ? ' 解答済み' : ' 未解答'}" ${i === active.index ? 'aria-current="step"' : ''}>${i + 1}</button>`).join('')}</div><p class="muted">${Object.keys(active.answers).length}問 解答済み · 解答は採点まで変更できます。<br>数字キー：選択 / ← →：移動（未解答でも移動可能）</p></section></div>`;
}

function renderResult() {
  const block = state.history.find(b => b.id === resultId);
  if (!block) {
    view = 'home';
    render();
    return;
  }
  const correct = block.items.filter(i => i.correct).length;
  const ordered = [...block.items].sort((a, b) => Number(a.correct) - Number(b.correct));
  root.innerHTML = `<div class="wide"><h1>演習結果</h1><section class="card"><div class="meta-row"><div><div class="result-score">${correct}<small> / ${block.items.length}問正解</small></div><p>正答率 <strong>${formatPercent(correct, block.items.length)}</strong> <span class="muted">· 学習時間 ${formatElapsedTime(block.elapsedMs)}</span></p></div><button class="primary" data-action="home">ホーム</button></div><p class="muted">不正解の問題を先に表示しています。復習対象は「★ 復習対象」を押すと解除できます。</p></section>${ordered.map(i => resultCard(i, block)).join('')}</div>`;
}

function resultCard(item, block) {
  const question = questionsById.get(item.id),
    index = block.items.findIndex(i => i.id === item.id);
  return `<article class="card review-card"><div class="meta-row"><strong><span class="${item.correct ? 'good' : 'bad'}">${item.correct ? '✓ 正解' : '× 不正解'}</span> <span class="muted">問題 ${index + 1}</span> ${classificationMarkup(question)}</strong>${reviewButtonMarkup(question.id)}</div><details ${!item.correct ? 'open' : ''}><summary>${escapeHtml(question.field)} — 問題と解説</summary>${problemMarkup(question)}<p class="muted">あなたの解答：${item.answer === null ? '未解答' : `${item.answer + 1}. ${escapeHtml(question.choices[item.answer])}`}</p><p class="good"><strong>正答：${question.answer + 1}. ${escapeHtml(question.choices[question.answer])}</strong></p><div class="explanation"><strong>解説</strong><p>${escapeHtml(question.explanation.brief)}</p><details><summary>詳細</summary><p>${escapeHtml(question.explanation.detail)}</p>${question.trace ? `<h3>トレース表</h3>${tableMarkup(question.trace)}` : ''}</details></div>${sourceMarkup(question)}</details></article>`;
}

function analysisControls() {
  const filter = analysisFilter;
  const select = (key, label, values, disabled = false) => `<div class="field"><label for="analysis-${key}">${label}</label><select id="analysis-${key}" ${disabled ? 'disabled' : ''}>${values.map(x => `<option value="${escapeHtml(x)}" ${filter[key] === x ? 'selected' : ''}>${escapeHtml(x === 'A' || x === 'B' ? '科目' + x : x)}</option>`).join('')}</select></div>`;
  return `<section class="card"><h2>絞り込み</h2><div class="analysis-filters">${select('subject', '科目', ['すべて', 'A', 'B'])}${select('field', '大分野', ['全分野', ...(FIELDS[filter.subject] ?? [])], filter.subject === 'すべて')}${filter.subject === 'B' ? '' : select('subfield', '小分野', ['全小分野', ...subfieldOptions(filter.field)], filter.subject !== 'A')}</div><p class="muted">小分野はIPAシラバスVer.9.2の中分類相当です。公式の小分類とは異なります。過去の記録も現在の問題分類で集計します。分類のない科目A問題は未分類に含めます。分析条件は保存せず、演習・復習の出題条件には影響しません。</p></section>`;
}

function recordsMarkup() {
  const analysis = analyzeHistory(state, questions, analysisFilter),
    summary = analysis.summary;
  return `${analysisControls()}<section class="card"><h2>学習記録</h2><div class="stat-grid analysis-summary"><div class="stat"><strong>${summary.attempts}</strong><small>解答回数</small></div><div class="stat"><strong>${summary.correct}</strong><small>正解回数</small></div><div class="stat"><strong>${formatPercent(summary.correct, summary.attempts)}</strong><small>正答率${summary.attempts ? '' : '／未学習'}</small></div><div class="stat"><strong>${summary.uniqueQuestions}</strong><small>解答済み問題数</small></div></div><p class="muted">採点済みの解答を毎回集計します。採点された未解答は不正解に含み、中断中の演習は含みません。</p></section><div class="grid"><section class="card"><h2>分野別の正答率</h2>${analysis.groups.map(g => `<div class="bar-row"><div class="meta-row"><span>科目${escapeHtml(g.subject)} · ${escapeHtml(g.field)}${g.subfield ? ' · ' + escapeHtml(g.subfield) : ''}</span><strong>${formatPercent(g.correct, g.attempts)}</strong></div><div class="progress"><span style="width:${g.rate === null ? 0 : g.rate * 100}%"></span></div><span class="muted">${g.correct} / ${g.attempts}回正解${g.attempts ? '' : ' · 未学習'}</span></div>`).join('') ||
    '<p class="muted">該当する分野はありません。</p>'}<h3>問題別の記録</h3><div class="table-wrap"><table><thead><tr><th>問題ID・分類</th><th>解答回数</th><th>正解回数</th><th>正答率</th></tr></thead><tbody>${Object.entries(analysis.perQuestion).map(([id, s]) => `<tr><td>${escapeHtml(id)}<br>${classificationMarkup(questionsById.get(id))}</td><td>${s.attempts}</td><td>${s.correct}</td><td>${formatPercent(s.correct, s.attempts)}</td></tr>`).join('') ||
    '<tr><td colspan="4">—／未学習：条件に一致する採点済み記録はありません。</td></tr>'}</tbody></table></div></section><aside><section class="card"><h2>最近の演習</h2><p class="muted">条件に一致する解答がある演習を新しい順に最大20件表示します。解説は元の演習全体を開きます。</p>${analysis.recent.map(b => `<div class="history-row meta-row"><div>${escapeHtml(formatDate(b.finishedAt))}<br><strong>一致分 ${b.correct} / ${b.attempts}回正解</strong><br><span class="muted">元の演習：全${b.totalItems}問</span></div><button data-action="result" data-id="${escapeHtml(b.id)}">解説</button></div>`).join('') ||
    '<p class="muted">—／未学習：条件に一致する演習はありません。</p>'}</section><section class="card"><h2>データ管理</h2><p class="muted">このブラウザに保存されます。端末を変えるときや、ブラウザのデータを消去する前に書き出してください。</p><div class="data-actions"><button data-action="export">書き出し</button><button data-action="import">復元</button><input id="import-file" class="sr-only" type="file" accept="application/json,.json" aria-label="復元する学習データ"></div><p class="muted">復元は現在の記録を置き換えます。形式確認後、上書き前に確認します。</p></section></aside></div>`;
}

function moveToQuestion(index) {
  if (!state.active)
    return;
  state.active.index = Math.max(0, Math.min(index, state.active.ids.length - 1));
  accrueElapsedTime();
  persist();
  render();
}

function chooseAnswer(answer) {
  if (!state.active)
    return;
  const active = state.active,
    question = questionsById.get(active.ids[active.index]);
  if (answer < 0 || answer >= question.choices.length)
    return;
  active.answers[question.id] = answer;
  accrueElapsedTime();
  persist();
  render();
  root.querySelector(`[data-answer="${answer}"]`)?.focus({ preventScroll: true });
}

// 操作単位の処理。計時・保存・描画の順序は各関数内で維持する。
function startPractice() {
  if (state.active)
    return;
  const ids = selectQuestions(questions, state, tab === 'review');
  if (!ids.length) {
    notify('該当する問題がありません。条件を変更してください。');
    return;
  }
  state.active = {
    id: crypto.randomUUID(),
    ids,
    index: 0,
    answers: {},
    elapsedMs: 0
  };
  view = 'quiz';
  runningSince = performance.now();
  persist();
  render();
  window.scrollTo(0, 0);
}

function resumePractice() {
  view = 'quiz';
  runningSince = document.hidden ? null : performance.now();
  render();
}

function pausePractice() {
  accrueElapsedTime();
  runningSince = null;
  persist();
  view = 'home';
  render();
}

function finishPractice() {
  const active = state.active;
  if (!active)
    return;
  const unansweredCount = active.ids.filter(id => active.answers[id] === undefined).length;
  if (!window.confirm(unansweredCount ? `未解答が${unansweredCount}問あります。未解答は不正解として採点します。終了しますか？` : '採点しますか？'))
    return;
  accrueElapsedTime();
  runningSince = null;
  const items = grade(active, questions);
  state.review = [...new Set([...state.review, ...items.filter(i => !i.correct).map(i => i.id)])];
  state.history.push({
    id: active.id,
    finishedAt: new Date().toISOString(),
    elapsedMs: active.elapsedMs,
    items
  });
  resultId = active.id;
  state.active = null;
  persist();
  view = 'result';
  render();
  window.scrollTo(0, 0);
}

function exportState() {
  accrueElapsedTime();
  persist();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }),
    url = URL.createObjectURL(blob),
    link = document.createElement('a');
  link.href = url;
  link.download = `fe-quick-drill-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportOriginalData() {
  // JSONの解析・整形をせず、読み取った原文をそのまま退避する。
  const blob = new Blob([recovery.raw], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `fe-quick-drill-original-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function importState(file) {
  try {
    if (file.size > 10 * 1024 * 1024)
      throw new Error('ファイルは10MB以下にしてください。');
    const importedState = validateState(JSON.parse(await file.text()), questions);
    const recoveryWarning = recovery ? '保護中の元データも置き換わります。必要なら先に「元データを書き出し」で退避してください。\n' : '';
    if (!window.confirm(`${recoveryWarning}${importedState.history.length}回分の演習記録と復習${importedState.review.length}問を復元します。現在の学習データは上書きされます。続けますか？`))
      return;
    // 書き込み成功を確認してから画面の状態を置き換える。
    save(importedState);
    recovery = null;
    state = importedState;
    runningSince = null;
    view = 'home';
    render();
    notify('学習データを復元しました。');
  } catch (error) {
    notify(`復元できませんでした。${error instanceof SyntaxError ? 'JSON形式を確認してください。' : error.message}`);
  }
}

// ボタン操作は画面全体で受け取り、data-action ごとに処理する。
root.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button || button.disabled)
    return;
  const action = button.dataset.action;
  if (action === 'tab') {
    tab = button.dataset.tab;
    render();
  }
  if (action === 'subject') {
    const subject = button.dataset.subject;
    state.settings = {
      subject,
      field: '全分野',
      count: COUNTS[subject][0]
    };
    persist();
    render();
  }
  if (action === 'count') {
    state.settings.count = Number(button.dataset.count);
    persist();
    render();
  }
  if (action === 'start') {
    startPractice();
  }
  if (action === 'resume') {
    resumePractice();
  }
  if (action === 'pause') {
    pausePractice();
  }
  if (action === 'answer')
    chooseAnswer(Number(button.dataset.answer));
  if (action === 'prev')
    moveToQuestion(state.active.index - 1);
  if (action === 'next')
    moveToQuestion(state.active.index + 1);
  if (action === 'jump')
    moveToQuestion(Number(button.dataset.index));
  if (action === 'finish') {
    finishPractice();
  }
  if (action === 'mark') {
    const id = button.dataset.id;
    if (!questionsById.has(id))
      return;
    state.review = state.review.includes(id) ? state.review.filter(x => x !== id) : [...state.review, id];
    persist();
    const marked = state.review.includes(id);
    button.setAttribute('aria-pressed', String(marked));
    button.textContent = marked ? '★ 復習対象' : '☆ 復習に追加';
  }
  if (action === 'home') {
    view = 'home';
    render();
    window.scrollTo(0, 0);
  }
  if (action === 'result') {
    resultId = button.dataset.id;
    view = 'result';
    render();
    window.scrollTo(0, 0);
  }
  if (action === 'export') {
    exportState();
  }
  if (action === 'export-original' && recovery && recovery.raw !== null) {
    exportOriginalData();
  }
  if (action === 'import')
    root.querySelector('#import-file').click();
});

root.addEventListener('change', async event => {
  if (['analysis-subject', 'analysis-field', 'analysis-subfield'].includes(event.target.id)) {
    analysisFilter = changeAnalysisFilter(analysisFilter, event.target.id.slice(9), event.target.value);
    render();
    return;
  }
  if (event.target.id === 'field') {
    state.settings.field = event.target.value;
    persist();
    render();
  }
  if (event.target.id === 'import-file') {
    const file = event.target.files[0];
    event.target.value = '';
    if (!file)
      return;
    await importState(file);
  }
});
document.addEventListener('keydown', event => {
  if (view !== 'quiz' || !state.active || event.ctrlKey || event.metaKey || event.altKey || event.repeat ||
    /INPUT|SELECT|TEXTAREA/.test(event.target.tagName))
    return;
  if (/^[1-9]$/.test(event.key)) {
    event.preventDefault();
    chooseAnswer(Number(event.key) - 1);
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    moveToQuestion(state.active.index - 1);
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    moveToQuestion(state.active.index + 1);
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    accrueElapsedTime();
    runningSince = null;
    persist();
  } else
    if (view === 'quiz' && state.active) {
      runningSince = performance.now();
    }
});
window.addEventListener('pagehide', () => {
  accrueElapsedTime();
  runningSince = null;
  persist();
});
setInterval(() => {
  if (view === 'quiz' && state.active && runningSince !== null) {
    accrueElapsedTime();
    persist();
    const timer = document.querySelector('#timer');
    if (timer)
      timer.textContent = formatElapsedTime(state.active.elapsedMs);
  }
}, 1000);
render();
if (loaded.error)
  notify(loaded.error);
