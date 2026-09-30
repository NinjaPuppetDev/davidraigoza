import { useEffect, useRef } from 'react';

export interface NewsletterSignupFormProps {
  locale?: 'es' | 'en';
}

const ZOHO_ES_SF_ID = 'sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3';

declare global {
  interface Window {
    setupSF?: (
      sfId: string,
      trackCode: string,
      isCaptcha: boolean,
      theme: string,
      isPopup: boolean,
      version: string
    ) => void;
    runOnFormSubmit_sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3?: (
      th: unknown
    ) => void;
  }
}

export default function NewsletterSignupForm(_props: NewsletterSignupFormProps) {
  const isSubmittingRef = useRef(false);
  const hasRedirectedRef = useRef(false);
  const redirectTimerRef = useRef<number | null>(null);

  const redirectToSpanishThankYou = () => {
    if (hasRedirectedRef.current || typeof window === 'undefined') return;
    hasRedirectedRef.current = true;

    if (redirectTimerRef.current !== null) {
      window.clearTimeout(redirectTimerRef.current);
      redirectTimerRef.current = null;
    }

    if (window.location.hostname.endsWith('davidraigoza.online')) {
      window.location.href = 'https://davidraigoza.online/gracias';
    } else {
      window.history.pushState(null, '', '/gracias');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    isSubmittingRef.current = false;
    hasRedirectedRef.current = false;

    window.runOnFormSubmit_sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3 =
      function (_th: unknown) {
        isSubmittingRef.current = true;
        if (redirectTimerRef.current !== null) {
          window.clearTimeout(redirectTimerRef.current);
        }
        redirectTimerRef.current = window.setTimeout(() => {
          redirectToSpanishThankYou();
        }, 1100);
      };

    const initZohoSetupSF = () => {
      if (typeof window.setupSF === 'function') {
        try {
          window.setupSF(ZOHO_ES_SF_ID, 'ZCFORMVIEW', false, 'light', false, 'undefined');
        } catch {
          // Ignore non-fatal Zoho setup warnings
        }
      }
    };

    const scriptId = 'zoho-ma-optin-embed-script';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'text/javascript';
      scriptEl.src = 'https://ma.zoho.com/js/optin.min.js';
      scriptEl.async = true;
      scriptEl.onload = () => {
        initZohoSetupSF();
      };
      document.head.appendChild(scriptEl);
    } else {
      initZohoSetupSF();
    }

    const formEl = document.getElementById('zcampaignOptinForm') as HTMLFormElement | null;
    const submitBtn = document.getElementById('zcWebOptin') as HTMLInputElement | null;
    const emailInput = document.getElementById('EMBED_FORM_EMAIL_LABEL') as HTMLInputElement | null;

    const triggerFormAction = () => {
      if (!emailInput || !formEl) return;
      const emailVal = emailInput.value.trim();
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        emailInput.focus();
        return;
      }

      isSubmittingRef.current = true;

      if (typeof window.setupSF !== 'function') {
        formEl.submit();
      }

      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
      }
      redirectTimerRef.current = window.setTimeout(() => {
        redirectToSpanishThankYou();
      }, 1100);
    };

    const handleFormSubmit = (e: Event) => {
      if (!emailInput) return;
      const emailVal = emailInput.value.trim();
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        e.preventDefault();
        emailInput.focus();
        return;
      }
      isSubmittingRef.current = true;
      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
      }
      redirectTimerRef.current = window.setTimeout(() => {
        redirectToSpanishThankYou();
      }, 1100);
    };

    submitBtn?.addEventListener('click', triggerFormAction);
    formEl?.addEventListener('submit', handleFormSubmit);

    return () => {
      submitBtn?.removeEventListener('click', triggerFormAction);
      formEl?.removeEventListener('submit', handleFormSubmit);
      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
      }
    };
  }, []);

  const handleTargetIframeLoad = () => {
    if (!isSubmittingRef.current) return;
    redirectToSpanishThankYou();
  };

  return (
    <div className="w-full mt-8 pt-6 border-t border-[#E2E2DE]">
      <style>{`
        /* Bauhaus responsive layout overrides for Zoho Campaigns embedded form (ES) */
        #${ZOHO_ES_SF_ID} .quick_form_8_css {
          width: 100% !important;
          max-width: 100% !important;
          background-color: #FFFFFF !important;
          border: none !important;
          padding: 0 !important;
        }
        #${ZOHO_ES_SF_ID} #SIGNUP_HEADING {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace !important;
          font-size: 0.74rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          color: #666660 !important;
          padding: 0 0 12px 0 !important;
          width: 100% !important;
          height: auto !important;
        }
        #${ZOHO_ES_SF_ID} #zcampaignOptinForm {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          width: 100% !important;
          margin: 0 !important;
        }
        @media (min-width: 640px) {
          #${ZOHO_ES_SF_ID} #zcampaignOptinForm {
            flex-direction: row !important;
            align-items: stretch !important;
            flex-wrap: wrap !important;
          }
        }
        #${ZOHO_ES_SF_ID} #errorMsgDiv {
          width: 100% !important;
          margin: 0 0 4px 0 !important;
          box-sizing: border-box !important;
        }
        #${ZOHO_ES_SF_ID} .SIGNUP_FLD {
          display: block !important;
          margin: 0 !important;
          width: 100% !important;
          height: auto !important;
        }
        @media (min-width: 640px) {
          #${ZOHO_ES_SF_ID} .SIGNUP_FLD:first-of-type {
            flex: 1 1 auto !important;
            width: auto !important;
          }
          #${ZOHO_ES_SF_ID} .SIGNUP_FLD:nth-of-type(2) {
            flex: 0 0 auto !important;
            width: auto !important;
          }
        }
        #${ZOHO_ES_SF_ID} #EMBED_FORM_EMAIL_LABEL {
          width: 100% !important;
          height: 48px !important;
          min-height: 48px !important;
          padding: 12px 16px !important;
          font-size: 0.96rem !important;
          color: #121210 !important;
          background-color: #FFFFFF !important;
          border: 1px solid #121210 !important;
          border-radius: 0 !important;
          outline: none !important;
          box-sizing: border-box !important;
        }
        #${ZOHO_ES_SF_ID} #EMBED_FORM_EMAIL_LABEL::placeholder {
          color: #888880 !important;
        }
        #${ZOHO_ES_SF_ID} #zcWebOptin {
          width: 100% !important;
          height: 48px !important;
          min-height: 48px !important;
          padding: 0 24px !important;
          margin: 0 !important;
          font-size: 0.92rem !important;
          font-weight: 600 !important;
          letter-spacing: -0.01em !important;
          color: #FFFFFF !important;
          background-color: #121210 !important;
          border: 1px solid #121210 !important;
          border-radius: 0 !important;
          cursor: pointer !important;
          transition: background-color 0.15s ease, border-color 0.15s ease !important;
        }
        #${ZOHO_ES_SF_ID} #zcWebOptin:hover {
          background-color: #262622 !important;
          border-color: #262622 !important;
        }
        @media (min-width: 640px) {
          #${ZOHO_ES_SF_ID} #zcWebOptin {
            width: auto !important;
            min-width: 160px !important;
          }
        }
      `}</style>

      {/* Hidden target iframe for target="_zcSignup" */}
      <iframe
        name="_zcSignup"
        id="_zcSignup"
        title="Zoho Campaigns Signup Target"
        onLoad={handleTargetIframeLoad}
        className="hidden w-0 h-0 border-0"
        aria-hidden="true"
        tabIndex={-1}
      />

      {/* Zoho Campaigns Web-Optin Form - Spanish Version (/newsletter -> /gracias) */}
      <div {...({ name: 'signupFormContainer' } as Record<string, string>)}>
        <input type="hidden" id="signupTmplName" value="quick_form_8" />
        <input type="hidden" value="0" id="recapThemeOptin" />
        <input type="hidden" id="orgNameFull" value="David Raigoza" />
        <div
          id="sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3"
          data-type="signupform"
        >
          <div id="customForm">
            <div
              className="quick_form_8_css"
              style={{
                backgroundColor: 'rgb(255, 255, 255)',
                width: '100%',
                maxWidth: '350px',
                zIndex: 2,
                fontFamily: 'Arial',
                border: 'none',
                overflow: 'hidden',
              }}
              {...({ name: 'SIGNUP_BODY' } as Record<string, string>)}
            >
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: 'rgb(136, 136, 136)',
                    textAlign: 'left',
                    padding: '0 0 10px 0',
                    display: 'block',
                  }}
                  id="SIGNUP_HEADING"
                >
                  Únete al boletín
                </div>
                <form
                  method="POST"
                  id="zcampaignOptinForm"
                  style={{ margin: '0px', width: '100%' }}
                  action="https://zgnp-zngp.maillist-manage.com/weboptin.zc"
                  target="_zcSignup"
                >
                  <div
                    style={{
                      display: 'inline-block',
                      width: 'calc(100% - 110px)',
                      marginRight: '10px',
                      verticalAlign: 'middle',
                    }}
                    className="SIGNUP_FLD"
                  >
                    <input
                      type="text"
                      style={{
                        fontSize: '14px',
                        border: '1px solid rgb(221, 221, 221)',
                        borderRadius: 0,
                        width: '100%',
                        height: '40px',
                        outline: 'none',
                        padding: '5px 10px',
                        color: 'rgb(136, 136, 136)',
                        backgroundColor: 'rgb(255, 255, 255)',
                        boxSizing: 'border-box',
                      }}
                      placeholder="Correo electrónico"
                      name="CONTACT_EMAIL"
                      id="EMBED_FORM_EMAIL_LABEL"
                    />
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      width: '100px',
                      verticalAlign: 'middle',
                    }}
                    className="SIGNUP_FLD"
                  >
                    <input
                      type="button"
                      style={{
                        textAlign: 'center',
                        borderRadius: '4px',
                        width: '100%',
                        height: '40px',
                        border: '0px',
                        color: 'rgb(255, 255, 255)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        backgroundColor: 'rgb(0, 0, 0)',
                      }}
                      name="SIGNUP_SUBMIT_BUTTON"
                      id="zcWebOptin"
                      defaultValue="Suscribirme"
                    />
                  </div>

                  {/* Campos ocultos requeridos */}
                  <input type="hidden" id="fieldBorder" value="" />
                  <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                  <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                  <input type="hidden" id="formType" name="formType" value="QuickForm" />
                  <input type="hidden" name="zx" id="cmpZuid" value="137f810df" />
                  <input type="hidden" name="zcvers" value="3.0" />
                  <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                  <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                  <input type="hidden" id="zcld" name="zcld" value="117db3e22581c805f" />
                  <input type="hidden" id="zctd" name="zctd" value="" />
                  <input type="hidden" id="document_domain" value="" />
                  <input type="hidden" id="zc_Url" value="zgnp-zngp.maillist-manage.com" />
                  <input type="hidden" id="new_optin_response_in" value="0" />
                  <input type="hidden" id="duplicate_optin_response_in" value="0" />
                  <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                  <input
                    type="hidden"
                    id="zc_formIx"
                    name="zc_formIx"
                    value="3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3"
                  />
                  <input type="hidden" id="viewFrom" value="URL_ACTION" />
                  <input type="hidden" name="redirectURL" value="https://davidraigoza.online/gracias" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 mb-0 text-[0.82rem] text-[#666660] leading-[1.5]">
        Puedes darte de baja cuando quieras.
      </p>
    </div>
  );
}
