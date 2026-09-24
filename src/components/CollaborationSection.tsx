import { useLanguage } from '../context/LanguageContext';

export default function CollaborationSection() {
  const { t } = useLanguage();
  const c = t.collaboration;

  return (
    <section className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
      <div style={{ marginBottom: '2rem' }}>
        <span
          style={{
            fontSize: '0.7rem',
            fontFamily: 'ui-monospace, monospace',
            color: '#666660',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          {c.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          {c.title}
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '64ch', textWrap: 'pretty' }}>
          {c.subtitle}
        </p>
      </div>

      <div
        id="review-rounds-container"
        className="colaboracion-split"
      >
        <div
          className="card-hover"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E2DE',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                padding: '0.2rem 0.6rem',
                backgroundColor: '#F0F0EC',
                color: '#121210',
                marginBottom: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#2563EB' }} />
              {c.card1.badge}
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: '#121210', marginBottom: '0.85rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              {c.card1.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#444440', lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>
            {c.card1.desc}
          </p>
        </div>

        <div
          className="card-hover"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E2E2DE',
            padding: 'clamp(2rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '220px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                padding: '0.2rem 0.6rem',
                backgroundColor: '#121210',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              {c.card2.badge}
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 600, color: '#121210', marginBottom: '0.85rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
              {c.card2.title}
            </h3>
          </div>
          <p style={{ fontSize: '0.94rem', color: '#444440', lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>
            {c.card2.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
