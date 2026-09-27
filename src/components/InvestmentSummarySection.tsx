import { useLanguage } from '../context/LanguageContext';

export default function InvestmentSummarySection() {
  const { t } = useLanguage();
  const inv = t.investmentSummary;

  return (
    <section className="scroll-reveal" style={{ padding: '3rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
      <div
        id="investment-summary-tile"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #121210',
          padding: 'clamp(2rem, 4vw, 3.25rem) clamp(1.5rem, 3.5vw, 3rem)',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'ui-monospace, monospace',
            color: '#666660',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.75rem',
          }}
        >
          <span style={{ width: '4px', height: '4px', backgroundColor: '#D97706', display: 'inline-block' }} />
          {inv.tag}
        </span>
        <h2
          className="bauhaus-num"
          style={{
            fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)',
            fontWeight: 600,
            color: '#121210',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
            textWrap: 'balance',
          }}
        >
          {inv.title}
        </h2>
        <p
          style={{
            color: '#444440',
            fontSize: '0.98rem',
            maxWidth: '60ch',
            margin: '0 auto 1.25rem',
            lineHeight: 1.6,
            textWrap: 'pretty',
          }}
        >
          {inv.desc1}
        </p>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#121210',
            fontWeight: 600,
            marginBottom: '2rem',
            lineHeight: 1.5,
            textWrap: 'pretty',
          }}
        >
          {inv.desc2}
        </p>
        <a
          id="investment-summary-cta"
          href="#contacto"
          className="negocios-btn-mobile-full"
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: '0.9rem 2.25rem',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.92rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            minHeight: '48px',
            border: '1px solid #121210',
          }}
        >
          {inv.cta} <span>→</span>
        </a>
      </div>
    </section>
  );
}
