import type { Flower, Scene, FlowerQuote, FlowerStory, FlowerTrivia, CulturalNote } from '@/types/flower';

export const scenes: Scene[] = [
  { id: '1', name_ja: '誕生日', name_en: 'Birthday', slug: 'birthday', icon: '🎂', color: '#ff9800' },
  { id: '2', name_ja: '結婚式', name_en: 'Wedding', slug: 'wedding', icon: '💐', color: '#e91e63' },
  { id: '3', name_ja: '記念日', name_en: 'Anniversary', slug: 'anniversary', icon: '💝', color: '#e91e63' },
  { id: '4', name_ja: 'お祝い', name_en: 'Celebration', slug: 'celebration', icon: '🎉', color: '#ffb74d' },
  { id: '5', name_ja: 'お見舞い', name_en: 'Get Well', slug: 'get-well', icon: '🌿', color: '#4caf50' },
  { id: '6', name_ja: '感謝', name_en: 'Thank You', slug: 'thank-you', icon: '🙏', color: '#ff9800' },
  { id: '7', name_ja: '母の日', name_en: "Mother's Day", slug: 'mothers-day', icon: '🌸', color: '#e91e63' },
  { id: '8', name_ja: '卒業・入学', name_en: 'Graduation', slug: 'graduation', icon: '🎓', color: '#4caf50' },
];

// バラの言葉・物語データ
const roseQuotes: FlowerQuote[] = [
  {
    id: 'q1',
    text_ja: '名前が何だというのです？バラと呼ばれている花を、他の名前にしてみても、同じように甘い香りがするでしょう',
    text_en: "What's in a name? That which we call a rose by any other name would smell as sweet",
    author_ja: 'ウィリアム・シェイクスピア',
    author_en: 'William Shakespeare',
    source_ja: 'ロミオとジュリエット',
    source_en: 'Romeo and Juliet',
    year: 1597,
    context_ja: 'ジュリエットが名前の無意味さを語る有名な場面。バラの香りは名前に関わらず甘いように、ロミオの名前も愛には関係ないという意味。',
    context_en: "Juliet's famous soliloquy about the meaninglessness of names, comparing Romeo's name to a rose whose sweetness is inherent regardless of what it's called.",
  },
  {
    id: 'q2',
    text_ja: '見よ、野の百合がどうして育つかを。働きもせず、紡ぎもしない。しかし、栄華を極めたソロモンでさえ、この花の一つほどにも装っていなかった',
    text_en: 'Consider the lilies of the field, how they grow; they toil not, neither do they spin: And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these',
    author_ja: '新約聖書',
    author_en: 'Bible',
    source_ja: 'マタイによる福音書 6:28-29',
    source_en: 'Matthew 6:28-29',
    context_ja: 'イエスの山上の垂訓より。神の創造の美しさと、物質的な心配をしないことの教え。',
    context_en: "From Jesus's Sermon on the Mount, teaching about God's creation and not worrying about material things.",
  },
  {
    id: 'q3',
    text_ja: '薔薇ノ木ニ薔薇ノ花咲ク。何ノ不思議モ無イコトダ',
    text_en: 'A rose blooms on a rose bush. Nothing strange about it',
    author_ja: '北原白秋',
    author_en: 'Kitahara Hakushū',
    source_ja: '薔薇二曲',
    source_en: 'Two Songs of Roses',
    year: 1913,
    context_ja: '当たり前のことの中に潜む深い真理を詠んだ詩。シンプルな言葉で自然の摂理を表現。',
    context_en: 'A poem expressing profound truth in the ordinary, using simple words to describe the laws of nature.',
  },
];

