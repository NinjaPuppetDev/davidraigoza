import { useEffect } from 'react';
import UsCookieBanner from './UsCookieBanner';
import NegociosCursor from '../../components/NegociosCursor';
import UsHeaderNav from './UsHeaderNav';
import UsFooter from './UsFooter';
import UsNewsletterSignupForm from './UsNewsletterSignupForm';

const US_NEWSLETTER_COPY = {
  seoTitle: 'Newsletter — Practical weekly ideas on websites, SEO & conversion | David Raigoza',
  seoDescription:
    'A short weekly email with practical ideas about websites, SEO, and conversion for professionals who want to turn more visitors into clients.',
  headline: 'One practical idea to improve your website, every week.',
  supportingText:
    'A short email with practical ideas about websites, SEO, and conversion for professionals who want to turn more visitors into clients.',
  reassurance: 'Free. No spam and no constant sales pitches.',
} as const;

export default function UsNewsletterPage() {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const prevLang = document.documentElement.lang;
    const prevTitle = document.title;
    const metaDescEl = document.querySelector('meta[name="description"]');
    const prevDesc = metaDescEl?.getAttribute('content') ?? null;

    document.documentElement.lang = 'en';
    document.title = US_NEWSLETTER_COPY.seoTitle;
    if (metaDescEl) {
      metaDescEl.setAttribute('content', US_NEWSLETTER_COPY.seoDescription);
    }

    return () => {
      document.documentElement.lang = prevLang;
      document.title = prevTitle;
      if (metaDescEl && prevDesc !== null) {
        metaDescEl.setAttribute('content', prevDesc);
      }
    };
  }, []);

  return (
    <>
      <UsCookieBanner />
      <div
        id="us-newsletter-page-container"
        className="negocios-page bg-[#F8F8F6] text-[#121210] min-h-screen flex flex-col relative overflow-x-hidden"
        style={{
          fontFamily: 'var(--sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
        }}
      >
        <NegociosCursor />
        <UsHeaderNav />

        <main
          id="us-newsletter-main"
          className="negocios-main-content flex-1 w-full max-w-[1080px] mx-auto flex items-center justify-center px-5 sm:px-8 py-10 sm:py-16 box-border"
        >
          <section
            aria-labelledby="us-newsletter-heading"
            className="w-full max-w-[580px] mx-auto bg-white border border-[#121210] p-7 sm:p-12 box-border"
          >
            <h1
              id="us-newsletter-heading"
              className="text-[clamp(1.75rem,4.2vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#121210] m-0 mb-4"
              style={{ textWrap: 'balance' }}
            >
              {US_NEWSLETTER_COPY.headline}
            </h1>

            <p
              className="text-[clamp(0.98rem,2.2vw,1.08rem)] text-[#444440] leading-[1.6] m-0 mb-4"
              style={{ textWrap: 'pretty' }}
            >
              {US_NEWSLETTER_COPY.supportingText}
            </p>

            <p className="text-[0.84rem] font-mono text-[#666660] leading-[1.5] m-0">
              {US_NEWSLETTER_COPY.reassurance}
            </p>

            <UsNewsletterSignupForm />
          </section>
        </main>

        <UsFooter />
      </div>
    </>
  );
}
