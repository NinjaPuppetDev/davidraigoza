import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { language, t } = useLanguage();
  const c = t.contact;

  const mailtoSubject = language === 'es' ? 'Consulta%20Negocio' : 'Business%20Inquiry';
  const whatsappMsg = language === 'es'
    ? 'Hola%20David,%20quiero%20mejorar%20la%20presencia%20digital%20de%20mi%20negocio.'
    : 'Hello%20David,%20I%20would%20like%20to%20elevate%20my%20business%20digital%20presence.';

  return (
    <section id="contacto" className="scroll-reveal" style={{ padding: '4.5rem 0 3.5rem', borderTop: '1px solid #E2E2DE', textAlign: 'center' }}>
      <span
        style={{
          fontSize: '0.7rem',
          fontFamily: 'ui-monospace, monospace',
          color: '#666660',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          display: 'block',
          marginBottom: '0.75rem',
        }}
      >
        {c.tag}
      </span>
      <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.35rem)', fontWeight: 500, color: '#121210', letterSpacing: '-0.02em', marginBottom: '0.85rem', textWrap: 'balance' }}>
        {c.title}
      </h2>
      <p style={{ color: '#444440', fontSize: '1.02rem', marginBottom: '2.25rem', maxWidth: '58ch', margin: '0 auto 2.25rem', lineHeight: 1.6, textWrap: 'pretty' }}>
        {c.desc}
      </p>

      <div className="negocios-cta-actions" style={{ justifyContent: 'center' }}>
        <a
          id="cta-direct-email"
          href={`mailto:david@davidraigoza.online?subject=${mailtoSubject}`}
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: '0.9rem 1.85rem',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.92rem',
            minHeight: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            border: '1px solid #121210',
          }}
        >
          {c.emailCta} <span>→</span>
        </a>
        <a
          id="cta-direct-whatsapp"
          href={`https://wa.me/573007747638?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#15803D',
            color: '#FFFFFF',
            padding: '0.9rem 1.85rem',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.92rem',
            minHeight: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            border: '1px solid #15803D',
            boxShadow: '0 4px 12px rgba(21, 128, 61, 0.22)',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#86EFAC', display: 'inline-block' }} />
          {c.whatsappCta}
        </a>
      </div>
    </section>
  );
}
