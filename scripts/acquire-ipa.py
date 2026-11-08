"""公式ページからFE問題/解答PDFを取得し、原本と抽出テキストをQA用に保存する。"""
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urljoin
from html.parser import HTMLParser
import hashlib
import json
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'tmp/python'))
import pymupdf

ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / 'tmp/pdfs'
DEST.mkdir(parents=True, exist_ok=True)

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.links += [v for k, v in attrs if k == 'href']

manifest = []
for year in (2026, 2025, 2024):
    page = f'https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/{year}r{year-2018:02}.html'
    parser = Links()
    parser.feed(urlopen(page, timeout=25).read().decode('utf-8'))
    for href in parser.links:
        if '_fe_kamoku_' not in href or not href.endswith('.pdf'):
            continue
        url = urljoin(page, href)
        target = DEST / url.rsplit('/', 1)[1]
        data = urlopen(url, timeout=25).read()
        target.write_bytes(data)
        pdf = pymupdf.open(target)
        pages = [p.get_text(sort=True) for p in pdf]
        target.with_suffix('.txt').write_text('\n\n'.join(f'=== PAGE {i+1} ===\n{s}' for i, s in enumerate(pages)), encoding='utf-8')
        manifest.append(dict(year=year, pageUrl=page, url=url, sha256=hashlib.sha256(data).hexdigest(), pages=len(pdf), local=target.name))
        print(target.name, len(pdf), flush=True)
(DEST/'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
