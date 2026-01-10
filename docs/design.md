# Bloomio デザイン仕様書

**最終更新**: 2026年1月10日  
**バージョン**: 1.0

---

## 🎨 デザインコンセプト

> **「花のように美しく、シンプルで使いやすい」**

### キーワード
- Elegant（優雅）
- Clean（清潔）
- Natural（自然）
- Warm（温かみ）
- Modern（モダン）

---

## 🌈 カラーパレット

### Primary（ピンク系 - 花を象徴）
```css
--primary-500: #e91e63;   /* メインピンク */
--primary-600: #d81b60;   /* ホバー用 */
--primary-700: #c2185b;   /* アクティブ用 */
```

### Secondary（グリーン系 - 葉を象徴）
```css
--secondary-500: #4caf50;  /* メイングリーン */
--secondary-600: #43a047;
```

### Accent（オレンジ系 - 温かみ）
```css
--accent-300: #ffb74d;    /* メインオレンジ */
```

### Neutral（グレースケール）
```css
--gray-50:  #fafafa;      /* 背景 */
--gray-100: #f5f5f5;      /* カード背景 */
--gray-200: #eeeeee;      /* ボーダー */
--gray-600: #757575;      /* Secondary text */
--gray-700: #616161;      /* Primary text */
--gray-800: #424242;      /* Heading */
--white:    #ffffff;
```

---

## 📝 タイポグラフィ

### フォントファミリー
```css
/* 日本語 */
--font-ja: "Noto Sans JP", "Hiragino Sans", "Yu Gothic", sans-serif;

/* 英語 */
--font-en: "Inter", -apple-system, "Segoe UI", sans-serif;

/* 見出し（オプション） */
--font-heading: "Playfair Display", "Noto Serif JP", serif;
```

### フォントサイズ（モバイル / デスクトップ）

| 要素 | モバイル | デスクトップ | Weight |
|-----|---------|-------------|--------|
| H1 (Hero) | 36px | 48px | 700 |
| H1 (Page) | 30px | 36px | 700 |
| H2 | 24px | 30px | 700 |
| H3 | 20px | 24px | 600 |
| Body | 16px | 16px | 400 |
| Small | 14px | 14px | 400 |

---

## 🧩 主要コンポーネント

### ボタン

#### Primary Button
```css
background: #e91e63;
color: white;
padding: 12px 24px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;

hover:
  background: #d81b60;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
```

#### Secondary Button
```css
background: white;
color: #d81b60;
border: 2px solid #e91e63;
padding: 12px 24px;
border-radius: 8px;

hover:
  background: #fce4ec;
```

### カード（花の表示用）

```css
width: 100%;
background: white;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
overflow: hidden;

hover:
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
  
transition: all 0.3s ease;

構造:
- 画像: aspect-ratio 1:1, object-fit cover
- タイトル: 18px, weight 600, color #424242
- 花言葉: 14px, color #757575, 2行で切る
```

### 検索バー

```css
height: 48px;
padding: 12px 16px;
font-size: 16px;
border-radius: 24px;
border: 2px solid #eeeeee;
background: white;

focus:
  border-color: #e91e63;
  box-shadow: 0 0 0 3px rgba(233, 30, 99, 0.1);
  outline: none;
```

### カラーフィルター（色で探す）

```css
size: 48px;
border-radius: 50%;
border: 3px solid transparent;
cursor: pointer;

hover:
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

selected:
  border: 3px solid #e91e63;
  box-shadow: 0 0 0 4px rgba(233, 30, 99, 0.1);
```

---

## 📐 レイアウト

### コンテナ幅
```css
--container-xl: 1280px;  /* デフォルト */
```

### グリッドシステム（花一覧）

| デバイス | カラム数 | Gap |
|---------|---------|-----|
| Mobile (< 768px) | 1 | 16px |
| Tablet (768-1024px) | 2 | 24px |
| Desktop (> 1024px) | 3 | 32px |
| Wide (> 1280px) | 4 | 32px |

### スペーシング
```css
--space-4:  16px;  /* 標準 */
--space-6:  24px;  /* セクション間 */
--space-8:  32px;  /* 大きいセクション間 */
--space-16: 64px;  /* ページセクション間 */
```

---

## 🖼️ 画像仕様

| 用途 | アスペクト比 | サイズ | 形式 |
|-----|------------|--------|------|
| ヒーローイメージ | 16:9 | 1920x1080 | WebP |
| 花詳細（メイン） | 1:1 | 800x800 | WebP |
| 一覧サムネイル | 1:1 | 400x400 | WebP |
| OGP画像 | 1.91:1 | 1200x630 | PNG |

---

## ✨ アニメーション

### タイミング
```css
--duration-fast:   150ms;   /* クイックフィードバック */
--duration-normal: 300ms;   /* 標準的な遷移 */
--duration-slow:   500ms;   /* ゆったりした演出 */

--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

### ホバー効果（カード）
```css
transition: all 0.3s ease;

hover:
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
```

---

## 📱 レスポンシブ

### ブレークポイント
```css
--breakpoint-sm:  640px;   /* モバイル横向き */
--breakpoint-md:  768px;   /* タブレット */
--breakpoint-lg:  1024px;  /* デスクトップ */
--breakpoint-xl:  1280px;  /* 大画面 */
```

### アプローチ
- **Mobile First**: スマホ基準で設計
- **Progressive Enhancement**: 画面が大きくなるにつれて機能追加

---

## ♿ アクセシビリティ

### カラーコントラスト
- テキスト（通常）: 最低 4.5:1 ✅
- UI要素: 最低 3:1 ✅

### フォーカスステート
```css
:focus-visible {
  outline: 2px solid #e91e63;
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 🎯 ページレイアウト

### トップページ
```
- Header (64px)
- Hero Section (500px) + 検索バー
- 人気の花 (Grid)
- 色で探す (Color Chips)
- 季節の花 (Horizontal Scroll)
- シーンで探す (Grid)
- Footer
```

### 花の詳細ページ
```
- Header
- Main Image Gallery (800x800)
- 花の基本情報 + 花言葉
- 詳細情報 (Accordion)
- 相性の良い花 (Carousel)
- アフィリエイト
- Footer
```

### 検索・一覧ページ
```
デスクトップ:
- Header
- Filter Sidebar (240px) | 検索バー + グリッド

モバイル:
- Header
- 検索バー
- フィルター（下部シート）
- グリッド (1カラム)
```

---

## 📦 実装ツール

- **UIフレームワーク**: Tailwind CSS
- **コンポーネント**: shadcn/ui
- **アニメーション**: Framer Motion（オプション）
- **アイコン**: Lucide React

---

**参考リンク**
- 企画書: `/root/doc/企画書_花言葉サービス.md`
- Figma: （作成予定）
- Lovableプロトタイプ: （作成予定）
