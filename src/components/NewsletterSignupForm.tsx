import { useState, FormEvent } from 'react';

export interface NewsletterSignupFormProps {
  locale: 'es' | 'en';
}

export const LOCAL_THANK_YOU_PATH_BY_LOCALE: Record<'es' | 'en', string> = {
  es: '/newsletter/gracias',
  en: '/us/newsletter/thank-you',
};

const FORM_COPY = {
  es: {
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre (opcional)',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'tu@email.com',
    cta: 'Recibir las ideas',
    submittingCta: 'Enviando...',
    errorMessage: 'No se pudo procesar la solicitud. Inténtalo de nuevo.',
    unsubscribeNote: 'Puedes darte de baja cuando quieras.',
  },
  en: {
    nameLabel: 'First name',
    namePlaceholder: 'Your name (optional)',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@email.com',
    cta: 'Get the weekly tips',
    submittingCta: 'Submitting...',
    errorMessage: 'Could not process your request. Please try again.',
    unsubscribeNote: 'You can unsubscribe at any time.',
  },
} as const;

export default function NewsletterSignupForm({ locale }: NewsletterSignupFormProps) {
  const copy = FORM_COPY[locale];
  const localThankYouPath = LOCAL_THANK_YOU_PATH_BY_LOCALE[locale];

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    const trimmedFirstName = firstName.trim();
    if (!trimmedEmail || status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: trimmedEmail,
          firstName: trimmedFirstName,
          locale,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setStatus('error');
        setErrorMessage(data?.message || copy.errorMessage);
        return;
      }

      setEmail('');
      setFirstName('');

      if (typeof window !== 'undefined') {
        const targetPath = data.redirectTo || localThankYouPath;
        window.history.pushState(null, '', targetPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
        window.scrollTo(0, 0);
      }
    } catch {
      setStatus('error');
      setErrorMessage(copy.errorMessage);
    }
  };

  return (
    <form
      id={locale === 'en' ? 'us-newsletter-signup-form' : 'newsletter-signup-form'}
      onSubmit={handleSubmit}
      className="w-full mt-7"
    >
      <div className="flex flex-col gap-3">
        {/* Name Field */}
        <div>
          <label
            htmlFor={locale === 'en' ? 'us-newsletter-name-input' : 'newsletter-name-input'}
            className="sr-only"
          >
            {copy.nameLabel}
          </label>
          <input
            id={locale === 'en' ? 'us-newsletter-name-input' : 'newsletter-name-input'}
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (status !== 'idle') {
                setStatus('idle');
                setErrorMessage(null);
              }
            }}
            placeholder={copy.namePlaceholder}
            disabled={status === 'submitting'}
            className="w-full min-h-[48px] px-4 py-3.5 bg-white text-[#121210] placeholder-[#888880] border border-[#E2E2DE] focus:border-[#121210] rounded-none text-[0.96rem] leading-[1.4] outline-none transition-colors box-border disabled:opacity-60"
          />
        </div>

        {/* Email Field + Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <label
            htmlFor={locale === 'en' ? 'us-newsletter-email-input' : 'newsletter-email-input'}
            className="sr-only"
          >
            {copy.emailLabel}
          </label>
          <input
            id={locale === 'en' ? 'us-newsletter-email-input' : 'newsletter-email-input'}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') {
                setStatus('idle');
                setErrorMessage(null);
              }
            }}
            placeholder={copy.emailPlaceholder}
            disabled={status === 'submitting'}
            className="flex-1 min-h-[48px] px-4 py-3.5 bg-white text-[#121210] placeholder-[#888880] border border-[#121210] rounded-none text-[0.96rem] leading-[1.4] outline-none box-border w-full disabled:opacity-60"
          />

          <button
            id={locale === 'en' ? 'us-newsletter-submit-btn' : 'newsletter-submit-btn'}
            type="submit"
            disabled={status === 'submitting'}
            className="cta-primary-btn min-h-[48px] px-6 py-3.5 bg-[#121210] hover:bg-[#262622] text-white border border-[#121210] hover:border-[#262622] rounded-none text-[0.92rem] font-semibold tracking-[-0.01em] cursor-pointer whitespace-nowrap transition-colors w-full sm:w-auto disabled:opacity-60"
          >
            {status === 'submitting' ? copy.submittingCta : copy.cta}
          </button>
        </div>
      </div>

      {status === 'error' && (
        <p
          role="alert"
          className="mt-3 mb-0 text-[0.84rem] font-mono text-[#B91C1C] leading-[1.5]"
        >
          {errorMessage || copy.errorMessage}
        </p>
      )}

      <p className="mt-3.5 mb-0 text-[0.82rem] text-[#666660] leading-[1.5]">
        {copy.unsubscribeNote}
      </p>
    </form>
  );
}