const roseStories: FlowerStory[] = [
  {
    id: 's1',
    title_ja: 'クレオパトラと薔薇の饗宴',
    title_en: "Cleopatra's Rose Feast",
    content_ja: '紀元前41年、エジプトの女王クレオパトラは、ローマの将軍マルクス・アントニウスを歓待するため、宮殿の床一面に薔薇の花びらを敷き詰めたと伝えられています。その深さは膝まで達し、甘い香りが宮殿中に漂ったといいます。この豪華な演出は、彼女の権力と富の象徴であり、アントニウスを魅了するための戦略的な美の表現でもありました。古代ローマでは、薔薇は愛と美の女神ヴィーナスの象徴とされ、贅沢の極みとして珍重されていました。',
    content_en: 'In 41 BCE, Queen Cleopatra of Egypt is said to have covered the palace floor with rose petals knee-deep to welcome Roman general Mark Antony. The sweet fragrance filled the entire palace. This lavish display symbolized her power and wealth, while strategically using beauty to captivate Antony. In ancient Rome, roses were symbols of Venus, goddess of love and beauty, and were treasured as the ultimate luxury.',
    period: '紀元前1世紀',
    region: 'エジプト・ローマ',
  },
  {
    id: 's2',
    title_ja: '薔薇戦争と紋章',
    title_en: 'The Wars of the Roses',
    content_ja: '15世紀イングランドで30年以上続いた王位継承戦争「薔薇戦争」は、ランカスター家の赤薔薇とヨーク家の白薔薇の対立から名付けられました。1485年、ヘンリー7世が両家を統合し、赤と白の薔薇を組み合わせた「チューダー・ローズ」を王家の紋章としました。この歴史的な薔薇は、今でもイングランドの象徴として使われ、対立から統合へという重要なメッセージを伝えています。',
    content_en: "The Wars of the Roses, a 30-year succession conflict in 15th-century England, was named after the red rose of Lancaster and the white rose of York. In 1485, Henry VII united both houses and created the Tudor Rose, combining red and white roses, as the royal emblem. This historic rose remains a symbol of England, conveying an important message of unity from division.",
    period: '1455-1487年',
    region: 'イングランド',
  },
];

const roseTrivia: FlowerTrivia[] = [
  {
    id: 't1',
    title_ja: 'バラの語源',
    title_en: 'Etymology of Rose',
    content_ja: '日本語の「薔薇（ばら）」という漢字は、もともと中国から伝わった漢字です。「薔」も「薇」も植物を示す「艹（くさかんむり）」を持ち、トゲのある植物を意味しています。一方、英語の"rose"は、ラテン語の"rosa"、さらに古代ギリシャ語の"rhodon"に由来します。興味深いことに、ペルシャ語の"gul"（花）も薔薇を指し、多くの中東の言語で「花」といえば薔薇を意味するほど、この花は文化に深く根付いています。',
    content_en: 'The Japanese characters "薔薇" (bara) come from Chinese, with both characters containing the "grass" radical and meaning thorny plants. The English "rose" derives from Latin "rosa" and ancient Greek "rhodon". Interestingly, the Persian word "gul" (flower) also refers to roses, and in many Middle Eastern languages, "flower" specifically means rose, showing how deeply this bloom is embedded in culture.',
    category: '語源',
  },
  {
    id: 't2',
    title_ja: '最古の薔薇化石',
    title_en: 'Oldest Rose Fossil',
    content_ja: 'アメリカ・コロラド州で発見された薔薇の化石は、約3500万年前のものと推定されています。これは、薔薇が人類よりはるかに古い時代から地球上に存在していたことを示しています。現代の薔薇の品種は約3万種以上ありますが、野生種は約150種程度です。人類は古代から薔薇を栽培し、改良を重ねてきました。最も古い栽培記録は、約5000年前のメソポタミア文明にまで遡ります。',
    content_en: 'A rose fossil discovered in Colorado, USA, is estimated to be about 35 million years old, showing that roses existed on Earth long before humans. While there are over 30,000 modern rose varieties, only about 150 are wild species. Humans have cultivated and bred roses since ancient times, with the oldest cultivation records dating back about 5,000 years to Mesopotamian civilization.',
    category: '科学',
  },
  {
    id: 't3',
    title_ja: 'バラと香水産業',
    title_en: 'Roses and Perfume Industry',
    content_ja: '高級香水の原料となるローズオイルを1kgg生産するには、約4トン（400万本）もの薔薇の花びらが必要です。ブルガリアのバラの谷は、世界最高品質のローズオイルの産地として知られ、毎年6月には「バラ祭り」が開催されます。ローズオイルの価格は金よりも高価で、「液体の金」とも呼ばれています。古代エジプトでも薔薇は香料として珍重され、クレオパトラが愛用していたことで有名です。',
    content_en: 'Producing 1kg of rose oil for luxury perfumes requires about 4 tons (4 million petals) of rose petals. The Rose Valley in Bulgaria is renowned for producing the world\'s highest quality rose oil, celebrating an annual "Rose Festival" each June. Rose oil is more expensive than gold, earning it the nickname "liquid gold". In ancient Egypt, roses were prized for their fragrance, famously beloved by Cleopatra.',
    category: '産業',
  },
];

