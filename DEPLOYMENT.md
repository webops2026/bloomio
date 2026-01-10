# Bloomio - Vercel & Supabase セットアップガイド

## 🗄️ Supabaseプロジェクト作成

### 1. Supabaseアカウント作成
1. https://supabase.com/ にアクセス
2. "Start your project" をクリック
3. GitHubアカウントでサインアップ

### 2. 新しいプロジェクト作成
1. ダッシュボードで "New project" をクリック
2. プロジェクト情報を入力：
   - **Name**: bloomio
   - **Database Password**: 強力なパスワードを生成（保存しておく）
   - **Region**: Northeast Asia (Tokyo) - 日本に最も近い
   - **Pricing Plan**: Free tier
3. "Create new project" をクリック（数分かかります）

### 3. データベーススキーマ作成
1. プロジェクトが準備できたら、左メニューの "SQL Editor" をクリック
2. "New query" をクリック
3. `/root/legacybrands/bloomio/supabase/schema.sql` の内容をコピー&ペースト
4. "Run" をクリックしてスキーマを作成

### 4. 初期データ投入
1. SQL Editorで新しいクエリを作成
2. `/root/legacybrands/bloomio/supabase/seed/flowers.sql` の内容をコピー&ペースト
3. "Run" をクリック

### 5. API認証情報取得
1. 左メニューの "Settings" > "API" に移動
2. 以下の情報をコピー：
   - **Project URL**: `https://xxx.supabase.co`
   - **anon public key**: `eyJhbG...`（長いトークン）

## 🔐 環境変数設定

### ローカル開発用
1. `/root/legacybrands/bloomio/app/.env.local` ファイルを作成：

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

2. 上記で取得した値を貼り付け

## 🚀 Vercelデプロイ

### 1. Vercelアカウント作成
1. https://vercel.com/ にアクセス
2. "Sign Up" をクリック
3. GitHubアカウントで連携

### 2. GitHubリポジトリ作成
```bash
cd /root/legacybrands/bloomio
git init
git add .
git commit -m "Initial commit: Bloomio - 花にまつわる言葉"
git branch -M main

# GitHubで新しいリポジトリ作成後
git remote add origin https://github.com/YOUR_USERNAME/bloomio.git
git push -u origin main
```

### 3. Vercelプロジェクトインポート
1. Vercelダッシュボードで "Add New..." > "Project" をクリック
2. GitHubリポジトリ "bloomio" を選択
3. "Import" をクリック

### 4. プロジェクト設定
#### Framework Preset
- **Framework**: Next.js
- **Root Directory**: `app`（重要！）
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

#### 環境変数設定
"Environment Variables" セクションで追加：

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your-anon-key` |

**すべての環境（Production, Preview, Development）にチェック**を入れる

### 5. デプロイ実行
1. "Deploy" をクリック
2. ビルドが完了するまで待機（3〜5分）
3. デプロイ成功！ 🎉

## 🌐 カスタムドメイン設定（bloomio.net）

### 1. Vercelでドメイン追加
1. プロジェクトダッシュボード > "Settings" > "Domains"
2. "Add" をクリック
3. `bloomio.net` を入力
4. "Add" をクリック

### 2. DNSレコード設定
Vercelが指示するDNSレコードをドメインレジストラ（お名前.comなど）に追加：

#### Aレコード
- **Type**: A
- **Name**: `@`
- **Value**: `76.76.21.21`

#### CNAMEレコード
- **Type**: CNAME
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`

### 3. SSL証明書自動発行
- DNS設定後、Vercelが自動的にSSL証明書を発行（数分〜数時間）
- 完了すると `https://bloomio.net` でアクセス可能

## ✅ デプロイ確認チェックリスト

- [ ] Supabaseプロジェクト作成完了
- [ ] スキーマ作成完了（全テーブル確認）
- [ ] 初期データ投入完了（バラ、桜など）
- [ ] API認証情報取得
- [ ] ローカル環境変数設定（`.env.local`）
- [ ] ローカルでビルド成功（`npm run build`）
- [ ] GitHubリポジトリ作成＆プッシュ
- [ ] Vercelプロジェクト作成
- [ ] Vercel環境変数設定
- [ ] 初回デプロイ成功
- [ ] デプロイ後の動作確認
- [ ] カスタムドメイン設定（bloomio.net）
- [ ] SSL証明書発行確認

## 📊 データ管理

### Supabaseでデータ編集
1. Supabaseダッシュボード > "Table Editor"
2. テーブルを選択（flowers, flower_meanings など）
3. "Insert" > "Insert row" で新しいデータ追加
4. 既存データをクリックして編集

### 新しい花を追加する手順
1. `flowers` テーブルに花の基本情報を追加
2. `flower_meanings` に花言葉を追加
3. `flower_quotes` に文学的引用を追加
4. `flower_stories` に歴史的エピソードを追加
5. `flower_trivia` にうんちくを追加
6. `flower_cultural` に文化的背景を追加
7. `flower_colors` で色と関連付け
8. `flower_seasons` で季節と関連付け
9. `flower_scenes` でシーンと関連付け

## 🔧 トラブルシューティング

### ビルドエラーが出る
```bash
# ローカルで確認
cd /root/legacybrands/bloomio/app
npm run build

# エラーログを確認
```

### データが表示されない
1. Supabaseのデータが入っているか確認
2. API認証情報が正しいか確認
3. RLSポリシーが有効か確認（SELECT許可）

### 環境変数が反映されない
1. Vercelで環境変数を再確認
2. "Redeploy" で再デプロイ

## 📈 運用開始後

### アナリティクス設定
1. Google Analytics 4 設定
2. Google Search Console登録
3. サイトマップ送信

### SEO最適化
1. メタディスクリプション追加
2. OGP画像設定
3. 構造化データ実装

### コンテンツ拡充
1. 花を20種類まで増やす
2. 文学的引用を各花5つまで追加
3. 歴史的エピソード追加

---

**準備完了！** 🚀 

デプロイ後は `https://bloomio.net` であなたのサイトが全世界に公開されます！
