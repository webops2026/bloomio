import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { scenes } from '@/data/flowers';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ScenesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t('nav.scenes')}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t('home.sections.bySceneDesc')}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {scenes.map((scene) => (
          <Link
            key={scene.id}
            href={`/${locale}/scenes/${scene.slug}`}
            className="group flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <span className="text-4xl">{scene.icon}</span>
            <div>
              <span className="text-lg font-medium text-foreground group-hover:text-primary">
                {locale === 'ja' ? scene.name_ja : scene.name_en}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
