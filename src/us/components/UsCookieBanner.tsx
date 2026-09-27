import { useState, useEffect } from 'react';

declare global {
  interface Window {
    __openCookieBanner?: () => void;
  }
}

export default function UsCookieBanner() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    window.__openCookieBanner = () => {
      setIsVisible(true);
    };
    return () => {
      delete window.__openCookieBanner;
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('davidraigoza_cookie_consent_choice', 'accepted');
    } catch {
      // Storage unavailable
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
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
      aria-label="Site preferences"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        left: 0,
        right: 0,
        zIndex: 999999,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      }}
    >
      <aside
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '1.4rem',
          backgroundColor: '#FFFFFF',
          border: '2px solid #080808',
          boxShadow: '8px 8px 0px 0px #080808',
          pointerEvents: 'auto',
          color: '#080808',
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
        }}
      >
        {/* Geometric Bauhaus Chrome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.85rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #E5E5E5',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#C8F04A',
                border: '1px solid #080808',
                borderRadius: '50%',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#F0A020',
                border: '1px solid #080808',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '11px solid #080808',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#666660',
                marginLeft: '0.4rem',
                fontFamily: 'ui-monospace, monospace',
              }}
            >
              Notice // 01
            </span>
          </div>
          <button
            type="button"
            onClick={handleDecline}
            aria-label="Close dialog"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#666660',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer',
              padding: '0.2rem 0.4rem',
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

        {/* Content */}
        <div style={{ marginBottom: '1.25rem' }}>
          <p
            style={{
              fontSize: '0.85rem',
              color: '#333330',
              lineHeight: 1.55,
              margin: 0,
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 400,
            }}
          >
            We use cookies to personalize content and analyze traffic.
          </p>
        </div>

        {/* Controls */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
          }}
        >
          <button
            type="button"
            onClick={handleDecline}
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              fontSize: '0.75rem',
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
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            style={{
              width: '100%',
              padding: '0.65rem 1rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              border: '1px solid #080808',
              backgroundColor: '#080808',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontFamily: 'ui-monospace, monospace',
              boxShadow: '3px 3px 0px 0px #C8F04A',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#222220';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#080808';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translate(2px, 2px)';
              e.currentTarget.style.boxShadow = '1px 1px 0px 0px #C8F04A';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '3px 3px 0px 0px #C8F04A';
            }}
          >
            Accept
          </button>
        </div>
      </aside>
    </div>
  );
}
