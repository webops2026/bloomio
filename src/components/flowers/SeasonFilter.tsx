'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import type { Season } from '@/types/flower';

interface SeasonFilterProps {
  selectedSeason?: string;
  onSeasonSelect: (season: string | undefined) => void;
}

const seasons: { key: Season; icon: string; color: string }[] = [
  { key: 'spring', icon: '🌸', color: 'bg-pink-100 hover:bg-pink-200 text-pink-700' },
  { key: 'summer', icon: '🌻', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700' },
  { key: 'autumn', icon: '🍂', color: 'bg-orange-100 hover:bg-orange-200 text-orange-700' },
  { key: 'winter', icon: '❄️', color: 'bg-blue-100 hover:bg-blue-200 text-blue-700' },
];

export function SeasonFilter({ selectedSeason, onSeasonSelect }: SeasonFilterProps) {
  const t = useTranslations('seasons');

  return (
    <div className="flex flex-wrap items-center gap-3">
      {seasons.map(({ key, icon, color }) => {
        const isSelected = selectedSeason === key;

        return (
          <button
            key={key}
            onClick={() => onSeasonSelect(isSelected ? undefined : key)}
            className={cn(
              'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
              isSelected
                ? 'bg-primary text-primary-foreground shadow-md'
                : color
            )}
          >
            <span className="text-base">{icon}</span>
            <span>{t(key)}</span>
          </button>
        );
      })}
    </div>
  );
}
