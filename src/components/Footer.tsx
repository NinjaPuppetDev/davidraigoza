import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer
      id="negocios-footer"
      style={{
        backgroundColor: '#121210',
        color: '#FAFAFA',
        padding: '3.5rem 1.5rem',
        textAlign: 'center',
        borderTop: '1px solid #222220',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
          davidraigoza.design
        </div>
        <p style={{ color: '#888880', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.75rem' }}>
          {f.subtitle}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <a
            id="footer-work-link"
            href="https://davidraigoza.design/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              border: '1px solid #333330',
              color: '#FAFAFA',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 500,
              minHeight: '40px',
              lineHeight: '1.6',
              transition: 'background-color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#222220';
              e.currentTarget.style.borderColor = '#555550';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#333330';
            }}
          >
            {f.portfolioLink}
          </a>
        </div>
        <div style={{ color: '#555550', fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <span>© David Raigoza</span>
          <span style={{ color: '#333330' }}>·</span>
          <button
            type="button"
            onClick={() => window.__openCookieBanner?.()}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#777770',
              fontSize: '0.75rem',
              fontFamily: 'ui-monospace, monospace',
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              padding: 0,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FAFAFA'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#777770'; }}
          >
            Cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
