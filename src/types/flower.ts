export interface Flower {
  id: string;
  slug: string;
  name_ja: string;
  name_en: string;
  name_scientific?: string;
  description_ja?: string;
  description_en?: string;
  family_ja?: string;
  family_en?: string;
  origin_ja?: string;
  origin_en?: string;
  bloom_start?: number;
  bloom_end?: number;
  colors: string[];
  seasons: string[];
  image_url: string;
  image_urls?: string[];
  view_count: number;
  like_count: number;
  meanings: FlowerMeaning[];
  scenes?: Scene[];
  
  // 新規: 言葉・物語コンテンツ
  quotes?: FlowerQuote[];        // 文学的引用
  stories?: FlowerStory[];       // 歴史的エピソード
  trivia?: FlowerTrivia[];       // うんちく・トリビア
  cultural?: CulturalNote[];     // 文化的背景
}

export interface FlowerMeaning {
  id: string;
  meaning_ja: string;
  meaning_en: string;
  color?: string;
  origin_ja?: string;
  origin_en?: string;
  priority: number;
}

// 文学的引用
export interface FlowerQuote {
  id: string;
  text_ja: string;
  text_en: string;
  author_ja: string;
  author_en: string;
  source_ja?: string;          // 作品名
  source_en?: string;
  year?: number;               // 年代
  context_ja?: string;         // 文脈説明
  context_en?: string;
}

// 歴史的エピソード・物語
export interface FlowerStory {
  id: string;
  title_ja: string;
  title_en: string;
  content_ja: string;
  content_en: string;
  period?: string;             // 時代
  region?: string;             // 地域
}

// うんちく・トリビア
export interface FlowerTrivia {
  id: string;
  title_ja: string;
  title_en: string;
  content_ja: string;
  content_en: string;
  category?: string;           // 語源/伝説/科学 など
}

// 文化的背景
export interface CulturalNote {
  id: string;
  country_ja: string;
  country_en: string;
  meaning_ja: string;
  meaning_en: string;
  usage_ja?: string;           // 使われ方
  usage_en?: string;
}

export interface Scene {
  id: string;
  name_ja: string;
  name_en: string;
  slug: string;
  icon?: string;
  color?: string;
}

export type FlowerColor =
  | 'red'
  | 'pink'
  | 'white'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'blue'
  | 'green';

export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export const colorHexMap: Record<FlowerColor, string> = {
  red: '#e53935',
  pink: '#ec407a',
  white: '#fafafa',
  yellow: '#fdd835',
  orange: '#ff9800',
  purple: '#7b1fa2',
  blue: '#1976d2',
  green: '#43a047',
};
