"""追加問題の数値・疑似言語を独立実装で検査。verifiedを変更しない。"""
from pathlib import Path
import ast
import hashlib
import heapq
import itertools
import json
import math
import operator
import re
import sys
import unicodedata
import sqlite3

ROOT=Path(__file__).resolve().parents[1]
bank=json.loads((ROOT/'data/additional-questions.json').read_text(encoding='utf-8'))['questions']
by_id={q['id']:q for q in bank}
report={}
def qget(y,s,n):return by_id[f'IPA-FE-{y}-'+('SAMPLESET' if y==2022 else 'SPRING-AM' if y==2019 else 'KOUKAI')+f'-{s}-{n:03}']
def unique(q,passed,cases,**extra):
    assert passed==[q['answer']],(q['id'],passed,q['answer'])
    report[q['id']]=dict(cases=cases,uniqueChoice=True,**extra)
def result(q,value,convert=lambda s:float(s.replace(',',''))):
    passed=[]
    for i,c in enumerate(q['choices']):
        try:
            if math.isclose(convert(c),value,rel_tol=1e-9,abs_tol=1e-9):passed.append(i)
        except (ValueError,TypeError):pass
    unique(q,passed,1,value=value)

def expr(text,env,functions=None):
    text=unicodedata.normalize('NFKC',text).replace('∨','|').replace('∧','&').replace('×','*').replace('÷','/').replace('－','-').replace('＋','+')
    text=re.sub(r'\b[01]{8}\b',lambda m:'0b'+m[0],text)
    text=re.sub(r'\bXOR\b','^',text);text=re.sub(r'\bOR\b','|',text)
    ops={ast.Add:operator.add,ast.Sub:operator.sub,ast.Mult:operator.mul,ast.Div:operator.truediv,ast.BitOr:operator.or_,ast.BitAnd:operator.and_,ast.BitXor:operator.xor,ast.LShift:operator.lshift,ast.RShift:operator.rshift}
    def visit(n):
        if isinstance(n,ast.Constant) and type(n.value) in (int,float):return n.value
        if isinstance(n,ast.Name):return env[n.id]
        if isinstance(n,ast.BinOp) and type(n.op) in ops:return ops[type(n.op)](visit(n.left),visit(n.right))
        if isinstance(n,ast.Call) and isinstance(n.func,ast.Name) and n.func.id in (functions or {}):return functions[n.func.id](*(visit(a) for a in n.args))
        raise ValueError(ast.dump(n))
    return visit(ast.parse(text.strip(),mode='eval').body)

# 数値問題は原本の条件を独立に計算し、実際の選択肢へ照合する。
for y,n,v in [(2022,7,sum([5,4,3,2,1])%13),(2022,8,sum(range(1,6))),(2022,11,int(math.log2(128))+2),
              (2022,13,next(k for k in range(20) if 20*.7/(20-k)>.9)),(2022,26,12e6*8/(1.5e6*.5)),
              (2022,58,30-30*.25*3-1),(2022,59,(30+18)/(1-.6)),(2023,1,12/16),
              (2019,25,math.floor(512e6/11000/60)),(2019,32,2**(32-23)-2)]:result(qget(y,'A',n),v)
q=qget(2022,'A',1)
unique(q,[i for i,c in enumerate(q['choices']) if all((expr(c,{'n':n})&255)==((-n)&255) for n in range(1,128))],127)
q=qget(2022,'A',3)
valid=[(Q,R) for Q in [False,True] for R in [False,True] if ((not True) or Q) and ((not Q) or R)]
assert valid==[(True,True)]
unique(q,[i for i,c in enumerate(q['choices']) if 'Q：真' in c and 'R：真' in c],4)
alloc=[0,0,0]
for size in [90,30,40,40,70,30]:alloc[min(range(3),key=lambda i:(alloc[i],i))]+=size
order='，'.join('ABC'[i] for i in sorted(range(3),key=lambda i:alloc[i],reverse=True))
q=qget(2022,'A',17);unique(q,[i for i,c in enumerate(q['choices']) if c.replace(' ','')==order],6,allocation=alloc)

