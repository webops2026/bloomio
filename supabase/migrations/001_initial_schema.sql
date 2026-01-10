-- Bloomio Database Schema
-- Version: 1.0
-- Date: 2026-01-10

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- flowers テーブル（花の基本情報）
-- ============================================================================
CREATE TABLE flowers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- 名前
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_scientific TEXT,
  slug TEXT UNIQUE NOT NULL,
  
  -- 説明
  description_ja TEXT,
  description_en TEXT,
  
  -- 基本情報
  family_ja TEXT,
  family_en TEXT,
  origin_ja TEXT,
  origin_en TEXT,
  
  -- 開花期
  bloom_start INTEGER,
  bloom_end INTEGER,
  
  -- 分類
  colors TEXT[],
  seasons TEXT[],
  
  -- 画像
  image_url TEXT,
  image_urls TEXT[],
  
  -- 統計
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  
  -- タイムスタンプ
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- インデックス
CREATE INDEX idx_flowers_colors ON flowers USING GIN(colors);
CREATE INDEX idx_flowers_seasons ON flowers USING GIN(seasons);
CREATE INDEX idx_flowers_slug ON flowers(slug);
CREATE INDEX idx_flowers_view_count ON flowers(view_count DESC);

-- ============================================================================
-- flower_meanings テーブル（花言葉）
-- ============================================================================
CREATE TABLE flower_meanings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  flower_id UUID NOT NULL REFERENCES flowers(id) ON DELETE CASCADE,
  
  meaning_ja TEXT NOT NULL,
  meaning_en TEXT NOT NULL,
  color TEXT,
  origin_ja TEXT,
  origin_en TEXT,
  priority INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_flower_meanings_flower_id ON flower_meanings(flower_id);

-- ============================================================================
-- scenes テーブル（使用シーン）
-- ============================================================================
CREATE TABLE scenes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  name_ja TEXT NOT NULL,
  name_en TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description_ja TEXT,
  description_en TEXT,
  icon TEXT,
  color TEXT,
  display_order INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_scenes_slug ON scenes(slug);

-- ============================================================================
-- flower_scenes テーブル（花とシーンの関連）
-- ============================================================================
CREATE TABLE flower_scenes (
  flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
  scene_id UUID REFERENCES scenes(id) ON DELETE CASCADE,
  PRIMARY KEY (flower_id, scene_id)
);

-- ============================================================================
-- likes テーブル（いいね）
-- ============================================================================
CREATE TABLE likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  target_type TEXT NOT NULL CHECK (target_type IN ('flower', 'submission')),
  target_id UUID NOT NULL,
  ip_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(target_type, target_id, ip_hash)
);

CREATE INDEX idx_likes_target ON likes(target_type, target_id);

-- ============================================================================
-- updated_at トリガー
-- ============================================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_flowers_updated_at
  BEFORE UPDATE ON flowers
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- Row Level Security (RLS)
-- ============================================================================
ALTER TABLE flowers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "flowers_select_policy" ON flowers FOR SELECT USING (true);

ALTER TABLE flower_meanings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "flower_meanings_select_policy" ON flower_meanings FOR SELECT USING (true);

ALTER TABLE scenes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "scenes_select_policy" ON scenes FOR SELECT USING (true);

ALTER TABLE flower_scenes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "flower_scenes_select_policy" ON flower_scenes FOR SELECT USING (true);

ALTER TABLE likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "likes_select_policy" ON likes FOR SELECT USING (true);
CREATE POLICY "likes_insert_policy" ON likes FOR INSERT WITH CHECK (true);

-- ============================================================================
-- 初期データ: scenes
-- ============================================================================
INSERT INTO scenes (name_ja, name_en, slug, icon, color, display_order) VALUES
  ('誕生日', 'Birthday', 'birthday', '🎂', '#ff9800', 1),
  ('結婚式', 'Wedding', 'wedding', '💐', '#e91e63', 2),
  ('記念日', 'Anniversary', 'anniversary', '💝', '#e91e63', 3),
  ('お祝い', 'Celebration', 'celebration', '🎉', '#ffb74d', 4),
  ('お見舞い', 'Get Well', 'get-well', '🌿', '#4caf50', 5),
  ('お悔やみ', 'Sympathy', 'sympathy', '🕊️', '#9e9e9e', 6),
  ('母の日', 'Mothers Day', 'mothers-day', '🌸', '#e91e63', 7),
  ('父の日', 'Fathers Day', 'fathers-day', '🌻', '#2196f3', 8),
  ('卒業・入学', 'Graduation', 'graduation', '🎓', '#4caf50', 9),
  ('感謝', 'Thank You', 'thank-you', '🙏', '#ff9800', 10);
