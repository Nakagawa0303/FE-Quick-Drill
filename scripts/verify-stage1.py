"""収録済み問題を独立計算で照合する（検証状態は変更しない）。

科目Bは原本の手続をPythonへ忠実に転記し、選択肢の式を制限付きASTで評価する。
汎用疑似言語インタープリターではない。正答の一意性と表示トレースを照合する。
"""
from pathlib import Path
from itertools import permutations
from functools import lru_cache
import ast
import hashlib
import json
import operator
import re
import sqlite3
import sys
import unicodedata

ROOT=Path(__file__).resolve().parents[1]
candidate='--candidate' in sys.argv
questions=json.loads((ROOT/('tmp/pdfs/stage1-candidate.json' if candidate else 'data/additional-questions.json')).read_text(encoding='utf-8'))['questions']
# 第1段階の固定56問を検査する。後続バッチはそれぞれの確認記録で検査する。
if not candidate:
    baseline=json.loads((ROOT/'tests/fixtures/bank-1930ef1.json').read_text(encoding='utf-8'))
    stage1_ids={q['id'] for q in baseline if q['source']['type']=='ipa'}
    questions=[q for q in questions if q['id'] in stage1_ids]
    assert len(questions)==len(stage1_ids)==56,'第1段階の問題が欠落しています。'
sources=json.loads((ROOT/'docs/ipa-stage1-sources.json').read_text(encoding='utf-8'))
by_id={q['id']:q for q in questions}
report={}

def qget(y,s,n): return by_id[f'IPA-FE-{y}-KOUKAI-{s}-{n:03}']
def digest(s): return hashlib.sha256(s.encode('utf-8')).hexdigest()
def norm(s): return unicodedata.normalize('NFKC',s)

def expression(text,env):
    """データの式だけを評価する。任意コード・属性アクセス・ファイル操作は不可。"""
    text=norm(text).replace('×','*').replace('－','-').replace('≧','>=').replace('≦','<=').replace('∧','&').replace('∨','|').replace('▽','^')
    text=re.sub(r'\b[01]{8}\b',lambda m:'0b'+m[0],text)
    text=text.replace('int(binaryの(length-i+1)文字目の文字)','bit(length-i+1)').replace('int(binaryのi文字目の文字)','bit(i)')
    ops={ast.Add:operator.add,ast.Sub:operator.sub,ast.Mult:operator.mul,ast.BitAnd:operator.and_,ast.BitOr:operator.or_,ast.BitXor:operator.xor}
    compares={ast.Gt:operator.gt,ast.GtE:operator.ge,ast.Lt:operator.lt,ast.LtE:operator.le,ast.Eq:operator.eq}
    def visit(node):
        if isinstance(node,ast.Constant) and type(node.value) in (int,bool): return node.value
        if isinstance(node,ast.Name): return env[node.id]
        if isinstance(node,ast.BinOp) and type(node.op) in ops:return ops[type(node.op)](visit(node.left),visit(node.right))
        if isinstance(node,ast.Compare) and len(node.ops)==1 and type(node.ops[0]) in compares:return compares[type(node.ops[0])](visit(node.left),visit(node.comparators[0]))
        if isinstance(node,ast.BoolOp) and isinstance(node.op,ast.And):return all(visit(v) for v in node.values)
        if isinstance(node,ast.Subscript):
            a=visit(node.value);i=visit(node.slice)
            if not 1<=i<len(a):raise IndexError(i)
            return a[i]
        if isinstance(node,ast.Call) and isinstance(node.func,ast.Name) and node.func.id=='bit' and len(node.args)==1:
            i=visit(node.args[0]);s=env['binary'];assert 1<=i<=len(s);return int(s[i-1])
        raise ValueError(ast.dump(node))
    return visit(ast.parse(text.strip(),mode='eval').body)

def unique(q,passed,cases):
    assert passed==[q['answer']],(q['id'],passed,q['answer'])
    report[q['id']]=dict(officialLabel=q['source']['answerKey']['label'],independentCases=cases,uniqueChoice=True,
                         codeSha256=digest(q['code']),traceSha256=digest(json.dumps(q['trace'],ensure_ascii=False,sort_keys=True)))

def trace(q,rows): assert q['trace']['rows']==rows,(q['id'],'trace mismatch')

# 全56問の年度・科目・問番号・公式解答・原本ハッシュを取得時の独立台帳と照合。
for q in questions:
    s=q['source'];r=next(r for r in sources if r['year']==s['year'] and r['subject']==q['subject'])
    assert s['answerKey']['label']==r['answers'][str(s['questionNumber'])]
    assert q['choiceLabels'][q['answer']]==s['answerKey']['label']
    assert s['questionSha256']==r['questionSha256'] and s['answerSha256']==r['answerSha256']
    assert s['url']==r['questionUrl'] and s['answerUrl']==r['answerUrl']