q=qget(2022,'B',1);x,y,z=1,2,3;x=y;y=z;z=x
unique(q,[i for i,c in enumerate(q['choices']) if c.replace(' ','')==f'{y},{z}'],1)
q=qget(2022,'B',2);passed=[]
for i,c in enumerate(q['choices']):
    conditions=[s.split('：')[1] for s in c.split('，')]
    def choose(v):
        for condition in conditions:
            divisors=[int(n) for n in re.findall(r'\d+',condition)]
            if all(v%d==0 for d in divisors):return set(divisors)
        return set()
    if all(choose(n)=={d for d in (3,5) if n%d==0} for n in range(-300,301)):passed.append(i)
unique(q,passed,601)
q=qget(2022,'B',3);out=[]
for n in [3,2,1,6,5,4]:out.append((out[-1] if out else 0)+n)
result(q,out[4])
q=qget(2022,'B',4);passed=[]
for i,c in enumerate(q['choices']):
    repeat='a：while' in c;greater='b：x ＞ y' in c
    def gcd(a,b):
        for _ in range(250):
            if a==b:return a
            if (a>b)==greater:a-=b
            else:b-=a
            if min(a,b)<=0:return None
            if not repeat:return a
        return None
    if all(gcd(a,b)==math.gcd(a,b) for a in range(1,41) for b in range(1,41)):passed.append(i)
unique(q,passed,1600)
q=qget(2022,'B',5);pairs=[(3,4),(1,2),(2,2),(5,12)]
unique(q,[i for i,c in enumerate(q['choices']) if all(math.isclose(expr(c,{'x':x,'y':y},{'pow':pow}),math.hypot(x,y)) for x,y in pairs)],len(pairs))
q=qget(2022,'B',6);passed=[]
for i,c in enumerate(q['choices']):
    def rev(b):
        env={'r':0,'rbyte':b}
        for _ in range(8):
            for line in c.splitlines():
                target,expression=line.split('←');env[target.strip()]=expr(expression,env)&255
        return env['r']
    if all(rev(n)==int(f'{n:08b}'[::-1],2) for n in range(256)):passed.append(i)
unique(q,passed,256)
q=qget(2022,'B',7);passed=[]
for i,c in enumerate(q['choices']):
    def factorial(n,depth=0):
        if depth>25:raise RecursionError
        if n==0:return 1
        return expr(c,{'n':n},{'factorial':lambda v:factorial(v,depth+1)})
    try:
        if all(factorial(n)==math.factorial(n) for n in range(9)):passed.append(i)
    except RecursionError:pass
unique(q,passed,9)
q=qget(2022,'B',8);heap=[];seq=0
for method,args in re.findall(r'prioQueue\.(enqueue|dequeue)\((.*?)\)',q['code'].split('while')[0]):
    if method=='enqueue':
        label,priority=re.fullmatch(r'"([A-D])",\s*(\d)',args).groups();heapq.heappush(heap,(int(priority),seq,label));seq+=1
    else:heapq.heappop(heap)
output=[heapq.heappop(heap)[2] for _ in range(len(heap))]
unique(q,[i for i,c in enumerate(q['choices']) if re.findall(r'[A-D]',c)==output],1,output=output)
q=qget(2022,'B',9);tree=[None,[2,3],[4,5],[6,7],[8,9],[10,11],[12,13],[14],[],[],[],[],[],[],[]]
def inorder(n):
    children=tree[n]
    return (inorder(children[0]) if children else [])+[n]+(inorder(children[1]) if len(children)==2 else [])
output=inorder(1)
unique(q,[i for i,c in enumerate(q['choices']) if list(map(int,re.findall(r'\d+',c)))==output],14,output=output)
q=qget(2022,'B',10);passed=[]
for i,c in enumerate(q['choices']):
    def delete(n,pos):
        nodes=[{'v':j,'next':None} for j in range(n)]
        for a,b in zip(nodes,nodes[1:]):a['next']=b
        head=nodes[0]
        if pos==1:head=head['next']
        else:
            prev=nodes[pos-2];target=c.split('.')[0];v={'listHead':head,'prev':prev}[target]
            for _ in c.split('.')[1:]:v=v['next'] if v else None
            prev['next']=v
        result=[]
        while head and len(result)<=n:result.append(head['v']);head=head['next']
        return result
    if all(delete(n,p)==[j for j in range(n) if j!=p-1] for n in range(1,9) for p in range(1,n+1)):passed.append(i)
