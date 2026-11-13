# RYO PORTFOLIO

黒・シルバー・青紫を基調にした、プログラミング作品紹介用のポートフォリオです。

## ファイル構成
- `index.html` — トップページ
- `style.css` — デザインとレスポンシブ対応
- `script.js` — スクロール表示、進捗バー、作品フィルター、スマホメニュー、テーマ切り替え
- `projects/easys.html` — Easys の作品紹介ページ
- `projects/project-template.html` — 作品詳細ページのテンプレート
- `assets/easys/` — Easys の画面画像

## ローカルで確認する
1. フォルダーを解凍します。
2. `index.html` をブラウザーで開きます。
3. 変更したらブラウザーを更新します。

VS Code を使う場合はフォルダーを開き、`index.html` を開いて編集してください。必要なら Live Server 拡張機能を追加するとローカルサーバーで確認できます。

## 最初に変更する場所
1. `index.html` の自己紹介文とスキルを自分の情報に合わせて変更。
2. 作品が完成したら、作品カード・画像・詳細・GitHubリンクを実際の内容に更新。
3. プロフィールの公開情報に、住所や学校の機密情報などを含めないよう確認。

## GitHub Pages で公開する
1. GitHub に新しいリポジトリを作成します（例：`portfolio`）。
2. このフォルダー内のファイルをリポジトリのルートにアップロードします。
3. リポジトリの Settings → Pages を開きます。
4. Build and deployment で `Deploy from a branch` を選び、`main` と `/(root)` を指定して保存します。
5. 公開 URL が表示されるまで待ちます。

GitHub Pages のサイトは公開状態になるため、住所、電話番号、学校の機密情報、APIキーなどを載せないでください。
