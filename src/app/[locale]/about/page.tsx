import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: `${t('title')} - Bloomio`,
    description: t('description'),
  };
}

export default function AboutPage() {
  const t = useTranslations('about');
  const siteT = useTranslations('site');

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-neutral-100">
          {t('title')}
        </h1>

        <div className="space-y-8">
          <section>
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {t('description')}
            </p>
          </section>

          <section className="rounded-lg bg-primary-50 p-6 dark:bg-primary-950">
            <h2 className="mb-4 text-2xl font-semibold text-primary-900 dark:text-primary-100">
              {t('mission')}
            </h2>
            <p className="leading-relaxed text-primary-800 dark:text-primary-200">
              {t('missionText')}
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
              {siteT('name')}について
            </h2>
            <p className="mb-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
              {siteT('description')}
            </p>
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
              大切な人へのギフト選びや、花言葉の由来を知りたいとき、
              {siteT('name')}
              がお役に立てれば幸いです。
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