const roseCultural: CulturalNote[] = [
  {
    id: 'c1',
    country_ja: 'イギリス',
    country_en: 'England',
    meaning_ja: '国花として愛され、チューダー・ローズは王室の象徴。赤薔薇は情熱、白薔薇は純潔を表します。',
    meaning_en: 'The national flower, with Tudor Rose as a royal symbol. Red roses represent passion, white roses represent purity.',
    usage_ja: '6月第3日曜日は「バラの日」。結婚式では白薔薇、葬儀では黄色い薔薇を避ける慣習があります。',
    usage_en: 'The third Sunday in June is "Rose Day". White roses for weddings; yellow roses are avoided at funerals.',
  },
  {
    id: 'c2',
    country_ja: 'ペルシャ（イラン）',
    country_en: 'Persia (Iran)',
    meaning_ja: '詩と庭園文化の中心。薔薇は天国の象徴であり、愛の詩に欠かせない存在。',
    meaning_en: 'Central to poetry and garden culture. Roses symbolize paradise and are essential in love poetry.',
    usage_ja: 'ローズウォーターは宗教儀式や料理に使用。春の新年（ノウルーズ）には薔薇が飾られます。',
    usage_en: 'Rose water is used in religious ceremonies and cooking. Roses decorate spring New Year (Nowruz) celebrations.',
  },
  {
    id: 'c3',
    country_ja: '日本',
    country_en: 'Japan',
    meaning_ja: '明治時代に西洋から本格的に導入。「花の女王」として、桜に次ぐ人気の花。',
    meaning_en: 'Introduced from the West during the Meiji era. Known as the "Queen of Flowers", second in popularity to cherry blossoms.',
    usage_ja: '母の日（5月第2日曜）には赤またはピンクの薔薇を贈る習慣が定着しています。',
    usage_en: 'Custom of giving red or pink roses on Mother\'s Day (second Sunday in May) is well established.',
  },
];

