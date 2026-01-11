import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  return {
    title: `${t('title')} - Bloomio`,
    description: t('intro'),
  };
}

export default function TermsPage() {
  const t = useTranslations('terms');

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {t('title')}
        </h1>
        <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
          {t('lastUpdated')}
        </p>

        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {t('intro')}
          </p>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.agreement.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.agreement.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.service.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.service.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.disclaimer.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.disclaimer.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.copyright.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.copyright.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.prohibition.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.prohibition.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.changes.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.changes.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.law.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.law.content')}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