# 科目Aの計算問題。計算結果が実際の選択肢に一意に対応することを検査する。
numeric=[(2025,4,(4000+6*100)/(4000+6*100+1000-6*100)),(2025,7,1e9*8*1.2/(40e6*5*60)*100),
         (2025,19,(300000+100000)/(500-100)/20/10),(2024,4,(3000*1.2)/(3000*1.2+1000*.9)*100),
         (2026,14,round((5000-.5)/5000*100-(5000-100)/5000*100,2))]
for y,n,value in numeric:
    q=qget(y,'A',n);indices=[i for i,c in enumerate(q['choices']) if abs(float(c)-value)<1e-8]
    assert indices==[q['answer']],q['id']
    report[q['id']]=dict(calculatedValue=value,uniqueChoice=True)
q=qget(2024,'A',2)
collisions=[i for i,(a,b) in enumerate([('a','i'),('b','r'),('c','l'),('d','x')]) if ord(a)%10==ord(b)%10]
assert collisions==[q['answer']];report[q['id']]=dict(hashValues=[[ord(a)%10,ord(b)%10] for a,b in [('a','i'),('b','r'),('c','l'),('d','x')]],uniqueChoice=True)
q=qget(2026,'A',17);rates=[(end-new)/before for _,before,new,end in q['table']['rows']]
assert rates.index(max(rates))==q['answer'];report[q['id']]=dict(retentionRates=rates,uniqueChoice=True)

# SQLは実際の出題文字列をSQLiteで実行。各選択肢で独立した初期表を使う。
q=qget(2026,'A',7);failures=[]
for i,sql in enumerate(q['choices']):
    db=sqlite3.connect(':memory:');db.execute(q['code'])
    db.executemany('INSERT INTO 商品 VALUES (?,?,?,?,?)',[(code,name,None if supplier=='NULL' else supplier,None if price=='NULL' else int(price.replace(',','')),None if stock=='NULL' else stock) for code,name,supplier,price,stock in q['table']['rows']])
    try:db.execute(sql)
    except sqlite3.IntegrityError:failures.append(i)
    finally:db.close()
assert failures==[q['answer']];report[q['id']]=dict(sqliteConstraintFailures=failures,uniqueChoice=True)
q=qget(2025,'A',6);db=sqlite3.connect(':memory:');db.execute('CREATE TABLE 商品 (商品ID TEXT,商品名称 TEXT,仕入先ID TEXT,単価 INTEGER)')
db.executemany('INSERT INTO 商品 VALUES (?,?,?,?)',[(a,b,c,int(d.replace(',',''))) for a,b,c,d in q['table']['rows']])
expected=sorted(db.execute(q['code']).fetchall());matched=[i for i,s in enumerate(q['choices']) if sorted(db.execute(s).fetchall())==expected]
assert matched==[q['answer']];db.close();report[q['id']]=dict(sqliteEquivalentChoices=matched,uniqueChoice=True)

# 2026 B1：選択肢のループ範囲を実データに適用。短い配列も含め上書きを確認。
q=qget(2026,'B',1);passed=[]
for k,choice in enumerate(q['choices']):
    ok=True
    for length in range(2,21):
        a=[None]+list(range(1,length+1));top=a[-1]
        m=re.fullmatch(r'(.+)から(.+)まで1ずつ(増やす|減らす)',choice)
        start=expression(m[1],{'len':length});end=expression(m[2],{'len':length});step=1 if m[3]=='増やす' else -1
        for i in range(start,end+step,step):a[i]=a[i-1]
        a[1]=top
        ok=ok and a[1:]==[length]+list(range(1,length))
    if ok:passed.append(k)
unique(q,passed,19)
a=list(range(1,10));rows=[['開始',','.join(map(str,a))]];top=a[-1]
for i in range(9,1,-1):a[i-1]=a[i-2];rows.append([f'i={i}',','.join(map(str,a))])
a[0]=top;rows.append(['先頭にtopを代入',','.join(map(str,a))]);trace(q,rows)

# 2026 B2：全256ビットパターン。選択肢自体を評価し、加算の桁あふれを再現。
q=qget(2026,'B',2);passed=[]
for k,c in enumerate(q['choices']):
    if all((x+((expression(c,{'x':x})+1)&255))&255==0 for x in range(256)):passed.append(k)
unique(q,passed,256)
x=5;y=x^255;ret=(y+1)&255;trace(q,[['x',f'{x:08b}'],['x ▽ 11111111',f'{y:08b}'],['1を加算（戻り値）',f'{ret:08b}'],['xと戻り値の和（下位8ビット）',f'{(x+ret)&255:08b}']])

# 2026 B3：再帰定義の独立オラクルと、各候補の配列更新を比較。
@lru_cache(None)
def recurrence(n): return 1 if n<=2 else 2*recurrence(n-2)+recurrence(n-1)
q=qget(2026,'B',3);passed=[]
for k,c in enumerate(q['choices']):
    ok=True
    for n in range(-3,33):
        data=[None,1,1,1]
        try:
            for i in range(3,n+1):
                data[1]=data[2];data[2]=data[3];data[3]=expression(c,{'data':data,'i':i})
            ok=ok and data[3]==recurrence(n)
        except IndexError:ok=False
    if ok:passed.append(k)