unique(q,passed,36)
q=qget(2022,'B',11);passed=[]
for i,c in enumerate(q['choices']):
    data=list(map(int,re.findall(r'\d+',c)));bins=[None]*len(data)
    for v in data:
        if not 1<=v<=len(data):break
        bins[v-1]=v
    if None not in bins and bins==sorted(bins):passed.append(i)
unique(q,passed,4)
q=qget(2022,'B',12);passed=[]
inputs=[''.join(a) for length in range(1,5) for a in itertools.product('ab',repeat=length)]
for i,c in enumerate(q['choices']):
    def sim(a,b):
        if len(a)!=len(b):return -1
        count=0
        for index in range(1,len(a)+1):
            other=count if '[cnt]' in c else index
            if other<1 or other>len(b):return None
            match=a[index-1]==b[other-1]
            if '≠' in c:match=not match
            count+=match
        return count/len(a)
    if all(sim(a,b)==(-1 if len(a)!=len(b) else sum(x==y for x,y in zip(a,b))/len(a)) for a in inputs for b in inputs):passed.append(i)
unique(q,passed,len(inputs)**2)

# SQLは実際に表示する選択肢をSQLiteで実行し、独立に求めた集計と比較する。
q=qget(2019,'A',27)
rows=[('A','数学',1,'a',10),('A','数学',2,'b',20),('A','英語',1,'a',50),('A','英語',2,'b',80),
      ('B','数学',3,'c',30),('B','数学',4,'d',90),('B','英語',3,'c',20),('B','英語',4,'d',40)]
conn=sqlite3.connect(':memory:');conn.execute('CREATE TABLE 中間テスト (クラス名, 教科名, 学生番号, 名前, 点数)')
conn.executemany('INSERT INTO 中間テスト VALUES (?,?,?,?,?)',rows)
keys=sorted({(r[0],r[1]) for r in rows})
expected=[(a,b,sum(r[4] for r in rows if r[:2]==(a,b))/sum(r[:2]==(a,b) for r in rows)) for a,b in keys]
passed=[]
for i,c in enumerate(q['choices']):
    try:
        actual=conn.execute(q['code'].split('\n\n')[-1].replace('【a】',c)).fetchall()
        if actual==expected:passed.append(i)
    except sqlite3.Error:pass
unique(q,passed,len(rows),result=[list(row) for row in expected]);conn.close()

q=qget(2022,'B',17)
owners={'OS':'B','XSS':'C','DBMS':'B'}  # PaaS基盤、契約で委託したWebアプリケーションの責任分界。
unique(q,[i for i,c in enumerate(q['choices']) if re.findall(r'([ABC])社',c)==list(owners.values())],3)
q=qget(2022,'B',18)
new_risks=['一','五']  # 新規VPN負荷、私有PCから社内への感染経路。
unique(q,[i for i,c in enumerate(q['choices']) if re.findall(r'[一二三四五]',c)==new_risks],5)

# コード・表を含むレビュー時の内容に結び付ける。再実行でレビューを昇格しない。
for id,check in report.items():
    q=by_id[id]
    values=[q['prompt'],q['choices'],q['answer'],q.get('code'),q.get('table'),q.get('trace'),q['explanation']]
    check['contentSha256']=hashlib.sha256(json.dumps(values,ensure_ascii=False,separators=(',',':')).encode('utf-8')).hexdigest()

text=json.dumps(report,ensure_ascii=False,indent=2)+'\n';dest=ROOT/'docs/expansion-computations.json'
if '--write-report' in sys.argv:dest.write_text(text,encoding='utf-8')
else:assert json.loads(dest.read_text(encoding='utf-8'))==report,'独立計算記録と異なります。再照合が必要です。'
print(f'OK: {len(report)} independent question checks; {sum(r["cases"] for r in report.values())} cases; verification status unchanged')
