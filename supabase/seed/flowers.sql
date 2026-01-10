-- Bloomio 初期データ: 花
-- Version: 1.0
-- Date: 2026-01-10

-- ============================================================================
-- 花データ
-- ============================================================================

-- バラ
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('rose', 'バラ', 'Rose', 'Rosa', 
 '愛と美の象徴として世界中で愛される花。色によって異なる花言葉を持ち、贈り物として最も人気があります。',
 'A symbol of love and beauty cherished worldwide. Each color carries a different meaning, making it the most popular gift flower.',
 'バラ科', 'Rosaceae', 'アジア、ヨーロッパ', 'Asia, Europe',
 5, 11, ARRAY['red', 'pink', 'white', 'yellow', 'orange'], ARRAY['spring', 'summer', 'autumn'],
 'https://images.unsplash.com/photo-1518882605630-8b18a5c8da41?w=800',
 15420, 2341);

-- チューリップ
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('tulip', 'チューリップ', 'Tulip', 'Tulipa',
 '春を代表する球根植物。鮮やかな色彩とシンプルな形が特徴で、世界中で愛されています。',
 'An iconic spring bulb flower known for its vibrant colors and simple, elegant shape.',
 'ユリ科', 'Liliaceae', 'トルコ、中央アジア', 'Turkey, Central Asia',
 3, 5, ARRAY['red', 'pink', 'white', 'yellow', 'purple', 'orange'], ARRAY['spring'],
 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800',
 12350, 1892);

-- ひまわり
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('sunflower', 'ひまわり', 'Sunflower', 'Helianthus annuus',
 '太陽に向かって咲く姿が印象的な夏の代表花。明るく元気なイメージで、見る人を笑顔にします。',
 'A summer icon known for following the sun. Its bright, cheerful appearance brings smiles to all who see it.',
 'キク科', 'Asteraceae', '北アメリカ', 'North America',
 7, 9, ARRAY['yellow', 'orange'], ARRAY['summer'],
 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800',
 11200, 1756);

-- カーネーション
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('carnation', 'カーネーション', 'Carnation', 'Dianthus caryophyllus',
 '母の日の贈り物として世界的に有名。フリル状の花びらが特徴で、長持ちする切り花として人気です。',
 'World-famous as a Mother''s Day gift. Known for its frilly petals and long-lasting cut flowers.',
 'ナデシコ科', 'Caryophyllaceae', '地中海沿岸', 'Mediterranean',
 4, 6, ARRAY['red', 'pink', 'white', 'yellow', 'purple'], ARRAY['spring', 'summer'],
 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800',
 9800, 1543);

-- ガーベラ
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('gerbera', 'ガーベラ', 'Gerbera', 'Gerbera jamesonii',
 '鮮やかな色彩と大きな花が特徴のキク科の花。切り花として人気があり、花束のアクセントに最適です。',
 'A daisy-family flower with vibrant colors and large blooms. Popular in bouquets as a cheerful accent.',
 'キク科', 'Asteraceae', '南アフリカ', 'South Africa',
 4, 10, ARRAY['red', 'pink', 'white', 'yellow', 'orange'], ARRAY['spring', 'summer', 'autumn'],
 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800',
 8750, 1234);

-- ユリ
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('lily', 'ユリ', 'Lily', 'Lilium',
 '優雅で気品のある花姿が特徴。白いユリは純粋さの象徴として、結婚式やお祝いに人気です。',
 'Known for its elegant and noble appearance. White lilies symbolize purity and are popular at weddings.',
 'ユリ科', 'Liliaceae', '北半球の温帯地域', 'Northern Hemisphere temperate regions',
 5, 8, ARRAY['white', 'pink', 'yellow', 'orange'], ARRAY['spring', 'summer'],
 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800',
 10200, 1678);

