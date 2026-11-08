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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
  }
];
