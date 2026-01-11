import { supabase } from '@/lib/supabase';
import type { Flower, FlowerQuote, FlowerStory, FlowerTrivia, CulturalNote, Scene } from '@/types/flower';

/**
 * データベースから全ての花を取得
 */
export async function getFlowers(): Promise<Flower[]> {
  const { data: flowers, error } = await supabase
    .from('flowers')
    .select(`
      *,
      meanings:flower_meanings(*),
      quotes:flower_quotes(*),
      stories:flower_stories(*),
      trivia:flower_trivia(*),
      cultural:flower_cultural(*),
      colors:flower_colors(color:colors(*)),
      seasons:flower_seasons(season:seasons(*)),
      scenes:flower_scenes(scene:scenes(*))
    `)
    .order('views', { ascending: false });

  if (error) {
    console.error('Error fetching flowers:', error);
    return [];
  }

  // データ整形
  return (flowers || []).map(transformFlowerData);
}

/**
 * スラッグで花を取得
 */
export async function getFlowerBySlug(slug: string): Promise<Flower | null> {
  const { data: flower, error } = await supabase
    .from('flowers')
    .select(`
      *,
      meanings:flower_meanings(*),
      quotes:flower_quotes(*),
      stories:flower_stories(*),
      trivia:flower_trivia(*),
      cultural:flower_cultural(*),
      colors:flower_colors(color:colors(*)),
      seasons:flower_seasons(season:seasons(*)),
      scenes:flower_scenes(scene:scenes(*))
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching flower:', error);
    return null;
  }

  return flower ? transformFlowerData(flower) : null;
}

/**
 * 色で花を検索
 */
export async function getFlowersByColor(color: string): Promise<Flower[]> {
  const { data: flowers, error } = await supabase
    .from('flowers')
    .select(`
      *,
      meanings:flower_meanings(*),
      colors:flower_colors!inner(color:colors!inner(*))
    `)
    .eq('colors.color.slug', color);

  if (error) {
    console.error('Error fetching flowers by color:', error);
    return [];
  }

  return (flowers || []).map(transformFlowerData);
}

/**
 * 季節で花を検索
 */
export async function getFlowersBySeason(season: string): Promise<Flower[]> {
  const { data: flowers, error } = await supabase
    .from('flowers')
    .select(`
      *,
      meanings:flower_meanings(*),
      seasons:flower_seasons!inner(season:seasons!inner(*))
    `)
    .eq('seasons.season.slug', season);

  if (error) {
    console.error('Error fetching flowers by season:', error);
    return [];
  }

  return (flowers || []).map(transformFlowerData);
}

/**
 * シーンで花を検索
 */
export async function getFlowersByScene(sceneSlug: string): Promise<Flower[]> {
  const { data: flowers, error } = await supabase
    .from('flowers')
    .select(`
      *,
      meanings:flower_meanings(*),
      scenes:flower_scenes!inner(scene:scenes!inner(*))
    `)
    .eq('scenes.scene.slug', sceneSlug);

  if (error) {
    console.error('Error fetching flowers by scene:', error);
    return [];
  }

  return (flowers || []).map(transformFlowerData);
}

/**
 * 全シーンを取得
 */
export async function getScenes(): Promise<Scene[]> {
  const { data, error } = await supabase
    .from('scenes')
    .select('*')
    .order('id');

  if (error) {
    console.error('Error fetching scenes:', error);
    return [];
  }

  return data || [];
}

/**
 * データベースから取得したデータをFlower型に変換
 */
function transformFlowerData(data: any): Flower {
  return {
    id: data.id,
    slug: data.slug,
    name_ja: data.name_ja,
    name_en: data.name_en,
    name_scientific: data.scientific_name,
    description_ja: data.description_ja,
    description_en: data.description_en,
    family_ja: data.family_ja,
    family_en: data.family_en,
    origin_ja: data.origin_ja,
    origin_en: data.origin_en,
    bloom_start: data.blooming_season_ja ? parseInt(data.blooming_season_ja.split('月')[0]) : undefined,
    bloom_end: data.blooming_season_en ? parseInt(data.blooming_season_en.split('-')[1]) : undefined,
    colors: (data.colors || []).map((c: any) => c.color?.slug || c),
    seasons: (data.seasons || []).map((s: any) => s.season?.slug || s),
    image_url: data.image_url,
    view_count: data.views || 0,
    like_count: data.likes || 0,
    meanings: (data.meanings || []).map((m: any) => ({
      id: m.id,
      meaning_ja: m.meaning_ja,
      meaning_en: m.meaning_en,
      color: m.color,
      priority: m.priority || 0,
    })),
    scenes: (data.scenes || []).map((s: any) => ({
      id: s.scene?.id || s.id,
      name_ja: s.scene?.name_ja || s.name_ja,
      name_en: s.scene?.name_en || s.name_en,
      slug: s.scene?.slug || s.slug,
      icon: s.scene?.icon || s.icon,
    })),
    quotes: data.quotes || [],
    stories: data.stories || [],
    trivia: data.trivia || [],
    cultural: data.cultural || [],
  };
}
