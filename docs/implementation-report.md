# 小分野表示・学習分析の実装報告

実施日：2026-11-13。作業ブランチ：`feat/subfields-learning-analysis`。**機能実装と自動検証は完了、実ブラウザ確認は未完了。コミット・Push・PR・マージ・本番公開は未実行。**

## 着手時の確認

作業ツリーに既存変更はなかった。ローカルmainと `git ls-remote origin refs/heads/main` の双方が `1930ef1a68c4e1b04ecbb9747bb476bbd6a0766e` を指し、事前調査から構造差分はなかった。ルートまでの親ディレクトリとリポジトリ内を調べ、適用されるAGENTS.mdはなかった。README、question-data、collection-stage1、出典・検証台帳、core／app／storage／問題バンク・生成処理と既存テストを読んだ。

## 変更した内容

- 独立した `classification.js` をcoreとappで共有。IPAシラバスVer.9.2の中分類相当23項目をアプリの小分野として定義。公式の小分類とは異なる旨を表示した。循環依存はない。
- 科目Aの旧60問を分類し、追加5問を含め65問分類済み・未分類0問。Bは2分野を維持。分類の判断根拠と境界事例は `subfield-assignment.json` に記録。
- 演習・結果カードの折りたたみ外・過去結果に、科目／大分野／小分野をHTMLエスケープして表示。
- 科目すべて／A／B、大分野、小分野／未分類で学習分析を絞り込み。Aは大分野未指定でも全小分野を選択可能。科目変更で下位2条件、大分野変更で小分野をリセット。Bは小分野を表示しない。
- `analyzeHistory` はDOM非依存。現在の問題バンクをIDで照合し、概要・分野別・問題別・最近の演習を同一条件で集計する。既存 `stats` の返却形式と挙動は維持。
- 分母は採点済みitemsの全解答回数。繰返しと採点された未解答を含み、中断中は除外。0件は「—／未学習」。最近の演習は一致itemsのあるブロックを日時降順で最大20件、一致分の正解数／分母を表示する。元のブロックを変更せず、時間を一致分へ転用しない。解説ボタンは元の演習全体を開く。
- ユーザー確認後に公式A5問・B1問を追加。新規AI問題0問。全6問に実施済みの原本・公式正答・両解説の確認記録があり、verified。未検証登録0問。[候補・承認範囲・出典と確認状況](collection-stage2.md) を参照。

## 互換性の根拠

着手時の実バンク72問を `tests/fixtures/bank-1930ef1.json` に固定した。テストでは現在の同一IDの問題からsubfieldだけを除去し、旧オブジェクト全体との厳密一致を検査する。ID・subject・field・本文・選択肢内容と順序・answer・解説・出典・検証情報を含め、既存問題には小分野以外の変更がない。問題の削除や別IDへの置換もしていない。

旧72問だけから履歴・全IDの復習リスト・中断ブロックを生成し、旧バンクのvalidateStateで妥当性を確認した上で、改修後バンクへ `storage.load` した。エラーなし・全データの厳密一致を確認してからsaveし、元JSONが維持されることを確認。採点前の解答変更、再採点、未解答の不正解、JSON再書出し・復元も確認した。

保存キー `fe-quick-drill:v1`、version 1、settings／review／history／activeとitemsの保存形式は維持。storage.jsとvalidateStateは変更していない。分類情報・分析条件は履歴に書かれない。分析条件の操作で保存データが変わらず、通常演習・復習の出題条件にも影響しないことを検査した。未知IDと正答不整合による復元全体の拒否も維持した。

旧問題のsubfield欠落は未分類として表示・集計。空文字・null・undefinedの明示付与・未知分類・親子不一致は拒否する。新規追加経路ではAのsubfield欠落も拒否。未検証問題の通常演習・復習からの除外と、従来の出典・重複・レビュー検査を維持した。

## 自動検証結果

この環境ではnode／npmがPATHにないため、既存のCodex同梱Node実行ファイルを使用した。以下はnpmスクリプトに相当するコマンド。Nodeテストの子プロセス起動はサンドボックスでEPERMとなったため、承認された通常環境で実行した。

| チェック | 結果 |
| --- | --- |
| `node scripts/build-questions.js --write`（questions:build相当） | 成功、全78問・追加バンク62問、検証済み62問 |
| `node scripts/build-questions.js --check`（questions:check相当） | 成功、編集JSONと生成JSの同期 |
| `node --test`（npm test相当） | **25件すべて通過** |
| `python scripts/verify-stage1.py` | 旧公式56問の解答、独立計算17件、Bトレース8問を既存記録と照合し成功 |
| `git diff --check` | 成功、空白エラーなし（GitのLF→CRLF予告のみ） |
| `python -m http.server 8000 --bind 127.0.0.1` + HTTP取得 | `/`、app/core/classification、CSS、両問題JSの200応答とMIME型を確認 |

25件には既存17件を維持・拡張したもの、分析・互換性6件、追加問題2件を含む。公式62問を実アプリのイベント処理で不正解→中断再開→採点→解説→復習→正解の124セッションに通し、旧履歴の保持も確認した。これはDOMアダプターによる自動テストである。

指定集計例は、全体2/5、A2/4、DB1/3、B0/1に一致。科目すべて／A／B、親子絞り込み、未分類、0件、下位条件リセット、保存と出題条件の不変性、最近の演習の降順・20件制限・一致分母、元ブロック全体の解説、HTMLエスケープ、JSON書出しボタンと復元を検査した。

