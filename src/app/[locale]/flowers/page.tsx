import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FlowerCard } from '@/components/flowers/FlowerCard';
import { flowers } from '@/data/flowers';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function FlowersPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t('flowers.title')}
        </h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {flowers.map((flower) => (
          <FlowerCard key={flower.id} flower={flower} />
        ))}
      </div>
    </div>
  );
}
