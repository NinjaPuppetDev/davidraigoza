export interface NewsletterRequestBody {
  email?: string;
  firstName?: string;
  locale?: string;
}

export interface NewsletterApiResponse {
  ok: boolean;
  message: string;
  redirectTo?: string;
  zohoDebug?: string;
}

const ZOHO_ACTION_URL = 'https://zcvf-zcmp.maillist-manage.com/weboptin.zc';

const ZOHO_FORM_IX_BY_LOCALE: Record<'es' | 'en', string> = {
  es: '3z7745abead796b0932a399faecbb22f0b9c82980ac70367f5a38e3021a062d034',
  en: '3z7745abead796b0932a399faecbb22f0befa5b72b47f0dfec53baa06a47e8f4a9',
};

const ZOHO_REDIRECT_URL_BY_LOCALE: Record<'es' | 'en', string> = {
  es: 'https://davidraigoza.online/newsletter/gracias',
  en: 'https://davidraigoza.online/us/newsletter/thank-you',
};

const LOCAL_THANK_YOU_PATH_BY_LOCALE: Record<'es' | 'en', string> = {
  es: '/newsletter/gracias',
  en: '/us/newsletter/thank-you',
};

export async function submitNewsletterToZoho(
  body: NewsletterRequestBody
): Promise<{ status: number; data: NewsletterApiResponse }> {
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const firstName = typeof body?.firstName === 'string' ? body.firstName.trim() : '';
  const rawLocale = typeof body?.locale === 'string' ? body.locale.trim().toLowerCase() : '';

  if (rawLocale !== 'es' && rawLocale !== 'en') {
    return {
      status: 400,
      data: {
        ok: false,
        message: 'Invalid locale. Must be "es" or "en".',
      },
    };
  }

  const locale: 'es' | 'en' = rawLocale;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: 400,
      data: {
        ok: false,
        message:
          locale === 'es'
            ? 'Por favor ingresa un correo electrónico válido.'
            : 'Please enter a valid email address.',
      },
    };
  }

  const formIx = ZOHO_FORM_IX_BY_LOCALE[locale];
  const redirectURL = ZOHO_REDIRECT_URL_BY_LOCALE[locale];

  const params = new URLSearchParams({
    CONTACT_EMAIL: email,
    FIRSTNAME: firstName,
    formIx,
    zx: '137f810df',
    zcvers: '3.0',
    tc_code: 'ZCFORMVIEW',
    zc_trackCode: 'ZCFORMVIEW',
    submitType: 'optinCustomView',
    mode: 'OptinCreateView',
    formType: 'QuickForm',
    redirectURL,
  });

  try {
    const zohoResponse = await fetch(ZOHO_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        Origin: 'https://davidraigoza.online',
        Referer:
          locale === 'en'
            ? 'https://davidraigoza.online/us/newsletter'
            : 'https://davidraigoza.online/newsletter',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
      },
      body: params.toString(),
      redirect: 'manual',
    });

    const responseText = await zohoResponse.text();
    console.log('[API /api/newsletter] Zoho response status:', zohoResponse.status);
    console.log('[API /api/newsletter] Zoho response body:', responseText);

    const isSuccess =
      (zohoResponse.status >= 200 && zohoResponse.status < 400) ||
      zohoResponse.type === 'opaqueredirect';

    if (!isSuccess) {
      return {
        status: 502,
        data: {
          ok: false,
          message:
            locale === 'es'
              ? 'No se pudo completar el registro en Zoho Campaigns.'
              : 'Could not complete registration with Zoho Campaigns.',
          zohoDebug: responseText.slice(0, 200),
        },
      };
    }

    return {
      status: 200,
      data: {
        ok: true,
        message:
          locale === 'es'
            ? 'Suscripción registrada correctamente.'
            : 'Subscription registered successfully.',
        redirectTo: LOCAL_THANK_YOU_PATH_BY_LOCALE[locale],
      },
    };
  } catch (error) {
    console.error('[API /api/newsletter] Zoho request failed:', error);
    return {
      status: 500,
      data: {
        ok: false,
        message:
          locale === 'es'
            ? 'Error interno al procesar la suscripción.'
            : 'Internal error while processing subscription.',
      },
    };
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const body = (await request.json()) as NewsletterRequestBody;
    const result = await submitNewsletterToZoho(body);
    return new Response(JSON.stringify(result.data), {
      status: result.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(
      JSON.stringify({ ok: false, message: 'Invalid JSON request body.' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method Not Allowed' });
    return;
  }

  try {
    const body: NewsletterRequestBody =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const result = await submitNewsletterToZoho(body);
    res.status(result.status).json(result.data);
  } catch {
    res.status(400).json({ ok: false, message: 'Invalid request body.' });
  }
}
