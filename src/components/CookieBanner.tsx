import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function CookieBanner() {
  const { t } = useLanguage();
  const cb = t.cookieBanner;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('davidraigoza_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('davidraigoza_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('davidraigoza_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[99999] flex justify-center px-4 pointer-events-none font-mono text-[#080808]">
      <aside 
        aria-label={cb.title}
        className="max-w-xl w-full p-6 bg-[#ffffff] border-2 border-[#080808] shadow-[8px_8px_0px_0px_#080808] transition-all duration-300 ease-out pointer-events-auto"
      >
        {/* Geometric Bauhaus Chrome */}
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-[#c8f04a] border border-[#080808] rounded-full" />
            <span className="inline-block w-3 h-3 bg-[#f0a020] border border-[#080808]" />
            <span className="inline-block w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#080808]" />
            <span className="text-xs uppercase tracking-widest text-[#666666] ml-2">{cb.sysTag}</span>
          </div>
          <button 
            onClick={handleDecline}
            className="text-[#666666] hover:text-[#080808] text-sm px-2 py-0.5 transition-colors font-bold cursor-pointer"
            aria-label={cb.closeAria}
          >
            [✕]
          </button>
        </div>

        {/* Content */}
        <div className="space-y-2 mb-5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#080808]">
            {cb.title}
          </h3>
          <p className="text-xs text-[#555555] leading-relaxed font-sans font-normal">
            {cb.desc}
          </p>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleDecline}
            className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-widest border border-[#080808] bg-[#f9f9f9] text-[#555555] hover:text-[#080808] hover:bg-[#eeeeee] transition-all duration-200 text-center cursor-pointer"
          >
            {cb.decline}
          </button>
          <button
            onClick={handleAccept}
            className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-widest bg-[#080808] text-[#ffffff] hover:bg-[#222222] transition-all duration-200 text-center shadow-[3px_3px_0px_0px_#c8f04a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#c8f04a] cursor-pointer"
          >
            {cb.accept}
          </button>
        </div>
      </aside>
    </div>
  );
}
