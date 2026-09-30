import { useEffect } from 'react';
import CookieBanner from './CookieBanner';
import UsCookieBanner from '../us/components/UsCookieBanner';
import NegociosCursor from './NegociosCursor';
import HeaderNav from './HeaderNav';
import UsHeaderNav from '../us/components/UsHeaderNav';
import Footer from './Footer';
import UsFooter from '../us/components/UsFooter';
import NewsletterSignupForm from './NewsletterSignupForm';

interface NewsletterPageProps {
  locale: 'es' | 'en';
}

const NEWSLETTER_COPY = {
  es: {
    seoTitle: 'Newsletter — Ideas prácticas sobre websites, SEO y conversión | David Raigoza',
    seoDescription:
      'Un email corto cada semana con ideas prácticas sobre websites, SEO y conversión para profesionales que quieren convertir mejor sus visitantes en clientes.',
    headline: 'Una idea práctica para mejorar tu website, cada semana.',
    supportingText:
      'Un email corto con ideas sobre websites, SEO y conversión para profesionales que quieren convertir mejor sus visitantes en clientes.',
    reassurance: 'Gratis. Sin spam y sin ventas constantes.',
  },
  en: {
    seoTitle: 'Newsletter — Practical weekly ideas on websites, SEO & conversion | David Raigoza',
    seoDescription:
      'A short weekly email with practical ideas about websites, SEO, and conversion for professionals who want to turn more visitors into clients.',
    headline: 'One practical idea to improve your website, every week.',
    supportingText:
      'A short email with practical ideas about websites, SEO, and conversion for professionals who want to turn more visitors into clients.',
    reassurance: 'Free. No spam and no constant sales pitches.',
  },
} as const;

export { NewsletterSignupForm };

export default function NewsletterPage({ locale }: NewsletterPageProps) {
  const copy = NEWSLETTER_COPY[locale];
  const isUs = locale === 'en';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const prevLang = document.documentElement.lang;
    const prevTitle = document.title;
    const metaDescEl = document.querySelector('meta[name="description"]');
    const prevDesc = metaDescEl?.getAttribute('content') ?? null;

    document.documentElement.lang = locale;
    document.title = copy.seoTitle;
    if (metaDescEl) {
      metaDescEl.setAttribute('content', copy.seoDescription);
    }

    return () => {
      document.documentElement.lang = prevLang;
      document.title = prevTitle;
      if (metaDescEl && prevDesc !== null) {
        metaDescEl.setAttribute('content', prevDesc);
      }
    };
  }, [locale, copy.seoTitle, copy.seoDescription]);

  return (
    <>
      {isUs ? <UsCookieBanner /> : <CookieBanner />}
      <div
        id={isUs ? 'us-newsletter-page-container' : 'newsletter-page-container'}
        className="negocios-page bg-[#F8F8F6] text-[#121210] min-h-screen flex flex-col relative overflow-x-hidden"
        style={{
          fontFamily: 'var(--sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
        }}
      >
        <NegociosCursor />
        {isUs ? <UsHeaderNav /> : <HeaderNav />}

        <main
          id={isUs ? 'us-newsletter-main' : 'newsletter-main'}
          className="negocios-main-content flex-1 w-full max-w-[1080px] mx-auto flex items-center justify-center px-5 sm:px-8 py-10 sm:py-16 box-border"
        >
          <section
            aria-labelledby={isUs ? 'us-newsletter-heading' : 'newsletter-heading'}
            className="w-full max-w-[580px] bg-white border border-[#E2E2DE] p-7 sm:p-12 box-border"
          >
            <h1
              id={isUs ? 'us-newsletter-heading' : 'newsletter-heading'}
              className="text-[clamp(1.75rem,4.2vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#121210] m-0 mb-4"
              style={{ textWrap: 'balance' }}
            >
              {copy.headline}
            </h1>

            <p
              className="text-[clamp(0.98rem,2.2vw,1.08rem)] text-[#444440] leading-[1.6] m-0 mb-4"
              style={{ textWrap: 'pretty' }}
            >
              {copy.supportingText}
            </p>

            <p className="text-[0.84rem] font-mono text-[#666660] leading-[1.5] m-0">
              {copy.reassurance}
            </p>

            <NewsletterSignupForm locale={locale} />
          </section>
        </main>

        {isUs ? <UsFooter /> : <Footer />}
      </div>
    </>
  );
}
