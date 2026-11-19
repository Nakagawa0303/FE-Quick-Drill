import assert from 'node:assert/strict';
import {readFile, writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {questions as liveBank} from '../data/questions.js';

// 候補の検証・閲覧資料生成専用。本番バンクや配信用JSを更新しない。
const draftUrl=new URL('../docs/drafts/b-seven-arranged.json',import.meta.url);
const draft=JSON.parse(await readFile(draftUrl,'utf8'));
const qs=draft.questions;
const installed=liveBank.filter(q=>qs.some(d=>d.id===q.id));
assert([0,7].includes(installed.length),'一部だけ導入された状態を拒否');
const isInstalled=installed.length===7;
assert.equal(draft.stage,'review-only-not-installed');
assert.equal(qs.length,7);
assert.equal(new Set(qs.map(q=>q.id)).size,7);
assert.equal(qs.filter(q=>q.field==='アルゴリズム・プログラミング').length,4);
assert.equal(qs.filter(q=>q.field==='情報セキュリティ').length,3);
for(const q of qs){
  assert.equal(q.subject,'B');
  if(isInstalled){
    const live=installed.find(x=>x.id===q.id);
    for(const key of Object.keys(q))assert.deepEqual(live[key],q[key],q.id+' 検証した内容を保持');
    assert.equal(live.source.type,'original');
    assert.equal(live.verification.status,'verified');
    assert.equal(live.verification.review.answerIndex,q.answer);
  }
  assert(liveBank.some(old=>old.id===q.inspiredBy),q.id+' 参考問題の存在');
  assert(q.explanation.brief&&q.explanation.detail&&q.adaptation);
  assert.equal(q.choices.length,4);
  assert.equal(new Set(q.choices).size,4);
  assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
}
const eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const checks=[];
function finish(q,total,passed,witnesses,extra={}){
  const successes=passed.flatMap((n,i)=>n===total?[i]:[]);
  assert.deepEqual(successes,[q.answer],q.id+' 正答が全ケースで一意');
  for(let i=0;i<4;i++)if(i!==q.answer)assert(witnesses[i],q.id+' 誤答の反例');
  checks.push({id:q.id,cases:total,passedByChoice:passed,answerIndex:q.answer,
    answerLabel:'アイウエ'[q.answer],wrongChoiceCounterexamples:witnesses,
    contentSha256:createHash('sha256').update(JSON.stringify(q)).digest('hex'),...extra});
}

// Q1: 1始まり配列へのアクセスを明示チェック。独立オラクルは切出し結合。
{
  const q=qs[0],passed=[0,0,0,0],w=[null,null,null,null];let total=0;
  const variants=[{start:n=>n-1,end:()=>1,step:-1},{start:()=>1,end:n=>n-1,step:1},
    {start:()=>1,end:n=>n,step:1},{start:()=>2,end:n=>n-1,step:1}];
  for(let n=2;n<=12;n++)for(let k=0;k<n;k++)for(const data of [Array.from({length:n},(_,i)=>i-5),Array(n).fill(7)]){
    const expected=data.slice(k).concat(data.slice(0,k));total++;
    for(let v=0;v<4;v++){
      const a=[null,...data];let error=null;
      try{
        for(let t=1;t<=k;t++){
          const saved=a[1],range=variants[v];
          for(let i=range.start(n);range.step>0?i<=range.end(n):i>=range.end(n);i+=range.step){
            assert(i>=1&&i<=n&&i+1<=n,'領域外参照');a[i]=a[i+1];
          }
          a[n]=saved;
        }
      }catch(e){error=e.message;}
      if(!error&&eq(a.slice(1),expected))passed[v]++;
      else w[v]??={data,k,expected,actual:a.slice(1),error};
    }
  }
  finish(q,total,passed,w);
}

// Q2: 非減少配列を組合せで全列挙。候補の二分探索を線形探索と比較する。
{
  const q=qs[1],passed=[0,0,0,0],w=[null,null,null,null];let total=0;
  const conditions=[(x,t)=>x<=t,(x,t)=>x>t,(x,t)=>x>=t,(x,t)=>x===t];
  function check(data){for(let target=-3;target<=3;target++){
    const pos=data.findIndex(x=>x>=target),expected=pos<0?data.length+1:pos+1;total++;
    conditions.forEach((condition,v)=>{
      let low=1,high=data.length,result=data.length+1,steps=0;
      while(low<=high){
        assert(++steps<=data.length+1,'探索が終了する');
        const mid=Math.floor((low+high)/2);assert(mid>=1&&mid<=data.length);
        if(condition(data[mid-1],target)){result=mid;high=mid-1;}else low=mid+1;
      }
      if(result===expected)passed[v]++;else w[v]??={data:[...data],target,expected,actual:result};
    });
  }}
  function enumerate(a,n,min=-2){if(a.length===n){check(a);return;}for(let x=min;x<=2;x++)enumerate([...a,x],n,x);}
  for(let n=0;n<=6;n++)enumerate([],n);
  finish(q,total,passed,w);
}

// Q3: 1始まり固定領域の実装と、配列を使う独立モデルを操作列ごとに比較。
{
  const q=qs[2],stack=[],state={a:[null,null,null,null],top:0};
  const push=x=>{if(state.top===3)return false;state.a[++state.top]=x;return true;};
  const pop=()=>state.top===0?'空':state.a[state.top--];
  const oraclePush=x=>{if(stack.length===3)return false;stack.push(x);return true;};
  const oraclePop=()=>stack.length?stack.pop():'空';
  const trace=[],returns=[];
  for(const [op,x] of [['push',6],['push',1],['pop'],['push',8],['push',3],['push',9],['pop']]){
    const actual=op==='push'?push(x):pop(),expected=op==='push'?oraclePush(x):oraclePop();
    assert.equal(actual,expected);assert.equal(state.top,stack.length);assert.deepEqual(state.a.slice(1,state.top+1),stack);
    returns.push(actual);trace.push({op,x,result:actual,stack:[...stack],top:state.top});
  }
  const expected=[returns[2],returns[5],returns[6],state.top];
  const alternatives=[[1,false,3,2],[6,false,3,2],[1,true,9,3],[1,false,8,1]];
  q.choices.forEach((s,i)=>assert.equal(s,`(${alternatives[i].join(', ')})`));
  finish(q,1,alternatives.map(x=>Number(eq(x,expected))),alternatives.map(x=>eq(x,expected)?null:{expected,actual:x}),{trace});
}

// Q4: 実際の二重ループと、非零座標の列順ソートによる独立モデルを照合。
{
  const q=qs[3],m=[[0,5,0],[2,0,-1]],actual=[[],[],[]],coords=[];
  for(let j=0;j<3;j++)for(let i=0;i<2;i++)if(m[i][j]!==0){actual[0].push(i+1);actual[1].push(j+1);actual[2].push(m[i][j]);}
  m.forEach((row,i)=>row.forEach((v,j)=>{if(v!==0)coords.push([i+1,j+1,v]);}));
  coords.sort((a,b)=>a[1]-b[1]||a[0]-b[0]);
  const expected=[0,1,2].map(k=>coords.map(c=>c[k]));assert.deepEqual(actual,expected);
  const alternatives=q.choices.map(s=>JSON.parse(s.replaceAll('{','[').replaceAll('}',']')));
  finish(q,1,alternatives.map(x=>Number(eq(x,expected))),alternatives.map(x=>eq(x,expected)?null:{expected,actual:x}));
}

// セキュリティは架空の明示条件をモデル化。文章の網羅性は別工程でレビューする。
{
  const q=qs[4];
  const plans=[{staff:2,restricted:false,immutable:true,days:180},{staff:1,restricted:true,immutable:true,days:180},
    {staff:2,restricted:true,immutable:false,days:180},{staff:2,restricted:true,immutable:true,days:90}];
  const expected=plans.flatMap((p,i)=>!p.restricted||!p.immutable?[i+1]:[]);
  const roman=['Ⅰ','Ⅱ','Ⅲ','Ⅳ'];
  const alternatives=q.choices.map(s=>s.split('、').map(v=>roman.indexOf(v)+1));
  assert.deepEqual(expected,[1,3]);
  finish(q,1,alternatives.map(x=>Number(eq(x,expected))),alternatives.map(x=>eq(x,expected)?null:{expected,actual:x}),{allRuleViolations:[[2],[1],[3],[4]]});
}
{
  const q=qs[5],lossHours=(3*24+10)-3*24,restoreMinutes=120+3*20;
  const expected={lossHours,restoreMinutes,rpo:lossHours<=12,rto:restoreMinutes<=4*60};
  const alternatives=[{lossHours:10,restoreMinutes:140,rpo:true,rto:true},{lossHours:10,restoreMinutes:180,rpo:true,rto:true},
    {lossHours:34,restoreMinutes:160,rpo:false,rto:true},{lossHours:10,restoreMinutes:180,rpo:true,rto:false}];
  const parsed=q.choices.map(s=>{const m=s.match(/^(\d+)時間・(\d+)時間(?:(\d+)分)?・(.+)$/);assert(m);return {lossHours:Number(m[1]),restoreMinutes:Number(m[2])*60+Number(m[3]??0),rpo:m[4]!=='RTOだけを満たす',rto:m[4]!=='RPOだけを満たす'};});
  assert.deepEqual(parsed,alternatives);
  finish(q,1,alternatives.map(x=>Number(eq(x,expected))),alternatives.map(x=>eq(x,expected)?null:{expected,actual:x}));
}
{
  const q=qs[6],responsibility={DBMS:'P社',独自アプリ:'D社',利用者管理:'N社',診断:'T社'};
  const expected=['DBMS','独自アプリ','利用者管理'].map(k=>responsibility[k]);
  const alternatives=q.choices.map(s=>s.split('、'));
  finish(q,1,alternatives.map(x=>Number(eq(x,expected))),alternatives.map(x=>eq(x,expected)?null:{expected,actual:x}));
}

const bankB=liveBank.filter(q=>q.subject==='B');
const baselineB=bankB.filter(q=>!qs.some(d=>d.id===q.id));
const counts=[...baselineB,...qs].reduce((a,q)=>(a[q.field]=(a[q.field]??0)+1,a),{});
assert.equal(baselineB.length,53);assert.equal(bankB.length,isInstalled?60:53);
assert.equal(counts['アルゴリズム・プログラミング'],48);assert.equal(counts['情報セキュリティ'],12);
export const report={date:'2026-11-19',stage:isInstalled?'installed':draft.stage,method:'境界値・有限全列挙・独立モデル・全選択肢反例。有限検査は数学的証明の代替ではない。文章の条件と解説は別レビュー対象。',
  liveB:bankB.length,proposedB:baselineB.length+qs.length,proposedDistribution:counts,checks};
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)console.log(JSON.stringify(report,null,2));

