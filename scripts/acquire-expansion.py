"""公式の拡充候補資料をtmpへ取得。問題データ・verifiedは変更しない。"""
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urljoin
from html.parser import HTMLParser
import hashlib
import json
import sys

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tmp/python'))
import pymupdf
OUT=ROOT/'tmp/expansion'
OUT.mkdir(parents=True,exist_ok=True)
class Links(HTMLParser):
    def __init__(self):super().__init__();self.links=[]
    def handle_starttag(self,tag,attrs):
        if tag=='a':self.links += [v for k,v in attrs if k=='href']

pages=[(2023,'公開問題','https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html'),
       (2022,'サンプル問題セット','https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html'),
       (2019,'春期・午前（旧制度）','https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html')]
manifest=[]
for year,session,page in pages:
    parser=Links();parser.feed(urlopen(page,timeout=30).read().decode('utf-8'))
    for href in parser.links:
        if not href.endswith('.pdf') or not ('_fe_kamoku_' in href or '/fe_kamoku_' in href or '2019h31h_fe_am_' in href):continue
        url=urljoin(page,href);name=f'{year}-'+url.rsplit('/',1)[1];target=OUT/name
        raw=urlopen(url,timeout=30).read();target.write_bytes(raw)
        pdf=pymupdf.open(target)
        target.with_suffix('.txt').write_text('\n\n'.join(f'=== PAGE {i+1} ===\n{p.get_text(sort=True)}' for i,p in enumerate(pdf)),encoding='utf-8')
        manifest.append(dict(year=year,session=session,pageUrl=page,url=url,local=name,sha256=hashlib.sha256(raw).hexdigest(),pages=len(pdf)))
        print(name,len(pdf),flush=True)
(OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
