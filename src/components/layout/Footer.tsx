import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Flower2 } from 'lucide-react';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="mt-16 border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Flower2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-primary">
                {t('site.name')}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {t('site.tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              {t('nav.flowers')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/flowers`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t('nav.flowers')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/colors`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t('nav.colors')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/seasons`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t('nav.seasons')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">
              {t('footer.about')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
