import { useLanguage } from '../context/LanguageContext';

interface FloatingWhatsAppProps {
  isFooterIntersecting: boolean;
}

export default function FloatingWhatsApp({ isFooterIntersecting }: FloatingWhatsAppProps) {
  const { t } = useLanguage();
  const fwa = t.floatingWhatsApp;

  return (
    <div
      id="floating-whatsapp-trigger"
      className="floating-whatsapp-container"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <span
        className="floating-whatsapp-tooltip"
        style={{
          backgroundColor: '#FFFFFF',
          color: '#121210',
          padding: '0.4rem 0.8rem',
          fontSize: '0.8rem',
          fontWeight: 500,
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
          border: '1px solid #E2E2DE',
          pointerEvents: 'auto',
          whiteSpace: 'nowrap',
        }}
      >
        {fwa.tooltip}
      </span>

      <a
        id="floating-whatsapp-action"
        href={fwa.chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={fwa.ariaLabel}
        className={`dr-wa ${isFooterIntersecting ? 'dr-wa-footer' : ''}`}
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: isFooterIntersecting ? '#FFFFFF' : '#121210',
          color: isFooterIntersecting ? '#121210' : '#FFFFFF',
          borderRadius: '999px',
          display: 'grid',
          placeItems: 'center',
          border: isFooterIntersecting ? '1px solid #FFFFFF' : '1px solid #262626',
          boxShadow: isFooterIntersecting
            ? '0 12px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)'
            : '0 12px 32px rgba(0,0,0,0.25)',
          textDecoration: 'none',
          pointerEvents: 'auto',
          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          transform: 'scale(1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.06)';
          e.currentTarget.style.backgroundColor = isFooterIntersecting ? '#EAEAE6' : '#222220';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = isFooterIntersecting ? '#FFFFFF' : '#121210';
        }}
        onMouseDown={(e) => {
          e.currentTarget.style.transform = 'scale(0.96)';
        }}
        onMouseUp={(e) => {
          e.currentTarget.style.transform = 'scale(1.06)';
        }}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
          <path d="M19.05 4.93A9.9 9.9 0 0 0 12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.33 5L2 22l5.18-1.36A9.86 9.86 0 0 0 12.04 22c5.52 0 10-4.48 10-10a9.86 9.86 0 0 0-2.99-7.07ZM12.04 20.04a8 8 0 0 1-4.08-1.12l-.29-.17-3.08.81.82-3-.19-.31A8.04 8.04 0 0 1 4 12c0-4.42 3.6-8.02 8.04-8.02 2.14 0 4.16.84 5.67 2.36A7.97 7.97 0 0 1 20.06 12c0 4.42-3.6 8.04-8.02 8.04Zm4.41-6.02c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </div>
  );
}
