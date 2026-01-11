'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Flower2, Search, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { locales, localeNames, type Locale } from '@/i18n/config';

export function Header() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/flowers`, label: t('nav.flowers') },
    { href: `/${locale}/colors`, label: t('nav.colors') },
    { href: `/${locale}/seasons`, label: t('nav.seasons') },
    { href: `/${locale}/scenes`, label: t('nav.scenes') },
  ];

  const otherLocale = locales.find((l) => l !== locale) as Locale;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Flower2 className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-primary">
            {t('site.name')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <Link href={`/${otherLocale}`}>
            <Button variant="ghost" size="sm" className="gap-1">
              <Globe className="h-4 w-4" />
              <span className="hidden text-xs sm:inline">{localeNames[otherLocale]}</span>
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
