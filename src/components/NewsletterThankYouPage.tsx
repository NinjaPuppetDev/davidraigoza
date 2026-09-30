import { useEffect } from 'react';
import CookieBanner from './CookieBanner';
import UsCookieBanner from '../us/components/UsCookieBanner';
import NegociosCursor from './NegociosCursor';
import HeaderNav from './HeaderNav';
import UsHeaderNav from '../us/components/UsHeaderNav';
import Footer from './Footer';
import UsFooter from '../us/components/UsFooter';

export interface NewsletterThankYouPageProps {
  locale: 'es' | 'en';
}

const THANK_YOU_COPY = {
  es: {
    seoTitle: 'Suscripción recibida — Confirma tu correo | David Raigoza',
    seoDescription:
      'Tu registro al newsletter se ha completado con éxito. Revisa tu bandeja de entrada para confirmar tu suscripción.',
    statusTag: '[ SUSCRIPCIÓN REGISTRADA // FALTA 1 PASO ]',
    headline: 'Registro completado. Solo falta confirmar tu correo.',
    supportingText:
      'Tu solicitud se ha registrado con éxito. Para proteger tu bandeja de entrada y activar el envío semanal, necesitamos que confirmes tu dirección de correo electrónico.',
    instructionsTitle: 'INSTRUCCIONES DE CONFIRMACIÓN',
    steps: [
      {
        num: '01',
        text: 'Revisa tu bandeja de entrada en los próximos minutos.',
      },
      {
        num: '02',
        text: 'Si no ves el mensaje, revisa la carpeta de spam, correo no deseado o promociones.',
      },
      {
        num: '03',
        text: 'Abre el correo y haz clic en el enlace de confirmación para activar tu suscripción.',
      },
    ],
    returnHref: '/',
    returnLabel: '← Volver al inicio',
  },
  en: {
    seoTitle: 'Subscription received — Confirm your email | David Raigoza',
    seoDescription:
      'Your newsletter registration is complete. Please check your inbox to confirm your subscription.',
    statusTag: '[ SUBSCRIPTION REGISTERED // 1 STEP LEFT ]',
    headline: 'Registration complete. Please confirm your email.',
    supportingText:
      'Your request has been successfully registered. To protect your inbox and activate the weekly emails, please confirm your email address.',
    instructionsTitle: 'CONFIRMATION INSTRUCTIONS',
    steps: [
      {
        num: '01',
        text: 'Check your email inbox over the next few minutes.',
      },
      {
        num: '02',
        text: 'If you do not see the message, check your spam, junk, or promotions folder.',
      },
      {
        num: '03',
        text: 'Open the email and click the confirmation link to activate your subscription.',
      },
    ],
    returnHref: '/us',
    returnLabel: '← Back to homepage',
  },
} as const;

export default function NewsletterThankYouPage({ locale }: NewsletterThankYouPageProps) {
  const copy = THANK_YOU_COPY[locale];
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
        id={isUs ? 'us-newsletter-thank-you-container' : 'newsletter-thank-you-container'}
        className="negocios-page bg-[#F8F8F6] text-[#121210] min-h-screen flex flex-col relative overflow-x-hidden"
        style={{
          fontFamily: 'var(--sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif)',
        }}
      >
        <NegociosCursor />
        {isUs ? <UsHeaderNav /> : <HeaderNav />}

        <main
          id={isUs ? 'us-newsletter-thank-you-main' : 'newsletter-thank-you-main'}
          className="negocios-main-content flex-1 w-full max-w-[1080px] mx-auto flex items-center justify-center px-5 sm:px-8 py-10 sm:py-16 box-border"
        >
          <section
            aria-labelledby={isUs ? 'us-newsletter-thank-you-heading' : 'newsletter-thank-you-heading'}
            className="w-full max-w-[580px] bg-white border border-[#121210] p-7 sm:p-12 box-border"
          >
            <p className="text-[0.72rem] font-mono font-bold tracking-[0.06em] uppercase text-[#121210] m-0 mb-4">
              {copy.statusTag}
            </p>

            <h1
              id={isUs ? 'us-newsletter-thank-you-heading' : 'newsletter-thank-you-heading'}
              className="text-[clamp(1.65rem,4vw,2.35rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#121210] m-0 mb-4"
              style={{ textWrap: 'balance' }}
            >
              {copy.headline}
            </h1>

            <p
              className="text-[clamp(0.96rem,2.1vw,1.05rem)] text-[#444440] leading-[1.6] m-0 mb-6"
              style={{ textWrap: 'pretty' }}
            >
              {copy.supportingText}
            </p>

            {/* Bauhaus Structured Instruction Block */}
            <div className="bg-[#F8F8F6] border border-[#E2E2DE] p-5 sm:p-6 mb-7 box-border">
              <p className="text-[0.72rem] font-mono font-bold tracking-[0.06em] uppercase text-[#666660] m-0 mb-4 pb-2.5 border-b border-[#E2E2DE]">
                {copy.instructionsTitle}
              </p>

              <ol className="list-none m-0 p-0 flex flex-col gap-3.5">
                {copy.steps.map((step) => (
                  <li key={step.num} className="flex items-baseline gap-3.5">
                    <span className="text-[0.78rem] font-mono font-bold text-[#121210] shrink-0">
                      {step.num}
                    </span>
                    <span className="text-[0.92rem] text-[#121210] leading-[1.5]">
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pt-1">
              <a
                href={copy.returnHref}
                className="cta-primary-btn inline-flex items-center justify-center min-h-[48px] px-6 py-3.5 bg-[#121210] hover:bg-[#262622] text-white border border-[#121210] hover:border-[#262622] rounded-none text-[0.92rem] font-semibold tracking-[-0.01em] no-underline cursor-pointer transition-colors w-full sm:w-auto box-border"
              >
                {copy.returnLabel}
              </a>
            </div>
          </section>
        </main>

        {isUs ? <UsFooter /> : <Footer />}
      </div>
    </>
  );
}
