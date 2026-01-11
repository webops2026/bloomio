'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { type FlowerColor, colorHexMap } from '@/types/flower';

interface ColorFilterProps {
  selectedColor?: string;
  onColorSelect: (color: string | undefined) => void;
}

const colors: FlowerColor[] = [
  'red',
  'pink',
  'white',
  'yellow',
  'orange',
  'purple',
  'blue',
  'green',
];

export function ColorFilter({ selectedColor, onColorSelect }: ColorFilterProps) {
  const t = useTranslations('colors');

  return (
    <div className="flex flex-wrap items-center gap-3">
      {colors.map((color) => {
        const isSelected = selectedColor === color;
        const bgColor = colorHexMap[color];

        return (
          <button
            key={color}
            onClick={() => onColorSelect(isSelected ? undefined : color)}
            className={cn(
              'group relative flex flex-col items-center gap-1.5 transition-transform hover:scale-110',
              isSelected && 'scale-110'
            )}
            aria-label={t(color)}
          >
            <div
              className={cn(
                'h-10 w-10 rounded-full border-3 transition-all md:h-12 md:w-12',
                isSelected
                  ? 'border-primary shadow-lg ring-4 ring-primary/20'
                  : 'border-transparent hover:border-gray-300',
                color === 'white' && 'border-gray-200'
              )}
              style={{ backgroundColor: bgColor }}
            />
            <span
              className={cn(
                'text-xs transition-colors',
                isSelected ? 'font-medium text-primary' : 'text-muted-foreground'
              )}
            >
              {t(color)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
