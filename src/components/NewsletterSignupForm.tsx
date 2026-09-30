'use client';

import React, { useState } from 'react';

export interface NewsletterSignupFormProps {
  locale?: 'es' | 'en';
}

const ZOHO_ACTION_URL = 'https://zcvf-zcmp.maillist-manage.com/weboptin.zc';

const ZOHO_FORM_IX_BY_LOCALE: Record<'es' | 'en', string> = {
  es: '3z7745abead796b0932a399faecbb22f0b9c82980ac70367f5a38e3021a062d034',
  en: '3z7745abead796b0932a399faecbb22f0befa5b72b47f0dfec53baa06a47e8f4a9',
};

const THANK_YOU_URL_BY_LOCALE: Record<'es' | 'en', string> = {
  es: 'https://davidraigoza.online/newsletter/gracias',
  en: 'https://davidraigoza.online/us/newsletter/thank-you',
};

const LOCAL_THANK_YOU_PATH_BY_LOCALE: Record<'es' | 'en', string> = {
  es: '/newsletter/gracias',
  en: '/us/newsletter/thank-you',
};

export default function NewsletterSignupForm({ locale = 'es' }: NewsletterSignupFormProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      setErrorMessage(
        locale === 'es'
          ? 'Por favor ingresa un correo electrónico válido.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const formIx = ZOHO_FORM_IX_BY_LOCALE[locale];
    const redirectURL = THANK_YOU_URL_BY_LOCALE[locale];

    const params = new URLSearchParams({
      CONTACT_EMAIL: email.trim(),
      FIRSTNAME: firstName.trim(),
      formIx,
      zx: '137f810df',
      zcvers: '3.0',
      tc_code: 'ZCFORMVIEW',
      zc_trackCode: 'ZCFORMVIEW',
      submitType: 'optinCustomView',
      mode: 'OptinCreateView',
      formType: 'QuickForm',
      redirectURL,
    });

    try {
      // Usamos no-cors para enviar directamente a Zoho desde el navegador sin bloqueos CORS
      await fetch(`${ZOHO_ACTION_URL}?${params.toString()}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: params.toString(),
      });

      // Como no-cors devuelve una respuesta opaca, asumimos éxito en el envío del cliente
      setStatus('success');

      if (typeof window !== 'undefined') {
        if (window.location.hostname.endsWith('davidraigoza.online')) {
          window.location.href = redirectURL;
        } else {
          const localPath = LOCAL_THANK_YOU_PATH_BY_LOCALE[locale];
          window.history.pushState(null, '', localPath);
          window.dispatchEvent(new PopStateEvent('popstate'));
          window.scrollTo(0, 0);
        }
      }
    } catch (error) {
      console.error('Error submitting directly to Zoho:', error);
      setStatus('error');
      setErrorMessage(
        locale === 'es'
          ? 'No se pudo completar el registro. Inténtalo de nuevo.'
          : 'Could not complete registration. Please try again.'
      );
    }
  };

  return (
    <form
      id={locale === 'en' ? 'us-newsletter-signup-form' : 'newsletter-signup-form'}
      onSubmit={handleSubmit}
      className="w-full mt-7"
    >
      <div className="flex flex-col gap-3">
        <div>
          <label
            htmlFor={locale === 'en' ? 'us-newsletter-name-input' : 'newsletter-name-input'}
            className="sr-only"
          >
            {locale === 'es' ? 'Nombre' : 'First name'}
          </label>
          <input
            id={locale === 'en' ? 'us-newsletter-name-input' : 'newsletter-name-input'}
            type="text"
            name="FIRSTNAME"
            autoComplete="given-name"
            placeholder={locale === 'es' ? 'Tu nombre (opcional)' : 'Your name (optional)'}
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              if (status === 'error') {
                setStatus('idle');
                setErrorMessage('');
              }
            }}
            disabled={status === 'loading'}
            className="w-full min-h-[48px] px-4 py-3.5 bg-white text-[#121210] placeholder-[#888880] border border-[#E2E2DE] focus:border-[#121210] rounded-none text-[0.96rem] leading-[1.4] outline-none transition-colors box-border disabled:opacity-60"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch">
          <label
            htmlFor={locale === 'en' ? 'us-newsletter-email-input' : 'newsletter-email-input'}
            className="sr-only"
          >
            {locale === 'es' ? 'Correo electrónico' : 'Email address'}
          </label>
          <input
            id={locale === 'en' ? 'us-newsletter-email-input' : 'newsletter-email-input'}
            type="email"
            name="CONTACT_EMAIL"
            required
            autoComplete="email"
            placeholder={locale === 'es' ? 'tu@email.com' : 'you@email.com'}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') {
                setStatus('idle');
                setErrorMessage('');
              }
            }}
            disabled={status === 'loading'}
            className="flex-1 min-h-[48px] px-4 py-3.5 bg-white text-[#121210] placeholder-[#888880] border border-[#121210] rounded-none text-[0.96rem] leading-[1.4] outline-none box-border w-full disabled:opacity-60"
          />

          <button
            id={locale === 'en' ? 'us-newsletter-submit-btn' : 'newsletter-submit-btn'}
            type="submit"
            disabled={status === 'loading'}
            className="cta-primary-btn min-h-[48px] px-6 py-3.5 bg-[#121210] hover:bg-[#262622] text-white border border-[#121210] hover:border-[#262622] rounded-none text-[0.92rem] font-semibold tracking-[-0.01em] cursor-pointer whitespace-nowrap transition-colors w-full sm:w-auto disabled:opacity-60"
          >
            {status === 'loading'
              ? locale === 'es'
                ? 'Enviando...'
                : 'Submitting...'
              : locale === 'es'
              ? 'Recibir las ideas'
              : 'Get the weekly tips'}
          </button>
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-3 mb-0 text-[0.84rem] font-mono text-[#B91C1C] leading-[1.5]">
          {errorMessage}
        </p>
      )}

      <p className="mt-3.5 mb-0 text-[0.82rem] text-[#666660] leading-[1.5]">
        {locale === 'es'
          ? 'Puedes darte de baja cuando quieras.'
          : 'You can unsubscribe at any time.'}
      </p>
    </form>
  );
}
