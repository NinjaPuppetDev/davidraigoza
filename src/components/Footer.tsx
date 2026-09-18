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
        <a
          id="footer-work-link"
          href="/"
          style={{
            display: 'inline-block',
            border: '1px solid #333330',
            color: '#FAFAFA',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            fontSize: '0.82rem',
            fontWeight: 500,
            marginBottom: '1.75rem',
            minHeight: '40px',
            lineHeight: '1.6',
          }}
        >
          {f.portfolioLink}
        </a>
        <div style={{ color: '#555550', fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace' }}>
          © David Raigoza
        </div>
      </div>
    </footer>
  );
}