export const flowers: Flower[] = [
  {
    id: '1',
    slug: 'rose',
    name_ja: 'バラ',
    name_en: 'Rose',
    name_scientific: 'Rosa',
    description_ja: '愛と美の象徴として世界中で愛される花。シェイクスピアからクレオパトラまで、数千年にわたって人類の歴史と文化に深く刻まれてきました。色によって異なる花言葉を持ち、贈り物として最も人気があります。',
    description_en: 'A symbol of love and beauty cherished worldwide. From Shakespeare to Cleopatra, roses have been deeply embedded in human history and culture for thousands of years. Each color carries a different meaning, making it the most popular gift flower.',
    family_ja: 'バラ科',
    family_en: 'Rosaceae',
    origin_ja: 'アジア、ヨーロッパ、中東',
    origin_en: 'Asia, Europe, Middle East',
    bloom_start: 5,
    bloom_end: 11,
    colors: ['red', 'pink', 'white', 'yellow', 'orange'],
    seasons: ['spring', 'summer', 'autumn'],
    image_url: 'https://images.unsplash.com/photo-1518882605630-8b18a5c8da41?w=800',
    image_urls: [
      'https://images.unsplash.com/photo-1518882605630-8b18a5c8da41?w=800',
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
    ],
    view_count: 15420,
    like_count: 2341,
    meanings: [
      { id: '1-1', meaning_ja: '愛', meaning_en: 'Love', priority: 10 },
      { id: '1-2', meaning_ja: '美', meaning_en: 'Beauty', priority: 9 },
      { id: '1-3', meaning_ja: '情熱', meaning_en: 'Passion', color: 'red', priority: 8 },
      { id: '1-4', meaning_ja: '感謝', meaning_en: 'Gratitude', color: 'pink', priority: 7 },
      { id: '1-5', meaning_ja: '純潔', meaning_en: 'Purity', color: 'white', priority: 6 },
    ],
    scenes: [scenes[0], scenes[1], scenes[2], scenes[3]],
    quotes: roseQuotes,
    stories: roseStories,
    trivia: roseTrivia,
    cultural: roseCultural,
  },
  // 他の花（簡略版）
  {
    id: '2',
    slug: 'cherry-blossom',
    name_ja: '桜',
    name_en: 'Cherry Blossom',
    name_scientific: 'Prunus serrulata',
    description_ja: '日本の国花として親しまれる春の象徴。その儚い美しさは、武士道精神や「もののあわれ」という日本的美意識の核心を表現しています。',
    description_en: 'Japan\'s national flower and a symbol of spring. Its ephemeral beauty embodies the samurai spirit and "mono no aware", the essence of Japanese aesthetics.',
    family_ja: 'バラ科',
    family_en: 'Rosaceae',
    origin_ja: '日本、東アジア',
    origin_en: 'Japan, East Asia',
    bloom_start: 3,
    bloom_end: 4,
    colors: ['pink', 'white'],
    seasons: ['spring'],
    image_url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
    view_count: 18500,
    like_count: 3421,
    meanings: [
      { id: '7-1', meaning_ja: '精神美', meaning_en: 'Spiritual Beauty', priority: 10 },
      { id: '7-2', meaning_ja: '優雅', meaning_en: 'Elegance', priority: 9 },
      { id: '7-3', meaning_ja: '儚さ', meaning_en: 'Transience', priority: 8 },
    ],
    scenes: [scenes[7], scenes[3]],
    quotes: [
      {
        id: 'q1',
        text_ja: '願はくは花の下にて春死なむ　そのきさらぎの望月のころ',
        text_en: 'I wish to die in spring, beneath the cherry blossoms, around the full moon of February',
        author_ja: '西行法師',
        author_en: 'Saigyō',
        year: 1190,
        context_ja: '平安時代の歌人・西行が詠んだ有名な和歌。桜の下で死にたいという願いは、武士道精神の理想を表現しています。',
        context_en: 'Famous waka by Heian-period poet Saigyō. The wish to die under cherry blossoms expresses the ideal of bushido spirit.',
      },
    ],
    stories: [
      {
        id: 's1',
        title_ja: '武士道と桜',
        title_en: 'Bushido and Cherry Blossoms',
        content_ja: '江戸時代、桜は武士道の象徴となりました。満開の美しさの後、潔く散る姿は、武士が主君のために命を捧げる覚悟を表すとされました。「散る桜 残る桜も 散る桜」という句が示すように、桜の儚さは人生の無常を教えています。',
        content_en: 'During the Edo period, cherry blossoms became a symbol of bushido. Their graceful fall after full bloom represented a samurai\'s readiness to sacrifice their life for their lord. As the phrase "Falling cherry blossoms, remaining cherry blossoms, all will fall" shows, their transience teaches life\'s impermanence.',
        period: '江戸時代',
        region: '日本',
      },
    ],
    trivia: [
      {
        id: 't1',
        title_ja: '桜の寿命',
        title_en: 'Cherry Blossom Lifespan',
        content_ja: 'ソメイヨシノの寿命は約60〜80年ですが、山桜などの野生種は300年以上生きることもあります。日本最古の桜として知られる山梨県の「山高神代桜」は、樹齢2000年とも言われています。',
        content_en: 'Somei Yoshino cherry trees live 60-80 years, but wild species like mountain cherries can live over 300 years. The "Jindai Zakura" in Yamanashi, Japan\'s oldest cherry tree, is said to be 2,000 years old.',
        category: '科学',
      },
    ],
  },
];

export function getFlowerBySlug(slug: string): Flower | undefined {
  return flowers.find((f) => f.slug === slug);
}

export function getFlowersByColor(color: string): Flower[] {
  return flowers.filter((f) => f.colors.includes(color));
}

export function getFlowersBySeason(season: string): Flower[] {
  return flowers.filter((f) => f.seasons.includes(season));
}

export function getFlowersByScene(sceneSlug: string): Flower[] {
  return flowers.filter((f) => f.scenes?.some((s) => s.slug === sceneSlug));
}

export function getPopularFlowers(limit: number = 6): Flower[] {
  return [...flowers].sort((a, b) => b.view_count - a.view_count).slice(0, limit);
}
