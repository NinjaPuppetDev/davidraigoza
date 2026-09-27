export default function UsProfileSection() {
  return (
    <section
      id="david-raigoza"
      className="scroll-reveal"
      style={{
        padding: '3.75rem 0 3.25rem',
        borderTop: '1px solid #E2E2DE',
      }}
    >
      <div
        id="us-profile-editorial-card"
        className="card-hover scroll-reveal-scale"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #E2E2DE',
          padding: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem',
        }}
      >
        {/* Top Meta Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            borderBottom: '1px solid #E2E2DE',
            paddingBottom: '1.25rem',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#121210',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontSize: '0.72rem',
                fontFamily: 'ui-monospace, monospace',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#666660',
                fontWeight: 600,
              }}
            >
              DIRECT PRACTICE & EXECUTION
            </span>
          </div>

          <div
            style={{
              fontSize: '0.75rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#888880',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span>Medellín, Colombia</span>
            <span>·</span>
            <span>Websites for professionals</span>
          </div>
        </div>

        {/* Name, Title, Copy & Photo Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            alignItems: 'start',
          }}
        >
          {/* Left: Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)',
                  fontWeight: 600,
                  color: '#121210',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                David Raigoza
              </h2>
            </div>

            {/* Copy Body */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.95rem',
              }}
            >
              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#333330',
                  lineHeight: 1.65,
                  margin: 0,
                  textWrap: 'pretty',
                }}
              >
                David works directly with you to understand your business, clarify what you need to communicate, and turn it into a clear, functional digital experience that fits your clients.
              </p>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: '#555550',
                  lineHeight: 1.65,
                  margin: 0,
                  textWrap: 'pretty',
                }}
              >
                He designs and develops each product according to your business context, from structure and content to the experience and implementation.
              </p>
            </div>
          </div>

          {/* Right: Founder Photo Frame */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#F8F8F6',
              border: '1px solid #E2E2DE',
              padding: '0.75rem',
              maxWidth: '340px',
              width: '100%',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3 / 4',
                overflow: 'hidden',
                backgroundColor: '#EBEBE8',
                border: '1px solid #E2E2DE',
              }}
            >
              <img
                src="/founder/david-raigoza.jpg"
                alt="David Raigoza - Product Design Engineer"
                referrerPolicy="no-referrer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '0.65rem',
                fontSize: '0.7rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#666660',
              }}
            >
              <span>davidraigoza.online</span>
              <span style={{ fontWeight: 600, color: '#121210' }}>MEDELLÍN, CO</span>
            </div>
          </div>
        </div>

        {/* Bottom Three Pillars */}
        <div
          style={{
            borderTop: '1px solid #E2E2DE',
            paddingTop: '1.25rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <span style={{ color: '#121210', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'ui-monospace, monospace', marginTop: '0.1rem' }}>
              01 //
            </span>
            <span style={{ fontSize: '0.88rem', color: '#444440', fontWeight: 500, lineHeight: 1.45 }}>
              Designed for clarity.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <span style={{ color: '#121210', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'ui-monospace, monospace', marginTop: '0.1rem' }}>
              02 //
            </span>
            <span style={{ fontSize: '0.88rem', color: '#444440', fontWeight: 500, lineHeight: 1.45 }}>
              Structure, content, and form.
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
            <span style={{ color: '#121210', fontSize: '0.75rem', fontWeight: 600, fontFamily: 'ui-monospace, monospace', marginTop: '0.1rem' }}>
              03 //
            </span>
            <span style={{ fontSize: '0.88rem', color: '#444440', fontWeight: 500, lineHeight: 1.45 }}>
              Websites you can understand and manage.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
