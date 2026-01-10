-- Bloomio Database Schema
-- 花にまつわる言葉のデータベース

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Flowers table
CREATE TABLE flowers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name_ja TEXT NOT NULL,
    name_en TEXT NOT NULL,
    scientific_name TEXT,
    description_ja TEXT,
    description_en TEXT,
    family_ja TEXT,
    family_en TEXT,
    origin_ja TEXT,
    origin_en TEXT,
    blooming_season_ja TEXT,
    blooming_season_en TEXT,
    image_url TEXT,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Flower meanings
CREATE TABLE flower_meanings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    meaning_ja TEXT NOT NULL,
    meaning_en TEXT NOT NULL,
    color TEXT,
    priority INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Flower quotes (文学的引用)
CREATE TABLE flower_quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    text_ja TEXT NOT NULL,
    text_en TEXT NOT NULL,
    author_ja TEXT NOT NULL,
    author_en TEXT NOT NULL,
    source_ja TEXT,
    source_en TEXT,
    year INT,
    context_ja TEXT,
    context_en TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Flower stories (歴史的エピソード)
CREATE TABLE flower_stories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    title_ja TEXT NOT NULL,
    title_en TEXT NOT NULL,
    content_ja TEXT NOT NULL,
    content_en TEXT NOT NULL,
    period TEXT,
    region TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Flower trivia (うんちく)
CREATE TABLE flower_trivia (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    title_ja TEXT NOT NULL,
    title_en TEXT NOT NULL,
    content_ja TEXT NOT NULL,
    content_en TEXT NOT NULL,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Cultural notes (文化的背景)
CREATE TABLE flower_cultural (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    country_ja TEXT NOT NULL,
    country_en TEXT NOT NULL,
    meaning_ja TEXT NOT NULL,
    meaning_en TEXT NOT NULL,
    usage_ja TEXT,
    usage_en TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Colors
CREATE TABLE colors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name_ja TEXT NOT NULL,
    name_en TEXT NOT NULL
);

-- Flower-Color junction
CREATE TABLE flower_colors (
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    color_id UUID REFERENCES colors(id) ON DELETE CASCADE,
    PRIMARY KEY (flower_id, color_id)
);

-- Seasons
CREATE TABLE seasons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name_ja TEXT NOT NULL,
    name_en TEXT NOT NULL
);

-- Flower-Season junction
CREATE TABLE flower_seasons (
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    season_id UUID REFERENCES seasons(id) ON DELETE CASCADE,
    PRIMARY KEY (flower_id, season_id)
);

-- Scenes (occasions)
CREATE TABLE scenes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT UNIQUE NOT NULL,
    name_ja TEXT NOT NULL,
    name_en TEXT NOT NULL,
    icon TEXT
);

-- Flower-Scene junction
CREATE TABLE flower_scenes (
    flower_id UUID REFERENCES flowers(id) ON DELETE CASCADE,
    scene_id UUID REFERENCES scenes(id) ON DELETE CASCADE,
    PRIMARY KEY (flower_id, scene_id)
);

-- Indexes for performance
CREATE INDEX idx_flowers_slug ON flowers(slug);
CREATE INDEX idx_flowers_views ON flowers(views DESC);
CREATE INDEX idx_flower_meanings_flower_id ON flower_meanings(flower_id);
CREATE INDEX idx_flower_quotes_flower_id ON flower_quotes(flower_id);
CREATE INDEX idx_flower_stories_flower_id ON flower_stories(flower_id);
CREATE INDEX idx_flower_trivia_flower_id ON flower_trivia(flower_id);
CREATE INDEX idx_flower_cultural_flower_id ON flower_cultural(flower_id);
CREATE INDEX idx_flower_colors_flower_id ON flower_colors(flower_id);
CREATE INDEX idx_flower_seasons_flower_id ON flower_seasons(flower_id);
CREATE INDEX idx_flower_scenes_flower_id ON flower_scenes(flower_id);

-- Enable Row Level Security (RLS)
ALTER TABLE flowers ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_meanings ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_trivia ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_cultural ENABLE ROW LEVEL SECURITY;
ALTER TABLE colors ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_colors ENABLE ROW LEVEL SECURITY;
ALTER TABLE seasons ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_seasons ENABLE ROW LEVEL SECURITY;
ALTER TABLE scenes ENABLE ROW LEVEL SECURITY;
ALTER TABLE flower_scenes ENABLE ROW LEVEL SECURITY;

-- RLS Policies (読み取り専用を誰でも許可)
CREATE POLICY "Public read access" ON flowers FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_meanings FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_quotes FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_stories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_trivia FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_cultural FOR SELECT USING (true);
CREATE POLICY "Public read access" ON colors FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_colors FOR SELECT USING (true);
CREATE POLICY "Public read access" ON seasons FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_seasons FOR SELECT USING (true);
CREATE POLICY "Public read access" ON scenes FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flower_scenes FOR SELECT USING (true);
