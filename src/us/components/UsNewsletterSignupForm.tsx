export default function UsNewsletterSignupForm() {
  return (
    <div className="w-full mt-8 pt-6 border-t border-[#E2E2DE]">
      <style>{`
        /* Bauhaus responsive layout for English Direct Native Zoho Form (/us/newsletter) */
        #us-zoho-native-container [name="SIGNUP_BODY"] {
          width: 100% !important;
          max-width: 100% !important;
          background-color: #FFFFFF !important;
          border: none !important;
          padding: 0 !important;
          overflow: visible !important;
        }
        #us-zoho-native-container #SIGNUP_HEADING {
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
        #us-zoho-native-container #zcampaignOptinForm {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          width: 100% !important;
          margin: 0 !important;
        }
        @media (min-width: 640px) {
          #us-zoho-native-container #zcampaignOptinForm {
            flex-direction: row !important;
            align-items: stretch !important;
          }
        }
        #us-zoho-native-container .us-signup-field {
          display: block !important;
          margin: 0 !important;
          width: 100% !important;
          height: auto !important;
        }
        @media (min-width: 640px) {
          #us-zoho-native-container .us-signup-field-email {
            flex: 1 1 auto !important;
            width: auto !important;
          }
          #us-zoho-native-container .us-signup-field-submit {
            flex: 0 0 auto !important;
            width: auto !important;
          }
        }
        #us-zoho-native-container input[name="CONTACT_EMAIL"] {
          width: 100% !important;
          height: 48px !important;
          min-height: 48px !important;
          padding: 12px 16px !important;
          font-family: inherit !important;
          font-size: 0.96rem !important;
          color: #121210 !important;
          background-color: #FFFFFF !important;
          border: 1px solid #121210 !important;
          border-radius: 0 !important;
          outline: none !important;
          box-sizing: border-box !important;
        }
        #us-zoho-native-container input[name="CONTACT_EMAIL"]::placeholder {
          color: #888880 !important;
        }
        #us-zoho-native-container input[type="submit"] {
          width: 100% !important;
          height: 48px !important;
          min-height: 48px !important;
          padding: 0 24px !important;
          margin: 0 !important;
          font-family: inherit !important;
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
        #us-zoho-native-container input[type="submit"]:hover {
          background-color: #262622 !important;
          border-color: #262622 !important;
        }
        @media (min-width: 640px) {
          #us-zoho-native-container input[type="submit"] {
            width: auto !important;
            min-width: 160px !important;
          }
        }
      `}</style>

      {/* Zoho Campaigns Direct Native Form - English (Independent from ES) */}
      <div
        id="us-zoho-native-container"
        {...({ name: 'signupFormContainer' } as Record<string, string>)}
      >
        <div
          style={{
            backgroundColor: 'rgb(255, 255, 255)',
            width: '350px',
            zIndex: 2,
            fontFamily: 'Arial',
            border: '1px solid rgb(235, 235, 235)',
            overflow: 'hidden',
            padding: '10px',
          }}
          {...({ name: 'SIGNUP_BODY' } as Record<string, string>)}
        >
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'Arial',
              fontWeight: 'bold',
              color: 'rgb(136, 136, 136)',
              textAlign: 'left',
              padding: '10px 10px 5px',
              display: 'block',
            }}
            id="SIGNUP_HEADING"
          >
            Join Our Newsletter
          </div>

          <form
            method="POST"
            id="zcampaignOptinForm"
            action="https://zgnp-zngp.maillist-manage.com/weboptin.zc"
            target="_blank"
            style={{ margin: '0px', width: '100%' }}
          >
            <div
              className="us-signup-field us-signup-field-email"
              style={{
                position: 'relative',
                margin: '10px 5px',
                width: '190px',
                height: '35px',
                display: 'inline-block',
              }}
            >
              <input
                type="text"
                style={{
                  fontSize: '14px',
                  border: '1px solid rgb(221, 221, 221)',
                  borderRadius: 0,
                  width: '100%',
                  height: '100%',
                  outline: 'none',
                  padding: '5px 10px',
                  color: 'rgb(136, 136, 136)',
                  backgroundColor: 'rgb(255, 255, 255)',
                  boxSizing: 'border-box',
                }}
                placeholder="Email"
                name="CONTACT_EMAIL"
                required
              />
            </div>
            <div
              className="us-signup-field us-signup-field-submit"
              style={{
                position: 'relative',
                margin: '10px 0',
                width: '110px',
                height: '35px',
                textAlign: 'left',
                display: 'inline-block',
              }}
            >
              <input
                type="submit"
                style={{
                  textAlign: 'center',
                  borderRadius: '4px',
                  width: '100%',
                  height: '100%',
                  border: '0px',
                  color: 'rgb(255, 255, 255)',
                  cursor: 'pointer',
                  outline: 'none',
                  fontSize: '14px',
                  backgroundColor: 'rgb(0, 0, 0)',
                }}
                value="Join Now"
              />
            </div>

            {/* Hidden parameters required by Zoho */}
            <input type="hidden" name="submitType" value="optinCustomView" />
            <input type="hidden" name="formType" value="QuickForm" />
            <input type="hidden" name="zx" value="137f810df" />
            <input type="hidden" name="zcvers" value="3.0" />
            <input type="hidden" name="mode" value="OptinCreateView" />
            <input type="hidden" name="zcld" value="117db3e22581c8057" />
            <input type="hidden" name="zc_Url" value="zgnp-zngp.maillist-manage.com" />
            <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
            <input
              type="hidden"
              name="zc_formIx"
              value="3z7745abead796b0932a399faecbb22f0b5c703f467f9e582712c4f3b572614c67"
            />
          </form>
        </div>
      </div>

      <p className="mt-4 mb-0 text-[0.82rem] text-[#666660] leading-[1.5]">
        You can unsubscribe at any time.
      </p>
    </div>
  );
}
