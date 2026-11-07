import {questions,additionalQuestions} from '../data/questions.js';
import {FIELDS,COUNTS,validateQuestions,selectQuestions,grade,stats,validateState,formatSource} from './core.js';
import {load,save} from './storage.js';

const root=document.querySelector('#app');
try { validateQuestions(additionalQuestions,{requireReviewEvidence:true,allowEmpty:true});validateQuestions(questions); } catch(error) {root.textContent=`問題データの読み込みに失敗しました: ${error.message}`;throw error;}
const loaded=load(questions);
let state=loaded.state, view='home', tab='practice', resultId=null, runningSince=null, toastTimer;
const byId=new Map(questions.map(q=>[q.id,q]));
const e=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const time=ms=>{const s=Math.floor(ms/1000);return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;};
const date=s=>new Date(s).toLocaleString('ja-JP',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
const percent=(n,d)=>d?`${Math.round(n/d*100)}%`:'—';
function notify(message){document.querySelector('#notice').textContent=message;clearTimeout(toastTimer);toastTimer=setTimeout(()=>document.querySelector('#notice').textContent='',6500);}
function persist(){try{save(state);}catch{notify('ブラウザに保存できません。保存領域やプライベートモードの設定を確認し、学習データを書き出してください。');}}
function accrue(){if(runningSince!==null&&state.active){state.active.elapsedMs+=Math.max(0,performance.now()-runningSince);runningSince=performance.now();}}
function elapsed(){return (state.active?.elapsedMs??0)+(runningSince===null?0:Math.max(0,performance.now()-runningSince));}
function table(t){return t?`<div class="table-wrap"><table><thead><tr>${t.headers.map(x=>`<th scope="col">${e(x)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r=>`<tr>${r.map(x=>`<td>${e(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:'';}
function problem(q){return `<p class="question">${e(q.prompt)}</p>${q.code?`<pre><code>${e(q.code)}</code></pre>`:''}${table(q.table)}`;}
function sourceMarkup(q){
  const s=q.source;
  const links=s.type==='ipa'?`<br><a href="${e(s.url)}" target="_blank" rel="noopener noreferrer">問題冊子</a> · <a href="${e(s.answerUrl)}" target="_blank" rel="noopener noreferrer">公式解答例</a> · <a href="${e(s.termsUrl)}" target="_blank" rel="noopener noreferrer">利用条件</a>（出典確認 ${e(s.accessedAt)}）`:'';
  return `<p class="muted">出典：${e(formatSource(q))}${links}${q.explanation.author?`<br>解説作成：${e(q.explanation.author)}`:''}<br>検証：${e(q.verification.method)}（${e(q.verification.date)}）${q.verification.review?`<br>確認担当：${e(q.verification.review.reviewer)}`:''}</p>`;
}
function reviewButton(id){const marked=state.review.includes(id);return `<button class="review-toggle" data-action="mark" data-id="${e(id)}" aria-pressed="${marked}">${marked?'★ 復習対象':'☆ 要復習にする'}</button>`;}
function render(){
  if(view==='quiz'&&state.active)renderQuiz();else if(view==='result')renderResult();else renderHome();
}
function renderHome(){
  view='home';const s=stats(state),attempts=Object.values(s).reduce((n,x)=>n+x.attempts,0),correct=Object.values(s).reduce((n,x)=>n+x.correct,0);
  root.innerHTML=`<div class="intro"><div class="eyebrow">SMALL STEPS. STEADY PROGRESS.</div><h1>すきま時間を、合格への一歩に。</h1><p class="muted">選んで、解いて、振り返る。基本情報の演習を、もっと手軽に。</p></div>
  ${state.active?`<div class="resume meta-row"><div><strong>中断中の演習があります</strong><div class="muted">${Object.keys(state.active.answers).length} / ${state.active.ids.length}問 解答済み · ${time(state.active.elapsedMs)}</div></div><button class="primary" data-action="resume">続きから再開 →</button></div>`:''}
  <nav class="tabs" aria-label="メイン"><button data-action="tab" data-tab="practice" class="${tab==='practice'?'active':''}" ${tab==='practice'?'aria-current="page"':''}>演習する</button><button data-action="tab" data-tab="review" class="${tab==='review'?'active':''}" ${tab==='review'?'aria-current="page"':''}>復習 <span class="pill">${state.review.length}</span></button><button data-action="tab" data-tab="records" class="${tab==='records'?'active':''}" ${tab==='records'?'aria-current="page"':''}>学習記録</button></nav>
  ${tab==='records'?records():`<div class="grid"><section class="card"><h2>${tab==='review'?'復習で、理解を確かに。':'今日の演習をはじめる'}</h2>${tab==='review'?'<p class="muted">不正解と要復習にした問題から出題します。</p>':''}${settings()}<button class="primary start" data-action="start" ${state.active?'disabled':''}>${tab==='review'?'復習をはじめる':'演習をはじめる'} <span aria-hidden="true">→</span></button><p class="muted" id="pool-note">${poolNote()}</p>${state.active?'<p class="muted">中断中の演習を再開し、採点してから新しい演習を始められます。</p>':''}</section><aside><section class="card"><div class="eyebrow">YOUR PROGRESS</div><h2>これまでの積み重ね</h2><div class="stat-grid"><div class="stat"><strong>${attempts}</strong><small>解答数</small></div><div class="stat"><strong>${percent(correct,attempts)}</strong><small>正答率</small></div><div class="stat"><strong>${state.review.length}</strong><small>復習対象</small></div></div><p class="sidebar-note">未出題の問題を優先。演習中は答えを表示せず、最後にまとめて振り返ります。</p><p class="muted">PCでは数字キーで解答、← → で問題を移動できます。</p></section><section class="card"><span class="pill">収録問題</span><p>科目A <strong>${questions.filter(q=>q.subject==='A'&&q.verification.status==='verified').length}問</strong> / 科目B <strong>${questions.filter(q=>q.subject==='B'&&q.verification.status==='verified').length}問</strong></p><p class="muted">検証済みの問題数です。未検証の問題は出題されません。</p></section></aside></div>`}`;
}
function settings(){const s=state.settings;return `<div class="field"><span class="field-label"><span class="step">01</span>科目を選ぶ</span><div class="segments subject">${['A','B'].map(x=>`<button data-action="subject" data-subject="${x}" class="${s.subject===x?'selected':''}" aria-pressed="${s.subject===x}">科目${x}<small>${x==='A'?'知識を磨く':'読解・思考を鍛える'}</small></button>`).join('')}</div></div><div class="field"><label class="field-label" for="field"><span class="step">02</span>分野を選ぶ</label><select id="field">${['全分野',...FIELDS[s.subject]].map(x=>`<option ${s.field===x?'selected':''}>${x}</option>`).join('')}</select></div><div class="field"><span class="field-label"><span class="step">03</span>出題数を選ぶ</span><div class="segments">${COUNTS[s.subject].map(x=>`<button data-action="count" data-count="${x}" class="${s.count===x?'selected':''}" aria-pressed="${s.count===x}">${x}問</button>`).join('')}</div></div>`;}
function poolNote(){const n=selectQuestions(questions,state,tab==='review').length;return n?`${n}問で開始します。${n<state.settings.count?'この条件では問題数が設定より少ないため、全'+n+'問を出題。':''} ブロック内の重複はありません。`:'この条件に該当する問題はありません。科目・分野を変更してください。';}
function renderQuiz(){const a=state.active,q=byId.get(a.ids[a.index]);root.innerHTML=`<div class="wide"><div class="meta-row"><button class="text" data-action="pause">← 中断してホームへ</button><span class="muted">経過時間 <strong id="timer">${time(elapsed())}</strong></span></div><div class="progress"><span style="width:${(a.index+1)/a.ids.length*100}%"></span></div><section class="card"><div class="meta-row"><div><span class="pill">科目${q.subject}</span> <span class="pill">${e(q.field)}</span></div><strong>問題 ${a.index+1} <span class="muted">/ ${a.ids.length}</span></strong></div>${problem(q)}<div class="options" role="group" aria-label="解答選択肢">${q.choices.map((x,i)=>`<button class="option ${a.answers[q.id]===i?'selected':''}" data-action="answer" data-answer="${i}" aria-pressed="${a.answers[q.id]===i}"><span class="key">${i+1}</span><span>${e(x)}</span></button>`).join('')}</div><div class="actions"><button data-action="prev" ${a.index===0?'disabled':''}>← 前の問題</button>${a.index<a.ids.length-1?'<button class="primary" data-action="next">次の問題 →</button>':'<button class="primary" data-action="finish">演習を終了して採点</button>'}</div><div class="jump" aria-label="問題へ移動">${a.ids.map((id,i)=>`<button data-action="jump" data-index="${i}" class="${a.answers[id]!==undefined?'answered':''} ${i===a.index?'current':''}" aria-label="問題${i+1}${a.answers[id]!==undefined?' 解答済み':' 未解答'}" ${i===a.index?'aria-current="step"':''}>${i+1}</button>`).join('')}</div><p class="muted">${Object.keys(a.answers).length}問 解答済み · 解答は採点まで変更できます。<br>数字キー：選択 / ← →：移動（未解答でも移動可能）</p></section></div>`;}
function renderResult(){const b=state.history.find(b=>b.id===resultId);if(!b){view='home';render();return;}const correct=b.items.filter(i=>i.correct).length;const ordered=[...b.items].sort((a,b)=>Number(a.correct)-Number(b.correct));root.innerHTML=`<div class="wide"><div class="eyebrow">SESSION COMPLETE</div><h1>おつかれさまでした。</h1><section class="card"><div class="meta-row"><div><div class="result-score">${correct}<small> / ${b.items.length}問正解</small></div><p>正答率 <strong>${percent(correct,b.items.length)}</strong> <span class="muted">· 学習時間 ${time(b.elapsedMs)}</span></p></div><button class="primary" data-action="home">ホームへ戻る</button></div><p class="muted">不正解の問題を先に表示しています。復習対象は「★ 復習対象」を押すと解除できます。</p></section>${ordered.map(i=>resultCard(i,b)).join('')}</div>`;}
function resultCard(item,block){const q=byId.get(item.id),index=block.items.findIndex(i=>i.id===item.id);return `<article class="card review-card"><div class="meta-row"><strong><span class="${item.correct?'good':'bad'}">${item.correct?'✓ 正解':'× 不正解'}</span> <span class="muted">問題 ${index+1} · 科目${q.subject}</span></strong>${reviewButton(q.id)}</div><details ${!item.correct?'open':''}><summary>${e(q.field)} — 問題と解説を${item.correct?'表示':'確認'}</summary>${problem(q)}<p class="muted">あなたの解答：${item.answer===null?'未解答':`${item.answer+1}. ${e(q.choices[item.answer])}`}</p><p class="good"><strong>正答：${q.answer+1}. ${e(q.choices[q.answer])}</strong></p><div class="explanation"><strong>簡潔な説明</strong><p>${e(q.explanation.brief)}</p><details><summary>詳細な説明を読む</summary><p>${e(q.explanation.detail)}</p>${q.trace?`<h3>トレース表</h3>${table(q.trace)}`:''}</details></div>${sourceMarkup(q)}</details></article>`;}
function records(){const all=state.history.flatMap(b=>b.items);return `<div class="grid"><section class="card"><h2>分野別の正答率</h2>${Object.entries(FIELDS).flatMap(([s,fields])=>fields.map(f=>{const items=all.filter(i=>byId.get(i.id).subject===s&&byId.get(i.id).field===f),c=items.filter(i=>i.correct).length;return `<div class="bar-row"><div class="meta-row"><span>科目${s} · ${e(f)}</span><strong>${percent(c,items.length)}</strong></div><div class="progress"><span style="width:${items.length?c/items.length*100:0}%"></span></div><span class="muted">${c} / ${items.length}問正解</span></div>`;})).join('')}<h3>問題ごとの記録</h3><div class="table-wrap"><table><thead><tr><th>問題ID</th><th>出題回数</th><th>正答率</th></tr></thead><tbody>${Object.entries(stats(state)).map(([id,s])=>`<tr><td>${e(id)}</td><td>${s.attempts}</td><td>${percent(s.correct,s.attempts)}</td></tr>`).join('')||'<tr><td colspan="3">まだ採点済みの演習はありません。</td></tr>'}</tbody></table></div><p class="muted">出題回数は採点済みのブロックで集計します。中断中の演習は採点後に反映されます。</p></section><aside><section class="card"><h2>最近の演習</h2>${state.history.length?[...state.history].reverse().slice(0,20).map(b=>`<div class="history-row meta-row"><div>${e(date(b.finishedAt))}<br><strong>${b.items.filter(i=>i.correct).length} / ${b.items.length}問正解</strong> <span class="muted">${time(b.elapsedMs)}</span></div><button data-action="result" data-id="${e(b.id)}">解説</button></div>`).join(''):'<p class="muted">最初の演習から、記録が始まります。</p>'}</section><section class="card"><h2>学習データの管理</h2><p class="muted">このブラウザに保存されます。端末を変えるときや、ブラウザのデータを消去する前に書き出してください。</p><div class="data-actions"><button data-action="export">JSONを書き出す</button><button data-action="import">JSONから復元</button><input id="import-file" class="sr-only" type="file" accept="application/json,.json" aria-label="復元する学習データ"></div><p class="muted">復元は現在の記録を置き換えます。形式確認後、上書き前に確認します。</p></section></aside></div>`;}
function move(index){if(!state.active)return;state.active.index=Math.max(0,Math.min(index,state.active.ids.length-1));accrue();persist();render();}
function choose(answer){if(!state.active)return;const a=state.active,q=byId.get(a.ids[a.index]);if(answer<0||answer>=q.choices.length)return; a.answers[q.id]=answer;accrue();persist();render();root.querySelector(`[data-answer="${answer}"]`)?.focus({preventScroll:true});}
root.addEventListener('click',event=>{const button=event.target.closest('button[data-action]');if(!button||button.disabled)return;const action=button.dataset.action;
  if(action==='tab'){tab=button.dataset.tab;render();}
  if(action==='subject'){const subject=button.dataset.subject;state.settings={subject,field:'全分野',count:COUNTS[subject][0]};persist();render();}
  if(action==='count'){state.settings.count=Number(button.dataset.count);persist();render();}
  if(action==='start'){
    if(state.active)return;const ids=selectQuestions(questions,state,tab==='review');if(!ids.length){notify('該当する問題がありません。条件を変更してください。');return;}
    state.active={id:crypto.randomUUID(),ids,index:0,answers:{},elapsedMs:0};view='quiz';runningSince=performance.now();persist();render();window.scrollTo(0,0);
  }
  if(action==='resume'){view='quiz';runningSince=document.hidden?null:performance.now();render();}
  if(action==='pause'){accrue();runningSince=null;persist();view='home';render();}
  if(action==='answer')choose(Number(button.dataset.answer));
  if(action==='prev')move(state.active.index-1);
  if(action==='next')move(state.active.index+1);
  if(action==='jump')move(Number(button.dataset.index));
  if(action==='finish'){
    const a=state.active;if(!a)return;const missing=a.ids.filter(id=>a.answers[id]===undefined).length;
    if(!window.confirm(missing?`未解答が${missing}問あります。未解答は不正解として採点します。終了しますか？`:'演習を終了して採点しますか？'))return;
    accrue();runningSince=null;const items=grade(a,questions);state.review=[...new Set([...state.review,...items.filter(i=>!i.correct).map(i=>i.id)])];state.history.push({id:a.id,finishedAt:new Date().toISOString(),elapsedMs:a.elapsedMs,items});resultId=a.id;state.active=null;persist();view='result';render();window.scrollTo(0,0);
  }
  if(action==='mark'){const id=button.dataset.id;if(!byId.has(id))return;state.review=state.review.includes(id)?state.review.filter(x=>x!==id):[...state.review,id];persist();const marked=state.review.includes(id);button.setAttribute('aria-pressed',String(marked));button.textContent=marked?'★ 復習対象':'☆ 要復習にする';}
  if(action==='home'){view='home';render();window.scrollTo(0,0);}
  if(action==='result'){resultId=button.dataset.id;view='result';render();window.scrollTo(0,0);}
  if(action==='export'){accrue();persist();const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`fe-quick-drill-${new Date().toISOString().slice(0,10)}.json`;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  if(action==='import')root.querySelector('#import-file').click();
});
root.addEventListener('change',async event=>{
  if(event.target.id==='field'){state.settings.field=event.target.value;persist();render();}
  if(event.target.id==='import-file'){
    const file=event.target.files[0];event.target.value='';if(!file)return;
    try{if(file.size>10*1024*1024)throw new Error('ファイルは10MB以下にしてください。');const next=validateState(JSON.parse(await file.text()),questions);
      if(!window.confirm(`${next.history.length}回分の演習記録と復習${next.review.length}問を復元します。現在の学習データは上書きされます。続けますか？`))return;
      // 書き込み成功を確認してから画面の状態を置き換える。
      save(next);state=next;runningSince=null;view='home';render();notify('学習データを復元しました。');
    }catch(error){notify(`復元できませんでした。${error instanceof SyntaxError?'JSON形式を確認してください。':error.message}`);}
  }
});
document.addEventListener('keydown',event=>{
  if(view!=='quiz'||!state.active||event.ctrlKey||event.metaKey||event.altKey||event.repeat||/INPUT|SELECT|TEXTAREA/.test(event.target.tagName))return;
  if(/^[1-9]$/.test(event.key)){event.preventDefault();choose(Number(event.key)-1);}
  if(event.key==='ArrowLeft'){event.preventDefault();move(state.active.index-1);}
  if(event.key==='ArrowRight'){event.preventDefault();move(state.active.index+1);}
});
document.addEventListener('visibilitychange',()=>{if(document.hidden){accrue();runningSince=null;persist();}else if(view==='quiz'&&state.active){runningSince=performance.now();}});
window.addEventListener('pagehide',()=>{accrue();runningSince=null;persist();});
setInterval(()=>{if(view==='quiz'&&state.active&&runningSince!==null){accrue();persist();const timer=document.querySelector('#timer');if(timer)timer.textContent=time(state.active.elapsedMs);}},1000);
render();if(loaded.error)notify(loaded.error);
