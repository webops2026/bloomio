'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import { FlowerCard } from '@/components/flowers/FlowerCard';
import { SeasonFilter } from '@/components/flowers/SeasonFilter';
import { flowers, getFlowersBySeason } from '@/data/flowers';

function SeasonsContent() {
  const locale = useLocale();
  const t = useTranslations();
  const searchParams = useSearchParams();
  
  const initialSeason = searchParams.get('season') || undefined;
  const [selectedSeason, setSelectedSeason] = useState<string | undefined>(initialSeason);

  useEffect(() => {
    const season = searchParams.get('season');
    if (season) {
      setSelectedSeason(season);
    }
  }, [searchParams]);

  const filteredFlowers = selectedSeason
    ? getFlowersBySeason(selectedSeason)
    : flowers;

  return (
    <>
      {/* Season Filter */}
      <div className="mb-8 rounded-xl bg-muted/30 p-6">
        <SeasonFilter
          selectedSeason={selectedSeason}
          onSeasonSelect={setSelectedSeason}
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

export default function SeasonsPage() {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {t('nav.seasons')}
        </h1>
        <p className="mt-2 text-muted-foreground">
          {t('home.sections.bySeasonDesc')}
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center">{t('common.loading')}</div>}>
        <SeasonsContent />
      </Suspense>
    </div>
  );
}