if(process.argv.includes('--write-review')){
  const dest=new URL('../docs/drafts/b-seven-arranged-review.md',import.meta.url);
  const lines=[isInstalled?'# 科目Bアレンジ7問（再検証・導入済み）':'# 科目B追加候補7問（作成・正誤確認のみ）','',
    `${isInstalled?'2026-11-19に利用者承認に基づき導入済み。':'本番未導入。'}IPA公式問題ではなく、既存公式問題の題材を参考にした独自アレンジです。正答・解説も独自作成です。`,
    '', isInstalled?'既存B53問（44／9）へ7問（4／3）を追加し、B60問（48／12）、80%：20%になりました。科目Aは180問のままで、合計240問です。':'現在のB53問（44／9）へ将来追加した場合はB60問（48／12）、80%：20%となります。現時点のアプリの収録数は変わりません。',
    '', 'アルゴリズム4問：循環移動・下限位置の二分探索・スタック・疎行列。情報セキュリティ3問：ログ管理・バックアップ・クラウド責任分担。',
    '', '## 問題と選択肢',''];
  qs.forEach((q,i)=>{
    lines.push(`### 問${i+1}：${q.field}（${q.id}）`,'',q.prompt,'');
    if(q.code)lines.push('```text',q.code,'```','');
    q.choices.forEach((c,j)=>lines.push(`${'アイウエ'[j]}．${c}`));
    lines.push('');
  });
  lines.push('## 正答・解説・検証結果','');
  qs.forEach((q,i)=>{
    const c=checks[i];lines.push(`### 問${i+1}：正答 ${'アイウエ'[q.answer]}`,'',q.explanation.brief,'',q.explanation.detail,'',
      `参考にした既存問題：${q.inspiredBy}。変更点：${q.adaptation}`,'',
      `機械検査：${c.cases}ケース。選択肢ごとの合格数（ア〜エ）：${c.passedByChoice.join(' / ')}。正答のみ全ケース一致。`,'');
    if(c.trace)lines.push('操作列の独立モデル照合：','',...c.trace.map(r=>`- ${r.op}(${r.x??''}) → ${r.result}、底から頂上：{${r.stack.join(',')}}、top=${r.top}`),'');
  });
  lines.push('## 文章の別担当AIレビュー','',
    '7問を作成担当と別のAI担当が独立に解き、想定正答は全問一致しました。レビュー指摘を受けて、問3の誤答イを「一貫したFIFO」と説明する不正確な表現を修正し、問5では閲覧者に運用担当者以外も含まれることを明記しました。問6もデータ損失時間の定義を復元時点と障害時点の差として精密化しました。修正後のデータで機械検査を再実行しています。', '',
    '難易度は基礎〜標準寄りで、特に問3・6・7は易しめです。問2は重複・空配列を含む探索の推論が中心です。本番問題との難易度を実測比較したものではなく、7問全体を本番相当と認定するものではありません。', '',
    '## 検査の再実行','', '```sh','node scripts/verify-b-seven-drafts.js','```','',
    '草案JSONの全選択肢と正答添字を検査します。問1は退避・代入順と領域外参照、問2は空・重複・不在・端点を含む非減少配列を有限全列挙して線形探索と比較します。問3・4は独立モデル、問5〜7は問題文で明示した架空の規則・時刻・契約から全選択肢を照合します。有限全列挙の範囲外については解説の不変条件で確認します。', '',
    '正答の機械確認と文章レビューを区別します。セキュリティ問題の条件が文章に過不足なく書かれているかは、人間又はAIの読解による確認も必要であり、計算だけで保証するものではありません。', '',
    '機械可読データ：[検証用の7問原稿](./b-seven-arranged.json)。再実行可能な検証処理：[検証スクリプト](../../scripts/verify-b-seven-drafts.js)。原稿のstageは初回草案作成時の記録として保持し、現在の導入状態は本資料とチェック結果のstageで示します。',
    isInstalled?'導入先は[問題JSON](../../data/additional-questions.json)と[生成JS](../../data/additional-questions.js)。検証処理は本番の全7問が検証用原稿と一致することも確認します。':'本番の問題JSON・生成JS・出題処理への追記やimportは行っていません。','');
  await writeFile(dest,lines.join('\n'),'utf8');
  await writeFile(new URL('../docs/drafts/b-seven-arranged-checks.json',import.meta.url),JSON.stringify(report,null,2)+'\n','utf8');
}
