import { useLanguage } from '../context/LanguageContext';

export default function RespaldoSection() {
  const { t } = useLanguage();
  const r = t.respaldo;
  const [melissa, carlos] = r.testimonials;
  const [lapizAcero, capitalSemilla] = r.awards;

  return (
    <section id="respaldo" className="scroll-reveal" style={{ padding: '4rem 0 3.5rem', borderTop: '1px solid #E2E2DE' }}>
      <div style={{ marginBottom: '2.5rem' }}>
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
          {r.tag}
        </span>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.25rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.75rem', textWrap: 'balance' }}>
          {r.title}
        </h2>
        <p style={{ color: '#444440', fontSize: '1.02rem', maxWidth: '64ch', lineHeight: 1.6, textWrap: 'pretty' }}>
          {r.subtitle}
        </p>
      </div>

      <div className="respaldo-editorial-layout">
        {/* Left Column: Client Endorsements & Peer Validation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Melissa Rendón */}
          {melissa && (
            <div
              id={melissa.id}
              className="card-hover scroll-reveal-scale"
              style={{
                backgroundColor: '#FFFFFF',
                padding: 'clamp(2rem, 3.5vw, 2.5rem) clamp(1.75rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #E2E2DE',
                minHeight: '230px',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: melissa.accentColor,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: melissa.accentColor }} />
                    {melissa.tag}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#888880' }}>
                    {melissa.category}
                  </span>
                </div>
                <blockquote
                  style={{
                    fontSize: 'clamp(1.1rem, 2vw, 1.22rem)',
                    color: '#121210',
                    lineHeight: 1.5,
                    fontStyle: 'normal',
                    margin: '0 0 1.75rem 0',
                    letterSpacing: '-0.015em',
                    fontWeight: 450,
                    textWrap: 'pretty',
                  }}
                >
                  {melissa.quote}
                </blockquote>
              </div>
              <div style={{ borderTop: '1px solid #E2E2DE', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.96rem', color: '#121210' }}>{melissa.author}</div>
                  <div style={{ fontSize: '0.82rem', color: '#666660' }}>{melissa.role}</div>
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#999990' }}>
                  {melissa.status}
                </span>
              </div>
            </div>
          )}

          {/* Carlos Mariño */}
          {carlos && (
            <div
              id={carlos.id}
              className="card-hover scroll-reveal-scale"
              style={{
                backgroundColor: '#FFFFFF',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #E2E2DE',
                transitionDelay: '60ms',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: carlos.accentColor,
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: carlos.accentColor }} />
                    {carlos.tag}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#888880' }}>
                    {carlos.category}
                  </span>
                </div>
                <blockquote
                  style={{
                    fontSize: '1.08rem',
                    color: '#121210',
                    lineHeight: 1.55,
                    fontStyle: 'normal',
                    margin: '0 0 1.5rem 0',
                    letterSpacing: '-0.01em',
                    textWrap: 'pretty',
                  }}
                >
                  {carlos.quote}
                </blockquote>
              </div>
              <div style={{ borderTop: '1px solid #E2E2DE', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.94rem', color: '#121210' }}>{carlos.author}</div>
                  <div style={{ fontSize: '0.82rem', color: '#666660' }}>{carlos.role}</div>
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'ui-monospace, monospace', color: '#999990' }}>
                  {carlos.status}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Institutional Distinctions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Lápiz de Acero */}
          {lapizAcero && (
            <div
              id={lapizAcero.id}
              className="card-hover scroll-reveal-scale"
              style={{
                backgroundColor: '#FDE047',
                color: '#121210',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #EAB308',
                transitionDelay: '120ms',
                height: '100%',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#121210',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#121210', display: 'inline-block' }} />
                    {lapizAcero.tag}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#121210', fontWeight: 700 }}>
                    {lapizAcero.location}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#121210', margin: '0 0 0.65rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
                  {lapizAcero.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#262624', lineHeight: 1.6, marginBottom: '1.75rem', textWrap: 'pretty' }}>
                  {lapizAcero.description}
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid rgba(18, 18, 16, 0.2)',
                  paddingTop: '1rem',
                  fontSize: '0.78rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#121210',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                }}
              >
                {lapizAcero.institution}
              </div>
            </div>
          )}

          {/* Capital Semilla */}
          {capitalSemilla && (
            <div
              id={capitalSemilla.id}
              className="card-hover scroll-reveal-scale"
              style={{
                backgroundColor: '#FFFFFF',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #E2E2DE',
                transitionDelay: '180ms',
                height: '100%',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'ui-monospace, monospace',
                      color: '#2563EB',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', backgroundColor: '#2563EB', display: 'inline-block' }} />
                    {capitalSemilla.tag}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'ui-monospace, monospace', color: '#121210', fontWeight: 600 }}>
                    {capitalSemilla.location}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#121210', margin: '0 0 0.65rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
                  {capitalSemilla.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#444440', lineHeight: 1.6, marginBottom: '1.75rem', textWrap: 'pretty' }}>
                  {capitalSemilla.description}
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid #E2E2DE',
                  paddingTop: '1rem',
                  fontSize: '0.78rem',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#121210',
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                }}
              >
                {capitalSemilla.institution}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
