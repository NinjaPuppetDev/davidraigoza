import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

declare global {
  interface Window {
    __openCookieBanner?: () => void;
    __cookieConsentDismissed?: boolean;
  }
}

function hasStoredConsent(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.__cookieConsentDismissed) return true;
  try {
    const savedChoice = localStorage.getItem('davidraigoza_cookie_consent_choice');
    if (savedChoice === 'accepted' || savedChoice === 'declined') {
      window.__cookieConsentDismissed = true;
      return true;
    }
  } catch {
    // Storage unavailable
  }
  return false;
}

export default function CookieBanner() {
  const { t } = useLanguage();
  const cb = t.cookieBanner;

  // Only show banner if the user has not already accepted or declined
  const [isVisible, setIsVisible] = useState<boolean>(() => !hasStoredConsent());

  // Expose global method to reopen the banner anytime (e.g. from the footer link)
  useEffect(() => {
    window.__openCookieBanner = () => {
      setIsVisible(true);
    };
    return () => {
      delete window.__openCookieBanner;
    };
  }, []);

  const handleAccept = () => {
    window.__cookieConsentDismissed = true;
    try {
      localStorage.setItem('davidraigoza_cookie_consent_choice', 'accepted');
    } catch {
      // Storage unavailable
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    window.__cookieConsentDismissed = true;
    try {
      localStorage.setItem('davidraigoza_cookie_consent_choice', 'declined');
    } catch {
      // Storage unavailable
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      id="dr-compliance-bar"
      role="region"
      aria-label="Preferencias del sitio"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: 0,
        right: 0,
        zIndex: 999999,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 0.75rem',
        pointerEvents: 'none',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      }}
    >
      <aside
        className="dr-cookie-aside"
        style={{
          maxWidth: '460px',
          width: '100%',
          padding: '0.8rem 0.95rem',
          backgroundColor: '#FFFFFF',
          border: '2px solid #080808',
          boxShadow: '5px 5px 0px 0px #080808',
          pointerEvents: 'auto',
          color: '#080808',
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
        }}
      >
        {/* Geometric Bauhaus Chrome */}
        <div
          className="dr-cookie-header"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.45rem',
            paddingBottom: '0.38rem',
            borderBottom: '1px solid #E5E5E5',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.38rem' }}>
            <span
              style={{
                width: '9px',
                height: '9px',
                backgroundColor: '#C8F04A',
                border: '1px solid #080808',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '9px',
                height: '9px',
                backgroundColor: '#F0A020',
                border: '1px solid #080808',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: 0,
                height: 0,
                borderLeft: '4.5px solid transparent',
                borderRight: '4.5px solid transparent',
                borderBottom: '8.5px solid #080808',
                display: 'inline-block',
              }}
            />
            <span
              className="dr-cookie-tag"
              style={{
                fontSize: '0.64rem',
                textTransform: 'uppercase',
                letterSpacing: '0.11em',
                color: '#666660',
                marginLeft: '0.25rem',
                fontFamily: 'ui-monospace, monospace',
                lineHeight: 1,
              }}
            >
              {cb.sysTag}
            </span>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            aria-label={cb.closeAria}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#666660',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.1rem 0.25rem',
              lineHeight: 1,
              fontFamily: 'ui-monospace, monospace',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#080808';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666660';
            }}
          >
            [✕]
          </button>
        </div>

        {/* Content - Pure One-Liner */}
        <div className="dr-cookie-body" style={{ marginBottom: '0.55rem' }}>
          <p
            className="dr-cookie-message"
            style={{
              fontSize: '0.76rem',
              color: '#333330',
              lineHeight: 1.38,
              margin: 0,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
            }}
          >
            {cb.message}
          </p>
        </div>

        {/* Controls */}
        <div
          className="dr-cookie-actions"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.5rem',
          }}
        >
          <button
            type="button"
            onClick={handleDecline}
            className="dr-cookie-btn"
            style={{
              width: '100%',
              padding: '0.4rem 0.75rem',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              border: '1px solid #080808',
              backgroundColor: '#F9F9F8',
              color: '#555550',
              cursor: 'pointer',
              fontFamily: 'ui-monospace, monospace',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EEEEEC';
              e.currentTarget.style.color = '#080808';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F9F9F8';
              e.currentTarget.style.color = '#555550';
            }}
          >
            {cb.decline}
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="dr-cookie-btn"
            style={{
              width: '100%',
              padding: '0.4rem 0.75rem',
              fontSize: '0.68rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              border: '1px solid #080808',
              backgroundColor: '#080808',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontFamily: 'ui-monospace, monospace',
              boxShadow: '2.5px 2.5px 0px 0px #C8F04A',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#222220';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#080808';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translate(1.5px, 1.5px)';
              e.currentTarget.style.boxShadow = '1px 1px 0px 0px #C8F04A';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '2.5px 2.5px 0px 0px #C8F04A';
            }}
          >
            {cb.accept}
          </button>
        </div>
      </aside>
    </div>
  );
}
