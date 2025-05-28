## 🧭 ステップバイステップ開発ロードマップ

### ✅ ステップ 1: フロント（Next.js）でHello Worldを表示
目的: 開発の最初に成果が見える
内容:
GitHubリポジトリ作成 receipt-frontend
npx create-next-app で立ち上げ
pages/index.tsx に Hello World
npm run dev で確認
✅ 目に見える UI → モチベーションが上がる

### ✅ ステップ 2: Goバックエンド（Echo）からAPIでHello Worldを返す
目的: API通信の流れを体感
内容:
receipt-backend リポジトリ作成
/api/hello エンドポイントを作成して "Hello from Go" を返す
フロントから fetch('/api/hello') で表示
✅ フロント→Goの流れが完成

### ✅ ステップ 3: Python（FastAPI）で画像解析の雛形を作る
目的: OCR処理部分を独立で実装し、将来の連携に備える
内容:
receipt-parser（FastAPI）を作成し /parse API を作る
curl や Postman で画像を送る → ダミーの解析結果を返す
✅ 画像処理サーバーの動作確認ができる

### ✅ ステップ 4: GoからPythonのAPIを呼び出して連携する
目的: サービス連携の実感を得る
内容:
Goの /api/upload で画像を受けて Python /parse に送信
Pythonがダミーで解析 → Goが受け取り → クライアントへ返却
✅ バックエンド間通信の実装に踏み込む

### ✅ ステップ 5: DBをつなげて解析結果を保存
目的: 実データが保存・取得される流れをつかむ
内容:
GoでPostgreSQL（例）に接続
解析結果（商品名・金額など）を保存
/api/receipts で一覧を取得
✅ アプリとしての手応えが出る

### ✅ ステップ 6: フロントにレシート一覧を表示（リアルタイム反映）
目的: ユーザーの目に見える機能完成
内容:
useEffect + fetch で定期的に一覧取得
または WebSocketでリアルタイム更新
✅ ここまでで MVP 完成レベル！

### ✅ ステップ 7: CI/CD（GitHub Actions + AWS ECS/Fargate or Amplify）
目的: 開発→マージ→自動デプロイの流れを実現
内容:
GitHub ActionsでECR/ECSまたはAmplifyへ自動デプロイ
✅ チーム開発・運用も可能に