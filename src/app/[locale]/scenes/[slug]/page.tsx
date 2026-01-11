import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FlowerCard } from '@/components/flowers/FlowerCard';
import { scenes, getFlowersByScene } from '@/data/flowers';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return scenes.map((scene) => ({ slug: scene.slug }));
}

export default async function SceneDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();
  const scene = scenes.find((s) => s.slug === slug);

  if (!scene) {
    notFound();
  }

  const filteredFlowers = getFlowersByScene(slug);
  const sceneName = locale === 'ja' ? scene.name_ja : scene.name_en;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <Link href={`/${locale}/scenes`}>
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          {t('common.back')}
        </Button>
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{scene.icon}</span>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            {sceneName}
          </h1>
        </div>
        <p className="mt-4 text-lg text-muted-foreground">
          {locale === 'ja'
            ? `${sceneName}にぴったりの花をご紹介します。`
            : `Discover the perfect flowers for ${sceneName}.`}
        </p>
      </div>

      {filteredFlowers.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFlowers.map((flower) => (
            <FlowerCard key={flower.id} flower={flower} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-muted-foreground">
          {t('flowers.noResults')}
        </div>
      )}
    </div>
  );
}
