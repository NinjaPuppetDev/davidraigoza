import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

export default function HeaderNav() {
  const { language, setLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('que-incluye');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Active section scroll spy to highlight current tab
  useEffect(() => {
    const sections = ['que-incluye', 'respaldo', 'transparencia', 'proceso'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    t.header.nav.essentials,
    t.header.nav.backing,
    t.header.nav.investment,
    t.header.nav.process,
  ];

  return (
    <header
      id="negocios-header-nav"
      className="negocios-header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(248, 248, 246, 0.94)',
        backdropFilter: 'blur(12px)',
        zIndex: 50,
        borderBottom: '1px solid #E2E2DE',
      }}
    >
      {/* Brand Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <a
          id="nav-brand-link"
          href="/"
          aria-label="David Raigoza"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/logo/logo.svg"
            alt="David Raigoza Logo"
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </a>
      </div>

      {/* Desktop Section Navigation Tabs (Architectural Ledger Design) */}
      <nav
        id="header-section-tabs"
        className="header-desktop-tabs"
        aria-label="Navegación principal"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          backgroundColor: '#EFEFEA',
          border: '1px solid #E2E2DE',
          padding: '2px',
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              id={`nav-tab-${item.id}`}
              className="header-arch-tab"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.75rem',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontFamily: 'ui-monospace, monospace',
                color: isActive ? '#121210' : '#666660',
                backgroundColor: isActive ? '#FFFFFF' : 'transparent',
                borderBottom: isActive ? '2px solid #121210' : '2px solid transparent',
                fontWeight: isActive ? 600 : 450,
                transition: 'all 0.18s ease',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#121210';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#666660';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span
                style={{
                  fontSize: '0.68rem',
                  color: isActive ? '#2563EB' : '#888880',
                  fontWeight: 600,
                }}
              >
                [{item.num}]
              </span>
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      {/* Right Controls: Actions & Menu */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>

        {/* Desktop Language Switcher */}
        <div
          id="header-desktop-language-tabs"
          className="header-desktop-lang-toggle"
          role="tablist"
          aria-label={t.header.langSwitchAria}
          style={{
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            border: '1px solid #121210',
            padding: '2px',
            gap: '2px',
            minHeight: '36px',
            boxSizing: 'border-box',
          }}
        >
          <button
            type="button"
            role="tab"
            id="desktop-header-lang-es"
            aria-selected={language === 'es'}
            onClick={() => setLanguage('es')}
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.75rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: language === 'es' ? '#121210' : 'transparent',
              color: language === 'es' ? '#F8F8F6' : '#666660',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              lineHeight: 1,
              minHeight: '30px',
            }}
          >
            {language === 'es' && (
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#16A34A',
                  display: 'inline-block',
                }}
              />
            )}
            ES
          </button>

          <button
            type="button"
            role="tab"
            id="desktop-header-lang-en"
            aria-selected={language === 'en'}
            onClick={() => setLanguage('en')}
            style={{
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.75rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: language === 'en' ? '#121210' : 'transparent',
              color: language === 'en' ? '#F8F8F6' : '#666660',
              transition: 'background-color 0.15s ease, color 0.15s ease',
              lineHeight: 1,
              minHeight: '30px',
            }}
          >
            {language === 'en' && (
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#16A34A',
                  display: 'inline-block',
                }}
              />
            )}
            EN
          </button>
        </div>

        {/* Instagram Profile Link */}
        <a
          id="negocios-header-instagram-btn"
          className="instagram-header-btn"
          href="https://www.instagram.com/raigoza_david_design/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile: @raigoza_david_design"
          style={{
            color: '#121210',
            textDecoration: 'none',
            padding: '0.45rem 0.85rem',
            borderRadius: '999px',
            fontWeight: 500,
            fontSize: '0.82rem',
            minHeight: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            justifyContent: 'center',
            border: '1px solid #D4D4D0',
            backgroundColor: '#FFFFFF',
            transition: 'background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F4F4F2';
            e.currentTarget.style.borderColor = '#121210';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.borderColor = '#D4D4D0';
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: 'inline-block', flexShrink: 0 }}
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="header-btn-text">{t.header.instagram}</span>
        </a>

        {/* Direct WhatsApp CTA */}
        <a
          id="nav-whatsapp-cta"
          className="whatsapp-header-btn"
          href={t.floatingWhatsApp.chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{
            backgroundColor: '#121210',
            color: '#FFFFFF',
            padding: '0.45rem 1.05rem',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.82rem',
            minHeight: '36px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            justifyContent: 'center',
            border: '1px solid #121210',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#262624';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#121210';
          }}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true" style={{ display: 'inline-block', flexShrink: 0 }}>
            <path d="M19.05 4.93A9.9 9.9 0 0 0 12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.33 5L2 22l5.18-1.36A9.86 9.86 0 0 0 12.04 22c5.52 0 10-4.48 10-10a9.86 9.86 0 0 0-2.99-7.07ZM12.04 20.04a8 8 0 0 1-4.08-1.12l-.29-.17-3.08.81.82-3-.19-.31A8.04 8.04 0 0 1 4 12c0-4.42 3.6-8.02 8.04-8.02 2.14 0 4.16.84 5.67 2.36A7.97 7.97 0 0 1 20.06 12c0 4.42-3.6 8.04-8.02 8.04Zm4.41-6.02c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
          </svg>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#16A34A',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span className="header-whatsapp-label">{t.header.whatsapp}</span>
        </a>

        {/* Section Menu Toggle (Mobile only) */}
        <button
          type="button"
          id="header-mobile-toggle"
          className="header-mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={mobileMenuOpen}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.45rem 0.65rem',
            backgroundColor: mobileMenuOpen ? '#121210' : '#FFFFFF',
            color: mobileMenuOpen ? '#FFFFFF' : '#121210',
            border: '1px solid #121210',
            fontFamily: 'ui-monospace, monospace',
            fontSize: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            minHeight: '36px',
            transition: 'background-color 0.15s ease, color 0.15s ease',
          }}
        >
          {mobileMenuOpen ? '[✕]' : '[MENU]'}
        </button>
      </div>

      {/* Mobile Drawer Navigation Tabs */}
      {mobileMenuOpen && (
        <div
          id="header-mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#F8F8F6',
            borderBottom: '2px solid #121210',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
            zIndex: 49,
          }}
        >
          <div
            style={{
              fontSize: '0.68rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#888880',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.25rem',
            }}
          >
            Secciones // Sections
          </div>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                backgroundColor: activeSection === item.id ? '#FFFFFF' : '#F0F0EC',
                border: activeSection === item.id ? '1px solid #121210' : '1px solid #E2E2DE',
                color: '#121210',
                textDecoration: 'none',
                fontFamily: 'ui-monospace, monospace',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <span>{item.label}</span>
              <span style={{ color: '#2563EB', fontSize: '0.75rem' }}>[{item.num}]</span>
            </a>
          ))}

          {/* Direct channels in mobile drawer */}
          <div
            style={{
              fontSize: '0.68rem',
              fontFamily: 'ui-monospace, monospace',
              color: '#888880',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginTop: '0.5rem',
              marginBottom: '0.15rem',
            }}
          >
            Canales Directos // Direct Channels
          </div>

          <a
            id="mobile-drawer-whatsapp-btn"
            href={t.floatingWhatsApp.chatUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1rem',
              backgroundColor: '#121210',
              color: '#FFFFFF',
              border: '1px solid #121210',
              textDecoration: 'none',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{ display: 'inline-block' }}>
              <path d="M19.05 4.93A9.9 9.9 0 0 0 12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.76.46 3.48 1.33 5L2 22l5.18-1.36A9.86 9.86 0 0 0 12.04 22c5.52 0 10-4.48 10-10a9.86 9.86 0 0 0-2.99-7.07ZM12.04 20.04a8 8 0 0 1-4.08-1.12l-.29-.17-3.08.81.82-3-.19-.31A8.04 8.04 0 0 1 4 12c0-4.42 3.6-8.02 8.04-8.02 2.14 0 4.16.84 5.67 2.36A7.97 7.97 0 0 1 20.06 12c0 4.42-3.6 8.04-8.02 8.04Zm4.41-6.02c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
            </svg>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#16A34A',
                display: 'inline-block',
              }}
            />
            <span>WhatsApp (+57 320 869 4945)</span>
          </a>

          <a
            id="mobile-drawer-instagram-btn"
            href="https://www.instagram.com/raigoza_david_design/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              padding: '0.85rem 1rem',
              backgroundColor: '#FFFFFF',
              color: '#121210',
              border: '1px solid #121210',
              textDecoration: 'none',
              fontFamily: 'ui-monospace, monospace',
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ display: 'inline-block' }}
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Instagram (@raigoza_david_design)</span>
          </a>

          {/* Architectural Language Switcher at bottom of menu */}
          <div
            id="drawer-language-section"
            style={{
              marginTop: '0.5rem',
              paddingTop: '0.85rem',
              borderTop: '1px solid #E2E2DE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <div
              style={{
                fontSize: '0.68rem',
                fontFamily: 'ui-monospace, monospace',
                color: '#888880',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Idioma // Language
            </div>

            <div
              id="menu-language-tabs"
              role="tablist"
              aria-label={t.header.langSwitchAria}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: '#FFFFFF',
                border: '1px solid #121210',
                padding: '2px',
                gap: '2px',
              }}
            >
              <button
                type="button"
                role="tab"
                id="menu-lang-tab-es"
                aria-selected={language === 'es'}
                onClick={() => setLanguage('es')}
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.85rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: language === 'es' ? '#121210' : 'transparent',
                  color: language === 'es' ? '#F8F8F6' : '#666660',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                  lineHeight: 1,
                }}
              >
                {language === 'es' && (
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#16A34A',
                      display: 'inline-block',
                    }}
                  />
                )}
                ES
              </button>

              <button
                type="button"
                role="tab"
                id="menu-lang-tab-en"
                aria-selected={language === 'en'}
                onClick={() => setLanguage('en')}
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.85rem',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  backgroundColor: language === 'en' ? '#121210' : 'transparent',
                  color: language === 'en' ? '#F8F8F6' : '#666660',
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                  lineHeight: 1,
                }}
              >
                {language === 'en' && (
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: '#16A34A',
                      display: 'inline-block',
                    }}
                  />
                )}
                EN
              </button>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
