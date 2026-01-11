import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return {
    title: `${t('title')} - Bloomio`,
    description: t('intro'),
  };
}

export default function PrivacyPage() {
  const t = useTranslations('privacy');

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
              {t('sections.collection.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.collection.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.usage.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.usage.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.thirdParty.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.thirdParty.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.analytics.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.analytics.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.cookies.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.cookies.content')}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {t('sections.contact.title')}
            </h2>
            <p className="whitespace-pre-line leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('sections.contact.content')}
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
