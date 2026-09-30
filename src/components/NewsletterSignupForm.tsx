import { useEffect, useRef } from 'react';

export interface NewsletterSignupFormProps {
  locale: 'es' | 'en';
}

const ZOHO_ES_SF_ID = 'sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3';
const ZOHO_EN_SF_ID = 'sf3z7745abead796b0932a399faecbb22f0b5c703f467f9e582712c4f3b572614c67';

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
    runOnFormSubmit_sf3z7745abead796b0932a399faecbb22f0b5c703f467f9e582712c4f3b572614c67?: (
      th: unknown
    ) => void;
    runOnFormSubmit_sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3?: (
      th: unknown
    ) => void;
  }
}

export default function NewsletterSignupForm({ locale }: NewsletterSignupFormProps) {
  const isSubmittingRef = useRef(false);
  const hasRedirectedRef = useRef(false);
  const redirectTimerRef = useRef<number | null>(null);
  const activeSfId = locale === 'en' ? ZOHO_EN_SF_ID : ZOHO_ES_SF_ID;

  const redirectToSpanishThankYou = () => {
    if (locale !== 'es' || hasRedirectedRef.current || typeof window === 'undefined') return;
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

    // English callback (InlineMessage mode: native Zoho inline confirmation, no redirect)
    window.runOnFormSubmit_sf3z7745abead796b0932a399faecbb22f0b5c703f467f9e582712c4f3b572614c67 =
      function (_th: unknown) {
        isSubmittingRef.current = true;
      };

    // Spanish callback (URL_ACTION mode: redirects to /gracias)
    window.runOnFormSubmit_sf3z7745abead796b0932a399faecbb22f0bec271edcb24e53fe8d049c215d384dc3 =
      function (_th: unknown) {
        isSubmittingRef.current = true;
        if (locale === 'es') {
          if (redirectTimerRef.current !== null) {
            window.clearTimeout(redirectTimerRef.current);
          }
          redirectTimerRef.current = window.setTimeout(() => {
            redirectToSpanishThankYou();
          }, 1100);
        }
      };

    const initZohoSetupSF = () => {
      if (typeof window.setupSF === 'function') {
        try {
          window.setupSF(activeSfId, 'ZCFORMVIEW', false, 'light', false, 'undefined');
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

    // Spanish-only fallback listener for URL_ACTION redirect
    if (locale === 'es') {
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
    }

    return () => {
      if (redirectTimerRef.current !== null) {
        window.clearTimeout(redirectTimerRef.current);
      }
    };
  }, [locale, activeSfId]);

  const handleTargetIframeLoad = () => {
    if (!isSubmittingRef.current) return;
    if (locale === 'es') {
      redirectToSpanishThankYou();
    }
  };

  return (
    <div className="w-full mt-8 pt-6 border-t border-[#E2E2DE]">
      <style>{`
        /* Bauhaus responsive layout overrides for Zoho Campaigns embedded form */
        #${activeSfId} .quick_form_8_css {
          width: 100% !important;
          max-width: 100% !important;
          background-color: #FFFFFF !important;
          border: none !important;
          padding: 0 !important;
        }
        #${activeSfId} #SIGNUP_HEADING {
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
        #${activeSfId} #zcampaignOptinForm {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          width: 100% !important;
          margin: 0 !important;
        }
        @media (min-width: 640px) {
          #${activeSfId} #zcampaignOptinForm {
            flex-direction: row !important;
            align-items: stretch !important;
            flex-wrap: wrap !important;
          }
        }
        #${activeSfId} #errorMsgDiv {
          width: 100% !important;
          margin: 0 0 4px 0 !important;
          box-sizing: border-box !important;
        }
        #${activeSfId} .SIGNUP_FLD {
          display: block !important;
          margin: 0 !important;
          width: 100% !important;
          height: auto !important;
        }
        @media (min-width: 640px) {
          #${activeSfId} .SIGNUP_FLD:first-of-type {
            flex: 1 1 auto !important;
            width: auto !important;
          }
          #${activeSfId} .SIGNUP_FLD:nth-of-type(2) {
            flex: 0 0 auto !important;
            width: auto !important;
          }
        }
        #${activeSfId} #EMBED_FORM_EMAIL_LABEL {
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
        #${activeSfId} #EMBED_FORM_EMAIL_LABEL::placeholder {
          color: #888880 !important;
        }
        #${activeSfId} #zcWebOptin {
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
        #${activeSfId} #zcWebOptin:hover {
          background-color: #262622 !important;
          border-color: #262622 !important;
        }
        @media (min-width: 640px) {
          #${activeSfId} #zcWebOptin {
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

      {locale === 'en' ? (
        /* Zoho Campaigns Web-Optin Form Cleaned for Inline Message - English Only */
        <div key="en" {...({ name: 'signupFormContainer' } as Record<string, string>)}>
          <input type="hidden" id="signupTmplName" value="quick_form_8" />
          <input type="hidden" value="2" id="recapThemeOptin" />
          <input type="hidden" id="orgNameFull" value="David Raigoza" />
          <div
            id="sf3z7745abead796b0932a399faecbb22f0b5c703f467f9e582712c4f3b572614c67"
            data-type="signupform"
          >
            <div id="customForm">
              <div
                className="quick_form_8_css"
                style={{
                  backgroundColor: 'rgb(255, 255, 255)',
                  width: '350px',
                  zIndex: 2,
                  fontFamily: 'Arial',
                  border: '1px solid rgb(235, 235, 235)',
                  overflow: 'hidden',
                }}
                {...({ name: 'SIGNUP_BODY' } as Record<string, string>)}
              >
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontFamily: 'Arial',
                      fontWeight: 'bold',
                      color: 'rgb(136, 136, 136)',
                      textAlign: 'left',
                      padding: '10px 20px 5px',
                      width: '322px',
                      display: 'block',
                      height: '34px',
                    }}
                    id="SIGNUP_HEADING"
                  >
                    Join Our Newsletter
                  </div>

                  {/* Contenedor del Mensaje Inline Nativo */}
                  <div style={{ position: 'relative' }}>
                    <div
                      id="Zc_SignupSuccess"
                      style={{
                        display: 'none',
                        position: 'relative',
                        margin: '10px auto',
                        width: '90%',
                        backgroundColor: 'white',
                        padding: '10px',
                        border: '1px solid rgb(194, 225, 154)',
                        wordBreak: 'break-all',
                      }}
                    >
                      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        <tbody>
                          <tr>
                            <td width="10%">
                              <img
                                className="successicon"
                                src="https://ma.zoho.com/images/challangeiconenable.jpg"
                                alt=""
                                {...({ align: 'absmiddle' } as Record<string, string>)}
                              />
                            </td>
                            <td>
                              <span
                                id="signupSuccessMsg"
                                style={{
                                  color: 'rgb(73, 140, 132)',
                                  fontFamily: 'sans-serif',
                                  fontSize: '14px',
                                  wordBreak: 'break-word',
                                }}
                              >
                                &nbsp;&nbsp;Subscription registered. Please check your inbox.
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
                        backgroundColor: 'rgb(255, 235, 232)',
                        padding: '10px',
                        color: 'rgb(210, 0, 0)',
                        fontSize: '11px',
                        margin: '20px 10px 0px',
                        border: '1px solid rgb(255, 217, 211)',
                        opacity: 1,
                        display: 'none',
                      }}
                      id="errorMsgDiv"
                    >
                      Please correct the marked field(s) below.
                    </div>
                    <div
                      style={{
                        position: 'relative',
                        margin: '10px 10px 10px',
                        width: '200px',
                        height: '30px',
                        display: 'inline-block',
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
                          height: '100%',
                          zIndex: 4,
                          outline: 'none',
                          padding: '5px 10px',
                          color: 'rgb(136, 136, 136)',
                          textAlign: 'left',
                          fontFamily: 'Arial',
                          backgroundColor: 'rgb(255, 255, 255)',
                          boxSizing: 'border-box',
                        }}
                        placeholder="Email"
                        name="CONTACT_EMAIL"
                        id="EMBED_FORM_EMAIL_LABEL"
                      />
                    </div>
                    <div
                      style={{
                        position: 'relative',
                        margin: '10px',
                        width: '101px',
                        height: '33px',
                        textAlign: 'left',
                        display: 'inline-block',
                      }}
                      className="SIGNUP_FLD"
                    >
                      <input
                        type="button"
                        style={{
                          textAlign: 'center',
                          borderRadius: '5px',
                          width: '100%',
                          height: '100%',
                          zIndex: 5,
                          border: '0px',
                          color: 'rgb(255, 255, 255)',
                          cursor: 'pointer',
                          outline: 'none',
                          fontSize: '14px',
                          backgroundColor: 'rgb(0, 0, 0)',
                          margin: '0px 0px 0px -5px',
                        }}
                        name="SIGNUP_SUBMIT_BUTTON"
                        id="zcWebOptin"
                        defaultValue="Join Now"
                      />
                    </div>
                    <input type="hidden" id="fieldBorder" value="" />
                    <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                    <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                    <input type="hidden" id="formType" name="formType" value="QuickForm" />
                    <input type="hidden" name="zx" id="cmpZuid" value="137f810df" />
                    <input type="hidden" name="zcvers" value="3.0" />
                    <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                    <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                    <input type="hidden" id="zcld" name="zcld" value="117db3e22581c8057" />
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
                      value="3z7745abead796b0932a399faecbb22f0b5c703f467f9e582712c4f3b572614c67"
                    />
                    <input type="hidden" id="viewFrom" value="InlineMessage" />
                    <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">
                      1,true,6,Contact Email,2
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Zoho Campaigns Web-Optin Form - Spanish Version (/newsletter -> /gracias) */
        <div key="es" {...({ name: 'signupFormContainer' } as Record<string, string>)}>
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
      )}

      <p className="mt-4 mb-0 text-[0.82rem] text-[#666660] leading-[1.5]">
        {locale === 'es'
          ? 'Puedes darte de baja cuando quieras.'
          : 'You can unsubscribe at any time.'}
      </p>
    </div>
  );
}
