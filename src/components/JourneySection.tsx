import { useLanguage } from '../context/LanguageContext';

export default function JourneySection() {
  const { t } = useLanguage();
  const j = t.journey;

  return (
    <section className="scroll-reveal-left" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
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
          {j.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          {j.title}
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', lineHeight: 1.6, maxWidth: '64ch', textWrap: 'pretty' }}>
          {j.subtitle}
        </p>
      </div>

      {/* Unified 4-Step Journey Matrix */}
      <div className="journey-grid-container" style={{ marginBottom: '2rem' }}>
        {j.steps.map((st, i) => (
          <div
            key={st.step}
            id={`journey-step-${st.step}`}
            style={{
              backgroundColor: i === 3 ? '#121210' : '#FAFAFA',
              color: i === 3 ? '#FFFFFF' : '#121210',
              padding: '1.75rem 1.5rem',
              borderTop: i === 3 ? '2px solid #16A34A' : '2px solid transparent',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="bauhaus-num" style={{ fontSize: '0.8rem', fontWeight: 600, color: i === 3 ? '#A3A39E' : '#888880' }}>
                {j.stepTag} {st.step}
              </span>
              {i < 3 ? (
                <span style={{ color: '#AAAAA0', fontSize: '0.85rem' }}>→</span>
              ) : (
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: 'ui-monospace, monospace',
                    padding: '0.15rem 0.5rem',
                    backgroundColor: '#16A34A',
                    color: '#FFFFFF',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 600,
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#86EFAC' }} />
                  {j.goalBadge}
                </span>
              )}
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 600, color: i === 3 ? '#FFFFFF' : '#121210', marginBottom: '0.4rem', textWrap: 'balance' }}>
              {st.label}
            </div>
            <div style={{ fontSize: '0.82rem', color: i === 3 ? '#D4D4D0' : '#555550', lineHeight: 1.45, textWrap: 'pretty' }}>
              {st.role}
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '68ch' }}>
        <p style={{ color: '#444440', fontSize: '1rem', marginBottom: '0.75rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          {j.bottomP1}
        </p>
        <p style={{ color: '#444440', fontSize: '1rem', marginBottom: '0.75rem', lineHeight: 1.6, textWrap: 'pretty' }}>
          {j.bottomP2}
        </p>
        <div
          style={{
            fontSize: '0.85rem',
            color: '#555550',
            fontFamily: 'ui-monospace, monospace',
            marginTop: '1.25rem',
            padding: '0.85rem 1.15rem',
            borderLeft: '3px solid #D97706',
            borderTop: '1px solid #E2E2DE',
            borderRight: '1px solid #E2E2DE',
            borderBottom: '1px solid #E2E2DE',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.6rem',
          }}
        >
          <span style={{ color: '#D97706', fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.4 }}>ℹ</span>
          <span style={{ lineHeight: 1.5, textWrap: 'pretty' }}>
            {j.footnote}
          </span>
        </div>
      </div>
    </section>
  );
}
