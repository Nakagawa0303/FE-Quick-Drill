// data/additional-questions.json から生成。直接編集せず questions:build を実行してください。
export const additionalQuestions = [
  {
    "id": "IPA-FE-2026-KOUKAI-A-001",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "入力されたビットに対して出力されるビットが0か1のいずれかである確率を遷移確率という。遷移確率を表にしたとき，a，b，c，dの関係はどれか。",
    "choices": [
      "a ＋ b ＋ c ＋ d ＝ 1",
      "a ＋ b ＝ 1， c ＋ d ＝ 1",
      "a ＋ c ＝ 1， b ＋ d ＝ 1",
      "a ＋ d ＝ 1， b ＋ c ＝ 1"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "入力が固定された各行の出力確率の和が1になる。",
      "detail": "入力0に対する出力0・1の確率はaとbであり、a+b=1。入力1についてもc+d=1。異なる入力条件の確率を列方向や斜めに足しても1になるとは限らない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問1; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "table": {
      "headers": [
        "入力＼出力",
        "0",
        "1"
      ],
      "rows": [
        [
          "0",
          "a",
          "b"
        ],
        [
          "1",
          "c",
          "d"
        ]
      ]
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-002",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "クイックソートの処理方法を説明したものはどれか。",
    "choices": [
      "既に整列済みのデータ列の正しい位置に，データを追加する操作を繰り返していく方法である。",
      "データ中の最小値を求め，次にそれを除いた部分の中から最小値を求める。この操作を繰り返していく方法である。",
      "適当な基準値を選び，それよりも小さな値のグループと大きな値のグループにデータを分割する。同様にして，グループの中で基準値を選び，それぞれのグループを分割する。この操作を繰り返していく方法である。",
      "隣り合ったデータの比較と入替えを繰り返すことによって，小さな値のデータを次第に端の方に移していく方法である。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "基準値で大小のグループに分割する処理を繰り返すのがクイックソート。",
      "detail": "ピボットを基準にデータを分割し、分割した部分にも同じ処理を適用する。アは挿入ソート、イは選択ソート、エはバブルソートの説明。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問2; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "アルゴリズムとプログラミング"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-003",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "プロセッサの一つであるGPU の特徴として，適切なものはどれか。",
    "choices": [
      "OS 及び他のハードウェアから独立して機能し，暗号キーなどの情報を安全に管理する。",
      "並列に動作する多数の浮動小数点演算ユニットによって，高速な3D 演算ができる。",
      "目的に応じて半導体デバイス内部の論理回路を再構成できる。",
      "量子ビットによって0 と1 を重ね合わせた状態を計算に使うことができる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "GPUは多数の演算ユニットによる並列処理に適している。",
      "detail": "画像の多数の画素や頂点などに類似した演算を並列に行えるため、3D処理を高速化できる。アはTPMなどのセキュリティチップ、ウはFPGA、エは量子プロセッサの特徴。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 3,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問3; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "コンピュータ構成要素"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-004",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "クラウドコンピューティングのサービスモデルとしてのPaaS の説明はどれか。",
    "choices": [
      "OS やアプリケーションを含む任意のソフトウェアを実行可能にするリソースが，利用者に提供される。OS などのプラットフォームへの限定的な設定や制御を行うことができる。",
      "アプリケーションの開発や運用に必要となるミドルウェアなどが利用者に提供されるので，これらを利用して，アプリケーションを開発して運用することができる。利用者は，プラットフォームを直接変更することはできない。",
      "利用者は，ハードウェア，OS などのプラットフォームとアプリケーションを自ら準備して，それらの運用を依頼する。利用者は，プラットフォームの構成を決めることができるなど，環境構築の自由度が高い。",
      "利用者は，用意されたアプリケーションをそのまま又はカスタマイズして利用するが，OS などのプラットフォームからアプリケーションまで全てを自ら準備する必要はない。利用者は，プラットフォームを直接変更することはできない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "PaaSはアプリケーションを開発・運用するための基盤を提供する。",
      "detail": "OSやミドルウェアなどの実行基盤をサービス側が管理し、利用者はその上でアプリケーションを開発する。アはIaaS、エはSaaSに対応する説明。ウのような利用者自身によるハードウェア等の準備はPaaSではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 4,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問4; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム構成要素"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-005",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "仮想記憶方式のコンピュータシステムにおいて，処理の多重度を増やしたところ，ページイン，ページアウトが多発して，システムの応答速度が急激に遅くなった。このような現象を何というか。",
    "choices": [
      "オーバレイ",
      "スラッシング",
      "メモリコンパクション",
      "ロールアウト"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "ページの入替えが多発して性能が急落する現象はスラッシング。",
      "detail": "実行する処理が多すぎて必要なページを主記憶に保持できなくなると、ページイン・ページアウトが増え、処理時間の多くをページ交換が占める。オーバレイやメモリコンパクションとは異なる。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 5,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問5; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-007",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "次のSQL文によって定義され，値が格納されている“商品”表に対して，制約違反で実行エラーとなるSQL文はどれか。",
    "choices": [
      "DELETE FROM 商品 WHERE 仕入先コード IS NULL",
      "INSERT INTO 商品 VALUES ('A555', '空気清浄機', 'S005', 60000, 50)",
      "UPDATE 商品 SET 商品コード = 'A666' WHERE 商品コード = 'A444'",
      "UPDATE 商品 SET 商品コード = 'A777' WHERE 在庫数 >= 20"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "複数行の商品コードが同じA777になり、主キー制約に違反する。",
      "detail": "在庫数が20以上なのはA222とA444の2行。両方の商品コードをA777へ更新すると重複する。DELETEは主キーの重複を作らず、A555の挿入、A444からA666への単一行更新も既存キーと衝突しない。NULLは非主キー列に許されている。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 7,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問7; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "CREATE TABLE 商品\n(商品コード CHAR(4) PRIMARY KEY, 商品名 VARCHAR(21),\n 仕入先コード CHAR(4), 仕入単価 INT, 在庫数 INT)",
    "table": {
      "headers": [
        "商品コード",
        "商品名",
        "仕入先コード",
        "仕入単価",
        "在庫数"
      ],
      "rows": [
        [
          "A111",
          "テレビ",
          "S001",
          "75,000",
          0
        ],
        [
          "A222",
          "デジタルカメラ",
          "S002",
          "50,000",
          50
        ],
        [
          "A333",
          "DVDプレーヤ",
          "NULL",
          "NULL",
          "NULL"
        ],
        [
          "A444",
          "洗濯機",
          "S004",
          "45,000",
          20
        ]
      ]
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-008",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "無線LAN では，複数の端末から送信された同じ周波数の電波が衝突した場合，電波が干渉するのでそれらを受信すると信号を復調できないことがある。この問題を回避するためのものはどれか。",
    "choices": [
      "CSMA/CA",
      "SSID",
      "キャリアアグリゲーション",
      "テザリング"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "無線LANの衝突を回避する仕組みはCSMA/CA。",
      "detail": "送信前の媒体確認や待機時間の制御によって衝突の可能性を減らす。SSIDはネットワーク識別子、キャリアアグリゲーションは複数の周波数帯等の利用、テザリングは端末の通信回線共有である。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 8,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問8; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-009",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "2 要素認証に該当する組みはどれか。",
    "choices": [
      "クライアント証明書，ハードウェアトークン",
      "静脈認証，指紋認証",
      "パスワード認証，静脈認証",
      "パスワード認証，秘密の質問の答え"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "知識情報であるパスワードと、生体情報である静脈の組合せ。",
      "detail": "2要素認証は知識・所持・生体など異なる種類の要素を組み合わせる。証明書とハードウェアトークンは所持要素、静脈と指紋は生体要素、パスワードと秘密の質問は知識要素同士の組合せ。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 9,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問9; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-010",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "情報セキュリティに関する専門組織の説明のうち，CSIRT の説明として，最も適切なものはどれか。",
    "choices": [
      "自社が顧客に提供する製品又はサービスの脆弱性に起因するリスクに対応する組織",
      "セキュリティインシデント検知のために，システム監視，ログ分析などのセキュリティ運用を担う組織",
      "発生したセキュリティインシデントに対し，インシデント対応を行う組織",
      "標的型サイバー攻撃特別相談窓口をもち，相談をもち込んだ組織の被害の低減と攻撃の連鎖の遮断を支援する組織"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "CSIRTは発生したセキュリティインシデントに対応する組織。",
      "detail": "CSIRTはインシデントの分析・対応・関係者との調整等を行う。アは自社製品等の脆弱性への対応、イはセキュリティ監視運用の説明。エは標的型攻撃の特別な相談・支援窓口の説明であり、CSIRT一般の役割を直接述べるのはウ。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 10,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問10; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-011",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "あるシステムにおいて，“プログラムの記述方法が統一されていないので保守がしづらい”という問題が発生している。今後の新規開発プロジェクトにおけるこの問題の低減策として，最も適切なものはどれか。",
    "choices": [
      "コーディング規約を見直し，教育する。",
      "セキュアプログラミングを採用する。",
      "単体テストでの命令網羅度を上げる。",
      "プロジェクト管理レビューに全プログラマーが参加する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "記述の統一にはコーディング規約の整備と教育が直接的。",
      "detail": "書き方のばらつきによる保守性低下に対し、命名・書式などの規約を見直し共有する。セキュアプログラミングは脆弱性対策、命令網羅はテストの実行範囲、プロジェクト管理レビューは進捗等の管理であり、記述統一への直接的な対策ではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 11,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問11; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム開発技術"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-012",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "バーンダウンチャートの使い方として，適切なものはどれか。",
    "choices": [
      "縦軸を完成した成果物の総量，横軸を時間とし，プロジェクトが進むに従って完成した成果物の総量が増加する様子を確認する。",
      "縦軸を残課題の総数，横軸を時間とし，プロジェクトが進むに従って残課題の総量が増減する様子を確認する。",
      "縦軸を残作業の量，横軸を時間とし，プロジェクトが進むに従って残作業の量が減少する様子を確認する。",
      "縦軸を延べ工数，横軸を時間とし，プロジェクトが進むに従って延べ工数が増加する様子を確認する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "バーンダウンチャートは残作業量の減少を見る。",
      "detail": "縦軸に残作業量、横軸に時間をとり、完了へ向けた推移を確認する。完成した成果物量の増加を表すものはバーンアップチャート。残課題数や延べ工数の推移とは区別する。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 12,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問12; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "プロジェクトマネジメント"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-013",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "あるシステム開発プロジェクトの進捗が遅延したので，クリティカルパス上の作業への投入工数を増やすことによって遅延の解消を図った。このとき適用した，所要期間を短縮するための手法を何と呼ぶか。",
    "choices": [
      "クラッシング",
      "コーチング",
      "ファストトラッキング",
      "メンタリング"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "クリティカルパス上への資源追加による期間短縮はクラッシング。",
      "detail": "人員などの資源を追加し、作業期間の短縮を図る。ファストトラッキングは本来順次行う作業を重ねて並行実施する方法。コーチングとメンタリングは人材支援の手法。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 13,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問13; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "プロジェクトマネジメント"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-014",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "A 社は，自社のデータセンタでアプリケーションシステムを運用し，顧客にサービスを提供している。現在，アプリケーションシステムの実行環境をクラウドサービスに移行して，サービス可用性を向上させることを検討している。次の条件のとき，サービス可用性は移行後に何パーセントポイント向上するか。ここで，サービス可用性（％）は小数第3 位を切り捨てるものとする。\n\n〔条件〕\n・サービス提供時間は，移行前も移行後も同じで，計画された保守の時間を除き，年間5,000 時間である。\n・移行前は，サービス提供時間内の停止時間が，年間100 時間である。\n・移行後は，サービス提供時間内の停止時間が，年間30 分となる。",
    "choices": [
      "0.01",
      "0.19",
      "1.40",
      "1.99"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "98.00%から99.99%となるので、1.99ポイント向上する。",
      "detail": "移行前は(5000-100)/5000×100=98.00%。移行後の停止30分は0.5時間なので、(5000-0.5)/5000×100=99.99%。差は99.99-98.00=1.99パーセントポイント。相対的な増加率と混同しない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 14,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問14; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "サービスマネジメント"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-015",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "内部監査部門が，情報システム部門に対するシステム監査を経営者から指示されたとき，システム監査人の行為として，適切なものはどれか。",
    "choices": [
      "監査報告書に記載した改善提案に対して改善計画を策定した上で，実行する。",
      "基幹システムを開発し，保守を行っている外部事業者に，当該システム監査を委託する。",
      "経営者がどのようなニーズを有しているかを十分に把握した上で，システム監査の目的と対象範囲を決定する。",
      "情報システム部門の在籍者を監査メンバとして選定する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "経営者のニーズを把握して監査目的と対象範囲を決める。",
      "detail": "監査では依頼者のニーズを把握して適切な目的と範囲を定める。改善の実行は被監査側の責任。開発・保守事業者や監査対象部門の在籍者にそのまま監査させると、独立性・客観性の確保が問題になる。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 15,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問15; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム監査"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-016",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "小売事業者が，オムニチャネル戦略を実現するためのIT 活用事例はどれか。",
    "choices": [
      "実店舗，オンライン店舗，コールセンタなど複数の顧客接点で，顧客情報や在庫情報などを一元的に管理・共有して接客することによって，顧客の利便性を高める。",
      "複数店舗からネットワークを経由して，受発注，出荷，請求，支払などの取引情報を電子的に交換することによって，卸売業者とメーカとの間の受発注業務の効率を高める。",
      "複数店舗に設置した監視カメラの画像データを本部に集め，本部が各店舗の状況をリアルタイムに把握することによって，店舗運営業務の効率を高める。",
      "複数店舗のPOS データを本部に集め，本部が日次で売れ筋商品の抽出，複数の商品の併売率の分析を行うことによって，商品計画や棚割計画を最適化する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "複数の顧客接点で情報を一元管理し、購買体験をつなぐ。",
      "detail": "オムニチャネルは実店舗・オンライン・電話等の接点を統合し、顧客が一貫したサービスを受けられるようにする。取引情報交換、監視カメラの集中管理、POS分析だけでは顧客接点の統合という条件を満たさない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 16,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問16; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-017",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "サービスA～Dの中で会員のリテンション率が最も高いものはどれか。\nなお，リテンションの対象は前月末から当月末まで継続して在籍した会員とし，当月新規会員は月末までの退会はないものとする。\n単位：人",
    "choices": [
      "サービスA",
      "サービスB",
      "サービスC",
      "サービスD"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "継続会員数÷前月末会員数が最大なのはサービスBの60%。",
      "detail": "継続会員数は当月末会員数から当月新規会員数を引く。Aは300/1000=30%、Bは600/1000=60%、Cは600/1500=40%、Dは800/1500≒53.33%。分母を当月末会員数にしない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 17,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問17; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "table": {
      "headers": [
        "サービス",
        "前月末会員数",
        "当月新規会員数",
        "当月末会員数"
      ],
      "rows": [
        [
          "A",
          1000,
          500,
          800
        ],
        [
          "B",
          1000,
          200,
          800
        ],
        [
          "C",
          1500,
          500,
          1100
        ],
        [
          "D",
          1500,
          1000,
          1800
        ]
      ]
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-018",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "AI の事例として，適切でないものはどれか。",
    "choices": [
      "制御量を目標値側へフィードバックすることによって両者を比較し，その差によって両者を一致させるような修正動作を行うPID 制御のモーターコントローラー",
      "部屋の広さや形，家具の位置などを学習し，移動のルートを決めて掃除をするロボット",
      "ヘルプデスク及びコールセンターに代わって，自然言語による質問の意味を推測して返事をするチャットボット",
      "ボードゲームでプロの人間に勝つような，多数の統計データを処理することによって人間に勝るソフトウェア"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "学習や推論を前提としない通常のPID制御は、ここではAIの事例ではない。",
      "detail": "問題は「適切でないもの」を問う。PIDは偏差に比例・積分・微分の制御を行う従来型フィードバック制御。ほかの選択肢は環境の学習、自然言語の意味推測、統計データを用いたゲームの判断というAIの利用例を述べている。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 18,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問18; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-019",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ブレーンストーミングの説明はどれか。",
    "choices": [
      "あるテーマの検討において，複数のメンバーで，各自が思いつくままに自由奔放にできるだけ多くのアイディアを出し合うことによって，創造的思考を喚起し，アイディアを開発しようとする会議方法",
      "研修を始める前に行う簡単なゲームや，商談や面接の本題に入る前に行う雑談など，参加者の緊張をほぐすためのコミュニケーション方法",
      "情報を，決められた枠組みに従って整理・分析するスキルや方法を利用し，複雑なものごとを明快に把握したり，問題に対する解決策を導き出したりするような思考方法",
      "ポイントを繰り返したり，言い換えたりすることによって，お互いの理解する意味合いが一致していることを確認したり，意見・評価を伝えたりする方法"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "批判を控えて多くのアイディアを出し合う会議方法。",
      "detail": "ブレーンストーミングは自由奔放な発想、多数の案、組合せや改善などを重視する。イはアイスブレイク、ウは枠組みによる論理的思考、エは理解を確認するためのフィードバック等の説明であり、発想会議とは目的が異なる。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 19,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問19; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-001",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "大規模言語モデルを用いた自然言語処理において，事前学習済みのモデルに対して行う，ファインチューニングに関する記述として，最も適切なものはどれか。",
    "choices": [
      "強化学習を行い，最適な結果が得られるようにする。",
      "事前学習と同じデータを繰り返し用いて学習を行い，モデルの精度を高めるようにする。",
      "大量のテキストデータを用いて学習を行い，モデルの精度を高めるようにする。",
      "特定のデータを用いて追加で学習を行い，目的とするタスクに適用できるようにする。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "特定のデータを用いた追加学習で、モデルを目的のタスクに適応させる。",
      "detail": "ファインチューニングは事前学習で得たモデルのパラメータを、特定の用途のデータ等で追加学習する工程。大量データによる一般的な事前学習や、同じデータの反復そのものとは区別する。強化学習は学習方法の一種であり、この説明として最も適切なのはエ。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問1; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-002",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "浮動小数点形式で表現された数値の演算結果における丸め誤差の説明はどれか。",
    "choices": [
      "演算結果がコンピュータの扱える最大値を超えることによって生じる誤差である。",
      "数表現のけた数に限度があるので，最下位けたより小さい部分について四捨五入や切上げ，切捨てを行うことによって生じる誤差である。",
      "乗除算において，指数部が小さい方の数値の仮数部の下位部分が失われることによって生じる誤差である。",
      "絶対値がほぼ等しい数値の加減算において，上位の有効数字が失われることによって生じる誤差である。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "表現可能な桁数に収めるための四捨五入・切上げ・切捨てで生じる誤差。",
      "detail": "有限桁の表現へ丸めた数と本来の値との差が丸め誤差。アは表現範囲超過、エは近い値の減算等による桁落ちの説明。ウも丸め誤差の定義ではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問2; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-004",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "MTBF は4,000 時間，MTTR は1,000 時間の装置がある。今後の6 年間は，予防保守によってMTBF を前年に比べて毎年100 時間ずつ改善し，遠隔保守によってMTTR を前年に比べて毎年100 時間ずつ改善していく計画である。6 年経過後の稼働率は幾らか。",
    "choices": [
      "0.88",
      "0.90",
      "0.92",
      "0.94"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "6年後はMTBF=4600時間、MTTR=400時間なので稼働率0.92。",
      "detail": "故障までの平均時間MTBFは100×6=600時間増え、修理時間MTTRは600時間減る。稼働率=MTBF/(MTBF+MTTR)=4600/(4600+400)=0.92。改善は毎年一定時間であり、割合での複利計算ではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 4,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問4; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム構成要素"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-005",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ローコード開発ツールを用いたソフトウェア開発の説明はどれか。",
    "choices": [
      "アプリケーションソフトウェアの開発基盤の上で，用意された部品やテンプレートをGUI を用いた操作で組み合わせたり，必要に応じて一部の処理のソースコードを記述したりすることによって，アプリケーションソフトウェアを作成する。",
      "アプリケーションソフトウェアの開発基盤の上で，用意された部品やテンプレートをGUI を用いた操作で組み合わせるだけで，ソースコードを記述せずに，アプリケーションソフトウェアを作成する。",
      "アプリケーションソフトウェアの定型的な枠組みを参照して，独自の処理のソースコードを記述することによって，アプリケーションソフトウェアを作成する。",
      "利用者がシステムを利用して行う作業を自動化ツールに代行させるために，利用者によるシステムの操作手順をツールに登録する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "GUIでの部品の組合せに、必要に応じてコード記述を加える。",
      "detail": "ローコード開発はコード量を抑えつつ一部を記述できる。イはソースコードを一切記述しないノーコードの説明。ウは枠組みを利用する通常の実装、エは操作自動化の説明。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 5,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問5; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア開発管理技術"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-006",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "“商品”表に対するSQL文と同じ結果が得られるSELECT文はどれか。",
    "choices": [
      "SELECT * FROM 商品 WHERE 仕入先ID = 'M002' AND 仕入先ID = 'M004'",
      "SELECT * FROM 商品 WHERE 仕入先ID = 'M002'\nINTERSECT\nSELECT * FROM 商品 WHERE 仕入先ID = 'M004'",
      "SELECT * FROM 商品 WHERE 仕入先ID = 'M002' OR 仕入先ID = 'M004'",
      "SELECT * FROM 商品 WHERE 仕入先ID BETWEEN 'M002' AND 'M004'"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "INで複数の値を指定した条件は、同じ列への等値条件のORと等価。",
      "detail": "仕入先IDがM002又はM004の行を選ぶ。ANDやINTERSECTは両方に同時一致する条件となるため結果が異なる。BETWEENはM003等の間の値も含むため、INの集合指定とは一致しない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 6,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問6; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "SELECT * FROM 商品 WHERE 仕入先ID IN ('M002', 'M004')",
    "table": {
      "headers": [
        "商品ID",
        "商品名称",
        "仕入先ID",
        "単価"
      ],
      "rows": [
        [
          "S001",
          "冷蔵庫",
          "M001",
          "155,000"
        ],
        [
          "S002",
          "食器洗い機",
          "M002",
          "85,000"
        ],
        [
          "S003",
          "電子レンジ",
          "M003",
          "78,000"
        ],
        [
          "S004",
          "炊飯器",
          "M003",
          "32,000"
        ],
        [
          "S005",
          "コーヒーメーカー",
          "M004",
          "15,000"
        ],
        [
          "S006",
          "ホットプレート",
          "M004",
          "12,000"
        ]
      ]
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-007",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "1G バイトの動画データを40M ビット／秒の回線を使用してダウンロードしたところ，5 分掛かった。このときの回線利用率はおよそ何％か。ここで，ダウンロード時には動画データに20％の制御情報が付加されるものとする。",
    "choices": [
      "10",
      "53",
      "67",
      "80"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "制御情報込み9.6Gビットを300秒で送るので、回線利用率80%。",
      "detail": "1Gバイト×8=8Gビット、制御情報20%を加えると9.6Gビット。40Mビット/秒×300秒=12Gビットの伝送能力に対して、9.6/12×100=80%。バイトとビットの換算、5分から300秒への換算が必要。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 7,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問7; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-008",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "HTTP とHTTPS を比較した場合において，HTTPS だけがもつ特徴を示したものはどれか。",
    "choices": [
      "cookie に保存されている情報を用いたセッション管理が可能である。",
      "ID とパスワードによって利用者の認証を行うことが可能である。",
      "Web ブラウザでキャッシュさせることによって通信量を減らすことが可能である。",
      "通信相手先サーバをサーバ証明書によって確認することが可能である。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "HTTPSではTLSのサーバ証明書で通信相手を確認できる。",
      "detail": "通常のHTTPにはTLSのサーバ認証がない。cookie、ID・パスワードによるWeb認証、ブラウザのキャッシュはHTTPでも利用できる。HTTPSは通信の暗号化・完全性保護に加えて証明書によるサーバ認証を提供する。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 8,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問8; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-009",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "暗号の危殆化に該当するものはどれか。",
    "choices": [
      "あるCA でデジタル証明書の署名に使っている公開鍵のデジタル証明書の有効期限が切れた。",
      "ある暗号アルゴリズムの秘密鍵が不正アクセスによって漏えいした。",
      "あるハッシュ関数においてハッシュ値が同じになるデータの組みを現実的な時間内で発見する方法が見つかった。",
      "あるランサムウェアの一種で暗号化されたファイルの復号鍵が公開された。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "現実的な時間で衝突を発見できるようになると、ハッシュ関数の安全性が低下する。",
      "detail": "危殆化は解析法や計算能力の進歩などによって方式の安全性が損なわれること。証明書の期限切れや特定の秘密鍵漏えいは、その暗号方式自体の安全性低下とは別の問題。ランサムウェアの復号鍵公開も方式の危殆化を直接意味しない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 9,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問9; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-010",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "WAF の説明はどれか。",
    "choices": [
      "Web サイトに対するアクセス内容を監視し，攻撃とみなされるパターンを検知したときに当該アクセスを遮断する。",
      "Wi-Fi アライアンスが認定した無線LAN の暗号化方式の規格であり，AES 暗号に対応している。",
      "様々なシステムの動作ログを一元的に蓄積，管理し，セキュリティ上の脅威となる事象をいち早く検知，分析する。",
      "ファイアウォール機能を有し，マルウェア対策機能，侵入検知機能などの複数のセキュリティ機能を連携させ，統合的に管理する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "WAFはWebアプリケーションへの攻撃パターンを検知・遮断する。",
      "detail": "HTTP等のリクエスト内容を検査して、SQLインジェクション等の攻撃からWebアプリケーションを保護する。イは無線LAN暗号化規格、ウはSIEM、エはUTMの説明に対応する。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 10,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問10; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-011",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "E-R モデルにおけるエンティティの特徴はどれか。",
    "choices": [
      "エンティティとインスタンスとは，1 対1 の対応関係をとる。",
      "エンティティとなり得るものは，物的に実現するものである。",
      "エンティティは，特性を表すための属性（アトリビュート）をもつ。",
      "異なった種類のエンティティ間の関係は，主として状態遷移として表現される。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "エンティティは、その特性を表す属性をもつ。",
      "detail": "顧客なら顧客番号や氏名のような属性をもつ。エンティティには複数のインスタンスが存在し得る。契約等の概念的な対象もエンティティになり、エンティティ間の関連は状態遷移とは区別される。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 11,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問11; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-012",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "オブジェクト指向プログラミングの特徴のうち，異なるクラスのオブジェクトを同一のインタフェースで操作したときに，操作対象クラスに応じた異なる動作を可能にすることを何と呼ぶか。",
    "choices": [
      "委譲",
      "継承",
      "コンポジション",
      "多相性"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "同じインタフェースの呼出しが型に応じた振る舞いをするのは多相性。",
      "detail": "ポリモーフィズムともいう。継承は既存クラスから特性等を受け継ぐ仕組み、コンポジションは部品となるオブジェクトの組合せ、委譲は処理を別オブジェクトに任せること。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 12,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問12; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "アルゴリズムとプログラミング"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-013",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "アジャイル開発手法の一つであるスクラムにおいて，プロダクトバックログアイテムの内容や並び順を決定する役割をもつのは誰か。",
    "choices": [
      "開発者",
      "顧客",
      "スクラムマスタ",
      "プロダクトオーナ"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "プロダクトバックログの内容と並び順に責任をもつのはプロダクトオーナ。",
      "detail": "プロダクトの価値を最大化する観点からバックログを管理する。開発者は実装等を担い、スクラムマスタはスクラムの理解・実践を支援する。顧客の要望は重要だが、この役割の定義そのものではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 13,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問13; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア開発管理技術"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-015",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "サーバ室の物理的な安全対策の状況について，情報セキュリティ管理基準（平成28 年）に照らして，情報セキュリティ監査を行って判明した状況のうち，監査人が，指摘事項として監査報告書に記載すべきものはどれか。",
    "choices": [
      "サーバが設置されている施設の無人領域では，営業時間中でも，警報装置が作動するようになっている。",
      "サーバ室に非常口，避難器具，誘導灯などを設置している。",
      "社外からサーバ室へ直接出入りするドアを設置しているが，出入りを考慮して常時施錠していない。",
      "場所が分からないように，サーバ室の所在を室外に表示していない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "サーバ室の外部へのドアを常時施錠しない状態は不正侵入のリスクになる。",
      "detail": "重要な設備には認可された者だけが入れるよう物理的アクセスを管理する必要がある。警報装置、避難設備、所在を不用意に表示しない措置は、それぞれ防犯や安全確保の施策であり、この選択肢群で指摘すべき問題は無施錠のドア。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 15,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問15; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム監査"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-016",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "データマイニングの手法の一つであって，POS などの蓄積データから“一緒に買われる商品”の組合せを発見する分析手法はどれか。",
    "choices": [
      "3C 分析",
      "ABC 分析",
      "コンジョイント分析",
      "マーケットバスケット分析"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "同時に購入されやすい商品の組合せを調べるのはマーケットバスケット分析。",
      "detail": "購買履歴から商品間の関連を見つけ、陳列や販売促進に使う。3C分析は顧客・競合・自社、ABC分析は重要度等による分類、コンジョイント分析は属性に対する選好の分析。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 16,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問16; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-017",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "インターネット上の生成AI サービスを利用する際に，オプトアウトを設定することはどのような場合に有効か。",
    "choices": [
      "個々の利用者が，自身が生成AI から得た情報に対して，著作権を主張したい場合",
      "個々の利用者が入力した情報を，生成AI の学習に利用させたくない場合",
      "個々の利用者が入力した情報を，生成AI を通じて，他の利用者にも知ってほしい場合",
      "生成AI から得た情報の信ぴょう性を高めたい場合"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "入力した情報を生成AIの学習に利用させたくない場合に有効。",
      "detail": "オプトアウトは対象となる利用への参加・同意を取り消す、又は除外を選ぶこと。この設問では入力情報の学習利用の除外が該当する。生成物への著作権を自動的に付与したり、出力の正確性を保証したりする設定ではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 17,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問17; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-018",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "物販事業において，ロングテールをビジネスとして成功させるために必要な施策はどれか。",
    "choices": [
      "多くの有名ブランド店が出店するショッピングモールの構築",
      "交通の利便性が高い地域に対する，生活必需品を広く浅く取りそろえた出店計画",
      "店舗で購入した商品を近隣地域に無償で配送するサービスの実施",
      "豊富な品ぞろえと，在庫コストや配送費用を抑えるための大規模な物流センタの構築や活用"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "少量しか売れない多種類の商品も扱える品ぞろえと低い物流コストが必要。",
      "detail": "ロングテールは個別の販売数が少ない商品の裾野を広く扱い、合計売上を確保する考え方。豊富な品ぞろえを維持しつつ在庫・配送コストを抑える施策が適合する。有名ブランドの集約や生活必需品の浅い品ぞろえだけでは目的と異なる。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 18,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問18; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-019",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "表の条件で喫茶店を開業したい。月10万円の利益を出すためには，1客席当たり1日平均何人の客が必要か。",
    "choices": [
      "3.75",
      "4",
      "4.2",
      "5"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "必要月間客数1000人を20日・10席で割ると、1席1日5人。",
      "detail": "客1人当たりの限界利益は500-100=400円。固定費30万円と目標利益10万円を賄うには400000/400=1000人/月が必要。1000÷20÷10=5人/席/日。利益10万円だけを400円で割るのでは固定費を回収できない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 19,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問19; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "table": {
      "headers": [
        "項目",
        "条件"
      ],
      "rows": [
        [
          "客1人当たりの売上高",
          "500円"
        ],
        [
          "客1人当たりの変動費",
          "100円"
        ],
        [
          "固定費",
          "300,000円／月"
        ],
        [
          "1か月の営業日数",
          "20日"
        ],
        [
          "客席数",
          "10席"
        ]
      ]
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2025-KOUKAI-A-020",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "カーボンフットプリントの説明として，適切なものはどれか。",
    "choices": [
      "温室効果ガスの排出量から吸収量と除去量を差し引いた合計をゼロにする取組",
      "原材料調達から廃棄・リサイクルに至るまでのライフサイクル全体を通して排出される温室効果ガスの排出量を，CO2 量に換算して，その値を商品やサービスに表示すること",
      "自動車のエンジンから排出される一酸化炭素，窒素酸化物や炭化水素類などの大気汚染物質の排出量の定め",
      "商品がどのような場所で作られて，流通し，販売されているかを把握するための仕組み"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "ライフサイクル全体の温室効果ガス排出量をCO2換算して表示する。",
      "detail": "カーボンフットプリントは原材料調達から廃棄・リサイクルまでを対象に、商品やサービスの排出量を見える化する。アはカーボンニュートラル、ウは大気汚染物質の排出規制、エはトレーサビリティの説明。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目A 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 20,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "3c33fb495bfea51851d2202fca17adb325ce9cb2c216464a5f931725618dfadc",
      "answerSha256": "6d6a14e7c346fe82c1848d2922ef0ea1325bcc3ff5f2224108baa1fe8f8912eb"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_a_ans.pdf 問20; docs/ipa-stage1-sources.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-002",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "キーが小文字のアルファベット1 文字（a，b，…，z のいずれか）であるデータを，大きさが10 のハッシュ表に格納する。ハッシュ関数として，アルファベットのASCII コードを10 進表記法で表したときの1 の位の数を用いることにする。衝突が起こるキーの組合せはどれか。ASCII コードでは，昇順に連続した2 進数が，アルファベット順にコードとして割り当てられている。",
    "choices": [
      "a とi",
      "b とr",
      "c とl",
      "d とx"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "ASCIIコードの差が20となるdとxは、1の位が一致する。",
      "detail": "小文字は連続したコードなので、文字間の位置の差が10の倍数ならハッシュ値が同じになる。aとiは8、bとrは16、cとlは9、dとxは20だけ離れている。d=100、x=120で、どちらもハッシュ値0。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問2; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "アルゴリズムとプログラミング"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-004",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "あるシステムの今年度のMTBF は3,000 時間，MTTR は1,000 時間である。翌年度はMTBF について今年度の20％分の改善，MTTR について今年度の10％分の改善を図ると，翌年度の稼働率は何％になるか。",
    "choices": [
      "69",
      "73",
      "77",
      "80"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "MTBFは3600時間、MTTRは900時間となり、稼働率は80%。",
      "detail": "MTBFは故障間隔なので改善により3000×1.2=3600へ増やす。MTTRは修復時間なので1000×0.9=900へ減らす。稼働率=3600/(3600+900)=0.8=80%。修復時間を増やさない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 4,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、数値計算又はSQL実行による独立検査",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問4; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム構成要素"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-005",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "複数のWeb サービスの入出力処理を連結させて新たなサービスを提供する，“ロジックマッシュアップ”の例はどれか。",
    "choices": [
      "利用者が選択した飲食店情報のページを表示する際に，他のWeb サービスが提供する地図コンテンツをアクセスマップとして表示する。",
      "利用者が選択した投資商品の情報を表示する際に，関連する経済指標のデータを複数のWeb サービスから取得し，グラフに加工して表示する。",
      "利用者が入力した予算の範囲で宿泊可能な施設のリストを他のWeb サービスから取得し，それらの宿泊施設の空室状況を別のWeb サービスから取得して表示する。",
      "利用者がマウスのドラッグで地図を操作した際に，Web ページ全体ではなく一部を読み直すことによって地図をスクロールして表示する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "宿泊施設検索の出力を、別サービスの空室照会の入力へ渡す。",
      "detail": "ロジックマッシュアップはサービスの処理や入出力を連結する。予算に合う施設一覧を取得し、その施設の空室を別サービスで調べるウが該当する。地図や複数のデータの同時表示、画面の部分更新とは区別される。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 5,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問5; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-006",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "液晶ディスプレイなどの表示装置において，傾いた直線の境界を滑らかに表示する手法はどれか。",
    "choices": [
      "アンチエイリアシング",
      "シェーディング",
      "テクスチャマッピング",
      "バンプマッピング"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "境界のぎざぎざを目立たなくする手法はアンチエイリアシング。",
      "detail": "画素の境界付近に中間色を置く等によって斜線等を滑らかに見せる。シェーディングは陰影付け、テクスチャマッピングは表面への画像貼付け、バンプマッピングは凹凸の見え方を付加する手法。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 6,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問6; docs/ipa-stage1-sources.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "情報メディア"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-007",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "DBMS に実装すべき原子性（atomicity）を説明したものはどれか。",
    "choices": [
      "同一データベースに対する同一処理は，何度実行しても結果は同じである。",
      "トランザクション完了後にハードウェア障害が発生しても，更新されたデータベースの内容は保証される。",
      "トランザクション内の処理は，全てが実行されるか，全てが取り消されるかのいずれかである。",
      "一つのトランザクションの処理結果は，他のトランザクション処理の影響を受けない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "原子性は、トランザクションを全て実行するか全て取り消す性質。",
      "detail": "処理の一部分だけが確定した状態を残さない、all-or-nothingの性質。イは耐久性、エは独立性の説明。アの同じ処理を繰り返して結果が同じという性質は原子性の定義ではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 7,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問7; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-008",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "LAN 間接続装置に関する記述のうち，適切なものはどれか。",
    "choices": [
      "ゲートウェイは，OSI 基本参照モデルにおける第1 ～ 3 層だけのプロトコルを変換する。",
      "ブリッジは，IP アドレスを基にしてフレームを中継する。",
      "リピータは，同種のセグメント間で信号を増幅することによって伝送距離を延長する。",
      "ルータは，MAC アドレスを基にしてフレームを中継する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "リピータは同種セグメント間で信号を再生・増幅して距離を延長する。",
      "detail": "リピータは物理層で信号を中継する。ブリッジは主にMACアドレスを基にフレームを転送し、ルータはIPアドレス等を基にパケットを転送する。ゲートウェイの変換対象は第1〜3層だけに限られない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 8,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問8; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-009",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ペネトレーションテストに該当するものはどれか。",
    "choices": [
      "検査対象の実行プログラムの設計書，ソースコードに着目し，開発プロセスの各工程にセキュリティ上の問題がないかどうかをツールや目視で確認する。",
      "公開Web サーバの各コンテンツファイルのハッシュ値を管理し，定期的に各ファイルから生成したハッシュ値と一致するかどうかを確認する。",
      "公開Web サーバや組織のネットワークの脆 弱性を探索し，サーバに実際に侵入できるかどうかを確認する。",
      "内部ネットワークのサーバやネットワーク機器のIPFIX 情報から，各PC の通信に異常な振る舞いがないかどうかを確認する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "脆弱性を探索し、実際に侵入が成立するか確認する試験。",
      "detail": "ペネトレーションテストは攻撃者の視点から侵入可能性や影響を検証する。設計書・コードのレビュー、ファイル改ざんの検出、フロー情報による異常検知はそれぞれ別の検査・監視手法。実施時には対象と許可範囲の合意が必要。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 9,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問9; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-010",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "SQL インジェクションの対策として，有効なものはどれか。",
    "choices": [
      "URL をWeb ページに出力するときは，“http://”や“https://”で始まるURL だけを許可する。",
      "外部からのパラメータでWeb サーバ内のファイル名を直接指定しない。",
      "スタイルシートを任意のWeb サイトから取り込めるようにしない。",
      "プレースホルダを使って命令文を組み立てる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "プレースホルダでSQLの構造と入力データを分離する。",
      "detail": "値を文字列連結でSQLに埋め込まず、プレースホルダへデータとして渡すと入力がSQL命令として解釈されるのを防げる。URLの出力制限、ファイル名の扱い、外部スタイルシートの制限はSQLインジェクションへの直接対策ではない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 10,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問10; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-011",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "階層構造のモジュール群から成るソフトウェアの結合テストを，上位のモジュールから行う。この場合に使用する，下位のモジュールの代替となるテスト用のモジュールはどれか。",
    "choices": [
      "エミュレータ",
      "シミュレータ",
      "スタブ",
      "ドライバ"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "トップダウン結合テストで、未結合の下位モジュールを代替するのはスタブ。",
      "detail": "上位モジュールから呼ばれ、下位モジュールの応答を模擬する。ドライバは逆に、下位モジュールをテストするために上位の呼出し元を代替する。エミュレータやシミュレータはスタブという役割名とは区別する。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 11,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問11; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム開発技術"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-012",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "アジャイル開発手法の一つであるスクラムで定義され，スプリントで実施するイベントのうち，毎日決まった時間に決まった場所で行い，開発チームの全員が前回からの進捗状況や今後の作業計画を共有するものはどれか。",
    "choices": [
      "スプリントプランニング",
      "スプリントレトロスペクティブ",
      "スプリントレビュー",
      "デイリースクラム"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "日々の進捗と作業計画を共有・調整するのはデイリースクラム。",
      "detail": "スプリント内で毎日行う短いイベント。プランニングはスプリント計画、レビューは成果の検査と適応、レトロスペクティブは仕事の進め方の改善を扱う。この設問は日々のイベントを問う。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 12,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問12; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア開発管理技術"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-014",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "システムの開発部門と運用部門が別々に組織化されているとき，システム開発を伴う新規サービスの設計及び移行を円滑かつ効果的に進めるための方法のうち，適切なものはどれか。",
    "choices": [
      "運用テストの完了後に，開発部門がシステム仕様と運用方法を運用部門に説明する。",
      "運用テストは，開発部門の支援を受けずに，運用部門だけで実施する。",
      "運用部門からもシステムの運用に関わる要件の抽出に積極的に参加する。",
      "開発部門は運用テストを実施して，運用マニュアルを作成し，運用部門に引き渡す。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "運用部門が設計初期から運用要件の抽出に参加する。",
      "detail": "運用・監視・障害対応などの要件を早期に反映すると、移行時の手戻りや部門間の認識差を減らせる。運用テスト後の初回説明や、一方の部門だけでのテスト・マニュアル引渡しでは連携が遅くなる。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 14,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問14; docs/ipa-stage1-sources.json",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "サービスマネジメント"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-015",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ビッグデータ分析の前段階として，非構造化データを構造化データに加工する処理を記述している事例はどれか。",
    "choices": [
      "関係データベースに蓄積された大量の財務データから必要な条件に合致するデータを抽出し，利用者が扱いやすい表計算ソフトウェアデータに加工する。",
      "個人情報を含むビッグデータを更に利活用するために，特定の個人を識別することができないように匿名化加工する。",
      "住所データ項目の中にある，“ヶ”と“が”の混在や，丁番地の表記不統一を，標準化された表記へ統一するために加工する。",
      "ソーシャルメディアの口コミを機械学習によって単語ごとに分解し，要約を作り，分析可能なデータに加工し，関係データベースに保管する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "口コミという非構造化テキストを分析可能なデータに加工してDBへ格納する。",
      "detail": "自由文を単語等へ分解し、構造をもつデータに整理する処理が該当する。既存表の抽出、匿名化、表記ゆれの統一は有用な前処理だが、この選択肢群で問われる非構造化から構造化への変換とは異なる。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 15,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問15; docs/ipa-stage1-sources.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-B-001",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1から始まる。\n次のプログラムは，整数型の配列dataの末尾の要素の値を先頭の要素に移動する。この際，末尾以外の各要素の値は，一つずつ後ろの要素に移動する。",
    "choices": [
      "2からlen－1まで1ずつ増やす",
      "2からlenまで1ずつ増やす",
      "len－1から2まで1ずつ減らす",
      "lenから2まで1ずつ減らす"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "上書きで元の値を失わないように、末尾側から前の値をコピーする。",
      "detail": "topに9を退避し、i=9,8,…,2の順にdata[i-1]をdata[i]へコピーする。最後にdata[1]=9とすれば{9,1,2,3,4,5,6,7,8}になる。昇順のループでは変更済みの値を再度コピーしてしまい、len-1開始では末尾が移動しない。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目B 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "3995e35d9ca102e9363ac049303e65b936a860ef6377ffbbcbc0620484a6bbb2",
      "answerSha256": "ca47fecabfcb67745b339522f75f907a3d29217a63e0c1efb38cff4c7aaac2af"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf 問1; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "整数型の配列: data ← {1, 2, 3, 4, 5, 6, 7, 8, 9}\n整数型: top, i\n整数型: len ← dataの要素数\ntop ← data[len]\nfor (iを【空欄】)\n  data[i] ← data[i － 1]\nendfor\ndata[1] ← top",
    "trace": {
      "headers": [
        "処理",
        "data"
      ],
      "rows": [
        [
          "開始",
          "1,2,3,4,5,6,7,8,9"
        ],
        [
          "i=9",
          "1,2,3,4,5,6,7,8,8"
        ],
        [
          "i=8",
          "1,2,3,4,5,6,7,7,8"
        ],
        [
          "i=7",
          "1,2,3,4,5,6,6,7,8"
        ],
        [
          "i=6",
          "1,2,3,4,5,5,6,7,8"
        ],
        [
          "i=5",
          "1,2,3,4,4,5,6,7,8"
        ],
        [
          "i=4",
          "1,2,3,3,4,5,6,7,8"
        ],
        [
          "i=3",
          "1,2,2,3,4,5,6,7,8"
        ],
        [
          "i=2",
          "1,1,2,3,4,5,6,7,8"
        ],
        [
          "先頭にtopを代入",
          "9,1,2,3,4,5,6,7,8"
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2026-KOUKAI-B-002",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。\n関数complementは，引数として渡された8ビット型の値xについて，xに加算すると00000000になる値を返す。8ビット型の加算は，値を符号なし2進数とみなしたときの加算とし，桁あふれが発生したときのあふれた桁は無視する。演算子∧，∨，▽は，それぞれビット単位の論理積，論理和，排他的論理和を表す。",
    "choices": [
      "x ∧ 01111111",
      "x ∧ 11111111",
      "x ∨ 01111111",
      "x ∨ 11111111",
      "x ▽ 01111111",
      "x ▽ 11111111"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "全ビットを反転して1を加えると、8ビットの2の補数になる。",
      "detail": "xと11111111の排他的論理和は255-x。1を加えると256-xとなり、xとの和は256なので下位8ビットは0になる。x=0のときも桁あふれを無視して0を返す。他の式では全256通りの入力に対してこの条件を満たさない。トレースはx=5の例。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目B 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "3995e35d9ca102e9363ac049303e65b936a860ef6377ffbbcbc0620484a6bbb2",
      "answerSha256": "ca47fecabfcb67745b339522f75f907a3d29217a63e0c1efb38cff4c7aaac2af"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf 問2; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○8ビット型: complement(8ビット型: x)\n  8ビット型: y\n  y ← 【空欄】\n  y ← y ＋ 00000001\n  return y",
    "trace": {
      "headers": [
        "処理",
        "8ビット値"
      ],
      "rows": [
        [
          "x",
          "00000101"
        ],
        [
          "x ▽ 11111111",
          "11111010"
        ],
        [
          "1を加算（戻り値）",
          "11111011"
        ],
        [
          "xと戻り値の和（下位8ビット）",
          "00000000"
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2026-KOUKAI-B-003",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1から始まる。\n関数func1に与える引数と，関数func2に与える引数とが同じとき，二つの関数は同じ値を返す。プログラムでは，配列の領域外を参照してはならないものとする。",
    "choices": [
      "2 × data[1] ＋ data[2]",
      "2 × data[2] ＋ data[1]",
      "2 × data[i－1] ＋ data[i－2]",
      "2 × data[i－2] ＋ data[i－1]",
      "data[3] ＋ 2 × data[1] ＋ data[2]",
      "data[3] ＋ 2 × data[2] ＋ data[1]",
      "data[3] ＋ 2 × data[i－1] ＋ data[i－2]",
      "data[3] ＋ 2 × data[i－2] ＋ data[i－1]"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ",
      "ク"
    ],
    "answer": 0,
    "explanation": {
      "brief": "代入後のdata[1]がf(i-2)、data[2]がf(i-1)に対応する。",
      "detail": "f(i)=2f(i-2)+f(i-1)。data[1]←data[2]、data[2]←data[3]の移動を行った後に、2×data[1]+data[2]で次の値を作る。n≦2では初期値1を返す。iを添字に使う選択肢はiが増えると3要素の領域外を参照する。トレースはn=6の例。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目B 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 3,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "3995e35d9ca102e9363ac049303e65b936a860ef6377ffbbcbc0620484a6bbb2",
      "answerSha256": "ca47fecabfcb67745b339522f75f907a3d29217a63e0c1efb38cff4c7aaac2af"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf 問3; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○整数型: func1(整数型: n)\n  if (nが2以下)\n    return 1\n  endif\n  return 2 × func1(n － 2) ＋ func1(n － 1)\n\n○整数型: func2(整数型: n)\n  整数型の配列: data ← {1, 1, 1}\n  整数型: i\n  /* nが3より小さいときは繰返し処理を実行しない */\n  for (iを3からnまで1ずつ増やす)\n    data[1] ← data[2]\n    data[2] ← data[3]\n    data[3] ← 【空欄】\n  endfor\n  return data[3]",
    "trace": {
      "headers": [
        "時点",
        "data[1]",
        "data[2]",
        "data[3]"
      ],
      "rows": [
        [
          "初期",
          1,
          1,
          1
        ],
        [
          "i=3終了",
          1,
          1,
          3
        ],
        [
          "i=4終了",
          1,
          3,
          5
        ],
        [
          "i=5終了",
          3,
          5,
          11
        ],
        [
          "i=6終了",
          5,
          11,
          21
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2025-KOUKAI-B-001",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【a】と【b】に入れる正しい答えの組合せを，解答群の中から選べ。\n関数function1が受け取る引数と，関数function2が受け取る引数とが同じとき，二つの関数は同じ値を返す。ここで，引数nと引数mは正の整数であり，引数mは引数nよりも10以上大きい数とする。",
    "choices": [
      "a：iを1から2まで1ずつ増やす ／ b：jをnから始めてmを超えない範囲でtempNずつ増やす",
      "a：iを1から2まで1ずつ増やす ／ b：jをtempNからmまで1ずつ増やす",
      "a：iを1から2まで1ずつ増やす ／ b：jをtempNから始めてmを超えない範囲で4ずつ増やす",
      "a：iを1から3まで1ずつ増やす ／ b：jをnから始めてmを超えない範囲でtempNずつ増やす",
      "a：iを1から3まで1ずつ増やす ／ b：jをtempNからmまで1ずつ増やす",
      "a：iを1から3まで1ずつ増やす ／ b：jをtempNから始めてmを超えない範囲で4ずつ増やす"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "最大3回の加算で最初の4の倍数に到達し、以後4ずつ数える。",
      "detail": "n mod 4は0〜3。最初の4の倍数までの増分は最大3なので、前半は3回まで必要。後半はその値tempNから4ずつ増やせば区間内の4の倍数だけを数えられる。2回だけではn mod 4=1のとき不足する。トレースはn=1,m=11の例。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目B 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "18c43738820a136adf48a1990aaf571fa4203e1f1a162d51322d29d319da67d9",
      "answerSha256": "d2683dc460dffde9ca7817483edbd207c9696c061362281710ebc9d89ff6c2fe"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_b_ans.pdf 問1; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○整数型: function1(整数型: n, 整数型: m)\n  整数型: count ← 0\n  整数型: i\n  for (iをnからmまで1ずつ増やす)\n    if ((i mod 4)が0と等しい)\n      count ← count ＋ 1\n    endif\n  endfor\n  return count\n\n○整数型: function2(整数型: n, 整数型: m)\n  整数型: count ← 0\n  整数型: tempN ← n\n  整数型: i, j\n  for (【a】)\n    if ((tempN mod 4)が0と等しい)\n      繰返し処理を終了する\n    endif\n    tempN ← tempN ＋ 1\n  endfor\n  for (【b】)\n    count ← count ＋ 1\n  endfor\n  return count",
    "trace": {
      "headers": [
        "時点（n=1,m=11）",
        "tempN",
        "count"
      ],
      "rows": [
        [
          "初期",
          1,
          0
        ],
        [
          "前半i=1終了",
          2,
          0
        ],
        [
          "前半i=2終了",
          3,
          0
        ],
        [
          "前半i=3終了",
          4,
          0
        ],
        [
          "後半j=4終了",
          4,
          1
        ],
        [
          "後半j=8終了",
          4,
          2
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2025-KOUKAI-B-002",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。\n関数changeは，10より大きい整数を引数nで受け取り，1円玉，5円玉，10円玉を使ってちょうどn円にする組合せの総数を返す。\n例えば，12円にする組合せは，次のように数えられる。10円玉を使わない場合には，1円玉と5円玉だけでちょうど12円にすることになる。その組合せは，使える5円玉の枚数が0以上（12÷5の商）以下なので，（12÷5の商）＋1＝3通りある。同様に，10円玉を1枚使う場合には，1円玉と5円玉だけでちょうど2円にすることになり，その組合せは（2÷5の商）＋1＝1通りある。10円玉を2枚以上使う組合せはない。よって，1円玉，5円玉，10円玉を使ってちょうど12円にする組合せは，3＋1＝4通りである。",
    "choices": [
      "rest ≧ 0",
      "rest ≧ 5",
      "rest ≧ 10",
      "rest ＞ 0",
      "rest ＞ 5",
      "rest ＞ 10"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "残額が0円の場合にも1通りあるため、rest≧0で繰り返す。",
      "detail": "10円玉の枚数を増やすごとにrestを10減らす。残額に対して5円玉を0〜floor(rest/5)枚使え、残りを1円玉で埋められる。rest=0は全額を10円玉にする1通りに対応するので除外しない。rest<0になったら不可能なので終了する。トレースはn=20。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和7年度 基本情報技術者試験 科目B 公開問題",
      "year": 2025,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2025r07.html",
      "questionSha256": "18c43738820a136adf48a1990aaf571fa4203e1f1a162d51322d29d319da67d9",
      "answerSha256": "d2683dc460dffde9ca7817483edbd207c9696c061362281710ebc9d89ff6c2fe"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/tbl5kb0000005r9r-att/2025r07_fe_kamoku_b_ans.pdf 問2; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○整数型: change(整数型: n)\n  整数型: count ← 0\n  整数型: rest ← n\n  while (【空欄】)\n    count ← count ＋ (rest ÷ 5 の商) ＋ 1\n    rest ← rest － 10\n  endwhile\n  return count",
    "trace": {
      "headers": [
        "反復開始時rest",
        "今回の加算",
        "加算後count",
        "更新後rest"
      ],
      "rows": [
        [
          20,
          5,
          5,
          10
        ],
        [
          10,
          3,
          8,
          0
        ],
        [
          0,
          1,
          9,
          -10
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2024-KOUKAI-B-001",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。\n関数maximumは，異なる三つの整数を引数で受け取り，そのうちの最大値を返す。",
    "choices": [
      "x ＞ y",
      "x ＞ y and x ＞ z",
      "x ＞ y and y ＞ z",
      "x ＞ z",
      "x ＞ z and z ＞ y",
      "z ＞ y"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "xを返すのは、xがyとzの両方より大きい場合。",
      "detail": "最初の条件でxが最大かを判定する。そうでなければ最大値はy又はzなので、y>zの判定で選べる。x>yだけ、又はx>zだけでは残りの変数がxを超える可能性がある。x>y and y>z等ではxが最大でも成立しない順序がある。トレースは三つの代表例。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目B 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c82b9e6a84707d163b15a0073533bf615e6eaed36e65123ed13a4ff80a1cddd4",
      "answerSha256": "ca5fbc5c32a987c78972ea1c9a25686f1f5668dcd45b6d36a3dcb316026144e6"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_ans.pdf 問1; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○整数型: maximum(整数型: x, 整数型: y, 整数型: z)\n  if (【空欄】)\n    return x\n  elseif (y ＞ z)\n    return y\n  else\n    return z\n  endif",
    "trace": {
      "headers": [
        "x",
        "y",
        "z",
        "最初の条件",
        "戻り値"
      ],
      "rows": [
        [
          3,
          1,
          2,
          "真",
          3
        ],
        [
          1,
          3,
          2,
          "偽",
          3
        ],
        [
          2,
          1,
          3,
          "偽",
          3
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2024-KOUKAI-B-002",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。\n関数convDecimalは，引数として与えられた，“0”と“1”だけから成る，1文字以上の文字列を，符号なしの2進数と解釈したときの整数値を返す。例えば，引数として“10010”を与えると18が返る。\n関数convDecimalが利用する関数intは，引数で与えられた文字が“0”なら整数値0を返し，“1”なら整数値1を返す。",
    "choices": [
      "result ＋ int(binaryの(length－i＋1)文字目の文字)",
      "result ＋ int(binaryのi文字目の文字)",
      "result × 2 ＋ int(binaryの(length－i＋1)文字目の文字)",
      "result × 2 ＋ int(binaryのi文字目の文字)"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "左から順に、現在値を2倍して次のビットを加える。",
      "detail": "2進数の末尾へ1桁を付け足す操作は、それまでの値を2倍してその桁の値を加えること。i文字目を左から読む必要があり、逆順だと別の数になる。加算だけの選択肢は1の個数を数えてしまう。10010では1→2→4→9→18と進む。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目B 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c82b9e6a84707d163b15a0073533bf615e6eaed36e65123ed13a4ff80a1cddd4",
      "answerSha256": "ca5fbc5c32a987c78972ea1c9a25686f1f5668dcd45b6d36a3dcb316026144e6"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_ans.pdf 問2; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○整数型: convDecimal(文字列型: binary)\n  整数型: i, length, result ← 0\n  length ← binaryの文字数\n  for (iを1からlengthまで1ずつ増やす)\n    result ← 【空欄】\n  endfor\n  return result",
    "trace": {
      "headers": [
        "i",
        "読み込む文字",
        "更新後result"
      ],
      "rows": [
        [
          1,
          "1",
          1
        ],
        [
          2,
          "0",
          2
        ],
        [
          3,
          "0",
          4
        ],
        [
          4,
          "1",
          9
        ],
        [
          5,
          "0",
          18
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2024-KOUKAI-B-004",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次の記述中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1から始まる。\n関数mergeは，昇順に整列された整数型の配列data1及びdata2を受け取り，これらを併合してできる昇順に整列された整数型の配列を返す。\n関数mergeをmerge({2, 3}, {1, 4})として呼び出すと，/*** α ***/ の行は【空欄】。",
    "choices": [
      "実行されない",
      "1回実行される",
      "2回実行される",
      "3回実行される"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "主ループで1,2,3を格納した後、data2に残った4を格納するときの1回。",
      "detail": "最初は2と1を比較して1を取り、次に2と4で2、3と4で3を取る。この時点でdata1を使い切るので最初のwhileを終了する。data1の残りを取るループは0回、data2の残りを取るαの行は4を格納する1回だけ実行される。",
      "author": "FE Quick Drill：Codexによる独自解説（AI作成・公式解説ではありません）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目B 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 4,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-08",
      "modified": true,
      "modificationNote": "Web表示のためPDFの改行・空白・ルビを整理。空欄は【空欄】又は【a】【b】と表記し、表・コードを再配置。設問の内容・数値・選択肢順は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c82b9e6a84707d163b15a0073533bf615e6eaed36e65123ed13a4ff80a1cddd4",
      "answerSha256": "ca5fbc5c32a987c78972ea1c9a25686f1f5668dcd45b6d36a3dcb316026144e6"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-08",
      "method": "公式問題本文・選択肢と公式解答例の照合、簡潔・詳細解説のAIレビュー、独立Python実装による選択肢の一意性・トレース全行の照合",
      "review": {
        "reviewer": "Codex（AI照合・独立計算。人手・専門家によるレビューは未実施）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_b_ans.pdf 問4; docs/ipa-stage1-sources.json; docs/ipa-stage1-verification.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true,
        "traceChecked": true
      }
    },
    "code": "○整数型の配列: merge(整数型の配列: data1, 整数型の配列: data2)\n  整数型: n1 ← data1の要素数\n  整数型: n2 ← data2の要素数\n  整数型の配列: work ← {(n1 ＋ n2)個の未定義の値}\n  整数型: i ← 1\n  整数型: j ← 1\n  整数型: k ← 1\n  while ((i ≦ n1) and (j ≦ n2))\n    if (data1[i] ≦ data2[j])\n      work[k] ← data1[i]\n      i ← i ＋ 1\n    else\n      work[k] ← data2[j]\n      j ← j ＋ 1\n    endif\n    k ← k ＋ 1\n  endwhile\n  while (i ≦ n1)\n    work[k] ← data1[i]\n    i ← i ＋ 1\n    k ← k ＋ 1\n  endwhile\n  while (j ≦ n2)\n    work[k] ← data2[j]  /*** α ***/\n    j ← j ＋ 1\n    k ← k ＋ 1\n  endwhile\n  return work",
    "trace": {
      "headers": [
        "処理",
        "格納値",
        "更新後i",
        "更新後j",
        "更新後k"
      ],
      "rows": [
        [
          "主ループ1回目",
          1,
          1,
          2,
          2
        ],
        [
          "主ループ2回目",
          2,
          2,
          2,
          3
        ],
        [
          "主ループ3回目",
          3,
          3,
          2,
          4
        ],
        [
          "αを実行",
          4,
          3,
          3,
          5
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-016",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "コアコンピタンスを説明したものはどれか。",
    "choices": [
      "経営活動における基本精神や行動指針",
      "事業戦略の遂行によって達成すべき到達目標",
      "自社を取り巻く環境に関するビジネス上の機会と脅威",
      "他社との競争優位の源泉となる経営資源及び企業能力"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "コアコンピタンスは競争優位の源泉となる中核的な能力。",
      "detail": "他社が容易にまねできない技術・組織能力などが競争優位を生む。アは経営理念、イは目標、ウは外部環境の機会と脅威であり、中核能力そのものではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 16,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "原本の組版上の改行・空白を整理。内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子のページ画像・本文・選択肢・表と公式解答例を転記後の別工程で照合。簡潔／詳細解説と各選択肢の整合性をAIレビュー。B問6はルール3の違反集合を独立に確認。実ブラウザ確認は未完了。",
      "review": {
        "reviewer": "Codex（AI、同一担当で転記後に別工程レビュー。人手・専門家レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問16; docs/collection-stage2.md; docs/ipa-stage2-review.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-017",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "マーケティング戦略におけるブルーオーシャンの説明として，適切なものはどれか。",
    "choices": [
      "競争が存在していない未知の市場",
      "コモディティ化が進んだ既存の市場",
      "新事業のアイディアを実際のビジネスに育成するまでの期間",
      "製品開発したものを市場化する過程に横たわっている障壁"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "ブルーオーシャンは競争が存在しない未知の市場。",
      "detail": "既存市場の競争から離れ、新たな価値によって未開拓の需要を創造する考え方。イは競争の進んだ既存市場であり、ウの事業育成期間やエの市場化への障壁を指す語ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 17,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "原本の組版上の改行・空白を整理。内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子のページ画像・本文・選択肢・表と公式解答例を転記後の別工程で照合。簡潔／詳細解説と各選択肢の整合性をAIレビュー。B問6はルール3の違反集合を独立に確認。実ブラウザ確認は未完了。",
      "review": {
        "reviewer": "Codex（AI、同一担当で転記後に別工程レビュー。人手・専門家レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問17; docs/collection-stage2.md; docs/ipa-stage2-review.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-018",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "HR テックの説明はどれか。",
    "choices": [
      "ICT を活用して，住宅内のエネルギー使用状況の監視，機器の遠隔操作や自動制御などを可能にし，家庭におけるエネルギー管理を支援するソリューション",
      "既存のビジネスモデルによる業界秩序や既得権益を破壊してしまうほど大きな影響を与える新しいICT やビジネスモデル",
      "個人の資金に関わる情報を統合的に管理するサービスやマーケットプレイス・レンディングなどの金融サービスを実現するための新しい情報技術",
      "採用，育成，評価，配属などの人事領域の業務を対象に，ビッグデータ解析やAI などの最新ICT を活用して，業務改善と社員満足度向上を図るソリューション"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "HRテックは人事領域へICTを活用するソリューション。",
      "detail": "Human ResourcesとTechnologyを組み合わせた用語。採用・育成・評価・配属などにAIやデータ分析を利用する。アは家庭のエネルギー管理、イは破壊的な技術・ビジネスモデル、ウは金融サービスの情報技術である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 18,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "原本の組版上の改行・空白を整理。内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子のページ画像・本文・選択肢・表と公式解答例を転記後の別工程で照合。簡潔／詳細解説と各選択肢の整合性をAIレビュー。B問6はルール3の違反集合を独立に確認。実ブラウザ確認は未完了。",
      "review": {
        "reviewer": "Codex（AI、同一担当で転記後に別工程レビュー。人手・専門家レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問18; docs/collection-stage2.md; docs/ipa-stage2-review.json",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2024-KOUKAI-A-020",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "日本において，産業財産権と総称される四つの権利はどれか。",
    "choices": [
      "意匠権，実用新案権，商標権，特許権",
      "意匠権，実用新案権，著作権，特許権",
      "意匠権，商標権，著作権，特許権",
      "実用新案権，商標権，著作権，特許権"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "産業財産権は特許権・実用新案権・意匠権・商標権の四つ。",
      "detail": "発明を保護する特許権、物品の形状等の考案を保護する実用新案権、デザインを保護する意匠権、商品・サービスを識別する標識を保護する商標権から成る。イ・ウ・エには産業財産権に含まれない著作権が入り、四つのうち一つが欠けている。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "令和6年度 基本情報技術者試験 科目A 公開問題",
      "year": 2024,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 20,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "原本の組版上の改行・空白を整理。内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2024r06.html",
      "questionSha256": "c8a462741a1111950f7376e3ebd9bd0b2eff75d32fa9cfa3e39e97b7bf979789",
      "answerSha256": "2f72e5e6ef0dafc14bbe8c52a174979b506c560ee26e67af223c1aabae70778e"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子のページ画像・本文・選択肢・表と公式解答例を転記後の別工程で照合。簡潔／詳細解説と各選択肢の整合性をAIレビュー。B問6はルール3の違反集合を独立に確認。実ブラウザ確認は未完了。",
      "review": {
        "reviewer": "Codex（AI、同一担当で転記後に別工程レビュー。人手・専門家レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/eid2eo0000007g1d-att/2024r06_fe_kamoku_a_ans.pdf 問20; docs/collection-stage2.md; docs/ipa-stage2-review.json",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "法務"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-A-020",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "A 社は，自社の業務可視化をB 社に委託しその成果物として納品された業務フロー図をC 社に提示することによって，業務システムの開発をC 社に委託することを検討している。A 社がこの業務フロー図を使用する上で生じる制約として，適切なものはどれか。なお，B 社への委託に当たって締結された契約には，著作権は全てA 社に譲渡する旨の記述があり，著作者人格権については特段の記述はない。",
    "choices": [
      "C 社と守秘義務契約を締結したとしても，C 社に対して，納品された業務フロー図の電子データを提供することはできない。",
      "納品された業務フロー図の各ページに作成者名として記されているB 社の企業名をA 社の企業名に変更し，C 社に提示することはできない。",
      "納品された業務フロー図を印刷し，社内資料としてA 社の社員に配布することはできない。",
      "バックアップの目的で，納品された業務フロー図の電子データを複製し，A 社だけがアクセス可能なクラウドストレージに保管することはできない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "著作権を譲渡しても著作者人格権は譲渡されない。",
      "detail": "契約で著作権はA社へ移っているが、著作者人格権はB社に残る。作成者としてのB社名をA社名へ変更するイは氏名表示権に関わるためできない。アの開発先への電子データ提供、ウの社内配布、エのバックアップ複製は、設問の条件では譲渡された著作権によって可能である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目A 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 20,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "原本の組版上の改行・空白を整理。内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "7fb3984bb494cad928232823e224b7e58f3eaef59ea523deaa4bae2085c8fba3",
      "answerSha256": "02976cdb5d2c14ec3c5304a1dc89d1db77ca04f0d62fe78fc4c2448dcf0ea6a7"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子のページ画像・本文・選択肢・表と公式解答例を転記後の別工程で照合。簡潔／詳細解説と各選択肢の整合性をAIレビュー。B問6はルール3の違反集合を独立に確認。実ブラウザ確認は未完了。",
      "review": {
        "reviewer": "Codex（AI、同一担当で転記後に別工程レビュー。人手・専門家レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_a_ans.pdf 問20; docs/collection-stage2.md; docs/ipa-stage2-review.json",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "法務"
  },
  {
    "id": "IPA-FE-2026-KOUKAI-B-006",
    "subject": "B",
    "field": "情報セキュリティ",
    "prompt": "A 社は，従業員1,000 名の広告代理店である。A 社では，各部署がA 社の社内ネットワークに設置したファイルサーバを，設置した部署の運用担当者が管理している。各部署で新たなクラウドサービスを利用する場合，各部署の責任者の承認のもと契約し，各部署の運用担当者が管理している。営業部では，営業部がA 社の社内ネットワークに設置したファイルサーバ（以下，Y サーバという）及び顧客管理のためのクラウドサービス（以下，Z サービスという）を利用している。営業部の各従業員にはY サーバの一般利用者アカウントが割り当てられ，Y サーバ上の全てのファイルが編集可能である。また，営業部の各従業員には，Z サービスの一般利用者アカウントが割り当てられ，営業部の運用担当者には，Y サーバとZ サービスの管理者アカウントが割り当てられている。情報セキュリティ部門では，クラウドサービスに関連した情報セキュリティインシデントの発生に備えて，各部署で利用しているクラウドサービスのログ管理に関するルールを図1 のとおりに整備した。\n\n1. ログの取得\n次のログを取得すること\n・ログイン及びログアウトのログ（以下，ログインログという）\n・クラウドサービスでの重要な操作及びその成否に関するログ\n\n2. ログの項目\n少なくとも次が記録されること\n・対象のアカウント名，日本標準時での日時，操作内容\n\n3. ログのアクセス管理\n・運用担当者だけがログにアクセスできるようにすること\n・クラウドサービスからログをエクスポートして保管する場合は，社内ネットワークに設置した自部署のファイルサーバにログを保管し，運用担当者だけがアクセスできるようにすること\n・運用担当者は複数名にすること\n・クラウドサービスへの運用担当者のログインには，2 要素認証を必要とすること\n\n4. ログの保存期間\n・少なくとも過去1 年間のログが参照できるようにすること\n\n5. 改ざんへの対策\n・ログは運用担当者でも書込み及び消去ができないようにすること\n図1 各部署で利用しているクラウドサービスのログ管理に関するルール\n\n営業部の情報セキュリティリーダーであるB 課長は，運用担当者のC 主任及び情報セキュリティ部門の協力を得て，図1 のルールが順守されているかどうかを調査した。B 課長は，Z サービスでの現在の運用の中で，図1 のルールに違反しているものを表1のとおりまとめた。\n\n設問　表1中の運用のうち，図1のルール3に違反しているものの項番だけを全て挙げた組合せを，解答群の中から選べ。",
    "choices": [
      "(一)，(二)",
      "(一)，(二)，(三)",
      "(一)，(二)，(四)",
      "(一)，(三)",
      "(一)，(三)，(四)",
      "(一)，(四)",
      "(二)，(三)",
      "(二)，(三)，(四)",
      "(二)，(四)",
      "(三)，(四)"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ",
      "ク",
      "ケ",
      "コ"
    ],
    "answer": 8,
    "explanation": {
      "brief": "ルール3に違反するのは、運用担当者が一人の(二)と、一般利用者も編集できるYサーバへ保存する(四)。",
      "detail": "図1のルール3は、運用担当者を複数名にし、ログを運用担当者だけがアクセスできる場所へ保管することを求める。(二)はC主任だけなので違反する。(四)のYサーバは営業部の各従業員が全ファイルを編集できるため違反する。(一)は主にルール4の保存期間、(三)はルール2の日本標準時の条件の問題であり、ルール3の違反を選ぶ設問には含めない。したがって(二)，(四)だけを挙げたケが正答である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "令和8年度 基本情報技術者試験 科目B 公開問題",
      "year": 2026,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 6,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "原本の改行・空白を整理。科目Bの図1の規則を本文、表1をHTML表へ再配置。設問の内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ケ",
        "index": 8
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2026r08.html",
      "questionSha256": "3995e35d9ca102e9363ac049303e65b936a860ef6377ffbbcbc0620484a6bbb2",
      "answerSha256": "ca47fecabfcb67745b339522f75f907a3d29217a63e0c1efb38cff4c7aaac2af"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子のページ画像・本文・選択肢・表と公式解答例を転記後の別工程で照合。簡潔／詳細解説と各選択肢の整合性をAIレビュー。B問6はルール3の違反集合を独立に確認。実ブラウザ確認は未完了。",
      "review": {
        "reviewer": "Codex（AI、同一担当で転記後に別工程レビュー。人手・専門家レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/rcu1hd0000012qj6-att/2026r08_fe_kamoku_b_ans.pdf 問6; docs/collection-stage2.md; docs/ipa-stage2-review.json",
        "answerIndex": 8,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "table": {
      "headers": [
        "項番",
        "現在の運用（表1：図1のルールに違反している現在の運用）"
      ],
      "rows": [
        [
          "(一)",
          "Zサービスのログは，空き容量が一定値以下になった場合，古いログから上書きされる。"
        ],
        [
          "(二)",
          "Zサービスの運用は，営業部のC主任とD主任の2名で担当していたが，D主任が先月退職したので，現在はC主任だけである。"
        ],
        [
          "(三)",
          "Zサービスのログの日時は，UTCで記録されている。"
        ],
        [
          "(四)",
          "Zサービスのログは，毎月末に全てエクスポートし，Yサーバに保管している。"
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-025",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "IoT で用いられる無線通信技術であり，近距離のIT 機器同士が通信する無線PAN（Personal Area Network）と呼ばれるネットワークに利用されるものはどれか。",
    "choices": [
      "BLE（Bluetooth Low Energy）",
      "LTE（Long Term Evolution）",
      "PLC（Power Line Communication）",
      "PPP（Point-to-Point Protocol）"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "近距離の無線PANにはBLEが使われる。",
      "detail": "BLEはBluetoothの低消費電力方式。LTEは携帯電話網の広域通信、PLCは電力線通信、PPPは2点間の通信プロトコルであり無線PANの規格ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 25,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問25; docs/expansion-review.json バッチ1",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-026",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "1.5 M ビット／秒の伝送路を用いて12 M バイトのデータを転送するのに必要な伝送時間は何秒か。ここで，伝送路の伝送効率を50％とする。",
    "choices": [
      "16",
      "32",
      "64",
      "128"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "データ量をビットへ直し、実効速度で割ると128秒。",
      "detail": "12Mバイトは96Mビット。実効速度は1.5Mビット/秒×0.5=0.75Mビット/秒なので96÷0.75=128秒。8倍の単位換算と50%の伝送効率の両方を反映する必要がある。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 26,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問26; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-027",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "TCP/IP を利用している環境で，電子メールに画像データなどを添付するための規格はどれか。",
    "choices": [
      "JPEG",
      "MIME",
      "MPEG",
      "SMTP"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "電子メールで画像等を扱う拡張規格はMIME。",
      "detail": "MIMEは本文の形式や添付データの型・符号化を表す。JPEGは静止画、MPEGは動画等の符号化方式。SMTPはメール転送のプロトコルであり、添付形式を定めるMIMEとは役割が違う。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 27,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問27; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-028",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "トランスポート層のプロトコルであり，信頼性よりもリアルタイム性が重視される場合に用いられるものはどれか。",
    "choices": [
      "HTTP",
      "IP",
      "TCP",
      "UDP"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "リアルタイム性を重視するトランスポート層プロトコルはUDP。",
      "detail": "UDPはコネクション確立や再送・順序制御を基本機能に持たず遅延を抑えやすい。TCPは信頼性を重視する。HTTPはアプリケーション層、IPはインターネット層のプロトコルである。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 28,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問28; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-029",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "PCとWebサーバがHTTPで通信している。PCからWebサーバ宛てのパケットでは，送信元ポート番号はPC側で割り当てた50001，宛先ポート番号は80であった。WebサーバからPCへの戻りのパケットでのポート番号の組合せはどれか。",
    "choices": [
      "宛先（PC）：50001，送信元（Webサーバ）：80",
      "宛先（PC）：80，送信元（Webサーバ）：50001",
      "宛先（PC）：80，送信元（Webサーバ）：80と50001以外からサーバ側で割り当てた番号",
      "宛先（PC）：50001，送信元（Webサーバ）：80と50001以外からサーバ側で割り当てた番号"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "戻りパケットは送信元80、宛先50001。",
      "detail": "往路の宛先であるサーバの80番ポートが復路の送信元となり、往路の送信元であるPCの50001番が復路の宛先となる。PC側が選んだ番号をサーバが別の番号へ付け替えるわけではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 29,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。選択肢の表は列名付き文字列に転記。原本の列順（送信元・宛先）と対応を照合。内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問29; docs/expansion-review.json バッチ1",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-030",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "緊急事態を装って組織内部の人間からパスワードや機密情報を入手する不正な行為は，どれに分類されるか。",
    "choices": [
      "ソーシャルエンジニアリング",
      "トロイの木馬",
      "踏み台攻撃",
      "ブルートフォース攻撃"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "人の心理や判断の隙を突く情報入手はソーシャルエンジニアリング。",
      "detail": "緊急事態などを装い、技術的な脆弱性ではなく人を欺いて秘密を聞き出す。トロイの木馬は有用なソフトを装う不正プログラム、踏み台攻撃は他の機器の悪用、ブルートフォースは総当たりである。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 30,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問30; docs/expansion-review.json バッチ1",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-031",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ボットネットにおけるC&C サーバの役割として，適切なものはどれか。",
    "choices": [
      "Web サイトのコンテンツをキャッシュし，本来のサーバに代わってコンテンツを利用者に配信することによって，ネットワークやサーバの負荷を軽減する。",
      "外部からインターネットを経由して社内ネットワークにアクセスする際に，CHAPなどのプロトコルを中継することによって，利用者認証時のパスワードの盗聴を防止する。",
      "外部からインターネットを経由して社内ネットワークにアクセスする際に，時刻同期方式を採用したワンタイムパスワードを発行することによって，利用者認証時のパスワードの盗聴を防止する。",
      "侵入して乗っ取ったコンピュータに対して，他のコンピュータへの攻撃などの不正な操作をするよう，外部から命令を出したり応答を受け取ったりする。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "C&Cサーバは乗っ取ったコンピュータへ命令を送る。",
      "detail": "Command and Controlとしてボットを制御し、命令や応答をやり取りする。アはコンテンツ配信負荷の分散、イは認証プロトコル中継、ウはワンタイムパスワード発行であり、ボットの不正操作の指令ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 31,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問31; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-032",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "メッセージ認証符号の利用目的に該当するものはどれか。",
    "choices": [
      "メッセージが改ざんされていないことを確認する。",
      "メッセージの暗号化方式を確認する。",
      "メッセージの概要を確認する。",
      "メッセージの秘匿性を確保する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "メッセージ認証符号は改ざんの有無の確認に使う。",
      "detail": "共有した秘密鍵とメッセージから認証符号を計算し、受信側で照合する。暗号化方式やメッセージの概要を調べるものではなく、符号の付加だけで本文の秘匿性を確保するものでもない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 32,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問32; docs/expansion-review.json バッチ1",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-033",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "UPS の導入によって期待できる情報セキュリティ対策としての効果はどれか。",
    "choices": [
      "PC が電力線通信（PLC）からマルウェアに感染することを防ぐ。",
      "サーバと端末間の通信における情報漏えいを防ぐ。",
      "電源の瞬断に起因するデータの破損を防ぐ。",
      "電子メールの内容が改ざんされることを防ぐ。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "UPSは瞬断時の給電を補い、データ破損の防止に役立つ。",
      "detail": "無停電電源装置は停電や瞬断の際に蓄電池等から電源を供給し、安全な停止等の時間を確保する。PLC経由のマルウェア感染、通信の漏えい、メールの改ざんを直接防止する装置ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 33,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問33; docs/expansion-review.json バッチ1",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-034",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ファジングに該当するものはどれか。",
    "choices": [
      "サーバにFIN パケットを送信し，サーバからの応答を観測して，稼働しているサービスを見つけ出す。",
      "サーバのOS やアプリケーションソフトウェアが生成したログやコマンド履歴などを解析して，ファイルサーバに保存されているファイルの改ざんを検知する。",
      "ソフトウェアに，問題を引き起こしそうな多様なデータを入力し，挙動を監視して，脆 弱性を見つけ出す。",
      "ネットワーク上を流れるパケットを収集し，そのプロトコルヘッダやペイロードを解析して，あらかじめ登録された攻撃パターンと一致するものを検出する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "問題を起こしそうな入力で挙動を調べるのがファジング。",
      "detail": "境界値や不正形式等の多様なデータをソフトウェアに入力し、異常終了などから脆弱性を探す。アはポートスキャン、イはログ等の解析、エはパケットの攻撃パターン検知である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 34,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問34; docs/expansion-review.json バッチ1",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-035",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "マルウェアの動的解析に該当するものはどれか。",
    "choices": [
      "検体のハッシュ値を計算し，オンラインデータベースに登録された既知のマルウェアのハッシュ値のリストと照合してマルウェアを特定する。",
      "検体をサンドボックス上で実行し，その動作や外部との通信を観測する。",
      "検体をネットワーク上の通信データから抽出し，さらに，逆コンパイルして取得したコードから検体の機能を調べる。",
      "ハードディスク内のファイルの拡張子とファイルヘッダの内容を基に，拡張子が偽装された不正なプログラムファイルを検出する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "動的解析は検体を実行して挙動や通信を観測する。",
      "detail": "隔離されたサンドボックスで実際の動作を観察するイが該当する。ハッシュ照合、逆コンパイルしたコードの調査、拡張子とヘッダの比較は、検体を実行してその動きを見る手段ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 35,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問35; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-036",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "SQL インジェクション攻撃による被害を防ぐ方法はどれか。",
    "choices": [
      "入力された文字が，データベースへの問合せや操作において，特別な意味をもつ文字として解釈されないようにする。",
      "入力にHTML タグが含まれていたら，HTML タグとして解釈されない他の文字列に置き換える。",
      "入力に上位ディレクトリを指定する文字列（ . . / ）が含まれているときは受け付けない。",
      "入力の全体の長さが制限を超えているときは受け付けない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "入力をSQLの命令として解釈させないことが対策となる。",
      "detail": "プレースホルダ等でSQLの構造と入力データを分離する。イのHTMLタグ処理は主にXSS、ウの上位ディレクトリ指定拒否はパストラバーサルへの対策。エの長さ制限だけではSQLの不正解釈を防げない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 36,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問36; docs/expansion-review.json バッチ1",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-037",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "電子メールをドメインA の送信者がドメインB の宛先に送信するとき，送信者をドメインA のメールサーバで認証するためのものはどれか。",
    "choices": [
      "APOP",
      "POP3S",
      "S/MIME",
      "SMTP-AUTH"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "送信元メールサーバで送信者を認証するのはSMTP-AUTH。",
      "detail": "SMTPによるメール送信に認証を追加する仕組みである。APOPとPOP3Sはメール受信に関係し、S/MIMEはメール内容の暗号化や電子署名に関係する。送信時のサーバ認証とは区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 37,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問37; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-038",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "オブジェクト指向プログラムにおいて，データとメソッドを一つにまとめ，オブジェクトの実装の詳細をユーザから見えなくすることを何と呼ぶか。",
    "choices": [
      "インスタンス",
      "カプセル化",
      "クラスタ化",
      "抽象化"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "データとメソッドをまとめ実装を隠すのがカプセル化。",
      "detail": "外部へ公開する操作と内部実装を分け、内部データへの不適切な操作を抑える。インスタンスはクラスから生成された実体、クラスタ化は集合化、抽象化は重要な性質の抽出という、より一般的な概念である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 38,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問38; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "アルゴリズムとプログラミング"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-039",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "モジュール結合度が最も弱くなるものはどれか。",
    "choices": [
      "一つのモジュールで，できるだけ多くの機能を実現する。",
      "二つのモジュール間で必要なデータ項目だけを引数として渡す。",
      "他のモジュールとデータ項目を共有するためにグローバルな領域を使用する。",
      "他のモジュールを呼び出すときに，呼び出したモジュールの論理を制御するための引数を渡す。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "必要なデータ項目だけを引数で渡すと結合度が弱くなる。",
      "detail": "必要最小限のデータだけを渡すデータ結合は依存を減らす。グローバル領域の共有や相手の処理を制御するフラグの受渡しは依存が強い。一つのモジュールへ多くの機能を詰め込むことも疎結合の実現ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 39,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問39; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム開発技術"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-040",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "モジュールの内部構造を考慮することなく，仕様書どおりに機能するかどうかをテストする手法はどれか。",
    "choices": [
      "トップダウンテスト",
      "ブラックボックステスト",
      "ボトムアップテスト",
      "ホワイトボックステスト"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "内部構造を考慮せず仕様への適合を見るのはブラックボックステスト。",
      "detail": "入力に対する出力など、外部から観測できる機能を仕様に基づき検証する。ホワイトボックステストは内部の分岐や経路を考慮する。トップダウンとボトムアップは主に結合テストの進め方である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 40,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問40; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム開発技術"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-041",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "アジャイル開発のスクラムにおけるスプリントのルールのうち，適切なものはどれか。",
    "choices": [
      "スプリントの期間を決定したら，スプリントの1 回目には要件定義工程を，2 回目には設計工程を，3 回目にはコード作成工程を，4 回目にはテスト工程をそれぞれ割り当てる。",
      "成果物の内容を確認するスプリントレビューを，スプリントの期間の中間時点で実施する。",
      "プロジェクトで設定したスプリントの期間でリリース判断が可能なプロダクトインクリメントができるように，スプリントゴールを設定する。",
      "毎回のスプリントプランニングにおいて，スプリントの期間をゴールの難易度に応じて，1 週間から1 か月までの範囲に設定する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "スプリントで利用可能なインクリメントを作れるゴールを設定する。",
      "detail": "スクラムは短い固定期間で機能を完成させる。アの工程ごとの分割は完成品を遅らせる。レビューはスプリントの終わりに行い、スプリント期間はゴールごとに伸縮させるのでなく一貫性を保つ。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 41,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問41; docs/expansion-review.json バッチ1",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア開発管理技術"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-042",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "プロジェクトライフサイクルの一般的な特性はどれか。",
    "choices": [
      "開発要員数は，プロジェクト開始時が最多であり，プロジェクトが進むにつれて減少し，完了に近づくと再度増加する。",
      "ステークホルダがコストを変えずにプロジェクトの成果物に対して及ぼすことができる影響の度合いは，プロジェクト完了直前が最も大きくなる。",
      "プロジェクトが完了に近づくほど，変更やエラーの修正がプロジェクトに影響する度合いは小さくなる。",
      "リスクは，プロジェクトが完了に近づくにつれて減少する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "不確実性が解消するため、通常リスクは完了に近づくほど減る。",
      "detail": "要員は一般に開始時に少なく、中盤で増え、終盤に減る。成果物への影響力は初期に大きい。後半の変更や誤りの修正ほど費用等への影響が大きくなりやすいので、ア・イ・ウは逆の説明である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 42,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問42; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "プロジェクトマネジメント"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-043",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "ソフトウェア開発の見積方法の一つであるファンクションポイント法の説明として，適切なものはどれか。",
    "choices": [
      "開発規模が分かっていることを前提として，工数と工期を見積もる方法である。ビジネス分野に限らず，全分野に適用可能である。",
      "過去に経験した類似のソフトウェアについてのデータを基にして，ソフトウェアの相違点を調べ，同じ部分については過去のデータを使い，異なった部分は経験に基づいて，規模と工数を見積もる方法である。",
      "ソフトウェアの機能を入出力データ数やファイル数などによって定量的に計測し，複雑さによる調整を行って，ソフトウェア規模を見積もる方法である。",
      "単位作業項目に適用する作業量の基準値を決めておき，作業項目を単位作業項目まで分解し，基準値を適用して算出した作業量の積算で全体の作業量を見積もる方法である。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "ファンクションポイント法は機能量を基に規模を見積もる。",
      "detail": "入力・出力・ファイル等を数え、複雑さで調整して機能の規模を求める。アは規模を前提にした工数・工期のモデル、イは類推、エは作業分解による積上げの説明であり、機能量の計測とは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 43,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問43; docs/expansion-review.json バッチ1",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "プロジェクトマネジメント"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-045",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "サービスマネジメントのプロセス改善におけるベンチマーキングはどれか。",
    "choices": [
      "IT サービスのパフォーマンスを財務，顧客，内部プロセス，学習と成長の観点から測定し，戦略的な活動をサポートする。",
      "業界内外の優れた業務方法（ベストプラクティス）と比較して，サービス品質及びパフォーマンスのレベルを評価する。",
      "サービスのレベルで可用性，信頼性，パフォーマンスを測定し，顧客に報告する。",
      "強み，弱み，機会，脅威の観点からIT サービスマネジメントの現状を分析する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "ベンチマーキングは優れた業務方法との比較評価。",
      "detail": "業界内外のベストプラクティスと比べて改善点を見つける。アはバランススコアカードの観点、ウはサービスレベルの測定・報告、エはSWOT分析であり、他組織の優良事例との比較ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 45,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問45; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "サービスマネジメント"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-046",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "ディスク障害時に，フルバックアップを取得してあるテープからディスクにデータを復元した後，フルバックアップ取得時以降の更新後コピーをログから反映させてデータベースを回復する方法はどれか。",
    "choices": [
      "チェックポイントリスタート",
      "リブート",
      "ロールバック",
      "ロールフォワード"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "更新後コピーを適用して前進回復するのはロールフォワード。",
      "detail": "フルバックアップ時点へ戻した後、ログにある更新後の情報を順に反映する。ロールバックは更新前へ戻す処理。チェックポイントリスタートは再開の仕組み、リブートはシステム再起動である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 46,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問46; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "サービスマネジメント"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-047",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "経営者が社内のシステム監査人の外観上の独立性を担保するために講じる措置として，最も適切なものはどれか。",
    "choices": [
      "システム監査人にIT に関する継続的学習を義務付ける。",
      "システム監査人に必要な知識や経験を定めて公表する。",
      "システム監査人の監査技法研修制度を設ける。",
      "システム監査人の所属部署を内部監査部門とする。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "監査対象部門から独立した内部監査部門へ所属させる。",
      "detail": "所属関係は外部から見た独立性の判断材料になる。継続学習、知識・経験の公表、監査技法研修は能力の維持・向上には有効だが、組織上の外観上の独立性を担保する措置ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 47,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問47; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム監査"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-048",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "情報セキュリティ監査において，可用性を確認するチェック項目はどれか。",
    "choices": [
      "外部記憶媒体の無断持出しが禁止されていること",
      "中断時間を定めたSLA の水準が保たれるように管理されていること",
      "データ入力時のエラーチェックが適切に行われていること",
      "データベースが暗号化されていること"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "中断時間のSLA水準を保つ管理は可用性の確認。",
      "detail": "可用性は必要なとき利用できること。中断時間や稼働率が関係する。媒体持出し禁止と暗号化は主に機密性、入力時のエラーチェックは主に完全性に関する確認である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 48,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問48; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム監査"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-049",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "テレワークで活用しているVDI に関する記述として，適切なものはどれか。",
    "choices": [
      "PC 環境を仮想化してサーバ上に置くことで，社外から端末の種類を選ばず自分のデスクトップPC 環境として利用できるシステム",
      "インターネット上に仮想の専用線を設定し，特定の人だけが利用できる専用ネットワーク",
      "紙で保管されている資料を，ネットワークを介して遠隔地からでも参照可能な電子書類に変換・保存することができるツール",
      "対面での会議開催が困難な場合に，ネットワークを介して対面と同じようなコミュニケーションができるツール"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "VDIはサーバ上で仮想化したデスクトップ環境を使う仕組み。",
      "detail": "端末へ画面等を転送してリモートから自分のPC環境として操作する。イはVPN、ウは文書の電子化・保存、エはオンライン会議に対応し、デスクトップの仮想化そのものではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 49,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問49; docs/expansion-review.json バッチ1",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム戦略"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-051",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "国や地方公共団体が，環境への配慮を積極的に行っていると評価されている製品・サービスを選んでいる。この取組を何というか。",
    "choices": [
      "CSR",
      "エコマーク認定",
      "環境アセスメント",
      "グリーン購入"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "環境に配慮した製品等を優先して選ぶのはグリーン購入。",
      "detail": "国等が環境負荷の小さい製品・サービスを選択する購買行動である。CSRは企業の社会的責任全般、エコマーク認定は環境表示の認定、環境アセスメントは環境影響の事前評価である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 51,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問51; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-053",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "新しい事業に取り組む際の手法として，E.リースが提唱したリーンスタートアップの説明はどれか。",
    "choices": [
      "国・地方公共団体など，公共機関の補助金・助成金の交付を前提とし，事前に詳細な事業計画を検討・立案した上で，公共性のある事業を立ち上げる手法",
      "市場環境の変化によって競争力を喪失した事業分野に対して，経営資源を大規模に追加投入し，リニューアルすることによって，基幹事業として再出発を期す手法",
      "持続可能な事業を迅速に構築し，展開するために，あらかじめ詳細に立案された事業計画を厳格に遂行して，成果の検証や計画の変更を最小限にとどめる手法",
      "実用最小限の製品・サービスを短期間で作り，構築・計測・学習というフィードバックループで改良や方向転換をして，継続的にイノベーションを行う手法"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "リーンスタートアップは最小限の製品で構築・計測・学習を回す。",
      "detail": "顧客から得る検証結果を基に改良や方向転換を行い、不確実性の高い新事業を学習しながら育てる。補助金の前提、大規模な再投資、計画の厳格固定は、この学習重視の手法の説明ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 53,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問53; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-054",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "IoT の応用事例のうち，HEMS の説明はどれか。",
    "choices": [
      "工場内の機械に取り付けたセンサで振動，温度，音などを常時計測し，収集したデータを基に機械の劣化状態を分析して，適切なタイミングで部品を交換する。",
      "自動車に取り付けたセンサで車両の状態，路面状況などのデータを計測し，ネットワークを介して保存し分析することによって，効率的な運転を支援する。",
      "情報通信技術や環境技術を駆使して，街灯などの公共設備や交通システムをはじめとする都市基盤のエネルギーの可視化と消費の最適制御を行う。",
      "太陽光発電装置などのエネルギー機器，家電機器，センサ類などを家庭内通信ネットワークに接続して，エネルギーの可視化と消費の最適制御を行う。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "HEMSは家庭のエネルギーを可視化・最適制御する。",
      "detail": "Home Energy Management Systemであり、家庭内の機器やセンサをネットワークでつなぐ。アは工場設備の予知保全、イは車両データの活用、ウは都市基盤の制御で、対象範囲が家庭ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 54,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問54; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-055",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ロングテールの説明はどれか。",
    "choices": [
      "Web コンテンツを構成するテキストや画像などのデジタルコンテンツに，統合的・体系的な管理，配信などの必要な処理を行うこと",
      "インターネットショッピングで，売上の全体に対して，あまり売れない商品群の売上合計が無視できない割合になっていること",
      "自分のWeb サイトやブログに企業へのリンクを掲載し，他者がこれらのリンクを経由して商品を購入したときに，企業が紹介料を支払うこと",
      "メーカや卸売業者から商品を直接発送することによって，在庫リスクを負うことなく自分のWeb サイトで商品が販売できること"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "ロングテールは少量販売商品の売上合計が大きな割合になる現象。",
      "detail": "インターネット販売では品ぞろえを広げやすく、個別には売れにくい多数の商品も合計すると重要な売上を生む。アはコンテンツ管理、ウはアフィリエイト、エはドロップシッピングの説明である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 55,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問55; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-056",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "CGM（Consumer Generated Media）の例はどれか。",
    "choices": [
      "企業が，経営状況や財務状況，業績動向に関する情報を，個人投資家向けに公開する自社のWeb サイト",
      "企業が，自社の商品の特徴や使用方法に関する情報を，一般消費者向けに発信する自社のWeb サイト",
      "行政機関が，政策，行政サービスに関する情報を，一般市民向けに公開する自組織のWeb サイト",
      "個人が，自らが使用した商品などの評価に関する情報を，不特定多数に向けて発信するブログやSNS などのWeb サイト"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "消費者自身が情報を作り発信するブログやSNSがCGMの例。",
      "detail": "Consumer Generated Mediaは利用者がコンテンツを生み出す媒体。企業による投資家向け情報や商品紹介、行政機関による公式情報は、それぞれの組織が発信する媒体であり消費者生成とは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 56,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問56; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-005",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "3 次元グラフィックス処理におけるクリッピングの説明はどれか。",
    "choices": [
      "CG 映像作成における最終段階として，物体のデータをディスプレイに描画できるように映像化する処理である。",
      "画像表示領域にウィンドウを定義し，ウィンドウの外側を除去し，内側の見える部分だけを取り出す処理である。",
      "スクリーンの画素数が有限であるために図形の境界近くに生じる，階段状のギザギザを目立たなくする処理である。",
      "立体感を生じさせるために，物体の表面に陰影を付ける処理である。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "クリッピングは表示領域の外を除き、見える部分を取り出す処理。",
      "detail": "アはレンダリング、ウはアンチエイリアシング、エはシェーディング。クリッピングは表示対象をウィンドウの内側へ切り取ることで、領域外の表示を除く。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 5,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問5; docs/expansion-review.json バッチ1",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "情報メディア"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-001",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次の記述中の【空欄】に入れる正しい答えを，解答群の中から選べ。\nプログラムを実行すると，“【空欄】”と出力される。",
    "choices": [
      "1,2",
      "1,3",
      "2,1",
      "2,3",
      "3,1",
      "3,2"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "代入後はy=3、z=2なので3,2と出力される。",
      "detail": "代入は同時交換ではない。x←yでxは2、y←zでyは3、z←xでzは更新後のxである2になる。初期値1を保持する変数はなく、他の出力の組合せにはならない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理し、疑似言語の字下げをコード表示へ転記。空欄は【空欄】又は【a】～【c】に置換。数式の平方根・指数をUnicode文字で表記。選択肢の表は列名付き文字列へ再配置。設問の条件・意味・選択肢順・正答は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問1; docs/expansion-review.json バッチ1",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "整数型: x ← 1\n整数型: y ← 2\n整数型: z ← 3\nx ← y\ny ← z\nz ← x\nyの値 と zの値 をこの順にコンマ区切りで出力する"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-002",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【a】～【c】に入れる正しい答えの組合せを，解答群の中から選べ。\n関数fizzBuzzは，引数で与えられた値が，3で割り切れて5で割り切れない場合は“3で割り切れる”を，5で割り切れて3で割り切れない場合は“5で割り切れる”を，3と5で割り切れる場合は“3と5で割り切れる”を返す。それ以外の場合は“3でも5でも割り切れない”を返す。",
    "choices": [
      "a：3，b：3と5，c：5",
      "a：3，b：5，c：3と5",
      "a：3と5，b：3，c：5",
      "a：5，b：3，c：3と5",
      "a：5，b：3と5，c：3"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "3と5の両方で割り切れる条件を先に判定する。",
      "detail": "15の倍数を先に扱わないと3又は5の分岐へ入り、両方という文字列を返せない。aを3と5、bを3、cを5とするウが適切。ほかは一方の条件が両方の条件より先にあり、15等で仕様と異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 2,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理し、疑似言語の字下げをコード表示へ転記。空欄は【空欄】又は【a】～【c】に置換。数式の平方根・指数をUnicode文字で表記。選択肢の表は列名付き文字列へ再配置。設問の条件・意味・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問2; docs/expansion-review.json バッチ1",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○文字列型: fizzBuzz(整数型: num)\n  文字列型: result\n  if (num が 【a】 で割り切れる)\n    result ← \"【a】で割り切れる\"\n  elseif (num が 【b】 で割り切れる)\n    result ← \"【b】で割り切れる\"\n  elseif (num が 【c】 で割り切れる)\n    result ← \"【c】で割り切れる\"\n  else\n    result ← \"3でも5でも割り切れない\"\n  endif\n  return result"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-003",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次の記述中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1から始まる。\n関数makeNewArrayは，要素数2以上の整数型の配列を引数にとり，整数型の配列を返す関数である。関数makeNewArrayをmakeNewArray({3, 2, 1, 6, 5, 4})として呼び出したとき，戻り値の配列の要素番号5の値は【空欄】となる。",
    "choices": [
      "5",
      "6",
      "9",
      "11",
      "12",
      "17",
      "21"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "戻り値は累積和の配列で、要素番号5は17。",
      "detail": "outは最初3。以後直前の累積和に入力の次の要素を加えるので3,5,6,12,17,21となる。5は要素2、6は要素3、12は要素4、21は要素6であり、問われた要素5は17。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 3,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理し、疑似言語の字下げをコード表示へ転記。空欄は【空欄】又は【a】～【c】に置換。数式の平方根・指数をUnicode文字で表記。選択肢の表は列名付き文字列へ再配置。設問の条件・意味・選択肢順・正答は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問3; docs/expansion-review.json バッチ1",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○整数型の配列: makeNewArray(整数型の配列: in)\n  整数型の配列: out ← {}  // 要素数0の配列\n  整数型: i, tail\n  outの末尾 に in[1]の値 を追加する\n  for (i を 2 から inの要素数 まで 1ずつ増やす)\n    tail ← out[outの要素数]\n    outの末尾 に (tail ＋ in[i])の結果 を追加する\n  endfor\n  return out"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-004",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【a】～【c】に入れる正しい答えの組合せを，解答群の中から選べ。\n関数gcdは，引数で与えられた二つの正の整数num1とnum2の最大公約数を，次の(1)～(3)の性質を利用して求める。\n(1) num1とnum2が等しいとき，最大公約数はnum1である。\n(2) num1がnum2より大きいとき，最大公約数は(num1－num2)とnum2の最大公約数と等しい。\n(3) num2がnum1より大きいとき，最大公約数は(num2－num1)とnum1の最大公約数と等しい。",
    "choices": [
      "a：if (x ≠ y)，b：x ＜ y，c：endif",
      "a：if (x ≠ y)，b：x ＞ y，c：endif",
      "a：while (x ≠ y)，b：x ＜ y，c：endwhile",
      "a：while (x ≠ y)，b：x ＞ y，c：endwhile"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "等しくなるまで大きい方から小さい方を繰り返し引く。",
      "detail": "aはwhile(x≠y)、bはx＞y、cはendwhile。ifでは一度しか減算できず、大小判定を逆にすると小さい方から大きい方を引いて正の値を保てない。エだけが示された最大公約数の性質を繰り返し適用する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 4,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理し、疑似言語の字下げをコード表示へ転記。空欄は【空欄】又は【a】～【c】に置換。数式の平方根・指数をUnicode文字で表記。選択肢の表は列名付き文字列へ再配置。設問の条件・意味・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問4; docs/expansion-review.json バッチ1",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○整数型: gcd(整数型: num1, 整数型: num2)\n  整数型: x ← num1\n  整数型: y ← num2\n  【a】\n    if (【b】)\n      x ← x － y\n    else\n      y ← y － x\n    endif\n  【c】\n  return x"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-005",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。\n関数calcは，正の実数xとyを受け取り，√(x²＋y²)の計算結果を返す。関数calcが使う関数powは，第1引数として正の実数aを，第2引数として実数bを受け取り，aのb乗の値を実数型で返す。",
    "choices": [
      "(pow(x, 2) ＋ pow(y, 2)) ÷ pow(2, 0.5)",
      "(pow(x, 2) ＋ pow(y, 2)) ÷ pow(x, y)",
      "pow(2, pow(x, 0.5)) ＋ pow(2, pow(y, 0.5))",
      "pow(pow(pow(2, x), y), 0.5)",
      "pow(pow(x, 2) ＋ pow(y, 2), 0.5)",
      "pow(x, 2) × pow(y, 2) ÷ pow(x, y)",
      "pow(x, y) ÷ pow(2, 0.5)"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ"
    ],
    "answer": 4,
    "explanation": {
      "brief": "xとyの二乗和の平方根なので、外側のpowの指数を0.5とする。",
      "detail": "求める値はsqrt(x²+y²)。pow(x,2)とpow(y,2)を足し、その全体をpow( ,0.5)で平方根にするオが一致する。他は2の平方根で割る、xのy乗で割る、2のべき乗を作る、積を作るなどで二乗和の平方根にはならない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 5,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理し、疑似言語の字下げをコード表示へ転記。空欄は【空欄】又は【a】～【c】に置換。数式の平方根・指数をUnicode文字で表記。選択肢の表は列名付き文字列へ再配置。設問の条件・意味・選択肢順・正答は維持。",
      "answerKey": {
        "label": "オ",
        "index": 4
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問5; docs/expansion-review.json バッチ1",
        "answerIndex": 4,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○実数型: calc(実数型: x, 実数型: y)\n  return 【空欄】"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-001",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "負数を2 の補数で表すとき，8 ビットの2 進正数n に対し－n を求める式はどれか。ここで，＋は加算を表し，OR はビットごとの論理和，XOR はビットごとの排他的論理和を表す。",
    "choices": [
      "(n OR 10000000) ＋ 00000001",
      "(n OR 11111110) ＋ 11111111",
      "(n XOR 10000000) ＋ 11111111",
      "(n XOR 11111111) ＋ 00000001"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "全ビット反転して1を加えると2の補数になる。",
      "detail": "n XOR 11111111で8ビット全てを反転し、1を加えるエが－nの表現。最上位ビットだけの操作やORでは下位を含む全ビットの反転にならず、一般のnに対して負数を得られない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問1; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-003",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "P，Q，Rはいずれも命題である。命題Pの真理値は真であり，命題(not P) or Q及び命題(not Q) or Rのいずれの真理値も真であることが分かっている。Q，Rの真理値はどれか。ここで，X or YはXとYの論理和，not XはXの否定を表す。",
    "choices": [
      "Q：偽，R：偽",
      "Q：偽，R：真",
      "Q：真，R：偽",
      "Q：真，R：真"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "Pが真なのでQも真、さらにRも真になる。",
      "detail": "Pが真ならnot Pは偽。not P or Qが真になるにはQが真である必要がある。続いてnot Qは偽なのでnot Q or Rを真にするにはRも真。偽を含む他の三組は条件を満たさない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 3,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白・ルビを整理。指数・添字をUnicode表記。図の位置番号をコード文字列、表又は表形式の選択肢を列名付きの表示へ転記。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問3; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-007",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "10進法で5桁の数a₁a₂a₃a₄a₅を，ハッシュ法を用いて配列に格納したい。ハッシュ関数をmod(a₁＋a₂＋a₃＋a₄＋a₅，13)とし，求めたハッシュ値に対応する位置の配列要素に格納する場合，54321は配列のどの位置に入るか。ここで，mod(x，13)は，xを13で割った余りとする。",
    "choices": [
      "1",
      "2",
      "7",
      "11"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "各桁の和15を13で割った余りは2。",
      "detail": "ハッシュ関数の入力は54321そのものではなく5+4+3+2+1=15。15 mod 13=2なので位置2へ格納する。1、7、11はこの桁和と剰余を計算した結果ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 7,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白・ルビを整理。指数・添字をUnicode表記。図の位置番号をコード文字列、表又は表形式の選択肢を列名付きの表示へ転記。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問7; docs/expansion-review.json バッチ2",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "位置：0, 1, 2, …, 11, 12",
    "subfield": "アルゴリズムとプログラミング"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-008",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "自然数n に対して，次のとおり再帰的に定義される関数 f (n) を考える。f (5) の値はどれか。f (n)： if  n≦1  then  return 1  else  return n ＋ f (n－1)",
    "choices": [
      "6",
      "9",
      "15",
      "25"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "f(5)は5+4+3+2+1=15。",
      "detail": "nが1以下で1、それ以外はnを一つ小さい引数の関数値に加える。f(2)=3、f(3)=6、f(4)=10、f(5)=15。掛け算による階乗でもnの二乗でもない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 8,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問8; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "アルゴリズムとプログラミング"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-009",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "プログラムのコーディング規約に規定する事項のうち，適切なものはどれか。",
    "choices": [
      "局所変数は，用途が異なる場合でもデータ型が同じならば，できるだけ同一の変数を使うようにする。",
      "処理性能を向上させるために，ループの制御変数には浮動小数点型変数を使用する。",
      "同様の計算を何度も繰り返すときは，関数の再帰呼出しを用いる。",
      "領域割付け関数を使用するときは，割付けができなかったときの処理を記述する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "領域割付けの失敗時に対処する処理を規定する。",
      "detail": "メモリ確保の失敗を無視せずエラー処理を行うことは信頼性に重要。用途の異なる変数の使い回しは可読性を損ない、浮動小数点の制御変数は誤差を招く。反復計算を常に再帰で行う必然性もない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 9,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問9; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム開発技術"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-010",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "外部割込みの原因となるものはどれか。",
    "choices": [
      "ゼロによる除算命令の実行",
      "存在しない命令コードの実行",
      "タイマーによる時間経過の通知",
      "ページフォールトの発生"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "タイマーからの時間経過通知は外部割込み。",
      "detail": "プログラムの実行内容とは独立にタイマー装置から発生する。ゼロ除算、不正な命令、ページフォールトは命令実行に伴う例外であり、内部割込みに分類される。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 10,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白・ルビを整理。指数・添字をUnicode表記。図の位置番号をコード文字列、表又は表形式の選択肢を列名付きの表示へ転記。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問10; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "コンピュータ構成要素"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-011",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "メモリのエラー検出及び訂正にECCを利用している。データバス幅2ⁿビットに対して冗長ビットがn＋2ビット必要なとき，128ビットのデータバス幅に必要な冗長ビットは何ビットか。",
    "choices": [
      "7",
      "8",
      "9",
      "10"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "128=2⁷なので冗長ビットは7+2=9。",
      "detail": "与えられた対応はデータ幅2ⁿに対して冗長n+2ビット。128ビットでは指数nが7だから9ビットとなる。データ幅128へ直接2を加えたり、nだけを答えたりしない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 11,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白・ルビを整理。指数・添字をUnicode表記。図の位置番号をコード文字列、表又は表形式の選択肢を列名付きの表示へ転記。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問11; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "コンピュータ構成要素"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-013",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "仮想化マシン環境を物理マシン20 台で運用しているシステムがある。次の運用条件のとき，物理マシンが最低何台停止すると縮退運転になるか。〔運用条件〕(1) 物理マシンが停止すると，そこで稼働していた仮想マシンは他の全ての物理マシンで均等に稼働させ，使用していた資源も同様に配分する。(2) 物理マシンが20 台のときに使用する資源は，全ての物理マシンにおいて70％である。(3)  1 台の物理マシンで使用している資源が90％を超えた場合，システム全体が縮退運転となる。(4)  (1) ～ (3) 以外の条件は考慮しなくてよい。",
    "choices": [
      "2",
      "3",
      "4",
      "5"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "5台停止すると使用率が90%を超える。",
      "detail": "総資源需要は物理マシン14台分。4台停止なら14/16=87.5%、5台停止なら14/15≒93.3%。90%を超える最初の停止台数は5台で、2～4台では縮退条件を満たさない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 13,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問13; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム構成要素"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-016",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "インタプリタの説明として，適切なものはどれか。",
    "choices": [
      "原始プログラムを，解釈しながら実行するプログラムである。",
      "原始プログラムを，推論しながら翻訳するプログラムである。",
      "原始プログラムを，目的プログラムに翻訳するプログラムである。",
      "実行可能なプログラムを，主記憶装置にロードするプログラムである。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "インタプリタは原始プログラムを解釈しながら実行する。",
      "detail": "コンパイラは原始プログラムを目的プログラムへ翻訳し、ローダは実行可能プログラムを主記憶へ読み込む。推論しながら翻訳するというイもインタプリタの定義ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 16,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問16; docs/expansion-review.json バッチ2",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-017",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "三つの媒体A ～ C に次の条件でファイル領域を割り当てた場合，割り当てた領域の総量が大きい順に媒体を並べたものはどれか。〔条件〕(1) ファイル領域を割り当てる際の媒体選択アルゴリズムとして，空き領域が最大の媒体を選択する方式を採用する。(2) 割当て要求されるファイル領域の大きさは，順に90，30，40，40，70，30（M バイト）であり，割り当てられたファイル領域は，途中で解放されない。(3) 各媒体は容量が同一であり，割当て要求に対して十分な大きさをもち，初めは全て空きの状態である。(4) 空き領域の大きさが等しい場合には，A，B，C の順に選択する。",
    "choices": [
      "A，B，C",
      "A，C，B",
      "B，A，C",
      "C，B，A"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "割当量はA90、B100、C110なので大きい順にC、B、A。",
      "detail": "空き領域最大の媒体は、それまでの割当量が最小の媒体。要求90,30,40,40,70,30を順にA,B,C,B,C,Bへ割り当てる。総量は90,100,110Mバイトで、順序はエ。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 17,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問17; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-018",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ファイルシステムの絶対パス名を説明したものはどれか。",
    "choices": [
      "あるディレクトリから対象ファイルに至る幾つかのパス名のうち，最短のパス名",
      "カレントディレクトリから対象ファイルに至るパス名",
      "ホームディレクトリから対象ファイルに至るパス名",
      "ルートディレクトリから対象ファイルに至るパス名"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "絶対パスはルートディレクトリを起点とする。",
      "detail": "カレントディレクトリからのパスは相対パス。ホームは利用者ごとの基準ディレクトリだがルートとは限らない。最短かどうかで絶対パスを定義するのでもない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 18,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問18; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ソフトウェア"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-019",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "DRAM の特徴はどれか。",
    "choices": [
      "書込み及び消去を一括又はブロック単位で行う。",
      "データを保持するためのリフレッシュ操作又はアクセス操作が不要である。",
      "電源が遮断された状態でも，記憶した情報を保持することができる。",
      "メモリセル構造が単純なので高集積化することができ，ビット単価を安くできる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "DRAMは単純なセル構造で高集積・低単価にしやすい。",
      "detail": "電荷を蓄えて記憶するのでリフレッシュが必要で、電源を切ると内容は失われる。アはフラッシュメモリ等の説明。リフレッシュ不要や不揮発というイ・ウはDRAMの特徴ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 19,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問19; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "コンピュータ構成要素"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-021",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "RDBMS におけるビューに関する記述のうち，適切なものはどれか。",
    "choices": [
      "ビューとは，名前を付けた導出表のことである。",
      "ビューに対して，ビューを定義することはできない。",
      "ビューの定義を行ってから，必要があれば，その基底表を定義する。",
      "ビューは一つの基底表に対して一つだけ定義できる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "ビューは名前を付けた導出表。",
      "detail": "基底表等に対する問合せで定義する論理的な表である。ビューを基に別のビューを定義でき、同じ基底表へ複数のビューを作ることもできる。基底表を後で定義するという順序も適切ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 21,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問21; docs/expansion-review.json バッチ2",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-023",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ビッグデータのデータ貯蔵場所であるデータレイクの特徴として，適切なものはどれか。",
    "choices": [
      "あらゆるデータをそのままの形式や構造で格納しておく。",
      "データ量を抑えるために，データの記述情報であるメタデータは格納しない。",
      "データを格納する前にデータ利用方法を設計し，それに沿ってスキーマをあらかじめ定義しておく。",
      "テキストファイルやバイナリデータなど，格納するデータの形式に応じてリポジトリを使い分ける。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "データレイクは様々なデータを元の形式・構造のまま保持する。",
      "detail": "利用時に必要な加工や構造化を行えるよう幅広いデータを蓄える。利用・管理にはメタデータも重要。事前に用途別スキーマへ整形するウや形式別に保管先を分けるエを特徴とするものではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 23,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問23; docs/expansion-review.json バッチ2",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-024",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "関係モデルにおいて表Xから表Yを得る関係演算はどれか。",
    "choices": [
      "結合（join）",
      "射影（projection）",
      "選択（selection）",
      "併合（merge）"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "列を取り出す関係演算は射影。",
      "detail": "表Yは表Xの全行から商品番号と数量だけを取り出した表である。行を絞るのは選択、複数表を関連付けるのは結合。併合というエでもなく、列の抽出に対応する射影が適切。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 24,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白・ルビを整理。指数・添字をUnicode表記。図の位置番号をコード文字列、表又は表形式の選択肢を列名付きの表示へ転記。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問24; docs/expansion-review.json バッチ2",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "表Y（商品番号, 数量）\n(A01, 20)\n(A02, 15)\n(B01, 8)\n(B05, 10)\n(B06, 5)",
    "table": {
      "headers": [
        "表",
        "商品番号",
        "商品名",
        "価格",
        "数量"
      ],
      "rows": [
        [
          "X",
          "A01",
          "カメラ",
          "13,000",
          20
        ],
        [
          "X",
          "A02",
          "テレビ",
          "58,000",
          15
        ],
        [
          "X",
          "B01",
          "冷蔵庫",
          "65,000",
          8
        ],
        [
          "X",
          "B05",
          "洗濯機",
          "48,000",
          10
        ],
        [
          "X",
          "B06",
          "乾燥機",
          "35,000",
          5
        ]
      ]
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-058",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "令和2 年4 月に30 万円で購入したPC を3 年後に1 万円で売却するとき，固定資産売却損は何万円か。ここで，耐用年数は4 年，減価償却は定額法，定額法の償却率は0.250，残存価額は0 円とする。",
    "choices": [
      "6.0",
      "6.5",
      "7.0",
      "7.5"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "3年後の帳簿価額7.5万円から売却額1万円を引き6.5万円の損。",
      "detail": "年間の償却額は30×0.250=7.5万円。3年分は22.5万円で残る帳簿価額は7.5万円。売却損は帳簿価額と売却額の差だから7.5−1=6.5万円。年額や帳簿価額そのものとは区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 58,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問58; docs/expansion-review.json バッチ2",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-A-059",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "売上高が100 百万円のとき，変動費が60 百万円，固定費が30 百万円掛かる。変動費率，固定費は変わらないものとして，目標利益18 百万円を達成するのに必要な売上高は何百万円か。",
    "choices": [
      "108",
      "120",
      "156",
      "180"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "限界利益率40%で固定費と目標利益の48を賄うには120。",
      "detail": "変動費率は60/100=0.6。売上高Sに対し利益はS−0.6S−30。これを18とすると0.4S=48、S=120百万円。変動費を固定額60として扱ったり売上へ目標増分だけ足したりしない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 59,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "5a95b05825d1bae7c5fac7e17b0d102e5559530869b9c281d1292d0ff5dd610e",
      "answerSha256": "8fc77eee0fb06280462663a4ad507472112841b91dbb47a7cb301bc31ec75de9"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_a_set_sample_ans.pdf 問59; docs/expansion-review.json バッチ2",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-001",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "16 進小数0.C を10 進小数に変換したものはどれか。",
    "choices": [
      "0.12",
      "0.55",
      "0.75",
      "0.84"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "16進小数0.Cは12/16=0.75。",
      "detail": "Cは16進数で12を表し、小数第1位の重みは16⁻¹。12×1/16=0.75である。Cを十進の小数12と読むことも、0.12とすることもできない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 1,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問1; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "基礎理論"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-003",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "コンピュータの高速化技術の一つであるメモリインタリーブに関する記述として，適切なものはどれか。",
    "choices": [
      "主記憶と入出力装置，又は主記憶同士のデータの受渡しをCPU 経由でなく直接やり取りする方式",
      "主記憶にデータを送り出す際に，データをキャッシュに書き込み，キャッシュがあふれたときに主記憶へ書き込む方式",
      "主記憶のデータの一部をキャッシュにコピーすることによって，レジスタと主記憶とのアクセス速度の差を縮める方式",
      "主記憶を複数の独立して動作するグループに分けて，各グループに並列にアクセスする方式"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "メモリインタリーブは独立したメモリ群への並列アクセス。",
      "detail": "主記憶を複数バンクに分けてアクセスを重ね、高速化する。アはDMA、イはキャッシュの書込み制御、ウはキャッシュによる速度差の緩和であり、複数メモリ群への並列アクセスではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 3,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問3; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "コンピュータ構成要素"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-004",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "エッジコンピューティングの説明として，最も適切なものはどれか。",
    "choices": [
      "画面生成やデータ処理をクライアント側で実行することによって，Web アプリケーションソフトウェアの操作性や表現力を高めること",
      "データが送信されてきたときだけ必要なサーバを立ち上げて，処理が終わり次第サーバを停止してリソースを解放すること",
      "複数のサーバやPC を仮想化して統合することによって一つの高性能なコンピュータを作り上げ，並列処理によって処理能力を高めること",
      "利用者や機器に取り付けられたセンサなどのデータ発生源に近い場所にあるサーバなどでデータを一次処理し，処理のリアルタイム性を高めること"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "データ発生源の近くで一次処理し即時性を高める。",
      "detail": "エッジ側で処理することでクラウド等への往復遅延や通信量を抑える。アはクライアント側のリッチな処理、イはイベントに応じたサーバ資源の起動停止、ウは複数計算機の統合であり、発生源付近での一次処理とは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 4,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問4; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム構成要素"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-006",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "次の関数従属を満足するとき，成立する推移的関数従属はどれか。ここで，“A→B”はB がA に関数従属していることを表し，“A→｛B，C｝”は，“A→B”かつ“A→C ”が成立することを表す。〔関数従属〕｛注文コード，商品コード｝→｛顧客注文数量，注文金額｝注文コード →｛注文日，顧客コード，注文担当者コード｝商品コード →｛商品名，仕入先コード，商品販売価格｝仕入先コード →｛仕入先名，仕入先住所，仕入担当者コード｝顧客コード →｛顧客名，顧客住所｝",
    "choices": [
      "仕入先コード → 仕入担当者コード → 仕入先住所",
      "商品コード → 仕入先コード → 商品販売価格",
      "注文コード → 顧客コード → 顧客住所",
      "注文コード → 商品コード → 顧客注文数量"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "注文コード→顧客コード→顧客住所が推移的に成立する。",
      "detail": "提示された関数従属に注文コード→顧客コードと顧客コード→顧客住所がある。ウの二段階が両方成り立つ。他は仕入担当者コード→仕入先住所、仕入先コード→商品販売価格、注文コード→商品コードのいずれかが提示されていない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 6,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問6; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-008",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "IPv4 ネットワークにおいて，ネットワークの疎通確認に使われるものはどれか。",
    "choices": [
      "BOOTP",
      "DHCP",
      "MIB",
      "ping"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "疎通確認にはpingを使う。",
      "detail": "pingはICMPのエコー要求・応答で到達性等を確認する。BOOTPとDHCPはアドレス等の設定、MIBは管理情報を表す。pingへの応答がない場合でも通信制御等の可能性があるが、設問の疎通確認用のものはping。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 8,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問8; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-009",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ドライブバイダウンロード攻撃に該当するものはどれか。",
    "choices": [
      "PC から物理的にハードディスクドライブを盗み出し，その中のデータをWeb サイトで公開し，ダウンロードさせる。",
      "電子メールの添付ファイルを開かせて，マルウェアに感染したPC のハードディスクドライブ内のファイルを暗号化し，元に戻すための鍵を攻撃者のサーバからダウンロードさせることと引換えに金銭を要求する。",
      "利用者が悪意のあるWeb サイトにアクセスしたときに，Web ブラウザの脆弱性を悪用して利用者のPC をマルウェアに感染させる。",
      "利用者に気付かれないように無償配布のソフトウェアに不正プログラムを混在させておき，利用者の操作によってPC にダウンロードさせ，インストールさせることでハードディスクドライブから個人情報を収集して攻撃者のサーバに送信する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "悪意のあるWebサイトへのアクセスを契機に脆弱性を悪用する。",
      "detail": "利用者が閲覧したブラウザ等の脆弱性を使ってマルウェアを導入するのがドライブバイダウンロード。物理的な窃取、身代金要求、ソフトウェアへ不正コードを混在させる方法とは区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 9,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問9; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-014",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "A 社では，従業員が自宅のPC からインターネット経由で自社のネットワークに接続して仕事を行うテレワーキングの実施を計画している。A 社が定めたテレワーキング運用規程について，情報セキュリティ管理基準（平成28 年）に従って監査を実施した。判明した事項のうち，監査人が，指摘事項として監査報告書に記載すべきものはどれか。",
    "choices": [
      "テレワーキング運用規程に従うことを条件に，全ての従業員が利用できる。",
      "テレワーキングで従業員が使用するPC は，A 社から支給されたものに限定する。",
      "テレワーキングで使用するPC へのマルウェア対策ソフト導入の要不要は，従業員それぞれが判断する。",
      "テレワーキングで使用するPC を，従業員の家族に使用させない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "マルウェア対策ソフトの要否を各従業員に任せる点を指摘する。",
      "detail": "組織として対策を要求・管理するべきであり、利用者の自由判断では対策が欠ける。規程に従う従業員の利用、会社支給PCへの限定、家族の利用禁止は管理策であり、示された選択肢ではウが問題となる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 14,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問14; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム監査"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-015",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ハイブリッドクラウドの説明はどれか。",
    "choices": [
      "クラウドサービスが提供している機能の一部を，自社用にカスタマイズして利用すること",
      "クラウドサービスのサービス内容を，消費者向けと法人向けの両方を対象とするように構成して提供すること",
      "クラウドサービスのサービス内容を，有償サービスと無償サービスとに区分して提供すること",
      "自社専用に使用するクラウドサービスと，汎用のクラウドサービスとの間でデータ及びアプリケーションソフトウェアの連携や相互運用が可能となる環境を提供すること"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "専用クラウドと汎用クラウドを連携・相互運用する環境。",
      "detail": "ハイブリッドクラウドはプライベートとパブリック等を組み合わせる。機能の一部のカスタマイズ、消費者と法人向けの提供、有償と無償の区分だけでは、異なるクラウド環境の連携を表していない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 15,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問15; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム戦略"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-016",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ダイバーシティマネジメントの説明はどれか。",
    "choices": [
      "従業員が仕事と生活の調和を図り，やりがいをもって業務に取り組み，組織の活力を向上させることである。",
      "性別や年齢，国籍などの面で従業員の多様性を尊重することによって，組織の活力を向上させることである。",
      "自ら設定した目標の達成を目指して従業員が主体的に業務に取り組み，その達成度に応じて評価が行われることである。",
      "労使双方が労働条件についての合意を形成し，協調して収益の増大を目指すことである。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "従業員の多様性を尊重し組織の活力へつなげる。",
      "detail": "ダイバーシティは性別・年齢・国籍などの多様性を意味する。アは仕事と生活の調和、ウは目標管理、エは労使の協調であり、多様性の尊重そのものの説明ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 16,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問16; docs/expansion-review.json バッチ2",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-017",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ERP を説明したものはどれか。",
    "choices": [
      "営業活動にIT を活用して営業の効率と品質を高め，売上・利益の大幅な増加や，顧客満足度の向上を目指す手法・概念である。",
      "卸売業・メーカが小売店の経営活動を支援することによって，自社との取引量の拡大につなげる手法・概念である。",
      "企業全体の経営資源を有効かつ総合的に計画して管理し，経営の効率向上を図るための手法・概念である。",
      "消費者向けや企業間の商取引を，インターネットなどの電子的なネットワークを活用して行う手法・概念である。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "ERPは企業全体の経営資源を総合的に計画・管理する。",
      "detail": "部門ごとの最適化だけでなく企業全体の資源を有効に活用する考え方。アは営業支援、イは小売支援、エは電子商取引に対応する。ERPはそれら個別業務に範囲を限定しない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 17,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問17; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-018",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "イノベータ理論では，消費者を新製品の購入時期によって，イノベータ，アーリーアダプタ，アーリーマジョリティ，レイトマジョリティ，ラガードの五つに分類する。アーリーアダプタの説明として，適切なものはどれか。",
    "choices": [
      "新しい製品及び新技術の採用には懐疑的で，周囲の大多数が採用している場面を見てから採用する層",
      "新商品，サービスなどを，リスクを恐れず最も早い段階で受容する層",
      "新商品，サービスなどを早期に受け入れ，消費者に大きな影響を与える層であり，流行に敏感で，自ら情報収集を行い判断する層",
      "世の中の動きに関心が薄く，流行が一般化してからそれを採用することが多い層であり，場合によっては不採用を貫く，最も保守的な層"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "アーリーアダプタは早期に受容し周囲へ強い影響を与える層。",
      "detail": "イの最も早くリスクを恐れず受容する層はイノベータ。アの大多数の採用後に動く層はレイトマジョリティ、エの最も保守的な層はラガード。早期受容と他の消費者への影響を述べるウが適切。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 18,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問18; docs/expansion-review.json バッチ2",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-019",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "CIO の説明はどれか。",
    "choices": [
      "経営戦略の立案及び業務執行を統括する最高責任者",
      "資金調達，財務報告などの財務面での戦略策定及び執行を統括する最高責任者",
      "自社の技術戦略や研究開発計画の立案及び執行を統括する最高責任者",
      "情報管理，情報システムに関する戦略立案及び執行を統括する最高責任者"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "CIOは情報管理・情報システムの戦略と執行の最高責任者。",
      "detail": "Chief Information Officerの役割。アは経営全体を統括するCEO、イは財務を統括するCFO、ウは技術戦略を統括するCTOに対応する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 19,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問19; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム戦略"
  },
  {
    "id": "IPA-FE-2023-KOUKAI-A-020",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ボリュームライセンス契約の説明はどれか。",
    "choices": [
      "企業などソフトウェアの大量購入者向けに，インストールできる台数をあらかじめ取り決め，ソフトウェアの使用を認める契約",
      "使用場所を限定した契約であり，特定の施設の中であれば台数や人数に制限なく使用が許される契約",
      "ソフトウェアをインターネットからダウンロードしたとき画面に表示される契約内容に同意するを選択することによって，使用が許される契約",
      "標準の使用許諾条件を定め，その範囲で一定量のパッケージの包装を解いたときに，権利者と購入者との間に使用許諾契約が自動的に成立したとみなす契約"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "大量購入者向けに利用台数等を取り決める契約。",
      "detail": "ボリュームライセンスは企業等がまとまった数のライセンスを契約する方式。イはサイトライセンス、ウはクリックによる同意、エは包装の開封を同意とみなすシュリンクラップに対応し、契約台数をまとめる説明とは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目A 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 20,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "a381b2d4e1d1297b24adde48ca29dc9b5e9da533b831963cbf0756191f400181",
      "answerSha256": "6a4c8b5a4852dd71dd641a8ab8824d54a4995e211e6660d7d14298bae8e2d473"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_a_ans.pdf 問20; docs/expansion-review.json バッチ2",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "法務"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-006",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。関数rev は8 ビット型の引数byte を受け取り，ビットの並びを逆にした値を返す。例えば，関数rev をrev(01001011) として呼び出すと，戻り値は11010010 となる。なお，演算子 ∧ はビット単位の論理積，演算子 ∨ はビット単位の論理和，演算子 >> は論理右シフト，演算子 << は論理左シフトを表す。例えば，value >> n はvalue の値をn ビットだけ右に論理シフトし，value << n はvalue の値をn ビットだけ左に論理シフトする。",
    "choices": [
      "r ← (r << 1) ∨ (rbyte ∧ 00000001)\nrbyte ← rbyte >> 1",
      "r ← (r << 7) ∨ (rbyte ∧ 00000001)\nrbyte ← rbyte >> 7",
      "r ← (rbyte << 1) ∨ (rbyte >> 7)\nrbyte ← r",
      "r ← (rbyte >> 1) ∨ (rbyte << 7)\nrbyte ← r"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "下位1ビットを取り出して結果の末尾へ付け、元の値を右へ送る。",
      "detail": "rを1ビット左へずらし、rbyteの下位ビットを論理和で付け足す。rbyteを1ビット右へ動かす操作を8回繰り返すアが反転となる。7ビットずつの操作では全8ビットを順に処理できず、ウ・エは回転である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 6,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。空欄は【空欄】で表記。原本の疑似言語は字下げ付きコードへ、クラス説明は表へ再配置。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問6; docs/expansion-review.json バッチ2",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○8ビット型: rev(8ビット型: byte)\n  8ビット型: rbyte ← byte\n  8ビット型: r ← 00000000\n  整数型: i\n  for (i を 1 から 8 まで 1ずつ増やす)\n    【空欄】\n  endfor\n  return r"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-007",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。関数factorial は非負の整数n を引数にとり，その階乗を返す関数である。非負の整数n の階乗はn が0 のときに1 になり，それ以外の場合は1 からn までの整数を全て掛け合わせた数となる。",
    "choices": [
      "(n － 1) × factorial(n)",
      "factorial(n － 1)",
      "n",
      "n × (n － 1)",
      "n × factorial(1)",
      "n × factorial(n － 1)"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "n! = n×(n−1)!を使う。",
      "detail": "n=0で1を返す停止条件が既にある。n>0ではnにfactorial(n−1)を掛けるカが定義と一致。引数を減らさないアは再帰が停止せず、イはnの因子が欠け、ウ・エ・オも一般のnの階乗にならない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 7,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。空欄は【空欄】で表記。原本の疑似言語は字下げ付きコードへ、クラス説明は表へ再配置。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問7; docs/expansion-review.json バッチ2",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○整数型: factorial(整数型: n)\n  if (n ＝ 0)\n    return 1\n  endif\n  return 【空欄】"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-008",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次の記述中の【空欄】に入れる正しい答えを，解答群の中から選べ。\n優先度付きキューを操作するプログラムである。優先度付きキューとは扱う要素に優先度を付けたキューであり，要素を取り出す際には優先度の高いものから順番に取り出される。クラスPrioQueueは優先度付きキューを表すクラスである。クラスPrioQueueの説明を表に示す。ここで，優先度は整数型の値1，2，3のいずれかであり，小さい値ほど優先度が高いものとする。\n手続prioSchedを呼び出したとき，出力は【空欄】の順となる。",
    "choices": [
      "“A”，“B”，“C”，“D”",
      "“A”，“B”，“D”，“D”",
      "“A”，“C”，“C”，“D”",
      "“A”，“C”，“D”，“D”"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "優先度と同順位の追加順を追うとA、C、D、D。",
      "detail": "最初の二回の取出しでA,Bを除く。D,Bを追加し、次の二回でC,Bを除くのでD,Dが残る。C,Aを追加すると優先度1のA、2のC、3のD,Dの順。追加した全要素が出力されるわけではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 8,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。空欄は【空欄】で表記。原本の疑似言語は字下げ付きコードへ、クラス説明は表へ再配置。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問8; docs/expansion-review.json バッチ2",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○prioSched()\n  PrioQueue: prioQueue ← PrioQueue()\n  prioQueue.enqueue(\"A\", 1)\n  prioQueue.enqueue(\"B\", 2)\n  prioQueue.enqueue(\"C\", 2)\n  prioQueue.enqueue(\"D\", 3)\n  prioQueue.dequeue()  /* 戻り値は使用しない */\n  prioQueue.dequeue()  /* 戻り値は使用しない */\n  prioQueue.enqueue(\"D\", 3)\n  prioQueue.enqueue(\"B\", 2)\n  prioQueue.dequeue()  /* 戻り値は使用しない */\n  prioQueue.dequeue()  /* 戻り値は使用しない */\n  prioQueue.enqueue(\"C\", 2)\n  prioQueue.enqueue(\"A\", 1)\n  while (prioQueue.size() が 0 と等しくない)\n    prioQueue.dequeue()の戻り値 を出力\n  endwhile",
    "table": {
      "headers": [
        "コンストラクタ／メソッド",
        "戻り値",
        "説明"
      ],
      "rows": [
        [
          "PrioQueue()",
          "—",
          "空の優先度付きキューを生成する。"
        ],
        [
          "enqueue(文字列型: s, 整数型: prio)",
          "なし",
          "文字列sを優先度prioで追加する。"
        ],
        [
          "dequeue()",
          "文字列型",
          "最も優先度の高い要素を取り出して返す。同順位は最初に追加されたものを一つ取り出す。"
        ],
        [
          "size()",
          "整数型",
          "格納されている要素の個数を返す。"
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-010",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。手続delNode は，単方向リストから，引数pos で指定された位置の要素を削除する手続である。引数pos は，リストの要素数以下の正の整数とする。リストの先頭の位置を1 とする。クラスListElement は，単方向リストの要素を表す。クラスListElement のメンバ変数の説明を表に示す。ListElement 型の変数はクラスListElement のインスタンスの参照を格納するものとする。大域変数listHead には，リストの先頭要素の参照があらかじめ格納されている。",
    "choices": [
      "listHead",
      "listHead.next",
      "listHead.next.next",
      "prev",
      "prev.next",
      "prev.next.next"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "削除する節を飛ばしてその次の節へつなぐ。",
      "detail": "prevは削除対象の直前の節を指す。prev.nextは対象、prev.next.nextはその次の節なので、後者をprev.nextへ代入するカが適切。prev.nextをそのまま代入しても削除されず、先頭やprev自身へつなぐとリストが壊れる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 10,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。空欄は【空欄】で表記。原本の疑似言語は字下げ付きコードへ、クラス説明は表へ再配置。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問10; docs/expansion-review.json バッチ2",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "大域: ListElement: listHead  // リストの先頭要素が格納されている\n○delNode(整数型: pos)  /* posは，リストの要素数以下の正の整数 */\n  ListElement: prev\n  整数型: i\n  if (pos が 1 と等しい)\n    listHead ← listHead.next\n  else\n    prev ← listHead\n    /* posが2と等しいときは繰返し処理を実行しない */\n    for (i を 2 から pos－1 まで 1ずつ増やす)\n      prev ← prev.next\n    endfor\n    prev.next ← 【空欄】\n  endif",
    "table": {
      "headers": [
        "メンバ変数",
        "型",
        "説明"
      ],
      "rows": [
        [
          "val",
          "文字型",
          "要素の値"
        ],
        [
          "next",
          "ListElement",
          "次の要素の参照。次の要素がないときの状態は未定義。"
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-011",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次の記述中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1 から始まる。関数binSort をbinSort(【空欄】) として呼び出すと，戻り値の配列には未定義の要素は含まれておらず，値は昇順に並んでいる。",
    "choices": [
      "{2, 6, 3, 1, 4, 5}",
      "{3, 1, 4, 4, 5, 2}",
      "{4, 2, 1, 5, 6, 2}",
      "{5, 3, 4, 3, 2, 6}"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "1からnまでの値を一つずつ含む配列が必要。",
      "detail": "各値vを添字vの位置へ置くので、n=6なら値1～6が一回ずつあれば全位置が埋まって昇順になる。アだけがこの条件を満たす。イは4が重複し6がなく、ウは2が重複し3がなく、エは3が重複し1がない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 11,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。空欄は【空欄】で表記。原本の疑似言語は字下げ付きコードへ、クラス説明は表へ再配置。条件・内容・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問11; docs/expansion-review.json バッチ2",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○整数型の配列: binSort(整数型の配列: data)\n  整数型: n ← dataの要素数\n  整数型の配列: bins ← {n個の未定義の値}\n  整数型: i\n  for (i を 1 から n まで 1ずつ増やす)\n    bins[data[i]] ← data[i]\n  endfor\n  return bins"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-023",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "データセンタなどで採用されているサーバ，ネットワーク機器に対する直流給電の利点として，適切なものはどれか。",
    "choices": [
      "交流から直流への変換，直流から交流への変換で生じる電力損失を低減できる。",
      "受電設備からCPUなどのLSIまで，同じ電圧のまま給電できる。",
      "停電の危険がないので，電源バックアップ用のバッテリを不要にできる。",
      "トランスを用いて容易に昇圧，降圧ができる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "電流の変換段数を減らすことで電力損失を抑えられる。",
      "detail": "アのように交流・直流の変換に伴う損失の低減が期待できる。機器やLSIには異なる電圧が必要であり、直流でも停電対策は必要。トランスは通常交流の昇降圧に用いるので、直流給電の利点を述べるエも不適切。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 23,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問23; docs/expansion-review.json バッチ3",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ハードウェア"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-024",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "GUIの部品の一つであるラジオボタンの用途として，適切なものはどれか。",
    "choices": [
      "幾つかの項目について，それぞれの項目を選択するかどうかを指定する。",
      "幾つかの選択項目から一つを選ぶときに，選択項目にないものはテキストボックスに入力する。",
      "互いに排他的な幾つかの選択項目から一つを選ぶ。",
      "特定の項目を選択することによって表示される一覧形式の項目から一つを選ぶ。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "ラジオボタンは相互に排他的な選択肢から一つを選ぶ。",
      "detail": "アは複数選択できるチェックボックス、イは入力もできるコンボボックス、エはドロップダウンリスト等の用途。ラジオボタンは同じグループ内から一つだけを選ぶ用途なのでウが適切。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 24,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問24; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ユーザーインタフェース"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-025",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "音声のサンプリングを1秒間に11,000回行い，サンプリングした値をそれぞれ8ビットのデータとして記録する。このとき，512×10⁶バイトの容量をもつフラッシュメモリに記録できる音声の長さは，最大何分か。",
    "choices": [
      "77",
      "96",
      "775",
      "969"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "毎秒11,000バイトなので最大775分。",
      "detail": "1回8ビットは1バイト。毎分のデータ量は11,000×60=660,000バイト。512×10⁶÷660,000≒775.76分であり、選択肢では775分まで記録できる。ビットとバイトを混同したり容量を2進接頭辞と解釈したりしない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 25,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問25; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "情報メディア"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-026",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "関係モデルの属性に関する説明のうち，適切なものはどれか。",
    "choices": [
      "関係内の属性の定義域は重複してはならない。",
      "関係内の属性の並び順に意味はなく，順番を入れ替えても同じ関係である。",
      "関係内の二つ以上の属性に，同じ名前を付けることができる。",
      "名前をもたない属性を定義することができる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "属性の並び順を変えても同じ関係である。",
      "detail": "関係モデルでは属性は名前で識別するので列の順序に意味はない。別の属性が同じ定義域をもつことは可能。同一関係内で属性名を重複させたり無名の属性を定義したりするのは適切ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 26,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問26; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-027",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "“中間テスト”表からクラスごと，教科ごとの平均点を求め，クラス名，教科名の昇順に表示するSQL文中の【a】に入れる字句はどれか。",
    "choices": [
      "GROUP BY クラス名, 教科名 ORDER BY クラス名, AVG(点数)",
      "GROUP BY クラス名, 教科名 ORDER BY クラス名, 教科名",
      "GROUP BY クラス名, 教科名, 学生番号 ORDER BY クラス名, 教科名, 平均点",
      "GROUP BY クラス名, 平均点 ORDER BY クラス名, 教科名"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "クラス名と教科名で集計し、同じ二項目で並べ替える。",
      "detail": "イのGROUP BYが求める集計単位に一致し、ORDER BYも指定された昇順の項目となる。アは点数順、ウは学生番号でも分割してしまう。エは求める集計単位でなく、集計結果の平均点をグループ化の項目にしている。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 27,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問27; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "中間テスト（クラス名, 教科名, 学生番号, 名前, 点数）\n\nSELECT クラス名, 教科名, AVG(点数) AS 平均点\n  FROM 中間テスト\n  【a】",
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-030",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "ビッグデータの処理で使われるキーバリューストアの説明として，適切なものはどれか。",
    "choices": [
      "“ノード”，“リレーションシップ”，“プロパティ”の3要素によってノード間の関係性を表現する。",
      "1件分のデータを“ドキュメント”と呼び，個々のドキュメントのデータ構造は自由であって，データを追加する都度変えることができる。",
      "集合論に基づいて，行と列から成る2次元の表で表現する。",
      "任意の保存したいデータと，そのデータを一意に識別できる値を組として保存する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "キーと値の組でデータを保存する。",
      "detail": "一意のキーで値へアクセスするのがキーバリューストア。アはグラフ型、イはドキュメント型、ウは関係モデルに対応する。それぞれのモデルの管理単位を区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 30,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問30; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "データベース"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-031",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "OSI基本参照モデルのトランスポート層以上が異なるLANシステム相互間でプロトコル変換を行う機器はどれか。",
    "choices": [
      "ゲートウェイ",
      "ブリッジ",
      "リピータ",
      "ルータ"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "上位層のプロトコル変換にはゲートウェイを使う。",
      "detail": "ブリッジはデータリンク層、リピータは物理層、ルータは主にネットワーク層で動作する。異なる上位プロトコル間の変換を扱うのはゲートウェイである。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 31,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問31; docs/expansion-review.json バッチ3",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-032",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "192.168.0.0/23（サブネットマスク255.255.254.0）のIPv4ネットワークにおいて，ホストとして使用できるアドレスの個数の上限はどれか。",
    "choices": [
      "23",
      "24",
      "254",
      "510"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "ホスト部9ビットの512通りから2個を除き510。",
      "detail": "32−23=9ビットがホスト部。全体は2⁹=512アドレスで、通常のサブネットではネットワークアドレスとブロードキャストアドレスを除くので510。254は/24の場合である。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 32,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問32; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-035",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "OpenFlowを使ったSDN（Software-Defined Networking）の説明として，適切なものはどれか。",
    "choices": [
      "RFIDを用いるIoT（Internet of Things）技術の一つであり，物流ネットワークを最適化するためのソフトウェアアーキテクチャ",
      "様々なコンテンツをインターネット経由で効率よく配信するために開発された，ネットワーク上のサーバの最適配置手法",
      "データ転送と経路制御の機能を論理的に分離し，データ転送に特化したネットワーク機器とソフトウェアによる経路制御の組合せで実現するネットワーク技術",
      "データフロー図やアクティビティ図などを活用し，業務プロセスの問題点を発見して改善を行うための，業務分析と可視化ソフトウェアの技術"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "データ転送と経路制御を分離し、ソフトウェアで制御する。",
      "detail": "SDNは制御面と転送面を分離するネットワーク構成の考え方で、OpenFlowはその制御に用いる仕様の一つ。アのRFID物流、イの配信サーバ配置、エの業務プロセス可視化とは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 35,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問35; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ネットワーク"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-036",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "CAPTCHAの目的はどれか。",
    "choices": [
      "Webサイトなどにおいて，コンピュータではなく人間がアクセスしていることを確認する。",
      "公開鍵暗号と共通鍵暗号を組み合わせて，メッセージを効率よく暗号化する。",
      "通信回線を流れるパケットをキャプチャして，パケットの内容の表示や解析，集計を行う。",
      "電子政府推奨暗号の安全性を評価し，暗号技術の適切な実装法，運用法を調査，検討する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "自動プログラムによるアクセスと人間のアクセスを区別する。",
      "detail": "CAPTCHAは自動登録等の機械的なアクセスを抑えるために用いる。イはハイブリッド暗号、ウはパケット解析、エは暗号技術の評価等であり、人間かどうかの確認ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 36,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問36; docs/expansion-review.json バッチ3",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-037",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "パスワードリスト攻撃の手口に該当するものはどれか。",
    "choices": [
      "辞書にある単語をパスワードに設定している利用者がいる状況に着目して，攻撃対象とする利用者IDを一つ定め，辞書にある単語やその組合せをパスワードとして，ログインを試行する。",
      "パスワードの文字数の上限が小さいWebサイトに対して，攻撃対象とする利用者IDを一つ定め，文字を組み合わせたパスワードを総当たりして，ログインを試行する。",
      "複数サイトで同一の利用者IDとパスワードを使っている利用者がいる状況に着目して，不正に取得した他サイトの利用者IDとパスワードの一覧表を用いて，ログインを試行する。",
      "よく用いられるパスワードを一つ定め，文字を組み合わせた利用者IDを総当たりして，ログインを試行する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "漏えいした他サイトのID・パスワードの組を使う攻撃。",
      "detail": "使い回しを悪用して他サービスで得た認証情報を試すウが該当する。アは辞書攻撃、イはパスワードの総当たり、エはパスワードを固定してIDを変える攻撃であり、入手済みの組を利用する手口とは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 37,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問37; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-039",
    "subject": "A",
    "field": "テクノロジ",
    "prompt": "楕円曲線暗号の特徴はどれか。",
    "choices": [
      "RSA暗号と比べて，短い鍵長で同じレベルの安全性が実現できる。",
      "共通鍵暗号方式であり，暗号化や復号の処理を高速に行うことができる。",
      "総当たりによる解読が不可能なことが，数学的に証明されている。",
      "データを秘匿する目的で用いる場合，復号鍵を秘密にしておく必要がない。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "RSAと同程度の安全性を比較的短い鍵長で実現できる。",
      "detail": "楕円曲線暗号は公開鍵暗号であり、イの共通鍵方式ではない。有限の鍵空間への総当たりが不可能と証明されているわけではなく、秘匿用途では対応する秘密鍵を保護する必要がある。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 39,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問39; docs/expansion-review.json バッチ3",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "セキュリティ"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-060",
    "subject": "A",
    "field": "マネジメント",
    "prompt": "A社では，自然災害などの際の事業継続を目的として，業務システムのデータベースのバックアップを取得している。その状況について，“情報セキュリティ管理基準（平成28年）”に従って実施した監査結果として判明した状況から，監査人が指摘事項として監査報告書に記載すべきものはどれか。",
    "choices": [
      "バックアップ取得手順書を作成し，取得担当者を定めていた。",
      "バックアップを取得した電子記録媒体からデータベースを復旧する試験を，事前に定めたスケジュールに従って実施していた。",
      "バックアップを取得した電子記録媒体を，機密保持を含む契約を取り交わした外部の倉庫会社に委託保管していた。",
      "バックアップを取得した電子記録媒体を，業務システムが稼働しているサーバの近くで保管していた。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "災害で同時に被災し得るサーバ近傍の保管を指摘する。",
      "detail": "事業継続目的ではバックアップ媒体と稼働サーバが同じ災害で失われないようにする。手順と担当の明確化、定期的な復旧試験、適切な契約による外部保管は対策になる。エは同時喪失の危険を残す。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 60,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問60; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム監査"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-061",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "エンタープライズアーキテクチャを構成するアプリケーションアーキテクチャについて説明したものはどれか。",
    "choices": [
      "業務に必要なデータの内容，データ間の関連や構造などを体系的に示したもの",
      "業務プロセスを支援するシステムの機能や構成などを体系的に示したもの",
      "情報システムの構築・運用に必要な技術的構成要素を体系的に示したもの",
      "ビジネスに必要な業務プロセスや情報の流れを体系的に示したもの"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "業務を支援するアプリケーションの機能・構成を体系化する。",
      "detail": "イがアプリケーションアーキテクチャ。アはデータ、ウはテクノロジ、エはビジネスのアーキテクチャを表す。EAの各側面を、対象がデータ・システム機能・技術・業務のどれかで区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 61,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問61; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム戦略"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-062",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "オンデマンド型のサービスはどれか。",
    "choices": [
      "インターネットサイトで購入したDVDで視聴する映画",
      "出版社が部数を決めてオフセット印刷した文庫本",
      "定期的に決められたスケジュールでスマートフォンに配信されるインターネットニュース",
      "利用者の要求に応じてインターネット上で配信される放送済のドラマ"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "利用者の要求があったとき提供するサービス。",
      "detail": "要求に応じて配信されるエが該当する。DVDは購入した記録媒体の再生、文庫本は部数を定めた印刷、ウは固定スケジュールの配信であり、要求時に提供する説明ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 62,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問62; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム戦略"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-063",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "BI（Business Intelligence）の活用事例として，適切なものはどれか。",
    "choices": [
      "競合する他社が発行するアニュアルレポートなどの刊行物を入手し，経営戦略や財務状況を把握する。",
      "業績の評価や経営戦略の策定を行うために，業務システムなどに蓄積された膨大なデータを分析する。",
      "電子化された学習教材を社員がネットワーク経由で利用することを可能にし，学習・成績管理を行う。",
      "りん議や決裁など，日常の定型的業務を電子化することによって，手続を確実に行い，処理を迅速化する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "蓄積された業務データを分析して経営判断へ活用する。",
      "detail": "イはデータ分析を業績評価や戦略に結び付けるBIの例。アは公開情報の収集、ウはeラーニング、エはワークフローの電子化であり、業務データの分析を中心とするBIとは異なる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 63,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問63; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム戦略"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-066",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "非機能要件項目はどれか。",
    "choices": [
      "新しい業務の在り方や運用に関わる業務手順，入出力情報，組織，責任，権限，業務上の制約などの項目",
      "新しい業務の遂行に必要なアプリケーションシステムに関わる利用者の作業，システム機能の実現範囲，機能間の情報の流れなどの項目",
      "経営戦略や情報戦略に関わる経営上のニーズ，システム化・システム改善を必要とする業務上の課題，求められる成果・目標などの項目",
      "システム基盤に関わる可用性，性能，拡張性，運用性，保守性，移行性などの項目"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "可用性・性能・保守性などは非機能要件。",
      "detail": "エは何をするかという機能以外の品質・制約等の要求。アは業務の運用や体制、イはシステムの機能、ウは経営上のニーズや目標を中心とする。機能の実現範囲と品質要求を区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 66,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問66; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "システム企画"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-068",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "特定顧客，特定製品のセグメントに資源を集中し，専門化を図る戦略はどれか。",
    "choices": [
      "チャレンジャ戦略",
      "ニッチ戦略",
      "フォロワ戦略",
      "リーダ戦略"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "限定した市場へ資源を集中するのはニッチ戦略。",
      "detail": "大手が十分に対応していない特定の市場や顧客へ専門化し、競争優位を目指す。チャレンジャは首位への挑戦、フォロワは追随、リーダは市場首位の立場を基にした戦略であり、限定市場への専門化そのものを表すのはイ。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 68,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問68; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-069",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "サイト訪問者の総人数に対して，最終成果である商品やサービスの購入に至る人数の割合を高める目的でショッピングサイトの画面デザインを見直すことにした。効果を測るために，見直し前後で比較すべき，効果を直接示す値はどれか。",
    "choices": [
      "ROAS（Return On Advertising Spend）",
      "コンバージョン率",
      "バナー広告のクリック率",
      "ページビュー"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "訪問者のうち購入等の成果に至る割合はコンバージョン率。",
      "detail": "購入者数を訪問者数で割る指標が目的に直接対応する。ROASは広告費に対する売上、クリック率は広告表示からクリックに至る割合、ページビューは閲覧数であり、購入に至る割合を直接表さない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 69,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問69; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "経営戦略マネジメント"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-070",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "プロセスイノベーションに関する記述として，適切なものはどれか。",
    "choices": [
      "競争を経て広く採用され，結果として事実上の標準となる。",
      "製品の品質を向上する革新的な製造工程を開発する。",
      "独創的かつ高い技術を基に革新的な新製品を開発する。",
      "半導体の製造プロセスをもっている他企業に製造を委託する。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 1,
    "explanation": {
      "brief": "製造工程の革新はプロセスイノベーション。",
      "detail": "イは製品を作る工程や方法を革新する取組。ウの新製品そのものの革新はプロダクトイノベーション。アはデファクト標準、エは製造委託であり、それだけで工程の革新を意味しない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 70,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "イ",
        "index": 1
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問70; docs/expansion-review.json バッチ3",
        "answerIndex": 1,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "技術戦略マネジメント"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-073",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "シェアリングエコノミーの説明はどれか。",
    "choices": [
      "ITの活用によって経済全体の生産性が高まり，更にSCMの進展によって需給ギャップが解消されるので，インフレなき成長が持続するという概念である。",
      "ITを用いて，再生可能エネルギーや都市基盤の効率的な維持・管理，人々の生活の質を高め，継続的な経済発展を実現するという概念である。",
      "商取引において，実店舗販売とインターネット販売を組み合わせ，それぞれの長所を生かして連携させることによって，全体の売上を拡大する仕組みである。",
      "ソーシャルメディアのコミュニティ機能などを活用して，主に個人同士で，個人が保有している遊休資産を共有したり，貸し借りしたりする仕組みである。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "個人等が保有する遊休資産を共有・貸借する仕組み。",
      "detail": "エはネットワークで資産の提供者と利用者を結び付ける説明。アはITと経済成長の議論、イは都市等の持続可能な運営、ウは実店舗とネット販売の連携であり、遊休資産の共有ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 73,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問73; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-074",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "ディジタルサイネージの説明として，適切なものはどれか。",
    "choices": [
      "情報技術を利用する機会又は能力によって，地域間又は個人間に生じる経済的又は社会的な格差",
      "情報の正当性を保証するために使用される電子的な署名",
      "ディスプレイに映像，文字などの情報を表示する電子看板",
      "不正利用を防止するためにデータに識別情報を埋め込む技術"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "映像や文字をディスプレイへ表示する電子看板。",
      "detail": "ウがディジタルサイネージ。アはディジタルデバイド、イは電子署名、エは電子透かしに対応する。表示媒体としての看板と情報保護の技術を区別する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 74,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問74; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "ビジネスインダストリ"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-076",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "社内カンパニー制を説明したものはどれか。",
    "choices": [
      "1部門を切り離して別会社として独立させ，機動力のある多角化戦略を展開する。",
      "合併，買収によって，自社にない経営資源を相手企業から得て，スピーディな戦略展開を図る。",
      "時間を掛けて研究・開発を行い，その成果を経営戦略の基礎とする。",
      "事業分野ごとの仮想企業を作り，経営資源配分の効率化，意思決定の迅速化，創造性の発揮を促す。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "社内の事業分野ごとに独立性の高い仮想企業を設ける。",
      "detail": "エは社内の単位に権限や責任を持たせるカンパニー制。アは別会社として分離する方法、イはM&A、ウは研究開発の取組であり、社内に仮想企業を設ける説明ではない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 76,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問76; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "企業活動"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-079",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "著作者人格権に該当するものはどれか。",
    "choices": [
      "印刷，撮影，複写などの方法によって著作物を複製する権利",
      "公衆からの要求に応じて自動的にサーバから情報を送信する権利",
      "著作物の複製物を公衆に貸し出す権利",
      "自らの意に反して著作物を変更，切除されない権利"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "意に反する改変を受けない同一性保持権は著作者人格権。",
      "detail": "エの同一性保持権は著作者の人格的利益を保護する。アの複製権、イの公衆送信に関する権利、ウの貸与権は著作権の支分権であり、著作者人格権とは区別される。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 79,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問79; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "法務"
  },
  {
    "id": "IPA-FE-2019-SPRING-AM-A-080",
    "subject": "A",
    "field": "ストラテジ",
    "prompt": "インターネットで利用される技術の標準化を図り，技術仕様をRFCとして策定している組織はどれか。",
    "choices": [
      "ANSI",
      "IEEE",
      "IETF",
      "NIST"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "インターネット技術の標準化を担うIETF。",
      "detail": "IETFはインターネット技術の仕様策定を進める組織。ANSIは米国の標準化、IEEEは電気電子等の学会・標準化、NISTは米国の標準技術に関わる機関。RFCを中心とする設問にはIETFが対応する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "平成31年度春期 基本情報技術者試験 午前（旧制度・科目A相当として収録）",
      "year": 2019,
      "session": "春期・午前（旧制度・科目A相当）",
      "exam": "FE",
      "section": "科目A",
      "questionNumber": 80,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "旧制度の春期午前問題を科目A相当の学習問題として分類。原本ページ画像から転記し、組版上の改行・空白・ルビを整理。表・SQLはコード表示へ再配置。設問の内容・条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/2019h31.html",
      "questionSha256": "55210d293f5fd96673cc1131acea3f8237209b4599d95d48bad02964abe62eb6",
      "answerSha256": "0f871ce45cf3824b208591be14f7898b21bf4109b59aa82833d3693302f033df",
      "originalSection": "午前",
      "originalSession": "春期"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/gmcbt8000000ddiw-att/2019h31h_fe_am_ans.pdf 問80; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "subfield": "法務"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-017",
    "subject": "B",
    "field": "情報セキュリティ",
    "prompt": "製造業のA 社では，EC サイト（以下，A 社のEC サイトをA サイトという）を使用し，個人向けの製品販売を行っている。A サイトは，A 社の製品やサービスが検索可能で，ログイン機能を有しており，あらかじめA サイトに利用登録した個人（以下，会員という）の氏名やメールアドレスといった情報（以下，会員情報という）を管理している。A サイトは，B 社のPaaS で稼働しており，PaaS 上のDBMS とアプリケーションサーバを利用している。A 社は，A サイトの開発，運用をC 社に委託している。A 社とC 社との間の委託契約では，Web アプリケーションプログラムの脆 弱性対策は，C 社が実施するとしている。最近，A 社の同業他社が運営しているWeb サイトで脆弱性が悪用され，個人情報が漏えいするという事件が発生した。そこでA 社は，セキュリティ診断サービスを行っているD 社に，A サイトの脆弱性診断を依頼した。脆弱性診断の結果，対策が必要なセキュリティ上の脆弱性が複数指摘された。\n\n図1 にD 社からの指摘事項を示す。\n\n項番1  A サイトで利用しているアプリケーションサーバのOS に既知の脆弱性があり，脆弱性を悪用した攻撃を受けるおそれがある。\n\n項番2  A サイトにクロスサイトスクリプティングの脆弱性があり，会員情報を不正に取得されるおそれがある。\n\n項番3  A サイトで利用しているDBMS に既知の脆弱性があり，脆弱性を悪用した攻撃を受けるおそれがある。\n\n図1  D 社からの指摘事項\n\n設問 \n\n図1 中の各項番それぞれに対処する組織の適切な組合せを，解答群の中から選べ。",
    "choices": [
      "項番1：A社，項番2：A社，項番3：A社",
      "項番1：A社，項番2：A社，項番3：C社",
      "項番1：A社，項番2：B社，項番3：B社",
      "項番1：B社，項番2：B社，項番3：B社",
      "項番1：B社，項番2：B社，項番3：C社",
      "項番1：B社，項番2：C社，項番3：B社",
      "項番1：B社，項番2：C社，項番3：C社",
      "項番1：C社，項番2：B社，項番3：B社",
      "項番1：C社，項番2：B社，項番3：C社",
      "項番1：C社，項番2：C社，項番3：B社"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ",
      "ク",
      "ケ",
      "コ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "PaaSのOSとDBMSはB社、アプリケーションのXSSはC社。",
      "detail": "B社はPaaSの基盤を提供しているためOSとDBMSの既知の脆弱性へ対応する。Webアプリケーションの脆弱性対策は委託契約でC社が実施するとされるのでXSSはC社。項番1,2,3の順にB,C,Bとなるカだけが条件に一致する。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 17,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。図中の全規則・説明を本文へ、表はHTML表へ再配置。選択肢の組合せ表を列名付き文字列で表示。元から省略と記された箇所は省略のままとし、条件・内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問17; docs/expansion-review.json バッチ3",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-018",
    "subject": "B",
    "field": "情報セキュリティ",
    "prompt": "A 社はIT 開発を行っている従業員1,000 名の企業である。総務部50 名，営業部50 名で，ほかは開発部に所属している。開発部員の9 割は客先に常駐している。現在，A 社におけるPC の利用状況は\n\n図1 のとおりである。1  A 社のPC\n・総務部員，営業部員及びA 社オフィスに勤務する開発部員には，会社が用意したPC（以下，A 社PC という）を一人1 台ずつ貸与している。\n・客先常駐開発部員には，A 社PC を貸与していないが，代わりに客先常駐開発部員がA 社オフィスに出社したときに利用するための共用PC を用意している。2 客先常駐開発部員の業務システム利用\n・客先常駐開発部員が休暇申請，経費精算などで業務システムを利用するためには共用PCを使う必要がある。3  A 社のVPN 利用\n・A 社には，VPN サーバが設置されており，営業部員が出張時にA 社PC からインターネット経由で社内ネットワークにVPN 接続し，業務システムを利用できるようになっている。規則で，VPN 接続にはA 社PC を利用すると定められている。\n\n図1  A 社におけるPC の利用状況A 社では，客先常駐開発部員が業務システムを使うためだけにA 社オフィスに出社するのは非効率的であると考え，客先常駐開発部員に対して個人所有PC の業務利用（BYOD）とVPN 接続の許可を検討することにした。\n\n設問 客先常駐開発部員に，個人所有PC からのVPN 接続を許可した場合に，増加する又は新たに生じると考えられるリスクを二つ挙げた組合せは，次のうちどれか。解答群のうち，最も適切なものを選べ。(一)  VPN 接続が増加し，可用性が損なわれるリスク(二) 客先常駐開発部員がA 社PC を紛失するリスク(三) 客先常駐開発部員がフィッシングメールのURL をクリックして個人所有PCがマルウェアに感染するリスク(四) 総務部員が個人所有PC をVPN 接続するリスク(五) マルウェアに感染した個人所有PC が社内ネットワークにVPN 接続され，マルウェアが社内ネットワークに拡散するリスク",
    "choices": [
      "(一)，(二)",
      "(一)，(三)",
      "(一)，(四)",
      "(一)，(五)",
      "(二)，(三)",
      "(二)，(四)",
      "(二)，(五)",
      "(三)，(四)",
      "(三)，(五)",
      "(四)，(五)"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ",
      "ク",
      "ケ",
      "コ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "VPN負荷による可用性低下と、感染PCから社内への拡散が増える。",
      "detail": "新たに多数の常駐開発部員がVPNを利用するので(一)の接続負荷が増える。私有PCを社内ネットワークへつなぐことで(五)のマルウェア拡散経路も生じる。(二)は貸与していないA社PCの紛失であり、(三)の私有PCへのメール感染自体はVPN許可前にも起こり得る。(四)は許可対象でない総務部員の利用なので、最も直接的な組は(一),(五)のエ。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 18,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。図中の全規則・説明を本文へ、表はHTML表へ再配置。選択肢の組合せ表を列名付き文字列で表示。元から省略と記された箇所は省略のままとし、条件・内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問18; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-019",
    "subject": "B",
    "field": "情報セキュリティ",
    "prompt": "A 社は従業員200 名の通信販売業者である。一般消費者向けに生活雑貨，ギフト商品などの販売を手掛けている。取扱商品の一つである商品Z は，Z 販売課が担当している。\n\n〔Z 販売課の業務〕現在，Z 販売課の要員は，商品Z についての受注管理業務及び問合せ対応業務を行っている。商品Z についての受注管理業務の手順を\n\n図1 に示す。商品Z の顧客からの注文は電子メールで届く。(1) 入力販売担当者は，届いた注文（変更，キャンセルを含む）の内容を受注管理システム 1）（以下，J システムという）に入力し，販売責任者2）に承認を依頼する。(2) 承認販売責任者は，注文の内容とJ システムへの入力結果を突き合わせて確認し，問題がなければ承認する。問題があれば差し戻す。注1）  A 社情報システム部が運用している。利用者は，販売責任者，販売担当者などである。注2）  Z 販売課の課長1 名だけである。\n\n図1 受注管理業務の手順\n\n〔J システムの操作権限〕Z 販売課では，J システムについて，次の利用方針を定めている。\n\n［方針1］ ある利用者が入力した情報は，別の利用者が承認する。\n\n［方針2］ 販売責任者は，Z 販売課の全業務の情報を閲覧できる。J システムでは，業務上必要な操作権限を利用者に与える機能が実装されている。この度，商品Z の受注管理業務が受注増によって増えていることから，B 社に一部を委託することにした（以下，商品Z の受注管理業務の入力作業を行うB 社従業員を商品Z のB 社販売担当者といい，商品Z のB 社販売担当者の入力結果を閲覧して，不備があればA 社に口頭で差戻しを依頼するB 社従業員を商品Z のB 社販売責任者という）。委託に当たって，Z 販売課は情報システム部にJ システムに関する次の要求事項を伝えた。\n\n［要求1］  B 社が入力した場合は，A 社が承認する。\n\n［要求2］  A 社の販売担当者が入力した場合は，現状どおりにA 社の販売責任者が承認する。上記を踏まえ，情報システム部は今後の各利用者に付与される操作権限を表1 にまとめ，Z 販売課の情報セキュリティリーダーであるC さんに確認をしてもらった。\n\n注記：○は，操作権限が付与されることを示す。\n設問　表1中の【a₁】，【a₂】に入れる字句の適切な組合せを，aに関する解答群の中から選べ。",
    "choices": [
      "a₁：Z販売課の販売責任者，a₂：商品ZのB社販売責任者",
      "a₁：Z販売課の販売責任者，a₂：商品ZのB社販売担当者",
      "a₁：商品ZのB社販売責任者，a₂：Z販売課の販売責任者",
      "a₁：商品ZのB社販売責任者，a₂：商品ZのB社販売担当者",
      "a₁：商品ZのB社販売担当者，a₂：商品ZのB社販売責任者"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "a₁は閲覧だけのB社販売責任者、a₂は閲覧と入力のB社販売担当者。",
      "detail": "B社販売責任者はB社の入力結果を閲覧し、不備はA社へ口頭で差戻しを依頼する役割なので閲覧権限のみでよい。B社販売担当者には入力作業があるため閲覧・入力が必要。承認は要求1に従ってA社が行う。権限の異なる二者を取り違えないエが適切。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 19,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。図中の全規則・説明を本文へ、表はHTML表へ再配置。選択肢の組合せ表を列名付き文字列で表示。元から省略と記された箇所は省略のままとし、条件・内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問19; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "table": {
      "headers": [
        "利用者（表1：操作権限案）",
        "閲覧",
        "入力",
        "承認"
      ],
      "rows": [
        [
          "（省略）",
          "○",
          "",
          "○"
        ],
        [
          "Z販売課の販売担当者",
          "（省略）",
          "（省略）",
          "（省略）"
        ],
        [
          "【a₁】",
          "○",
          "",
          ""
        ],
        [
          "【a₂】",
          "○",
          "○",
          ""
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-020",
    "subject": "B",
    "field": "情報セキュリティ",
    "prompt": "A 社は栄養補助食品を扱う従業員500 名の企業である。A 社のサーバ及びファイアウォール（以下，FW という）を含む情報システムの運用は情報システム部が担当している。ある日，内部監査部の監査があり，FW の運用状況について情報システム部のB 部長が\n\n図1 のとおり説明したところ，表1 に示す指摘を受けた。\n・FW を含め，情報システムの運用は，情報システム部の運用チームに所属する6 名の運用担当者が担当している。\n・FW の運用には，FW ルールの編集，操作ログの確認，並びに編集後のFW ルールの確認及び操作の承認（以下，編集後のFW ルールの確認及び操作の承認を操作承認という）の三つがある。\n・FW ルールの編集は事前に作成された操作指示書に従って行う。\n・FW の機能には，FW ルールの編集，操作ログの確認，及び操作承認の三つがある。\n・FW ルールの変更には，FW ルールの編集と操作承認の両方が必要である。操作承認の前に操作ログの確認を行う。\n・FW の利用者ID は各運用担当者に個別に発行されており，利用者ID の共用はしていない。\n・FW では，機能を利用する権限を運用担当者の利用者ID ごとに付与できる。\n・現在は，6 名の運用担当者とも全権限を付与されており，運用担当者はFW のルールの編集後，編集を行った運用担当者が操作に誤りがないことを確認し，操作承認をしている。\n・FW へのログインにはパスワードを利用している。パスワードは8 文字の英数字である。\n・FW の運用では，運用担当者の利用者ID ごとに，ネットワークを経由せずコンソールでログインできるかどうか，ネットワークを経由してリモートからログインできるかどうかを設定できる。\n・FW は，ネットワークを経由せずコンソールでログインした場合でも，ネットワークを経由してリモートからログインした場合でも，同一の機能を利用できる。\n・FW はサーバルームに設置されており，サーバルームにはほかに数種類のサーバも設置されている。\n・運用担当者だけがサーバルームへの入退室を許可されている。\n\n図1  FW の運用状況\n\nB部長は表1の指摘に対する改善策を検討することにした。\n設問　表1中の指摘1について，FWルールの誤った変更を防ぐための改善策はどれか。解答群のうち，最も適切なものを選べ。",
    "choices": [
      "Endpoint Detection and Response（EDR）をコンソールに導入し，監視を強化する。",
      "FW での運用担当者のログインにはパスワード認証の代わりに多要素認証を導入する。",
      "FW のアクセス制御機能を使って，運用担当者をコンソールからログインできる者，リモートからログインできる者に分ける。",
      "FW の運用担当者を1 人に限定する。",
      "運用担当者の一部を操作ログの確認だけをする者とし，それらの者には操作ログの確認権限だけを付与する。",
      "運用担当者を，FW ルールの編集を行う者，操作ログを確認し，操作承認をする者に分け，それぞれに必要最小限の権限を付与する。",
      "作業を行う運用担当者を，曜日ごとに割り当てる。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ",
      "オ",
      "カ",
      "キ"
    ],
    "answer": 5,
    "explanation": {
      "brief": "ルール編集と、ログ確認・操作承認の担当者を分離する。",
      "detail": "同じ担当者が自分の編集を承認すると誤りを検出しにくい。編集する者と、ログを確認して承認する別の者へ必要最小限の権限を付与するカが職務分離となる。EDRや多要素認証は別の対策。接続経路別、曜日別、ログ確認だけの担当を分けても編集と承認の分離を保証せず、一人へ限定すると分離できない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 20,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。図中の全規則・説明を本文へ、表はHTML表へ再配置。選択肢の組合せ表を列名付き文字列で表示。元から省略と記された箇所は省略のままとし、条件・内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "カ",
        "index": 5
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問20; docs/expansion-review.json バッチ3",
        "answerIndex": 5,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "table": {
      "headers": [
        "指摘（表1）",
        "指摘内容"
      ],
      "rows": [
        [
          "指摘1",
          "FWの運用の作業の中で，職務が適切に分離されていない。"
        ],
        [
          "指摘2",
          "（省略）"
        ],
        [
          "指摘3",
          "（省略）"
        ],
        [
          "指摘4",
          "（省略）"
        ]
      ]
    }
  },
  {
    "id": "IPA-FE-2023-KOUKAI-B-006",
    "subject": "B",
    "field": "情報セキュリティ",
    "prompt": "A 社は，放送会社や運輸会社向けに広告制作ビジネスを展開している。A 社は，人事業務の効率化を図るべく，人事業務の委託を検討することにした。A 社が委託する業務（以下，B 業務という）を\n\n図1 に示す。\n・採用予定者から郵送されてくる入社時の誓約書，前職の源泉徴収票などの書類をPDF ファイルに変換し，ファイルサーバに格納する。（省略）\n\n図1  B 業務委託先候補のC 社は，B 業務について，次のようにA 社に提案した。\n・B 業務だけに従事する専任の従業員を割り当てる。\n・B 業務では，\n\n図2 の複合機のスキャン機能を使用する。\n・スキャン機能を使用する際は，従業員ごとに付与した利用者ID とパスワードをパネルに入力する。\n・スキャンしたデータをPDF ファイルに変換する。\n・PDF ファイルを従業員ごとに異なる鍵で暗号化して，電子メールに添付する。\n・スキャンを実行した本人宛てに電子メールを送信する。\n・PDF ファイルが大きい場合は，PDF ファイルを添付する代わりに，自社の社内ネットワーク上に設置したサーバ（以下，B サーバという）1)に自動的に保存し，保存先のURL を電子メールの本文に記載して送信する。注1)  B サーバにアクセスする際は，従業員ごとの利用者ID とパスワードが必要になる。\n\n図2 複合機のスキャン機能（抜粋）A 社は，C 社と業務委託契約を締結する前に，秘密保持契約を締結した。その後，C社に質問表を送付し，回答を受けて，業務委託での情報セキュリティリスクの評価を実施した。その結果，\n\n図3 の発見があった。\n・複合機のスキャン機能では，電子メールの差出人アドレス，件名，本文及び添付ファイル名を初期設定1)の状態で使用しており，誰がスキャンを実行しても同じである。\n・複合機のスキャン機能の初期設定情報はベンダーのWeb サイトで公開されており，誰でも閲覧できる。注1)  複合機の初期設定はC 社の情報システム部だけが変更可能である。\n\n図3 発見事項そこで，A 社では，初期設定の状態のままではA 社にとって情報セキュリティリスクがあり，初期設定から変更するという対策が必要であると評価した。\n\n設問 対策が必要であるとA 社が評価した情報セキュリティリスクはどれか。解答群のうち，最も適切なものを選べ。",
    "choices": [
      "B 業務に従事する従業員が，攻撃者からの電子メールを複合機からのものと信じて本文中にあるURL をクリックし，フィッシングサイトに誘導される。その結果，A 社の採用予定者の個人情報が漏えいする。",
      "B 業務に従事する従業員が，複合機から送信される電子メールをスパムメールと誤認し，電子メールを削除する。その結果，再スキャンが必要となり，B 業務が遅延する。",
      "攻撃者が，複合機から送信される電子メールを盗聴し，添付ファイルを暗号化して身代金を要求する。その結果，A 社が復号鍵を受け取るために多額の身代金を支払うことになる。",
      "攻撃者が，複合機から送信される電子メールを盗聴し，本文に記載されているURL を使ってB サーバにアクセスする。その結果，A 社の採用予定者の個人情報が漏えいする。"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 0,
    "explanation": {
      "brief": "公開された初期設定と同じ体裁のメールでフィッシングを誘発される。",
      "detail": "初期設定の差出人・件名・本文・ファイル名が公開されていると、攻撃者が複合機を装うメールを作りやすく、利用者がURLを信じて認証情報等を入力する危険がある。イは主に業務遅延であり当該の情報漏えいリスクの説明ではない。ウの盗聴だけでは正規ファイルが利用不能になるとはいえず、公開された初期設定という指摘への対策とも結び付かない。Bサーバも利用者ごとの認証が必要なので、盗聴したURLだけでのアクセスというエも条件に合わない。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B 公開問題",
      "year": 2023,
      "session": "公開問題",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 6,
      "url": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_b_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_b_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/faq.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "PDFの組版上の改行・空白・ルビを整理。図中の全規則・説明を本文へ、表はHTML表へ再配置。選択肢の組合せ表を列名付き文字列で表示。元から省略と記された箇所は省略のままとし、条件・内容・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ア",
        "index": 0
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/2023r05.html",
      "questionSha256": "04fc7d8dbeed2f29bb7082d24ecdc8712c78b39012de0813c6a11cd1c5eea25a",
      "answerSha256": "416572bcae9a3fdcdf21a6b0bde3717c31b66591fca1d58e27dcc750f438e6e6"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/mondai-kaiotu/sg_fe/koukai/t6hhco0000003zx0-att/2023r05_fe_kamoku_b_ans.pdf 問6; docs/expansion-review.json バッチ3",
        "answerIndex": 0,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    }
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-009",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次の記述中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1から始まる。\n手続orderは，図の2分木の，引数で指定した節を根とする部分木をたどりながら，全ての節番号を出力する。大域の配列treeが図の2分木を表している。配列treeの要素は，対応する節の子の節番号を，左の子，右の子の順に格納した配列である。例えば，配列treeの要素番号1の要素は，左の子2と右の子3を{2, 3}として格納する。\n注記：節の値は節番号である。子の節が一つの場合は左の子の節とする。\n手続orderをorder(1)として呼び出すと，【空欄】の順に出力される。",
    "choices": [
      "1，2，3，4，5，6，7，8，9，10，11，12，13，14",
      "1，2，4，8，9，5，10，11，3，6，12，13，7，14",
      "8，4，9，2，10，5，11，1，12，6，13，3，14，7",
      "8，9，4，10，11，5，2，12，13，6，14，7，3，1"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 2,
    "explanation": {
      "brief": "左部分木、節自身、右部分木の順の中間順走査。",
      "detail": "左から8,4,9,2,10,5,11を出した後に根1、その後12,6,13,3,14,7となる。アは節番号順、イは先行順、エは後行順の並び。プログラムは左の再帰の後、右の再帰の前にnを出すのでウとなる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 9,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。木の全節と全辺を、原本の配列と照合した隣接リストへ転記。疑似言語はコード表示へ再配置。条件・出力順・選択肢順・正答は維持。",
      "answerKey": {
        "label": "ウ",
        "index": 2
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問9; docs/expansion-review.json バッチ3",
        "answerIndex": 2,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "図（親 → 左の子, 右の子）\n1 → 2,3\n2 → 4,5\n3 → 6,7\n4 → 8,9\n5 → 10,11\n6 → 12,13\n7 → 14（左の子のみ）\n8～14 → 子なし\n\n〔プログラム〕\n大域: 整数型配列の配列: tree ← {{2,3},{4,5},{6,7},{8,9},{10,11},{12,13},{14},{},{},{},{},{},{},{}}\n/* {}は要素数0の配列 */\n○order(整数型: n)\n  if (tree[n]の要素数 が 2 と等しい)\n    order(tree[n][1])\n    nを出力\n    order(tree[n][2])\n  elseif (tree[n]の要素数 が 1 と等しい)\n    order(tree[n][1])\n    nを出力\n  else\n    nを出力\n  endif"
  },
  {
    "id": "IPA-FE-2022-SAMPLESET-B-012",
    "subject": "B",
    "field": "アルゴリズム・プログラミング",
    "prompt": "次のプログラム中の【空欄】に入れる正しい答えを，解答群の中から選べ。ここで，配列の要素番号は1 から始まる。関数simRatio は，引数として与えられた要素数1 以上の二つの文字型の配列s1とs2 を比較し，要素数が等しい場合は，配列の並びがどの程度似ているかの指標として，（要素番号が同じ要素の文字同士が一致する要素の組みの個数 ÷ s1の要素数）を実数型で返す。例えば，配列の全ての要素が一致する場合の戻り値は1，いずれの要素も一致しない場合の戻り値は0 である。なお，二つの配列の要素数が等しくない場合は，－1 を返す。関数simRatio に与えるs1，s2 及び戻り値の例を表に示す。プログラムでは，配列の領域外を参照してはならないものとする。",
    "choices": [
      "s1[i] ≠ s2[cnt]",
      "s1[i] ≠ s2[i]",
      "s1[i] ＝ s2[cnt]",
      "s1[i] ＝ s2[i]"
    ],
    "choiceLabels": [
      "ア",
      "イ",
      "ウ",
      "エ"
    ],
    "answer": 3,
    "explanation": {
      "brief": "同じ要素番号の文字同士が等しい場合だけcntを増やす。",
      "detail": "各iでs1[i]とs2[i]を比較するエが一致位置の個数を数える。≠では不一致数になる。cntは一致数であり位置ではなく、初期値0なのでs2[cnt]を添字にすると領域外参照も起きる。",
      "author": "Codex（AIによる独自解説。IPA公式解説ではない）"
    },
    "source": {
      "type": "ipa",
      "title": "基本情報技術者試験 科目B サンプル問題セット",
      "year": 2022,
      "session": "サンプル問題セット",
      "exam": "FE",
      "section": "科目B",
      "questionNumber": 12,
      "url": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_qs.pdf",
      "answerUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf",
      "termsUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "accessedAt": "2026-11-13",
      "modified": true,
      "modificationNote": "組版上の改行・空白を整理。空欄は【空欄】と表記。表・疑似言語をHTML表・コードへ再配置。条件・数値・選択肢順・正答は維持。",
      "answerKey": {
        "label": "エ",
        "index": 3
      },
      "pageUrl": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/20221226.html",
      "questionSha256": "54e16b636f3c69fc30cd92dbbbcb1b0e0acbb1e64bbd5066e971dce954d7dd11",
      "answerSha256": "6830553e6df6d54cf8d51365e00171e564e289edb27b7a5bcbee56035969fe3a"
    },
    "verification": {
      "status": "verified",
      "date": "2026-11-13",
      "method": "公式問題冊子の本文・全選択肢・公式解答例を照合。コード・表・数式がある場合は原本ページ画像でも照合。簡潔／詳細の独自解説と各選択肢の整合性を転記後の別工程でAIレビュー。実ブラウザ確認状況はdocs/collection-expansion.md参照。",
      "review": {
        "reviewer": "Codex（AI。同一担当が転記後に別工程で原本・正答・独自解説を確認。人手・専門家の独立レビューではない）",
        "reference": "https://www.ipa.go.jp/shiken/syllabus/henkou/2022/ssf7ph000000h5tb-att/fe_kamoku_b_set_sample_ans.pdf 問12; docs/expansion-review.json バッチ3",
        "answerIndex": 3,
        "answerChecked": true,
        "explanationChecked": true,
        "transcriptionChecked": true
      }
    },
    "code": "○実数型: simRatio(文字型の配列: s1, 文字型の配列: s2)\n  整数型: i, cnt ← 0\n  if (s1の要素数 ≠ s2の要素数)\n    return －1\n  endif\n  for (i を 1 から s1の要素数 まで 1ずつ増やす)\n    if (【空欄】)\n      cnt ← cnt ＋ 1\n    endif\n  endfor\n  return cnt ÷ s1の要素数  /* 実数として計算する */",
    "table": {
      "headers": [
        "s1",
        "s2",
        "戻り値"
      ],
      "rows": [
        [
          "{\"a\",\"p\",\"p\",\"l\",\"e\"}",
          "{\"a\",\"p\",\"p\",\"l\",\"e\"}",
          1
        ],
        [
          "{\"a\",\"p\",\"p\",\"l\",\"e\"}",
          "{\"a\",\"p\",\"r\",\"i\",\"l\"}",
          0.4
        ],
        [
          "{\"a\",\"p\",\"p\",\"l\",\"e\"}",
          "{\"m\",\"e\",\"l\",\"o\",\"n\"}",
          0
        ],
        [
          "{\"a\",\"p\",\"p\",\"l\",\"e\"}",
          "{\"p\",\"e\",\"n\"}",
          -1
        ]
      ]
    }
  }
];
