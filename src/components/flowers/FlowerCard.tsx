import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Heart, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Flower } from '@/types/flower';

interface FlowerCardProps {
  flower: Flower;
}

export function FlowerCard({ flower }: FlowerCardProps) {
  const locale = useLocale();
  const name = locale === 'ja' ? flower.name_ja : flower.name_en;
  const mainMeaning = flower.meanings[0];
  const meaning = locale === 'ja' ? mainMeaning?.meaning_ja : mainMeaning?.meaning_en;

  return (
    <Link href={`/${locale}/flowers/${flower.slug}`}>
      <Card className="group overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={flower.image_url}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="mb-2 text-xl font-bold">{name}</h3>
            {meaning && (
              <p className="text-sm text-white/90">「{meaning}」</p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
