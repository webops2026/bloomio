import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Heart, Share2, Calendar, MapPin, Flower2, BookOpen, Globe, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getFlowerBySlug, flowers } from '@/data/flowers';
import { colorHexMap, type FlowerColor } from '@/types/flower';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return flowers.map((flower) => ({ slug: flower.slug }));
}

export default async function FlowerDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();
  const flower = getFlowerBySlug(slug);

  if (!flower) {
    notFound();
  }

  const name = locale === 'ja' ? flower.name_ja : flower.name_en;
  const description = locale === 'ja' ? flower.description_ja : flower.description_en;
  const family = locale === 'ja' ? flower.family_ja : flower.family_en;
  const origin = locale === 'ja' ? flower.origin_ja : flower.origin_en;

  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const bloomPeriod = flower.bloom_start && flower.bloom_end
    ? locale === 'ja'
      ? `${months[flower.bloom_start - 1]}〜${months[flower.bloom_end - 1]}`
      : `${monthsEn[flower.bloom_start - 1]} - ${monthsEn[flower.bloom_end - 1]}`
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href={`/${locale}/flowers`}>
          <Button variant="ghost" className="mb-6 gap-2 -ml-3">
            <ArrowLeft className="h-4 w-4" />
            {t('common.back')}
          </Button>
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={flower.image_url}
                alt={name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-5xl font-bold text-foreground">{name}</h1>
              {flower.name_scientific && (
                <p className="mt-2 text-xl italic text-muted-foreground">
                  {flower.name_scientific}
                </p>
              )}
            </div>

            {/* Flower Meanings */}
            <Card className="border-0 bg-gradient-to-br from-pink-50 to-orange-50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  {t('flowers.meanings')}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {flower.meanings.map((meaning) => (
                    <Badge
                      key={meaning.id}
                      variant="secondary"
                      className="bg-white px-6 py-3 text-lg font-medium text-foreground shadow-md hover:shadow-lg transition-shadow"
                    >
                      {meaning.color && (
                        <span
                          className="mr-2 inline-block h-4 w-4 rounded-full"
                          style={{ backgroundColor: colorHexMap[meaning.color as FlowerColor] || meaning.color }}
                        />
                      )}
                      「{locale === 'ja' ? meaning.meaning_ja : meaning.meaning_en}」
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            {description && (
              <p className="text-lg leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}

            {/* Details Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {family && (
                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-5">
                  <Flower2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {t('flowers.info.family')}
                    </p>
                    <p className="font-medium text-foreground">{family}</p>
                  </div>
                </div>
              )}

              {origin && (
                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-5">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {t('flowers.info.origin')}
                    </p>
                    <p className="font-medium text-foreground">{origin}</p>
                  </div>
                </div>
              )}

              {bloomPeriod && (
                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-5">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {t('flowers.info.bloomPeriod')}
                    </p>
                    <p className="font-medium text-foreground">{bloomPeriod}</p>
                  </div>
                </div>
              )}

              {flower.colors.length > 0 && (
                <div className="flex items-center gap-3 rounded-2xl bg-muted/50 p-5">
                  <div className="flex gap-1 flex-shrink-0">
                    {flower.colors.slice(0, 3).map((color) => (
                      <div
                        key={color}
                        className="h-6 w-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: colorHexMap[color as FlowerColor] || color }}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      {t('flowers.info.colors')}
                    </p>
                    <p className="font-medium capitalize text-foreground">
                      {flower.colors.slice(0, 3).map((c) => t(`colors.${c}`)).join(', ')}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="gap-2">
                <Heart className="h-5 w-5" />
                {t('flowers.favorite')}
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Share2 className="h-5 w-5" />
                {t('flowers.share')}
              </Button>
            </div>

            {/* Scenes */}
            {flower.scenes && flower.scenes.length > 0 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {t('flowers.info.scenes')}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {flower.scenes.map((scene) => (
                    <Link
                      key={scene.id}
                      href={`/${locale}/scenes/${scene.slug}`}
                    >
                      <Badge
                        variant="outline"
                        className="gap-2 px-5 py-2 text-base hover:bg-muted transition-colors"
                      >
                        <span className="text-xl">{scene.icon}</span>
                        {locale === 'ja' ? scene.name_ja : scene.name_en}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Literary Quotes Section */}
        {flower.quotes && flower.quotes.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                文学の中の{name}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {flower.quotes.map((quote) => (
                <Card key={quote.id} className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <blockquote className="mb-4 text-lg leading-relaxed text-foreground italic border-l-4 border-primary pl-4">
                      「{locale === 'ja' ? quote.text_ja : quote.text_en}」
                    </blockquote>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-semibold text-foreground">
                          {locale === 'ja' ? quote.author_ja : quote.author_en}
                        </p>
                        {quote.source_ja && (
                          <p className="text-muted-foreground">
                            {locale === 'ja' ? quote.source_ja : quote.source_en}
                            {quote.year && ` (${quote.year})`}
                          </p>
                        )}
                      </div>
                    </div>
                    {quote.context_ja && (
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {locale === 'ja' ? quote.context_ja : quote.context_en}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Stories Section */}
        {flower.stories && flower.stories.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                歴史と物語
              </h2>
            </div>
            <div className="space-y-6">
              {flower.stories.map((story) => (
                <Card key={story.id} className="border-0 bg-white shadow-md">
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-foreground">
                        {locale === 'ja' ? story.title_ja : story.title_en}
                      </h3>
                      {(story.period || story.region) && (
                        <Badge variant="secondary" className="ml-4">
                          {story.period} · {story.region}
                        </Badge>
                      )}
                    </div>
                    <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                      {locale === 'ja' ? story.content_ja : story.content_en}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trivia Section */}
        {flower.trivia && flower.trivia.length > 0 && (
          <div className="mt-20">
            <div className="mb-8 flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                {name}のうんちく
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {flower.trivia.map((item) => (
                <Card key={item.id} className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {item.category && (
                      <Badge variant="secondary" className="mb-3">
                        {item.category}
                      </Badge>
                    )}
                    <h3 className="mb-3 text-xl font-bold text-foreground">
                      {locale === 'ja' ? item.title_ja : item.title_en}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {locale === 'ja' ? item.content_ja : item.content_en}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Cultural Notes Section */}
        {flower.cultural && flower.cultural.length > 0 && (
          <div className="mt-20 mb-12">
            <div className="mb-8 flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                世界の文化の中で
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {flower.cultural.map((note) => (
                <Card key={note.id} className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-foreground flex items-center gap-2">
                      🌍 {locale === 'ja' ? note.country_ja : note.country_en}
                    </h3>
                    <p className="mb-3 text-sm font-semibold text-foreground">
                      {locale === 'ja' ? note.meaning_ja : note.meaning_en}
                    </p>
                    {note.usage_ja && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {locale === 'ja' ? note.usage_ja : note.usage_en}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
