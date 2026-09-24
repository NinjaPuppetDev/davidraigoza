import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Language, TranslationData, TRANSLATIONS } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
  isColombia: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const MANUAL_OVERRIDE_KEY = 'davidraigoza_manual_lang_override';

/**
 * Robust detection if client is located in Colombia:
 * 1. Timezone check (America/Bogota is the official standard IANA timezone for all Colombia)
 * 2. Locale / Accept-Language check (e.g., 'es-CO', 'en-CO', 'es_CO')
 */
export function isColombiaDetected(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    // Check IANA TimeZone
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && (tz === 'America/Bogota' || tz.toLowerCase().includes('bogota'))) {
      return true;
    }

    // Check navigator locales
    const locales = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
    if (locales.some((l) => /[-_]co\b/i.test(l))) {
      return true;
    }
  } catch {
    // Fail safely
  }
  return false;
}

export function LanguageProvider({
  children,
  forcedLanguage,
}: {
  children: ReactNode;
  forcedLanguage?: Language;
}) {
  const isUsPath = typeof window !== 'undefined' && window.location.pathname.startsWith('/us');
  const lockedLanguage: Language | undefined = forcedLanguage || (isUsPath ? 'en' : undefined);

  const [isColombia, setIsColombia] = useState<boolean>(() => (lockedLanguage ? false : isColombiaDetected()));

  // Rule: The site lands in Spanish ('es') by default unless locked or on /us path
  const [language, setLanguageState] = useState<Language>(() => lockedLanguage || 'es');

  const setLanguage = (lang: Language) => {
    // If locked or on the /us path, forbid switching to Spanish
    if (lockedLanguage) return;
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/us')) return;

    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(MANUAL_OVERRIDE_KEY, lang);
    }
  };

  // Secondary verification: fast non-blocking IP country check (skipped if locked to English on /us)
  useEffect(() => {
    if (lockedLanguage) return;

    let isMounted = true;

    const verifyIpCountry = async () => {
      try {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 2200);

        const res = await fetch('https://api.country.is/', {
          signal: controller.signal,
        });
        clearTimeout(timer);

        if (res.ok && isMounted) {
          const data = await res.json();
          if (data?.country === 'CO') {
            setIsColombia(true);
            const manualOverride = sessionStorage.getItem(MANUAL_OVERRIDE_KEY);
            // If in Colombia and not explicitly manually toggled in this session, ensure Spanish
            if (!manualOverride) {
              setLanguageState('es');
              if (typeof document !== 'undefined') {
                document.documentElement.lang = 'es';
              }
            }
          }
        }
      } catch {
        // Silently continue if network check fails or is blocked
      }
    };

    verifyIpCountry();

    return () => {
      isMounted = false;
    };
  }, [lockedLanguage]);

  const activeLanguage = lockedLanguage || language;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = activeLanguage;
    }
  }, [activeLanguage]);

  const value = {
    language: activeLanguage,
    setLanguage,
    t: TRANSLATIONS[activeLanguage],
    isColombia,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
