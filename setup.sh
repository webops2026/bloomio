#!/bin/bash
# Bloomio セットアップスクリプト
# 対話式で必要な情報を入力してセットアップを自動化

set -e

echo "🌸 Bloomio セットアップウィザード"
echo "=================================="
echo ""

# 色付き出力
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ステップ1: Supabase情報入力
echo -e "${BLUE}📝 ステップ1: Supabase情報を入力${NC}"
echo "Supabaseダッシュボード (https://app.supabase.com) から取得してください"
echo ""

read -p "Supabase Project URL (例: https://xxx.supabase.co): " SUPABASE_URL
read -p "Supabase Anon Key: " SUPABASE_ANON_KEY

# 環境変数ファイル作成
echo ""
echo -e "${GREEN}✅ .env.local を作成中...${NC}"
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_ANON_KEY
EOF

echo -e "${GREEN}✅ 環境変数ファイル作成完了${NC}"
echo ""

# ステップ2: 依存関係インストール
echo -e "${BLUE}📦 ステップ2: 依存関係をインストール中...${NC}"
npm install

echo -e "${GREEN}✅ インストール完了${NC}"
echo ""

# ステップ3: ビルドテスト
echo -e "${BLUE}🔨 ステップ3: ビルドテスト中...${NC}"
npm run build

echo -e "${GREEN}✅ ビルド成功${NC}"
echo ""

# 完了
echo ""
echo -e "${GREEN}🎉 セットアップ完了！${NC}"
echo ""
echo "次のコマンドで開発サーバーを起動できます："
echo -e "${YELLOW}npm run dev${NC}"
echo ""
echo "Vercelデプロイの準備も完了しています。"
echo "詳細は DEPLOYMENT.md を確認してください。"
