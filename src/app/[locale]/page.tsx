import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { FlowerCard } from '@/components/flowers/FlowerCard';
import { getPopularFlowers, scenes } from '@/data/flowers';
import { colorHexMap, type FlowerColor } from '@/types/flower';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();
  const popularFlowers = getPopularFlowers(6);

  const colors: FlowerColor[] = ['red', 'pink', 'white', 'yellow', 'orange', 'purple', 'blue', 'green'];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Visual First */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80"
            alt="Beautiful flowers"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="container relative mx-auto flex h-full items-center px-4">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {t('home.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Popular Flowers */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t('home.sections.popular')}
          </h2>
          <p className="text-muted-foreground">
            {t('home.sections.popularDesc')}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularFlowers.map((flower) => (
            <FlowerCard key={flower.id} flower={flower} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/flowers`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            {t('home.viewAll')}
          </Link>
        </div>
      </section>

      {/* Browse by Color */}
      <section className="border-y border-border bg-gradient-to-b from-white to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              {t('home.sections.byColor')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.sections.byColorDesc')}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-4 gap-6 md:gap-8">
            {colors.map((color) => (
              <Link
                key={color}
                href={`/${locale}/colors?color=${color}`}
                className="group flex flex-col items-center gap-3 transition-transform hover:scale-105"
              >
                <div
                  className="relative h-20 w-20 rounded-full shadow-lg transition-shadow group-hover:shadow-xl md:h-24 md:w-24"
                  style={{ backgroundColor: colorHexMap[color] }}
                >
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-10" />
                </div>
                <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {t(`colors.${color}`)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Scene - Compact */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            {t('home.sections.byScene')}
          </h2>
          <p className="text-muted-foreground">
            {t('home.sections.bySceneDesc')}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-4">
          {scenes.slice(0, 8).map((scene) => (
            <Link
              key={scene.id}
              href={`/${locale}/scenes/${scene.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-4xl">{scene.icon}</span>
              <span className="text-center text-sm font-medium text-foreground group-hover:text-primary">
                {locale === 'ja' ? scene.name_ja : scene.name_en}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Seasonal Flowers - Simplified */}
      <section className="border-t border-border bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
              {t('home.sections.bySeason')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.sections.bySeasonDesc')}
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              { key: 'spring', icon: '🌸', gradient: 'from-pink-100 to-pink-50' },
              { key: 'summer', icon: '🌻', gradient: 'from-yellow-100 to-yellow-50' },
              { key: 'autumn', icon: '🍂', gradient: 'from-orange-100 to-orange-50' },
              { key: 'winter', icon: '❄️', gradient: 'from-blue-100 to-blue-50' },
            ].map((season) => (
              <Link
                key={season.key}
                href={`/${locale}/seasons?season=${season.key}`}
                className={`group flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-br ${season.gradient} p-10 transition-all hover:-translate-y-1 hover:shadow-lg`}
              >
                <span className="text-6xl transition-transform group-hover:scale-110">
                  {season.icon}
                </span>
                <span className="text-lg font-semibold text-foreground">
                  {t(`seasons.${season.key}`)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
