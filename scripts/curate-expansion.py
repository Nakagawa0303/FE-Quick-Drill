"""原本抽出と手動編集ノートからpending候補を作成。実バンクは変更しない。"""
from pathlib import Path
import json
import re
import unicodedata

ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'tmp/expansion'
LABELS=list('アイウエオカキクケコサシスセソタチツテト')

def norm(s):return unicodedata.normalize('NFKC',s)
def clean(s):
    s=re.sub(r'=== PAGE \d+ ===|－\s*\d+\s*－','',s)
    return re.sub(r'^\s*(ぜい|たい)\s*$','',s,flags=re.M)
def compact(s):return ''.join(x.strip() for x in s.splitlines() if x.strip())
def sections(text):
    matches=list(re.finditer(r'^問\s*([０-９0-9]+)\s+',text,re.M));result={}
    for i,m in enumerate(matches):
        raw=text[m.end():matches[i+1].start() if i+1<len(matches) else len(text)]
        raw=raw.split('〔 メ モ 用 紙 〕')[0].split('試験問題に記載されている会社名')[0]
        result[int(norm(m[1]))]=clean(raw).strip()
    return result
def parts(raw):
    bits=re.split(r'(?:^|\n| {2,})[ \t]*([アイウエオカキクケコ])\s+',raw,flags=re.M)
    return compact(bits[0]),[compact(bits[i]) for i in range(2,len(bits),2)]
def sources():
    return json.loads((OUT/'manifest.json').read_text(encoding='utf-8'))+json.loads((ROOT/'tmp/pdfs/manifest.json').read_text(encoding='utf-8'))
def get_source(year,subject,kind):
    return next(s for s in sources() if s['year']==year and (f'_kamoku_{subject.lower()}_' in s['local'] or (year==2019 and subject=='A' and '_fe_am_' in s['local'])) and s['local'].endswith(f'_{kind}.pdf'))
def get_sections(year,subject):
    s=get_source(year,subject,'qs');base=OUT if (OUT/s['local']).exists() else ROOT/'tmp/pdfs'
    return sections((base/s['local']).with_suffix('.txt').read_text(encoding='utf-8'))
def source_answers(year,subject):
    s=get_source(year,subject,'ans');base=OUT if (OUT/s['local']).exists() else ROOT/'tmp/pdfs'
    text=(base/s['local']).with_suffix('.txt').read_text(encoding='utf-8')
    return {int(norm(n)):l for n,l in re.findall(r'問\s*([０-９0-9]+)\s+([アイウエオカキクケコ])',text)}
def run():
    notes=json.loads((ROOT/'docs/expansion-notes.json').read_text(encoding='utf-8'))
    result=[]
    for note in notes:
        y,s,n=note['year'],note['subject'],note['number'];raw=get_sections(y,s).get(n,'');prompt,choices=parts(raw)
        src=get_source(y,s,'qs');ans=get_source(y,s,'ans');label=source_answers(y,s)[n]
        session='サンプル問題セット' if y==2022 else '春期・午前（旧制度・科目A相当）' if y==2019 else '公開問題'
        tag='SAMPLESET' if y==2022 else 'SPRING-AM' if y==2019 else 'KOUKAI'
        q=dict(id=f'IPA-FE-{y}-{tag}-{s}-{n:03}',subject=s,field=note['field'],prompt=prompt,choices=choices,
               choiceLabels=LABELS[:len(choices)],answer=LABELS.index(label),
               explanation=dict(brief=note['brief'],detail=note['detail'],author='Codex（AIによる独自解説。IPA公式解説ではない）'),
               source=dict(type='ipa',title=f'基本情報技術者試験 科目{s} {session}',year=y,session=session,exam='FE',section=f'科目{s}',questionNumber=n,
                           url=src['url'],answerUrl=ans['url'],termsUrl='https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html' if y==2022 else 'https://www.ipa.go.jp/shiken/faq.html',accessedAt='2026-11-13',modified=True,
                           modificationNote=note.get('modification','PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。'),answerKey=dict(label=label,index=LABELS.index(label)),pageUrl=src['pageUrl'],questionSha256=src['sha256'],answerSha256=ans['sha256']),
               verification=dict(status='pending'))
        for key in ['prompt','choices','code','table','trace','subfield']:
            if key in note:q[key]=note[key]
        if y==2019:
            q['source']['title']='平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）'
            q['source']['originalSection']='午前'
            q['source']['originalSession']='春期'
        q['choiceLabels']=LABELS[:len(q['choices'])]
        assert q['answer']<len(q['choices']),q['id']
        result.append(q)
    (OUT/'candidate.json').write_text(json.dumps(dict(version=1,questions=result),ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(f'pending candidates: {len(result)}')
if __name__=='__main__':run()
