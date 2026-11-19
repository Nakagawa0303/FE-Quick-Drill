"""承認済み6問の転記。確認記録は別工程で docs/collection-stage2.md に記載。"""
import copy
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
bank_path = ROOT / 'data/additional-questions.json'
payload = json.loads(bank_path.read_text(encoding='utf-8'))

def question_text(year, subject, number):
    text = (ROOT / f'tmp/pdfs/{year}r{year-2018:02}_fe_kamoku_{subject.lower()}_qs.txt').read_text(encoding='utf-8')
    text = re.sub(r'=== PAGE \d+ ===|－\s*\d+\s*－', '', text)
    digits = str(number).translate(str.maketrans('0123456789','０１２３４５６７８９'))
    pattern = rf'^問[ 　]*(?:{number}|{digits})\s'
    start = re.search(pattern, text, re.M).end()
    tail = text[start:]
    end = re.search(r'^問\d+\s|^〔 メ モ',tail,re.M)
    return tail[:end.start() if end else len(tail)].strip()

def compact(text):
    # 原本の組版上の改行・字下げだけを除去する。
    return re.sub(r'\s*\n\s*','',text).strip()

specs = [
    (2024,16,'経営戦略マネジメント',3,'コアコンピタンスは競争優位の源泉となる中核的な能力。','他社が容易にまねできない技術・組織能力などが競争優位を生む。アは経営理念、イは目標、ウは外部環境の機会と脅威であり、中核能力そのものではない。'),
    (2024,17,'経営戦略マネジメント',0,'ブルーオーシャンは競争が存在しない未知の市場。','既存市場の競争から離れ、新たな価値によって未開拓の需要を創造する考え方。イは競争の進んだ既存市場であり、ウの事業育成期間やエの市場化への障壁を指す語ではない。'),
    (2024,18,'ビジネスインダストリ',3,'HRテックは人事領域へICTを活用するソリューション。','Human ResourcesとTechnologyを組み合わせた用語。採用・育成・評価・配属などにAIやデータ分析を利用する。アは家庭のエネルギー管理、イは破壊的な技術・ビジネスモデル、ウは金融サービスの情報技術である。'),
    (2024,20,'法務',0,'産業財産権は特許権・実用新案権・意匠権・商標権の四つ。','発明を保護する特許権、物品の形状等の考案を保護する実用新案権、デザインを保護する意匠権、商品・サービスを識別する標識を保護する商標権から成る。イ・ウ・エには産業財産権に含まれない著作権が入り、四つのうち一つが欠けている。'),
    (2026,20,'法務',1,'著作権を譲渡しても著作者人格権は譲渡されない。','契約で著作権はA社へ移っているが、著作者人格権はB社に残る。作成者としてのB社名をA社名へ変更するイは氏名表示権に関わるためできない。アの開発先への電子データ提供、ウの社内配布、エのバックアップ複製は、設問の条件では譲渡された著作権によって可能である。'),
]
additions = []
for year, number, subfield, answer, brief, detail in specs:
    q = copy.deepcopy(next(q for q in payload['questions'] if q['subject']=='A' and q['source']['year']==year))
    raw = question_text(year,'A',number)
    parts = re.split(r'^\s*([アイウエ])\s+',raw,flags=re.M)
    q.update(id=f'IPA-FE-{year}-KOUKAI-A-{number:03}',field='ストラテジ',subfield=subfield,prompt=compact(parts[0]),choices=[compact(parts[i]) for i in range(2,len(parts),2)],answer=answer)
    q['explanation']={'brief':brief,'detail':detail,'author':'Codex（AIによる独自解説。IPA公式解説ではない）'}
    for key in ['table','code','trace']:
        q.pop(key,None)
    additions.append(q)

q = copy.deepcopy(next(q for q in payload['questions'] if q['subject']=='B' and q['source']['year']==2026))
raw = question_text(2026,'B',6)
intro = raw[:raw.index('表1 図1')]
question = '設問　表1中の運用のうち，図1のルール3に違反しているものの項番だけを全て挙げた組合せを，解答群の中から選べ。'
# 図1はテキストの規則一覧。原本の各番号・箇条書きを保って本文へ配置する。
intro = compact(intro)
intro = re.sub(r'([1-5]\. )',r'\n\n\1',intro).replace('・','\n・').replace('図1 各部署','\n図1 各部署')
intro = intro.replace('ログの取得次の','ログの取得\n次の').replace('ログの項目少なくとも','ログの項目\n少なくとも').replace('ルール営業部','ルール\n\n営業部')
q.update(id='IPA-FE-2026-KOUKAI-B-006',field='情報セキュリティ',prompt=intro+'\n\n'+question,choices=['(一)，(二)','(一)，(二)，(三)','(一)，(二)，(四)','(一)，(三)','(一)，(三)，(四)','(一)，(四)','(二)，(三)','(二)，(三)，(四)','(二)，(四)','(三)，(四)'],choiceLabels=list('アイウエオカキクケコ'),answer=8)
q['table']={'headers':['項番','現在の運用（表1：図1のルールに違反している現在の運用）'],'rows':[
    ['(一)','Zサービスのログは，空き容量が一定値以下になった場合，古いログから上書きされる。'],
    ['(二)','Zサービスの運用は，営業部のC主任とD主任の2名で担当していたが，D主任が先月退職したので，現在はC主任だけである。'],
    ['(三)','Zサービスのログの日時は，UTCで記録されている。'],
    ['(四)','Zサービスのログは，毎月末に全てエクスポートし，Yサーバに保管している。'],
]}
q['explanation']={'brief':'ルール3に違反するのは、運用担当者が一人の(二)と、一般利用者も編集できるYサーバへ保存する(四)。','detail':'図1のルール3は、運用担当者を複数名にし、ログを運用担当者だけがアクセスできる場所へ保管することを求める。(二)はC主任だけなので違反する。(四)のYサーバは営業部の各従業員が全ファイルを編集できるため違反する。(一)は主にルール4の保存期間、(三)はルール2の日本標準時の条件の問題であり、ルール3の違反を選ぶ設問には含めない。したがって(二)，(四)だけを挙げたケが正答である。','author':'Codex（AIによる独自解説。IPA公式解説ではない）'}
for key in ['code','trace']:
    q.pop(key,None)
additions.append(q)

for q in additions:
    s=q['source'];number=int(q['id'].split('-')[-1]);s.update(questionNumber=number,accessedAt='2026-11-13',answerKey={'label':q['choiceLabels'][q['answer']],'index':q['answer']},modified=True,modificationNote='原本の改行・空白を整理。科目Bの図1の規則を本文、表1をHTML表へ再配置。設問の内容・選択肢順・正答は維持。' if q['subject']=='B' else '原本の組版上の改行・空白を整理。内容・選択肢順・正答は維持。')
    # 転記工程では未検証。実際の別工程の照合後にのみレビュー記録を付与する。
    q['verification']={'status':'pending'}
    q['source'].pop('originalSha256',None)
    assert not any(old['id']==q['id'] for old in payload['questions'])

out=ROOT/'tmp/pdfs/stage2-candidate.json'
out.write_text(json.dumps({'version':1,'questions':additions},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(out)
