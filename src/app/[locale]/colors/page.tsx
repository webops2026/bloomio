'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { FlowerCard } from '@/components/flowers/FlowerCard';
import { ColorFilter } from '@/components/flowers/ColorFilter';
import { flowers, getFlowersByColor } from '@/data/flowers';

function ColorsContent() {
  const locale = useLocale();
  const t = useTranslations();
  const searchParams = useSearchParams();
  
  const initialColor = searchParams.get('color') || undefined;
  const [selectedColor, setSelectedColor] = useState<string | undefined>(initialColor);

  useEffect(() => {
    const color = searchParams.get('color');
    if (color) {
      setSelectedColor(color);
    }
  }, [searchParams]);

  const filteredFlowers = selectedColor
    ? getFlowersByColor(selectedColor)
    : flowers;

  return (
    <>
      {/* Color Filter */}
      <div className="mb-8 rounded-xl bg-muted/30 p-6">
        <ColorFilter
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </div>

      {/* Results */}
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
    </>
  );
}

export default function ColorsPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t('nav.colors')}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t('home.sections.byColorDesc')}
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center">{t('common.loading')}</div>}>
        <ColorsContent />
      </Suspense>
    </div>
  );
}