第1段階のPython検査は従来の56問とその検査記録を固定して検査するようにした。追加による総数変化を理由に元の記録を書き換えず、欠落した旧IDは拒否する。新6問は別のレビュー記録とNodeテストで公式台帳・内容ハッシュを検査する。

## 実ブラウザ確認：未完了

ブラウザ接続ホストが利用できず、Windows Chromeの状態取得もComputer Useが「現在のブラウザURLを十分な確度で判定できない」として停止した。その後のブラウザ操作は行っていない。HTTP応答確認は実施したが、**PC／スマホの描画・クリック・演習・採点・過去結果・分析・復習・中断再開・JSON復元の実ブラウザ確認は、いずれも今回未完了**。自動テストの成功を実ブラウザ確認の代わりには扱わない。

レビュー前に、次の手順で補完する。

1. `python -m http.server 8000` をこのリポジトリで起動し、Chromeで `http://localhost:8000` を開く。`file://`は使用しない。検証は新しいブラウザプロファイルなどのテスト用保存領域で行う。
2. PC幅（例1280px）とスマホ幅（例390px）で、フィルター・概要・結果分類・コード・表・長いB本文・十択の折返しと領域内スクロールを確認する。
3. A／Bそれぞれで演習し、採点前に解答を変更、中断・再読込み・再開、未解答を残して採点、折りたたみ結果と過去結果、要復習の追加・解除と復習出題を確認する。
4. 学習記録で「すべて」の下位条件無効、A全小分野、親大分野で選択肢限定、大分野・科目の変更時リセット、B小分野非表示、未分類／0件の表示を確認。絞り込んだ最近の演習から演習全体の解説が開くことを確認する。
5. JSONを書き出して同じJSONを復元する。履歴・復習・中断の一致を確認する。不正JSON・未知ID・正答不整合のJSONは拒否され、保存が置き換わらないことを確認する。問題追加用 `additional-questions.json` と学習履歴JSONは別形式なので混同しない。

## 変更ファイル

| ファイル | 変更の目的 |
| --- | --- |
| `js/classification.js`（新規） | 共有分類辞書・分析条件の正規化とリセット |
| `js/core.js` | 分類検証・DOM非依存の履歴分析、FIELDS互換export |
| `js/app.js` | 分類表示、メモリ内フィルター、条件共通の分析画面 |
| `js/question-bank.js` | 新規Aの分類必須検査 |
| `css/style.css` | 分析フィルター・概要のPC／スマホ幅レイアウト |
| `data/questions.js` | 既存サンプルA12問の小分野追加のみ |
| `data/additional-questions.json` | 既存A48問の小分野追加、新規A5／B1と確認記録 |
| `data/additional-questions.js` | JSONから再生成 |
| `tests/analysis.test.js`（新規） | 旧72問・保存互換性、分類と分析の回帰検査 |
| `tests/fixtures/bank-1930ef1.json`（新規） | 改修前72問の固定比較用バンク |
| `tests/stage2-data.test.js`（新規） | 追加6問の公式台帳・レビュー内容・B6の一意性 |
| `tests/app-cases.js` | フィルター・元の結果全体・未分類・エスケープ・書出しの操作検査 |
| `tests/question-bank-cases.js` | 新規A必須分類に合わせたテストfixtureの更新 |
| `tests/stage1-app-cases.js`、`tests/stage1-app.test.js` | 既存の操作検査を62問へ拡張 |
| `scripts/collect-stage2.py`（新規） | 原本抽出テキストからpending候補を再現、実バンクは変更しない |
| `scripts/verify-stage1.py` | 第1段階56問と既存検証記録の固定照合 |
| `docs/subfield-assignment.json`（新規） | 旧A60問の分類一覧・判断根拠 |
| `docs/ipa-stage2-review.json`（新規） | 追加6問の実施済み照合記録・内容ハッシュ |
| `docs/collection-stage2.md`（新規） | 候補・承認・収録数・一次資料・レビューの説明 |
| `docs/question-data.md`、`README.md` | 分類仕様・保存互換性・追加JSONと履歴JSON・現在の件数 |
| `docs/implementation-report.md`（新規） | 本報告・未完了のブラウザ検証・GitHub更新手順 |

## GitHub Desktopから更新する手順

1. GitHub Desktopでこのリポジトリを開き、Current branchが `feat/subfields-learning-analysis` であることを確認する。Changesで上記ファイルを確認し、旧問題の変更が小分野追加だけであること、生成JSとJSONが揃うことを確認する。`tmp/`の原本・画像・候補はコミットしない。
2. 上記の未完了ブラウザ確認を補完し、必要なら修正後に再検査する。問題なければSummaryを入力（例 `feat: add subfields and filtered study analytics`）して **Commit to feat/subfields-learning-analysis**。
3. **Publish branch**（初回）または **Push origin** を押す。**Create Pull Request** からbaseをmain、compareを作業ブランチにし、実装内容・25件のテスト・互換性根拠と実ブラウザ確認結果を記載する。
4. GitHubのPR画面でFiles changed、Checks、レビューコメントを確認する。実ブラウザ未確認のままなら、その制約を明示してレビュー用PRとして扱う。
5. **以降は今回未実行の将来手順**：レビューと必要な確認の完了後、管理者がMerge pull requestを実行。既存のSettings → Pagesの公開元設定を確認し、Actionsの既存Pages公開処理（例pages build and deployment）の成功を確認する。公開元を今回のために変更しない。公開URLで表示と既存履歴の読込みを確認する。

今回の作業ではマージ・公開処理を起動していない。現在のmainと本番Pagesにこの作業の変更は反映していない。