-- 桜
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('cherry-blossom', '桜', 'Cherry Blossom', 'Prunus serrulata',
 '日本の国花として親しまれる春の象徴。淡いピンクの花は儚さと美しさを表現しています。',
 'Japan''s national flower and a symbol of spring. Its delicate pink blooms represent ephemeral beauty.',
 'バラ科', 'Rosaceae', '日本、東アジア', 'Japan, East Asia',
 3, 4, ARRAY['pink', 'white'], ARRAY['spring'],
 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
 18500, 3421);

-- ラベンダー
INSERT INTO flowers (slug, name_ja, name_en, name_scientific, description_ja, description_en, family_ja, family_en, origin_ja, origin_en, bloom_start, bloom_end, colors, seasons, image_url, view_count, like_count) VALUES
('lavender', 'ラベンダー', 'Lavender', 'Lavandula',
 '心地よい香りで知られるハーブ。紫色の花穂が風に揺れる姿は見る人を癒します。',
 'An herb known for its soothing fragrance. Its purple flower spikes swaying in the breeze bring peace to all.',
 'シソ科', 'Lamiaceae', '地中海沿岸', 'Mediterranean',
 6, 8, ARRAY['purple', 'blue'], ARRAY['summer'],
 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800',
 9100, 1456);

-- ============================================================================
-- 花言葉データ
-- ============================================================================

-- バラの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '愛', 'Love', 10 FROM flowers WHERE slug = 'rose';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '美', 'Beauty', 9 FROM flowers WHERE slug = 'rose';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '情熱', 'Passion', 'red', 8 FROM flowers WHERE slug = 'rose';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '感謝', 'Gratitude', 'pink', 7 FROM flowers WHERE slug = 'rose';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '純潔', 'Purity', 'white', 6 FROM flowers WHERE slug = 'rose';

-- チューリップの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '思いやり', 'Thoughtfulness', 10 FROM flowers WHERE slug = 'tulip';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '博愛', 'Perfect Love', 9 FROM flowers WHERE slug = 'tulip';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '告白', 'Declaration of Love', 'red', 8 FROM flowers WHERE slug = 'tulip';

-- ひまわりの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '憧れ', 'Adoration', 10 FROM flowers WHERE slug = 'sunflower';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '情熱', 'Passion', 9 FROM flowers WHERE slug = 'sunflower';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '光輝', 'Radiance', 8 FROM flowers WHERE slug = 'sunflower';

-- カーネーションの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '母への愛', 'Mother''s Love', 'red', 10 FROM flowers WHERE slug = 'carnation';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '感謝', 'Gratitude', 'pink', 9 FROM flowers WHERE slug = 'carnation';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '純粋な愛', 'Pure Love', 'white', 8 FROM flowers WHERE slug = 'carnation';

-- ガーベラの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '希望', 'Hope', 10 FROM flowers WHERE slug = 'gerbera';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '常に前進', 'Always Moving Forward', 9 FROM flowers WHERE slug = 'gerbera';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, color, priority) 
SELECT id, '崇高な愛', 'Noble Love', 'pink', 8 FROM flowers WHERE slug = 'gerbera';

-- ユリの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '純粋', 'Purity', 10 FROM flowers WHERE slug = 'lily';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '無垢', 'Innocence', 9 FROM flowers WHERE slug = 'lily';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '威厳', 'Majesty', 8 FROM flowers WHERE slug = 'lily';

-- 桜の花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '精神美', 'Spiritual Beauty', 10 FROM flowers WHERE slug = 'cherry-blossom';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '優雅', 'Elegance', 9 FROM flowers WHERE slug = 'cherry-blossom';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '儚さ', 'Transience', 8 FROM flowers WHERE slug = 'cherry-blossom';

-- ラベンダーの花言葉
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '沈黙', 'Silence', 10 FROM flowers WHERE slug = 'lavender';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '清潔', 'Cleanliness', 9 FROM flowers WHERE slug = 'lavender';
INSERT INTO flower_meanings (flower_id, meaning_ja, meaning_en, priority) 
SELECT id, '期待', 'Expectation', 8 FROM flowers WHERE slug = 'lavender';