unique(q,passed,36)
data=[None,1,1,1];rows=[['初期',1,1,1]]
for i in range(3,7):data[1]=data[2];data[2]=data[3];data[3]=2*data[1]+data[2];rows.append([f'i={i}終了',*data[1:]])
trace(q,rows)

# 2025 B1：剰余の全種類、区間端点の違いを含む2624組を直接列挙と比較。
q=qget(2025,'B',1);passed=[]
for k,c in enumerate(q['choices']):
    a,b=norm(c).split(' / ');limit=int(re.search(r'から([23])まで',a)[1]);ok=True
    for n in range(1,65):
        for m in range(n+10,n+51):
            temp=n
            for i in range(limit):
                if temp%4==0:break
                temp+=1
            if 'tempNずつ' in b:count=len(range(n,m+1,temp))
            elif '4ずつ' in b:count=len(range(temp,m+1,4))
            else:count=len(range(temp,m+1))
            ok=ok and count==sum(i%4==0 for i in range(n,m+1))
    if ok:passed.append(k)
unique(q,passed,64*41)
temp=1;rows=[['初期',temp,0]]
for i in range(1,4):temp+=1;rows.append([f'前半i={i}終了',temp,0])
for count,j in enumerate(range(temp,12,4),1):rows.append([f'後半j={j}終了',temp,count])
trace(q,rows)

# 2025 B2：金種ごとの枚数を総当たりする独立オラクル。
q=qget(2025,'B',2);passed=[]
for k,c in enumerate(q['choices']):
    ok=True
    for n in range(11,201):
        rest=n;count=0
        while expression(c,{'rest':rest}):count+=rest//5+1;rest-=10
        expected=sum(1 for ten in range(n//10+1) for five in range(n//5+1) if ten*10+five*5<=n)
        ok=ok and count==expected
    if ok:passed.append(k)
unique(q,passed,190)
rows=[];rest=20;count=0
while rest>=0:add=rest//5+1;count+=add;rows.append([rest,add,count,rest-10]);rest-=10
trace(q,rows)

# 2024 B1：異なる整数の全順列を確認。負数・0も含む。
q=qget(2024,'B',1);passed=[];inputs=list(permutations(range(-3,4),3))
for k,c in enumerate(q['choices']):
    if all((x if expression(c,dict(x=x,y=y,z=z)) else y if y>z else z)==max(x,y,z) for x,y,z in inputs):passed.append(k)
unique(q,passed,len(inputs))
rows=[]
for x,y,z in [(3,1,2),(1,3,2),(2,1,3)]:rows.append([x,y,z,'真' if x>y and x>z else '偽',max(x,y,z)])
trace(q,rows)

# 2024 B2：長さ1〜10の全2046文字列（先頭の0を含む）。
q=qget(2024,'B',2);passed=[];inputs=[f'{v:0{length}b}' for length in range(1,11) for v in range(1<<length)]
for k,c in enumerate(q['choices']):
    ok=True
    for binary in inputs:
        result=0;length=len(binary)
        for i in range(1,length+1):result=expression(c,dict(result=result,binary=binary,length=length,i=i))
        ok=ok and result==int(binary,2)
    if ok:passed.append(k)
unique(q,passed,len(inputs))
rows=[];result=0
for i,b in enumerate('10010',1):result=result*2+int(b);rows.append([i,b,result])
trace(q,rows)

# 2024 B4：原本のmergeを独立転記して行実行回数を計測。
q=qget(2024,'B',4);a=[2,3];b=[1,4];i=j=0;k=1;work=[];rows=[];alpha=0
while i<len(a) and j<len(b):
    if a[i]<=b[j]:value=a[i];i+=1
    else:value=b[j];j+=1
    work.append(value);k+=1;rows.append([f'主ループ{len(rows)+1}回目',value,i+1,j+1,k])
while i<len(a):work.append(a[i]);i+=1;k+=1
while j<len(b):
    value=b[j];work.append(value);j+=1;k+=1;alpha+=1;rows.append(['αを実行',value,i+1,j+1,k])
assert work==sorted(a+b) and alpha==1
assert q['choices'][q['answer']]=='1回実行される';trace(q,rows);unique(q,[q['choices'].index('1回実行される')],1)

result=dict(date='2026-11-08',officialAnswersMatched=len(questions),algorithmQuestions=8,
            note='AIによる原本・解説の照合と独立計算。専門家レビュー未実施。テスト入力の網羅は各問題の検査範囲を参照。',checks=report)
if '--write-report' in sys.argv:
    (ROOT/'docs/ipa-stage1-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
else:
    recorded=json.loads((ROOT/'docs/ipa-stage1-verification.json').read_text(encoding='utf-8'))
    assert result==recorded,'検査結果・コード・トレースが検査記録から変わっています。再レビューが必要です。'
print(f'OK: official answer checks={len(questions)}, independent checks={len(report)}, B traces=8')
