interface Env {
  ASSETS: Fetcher;
  RESEND_API_KEY: string;
  CONTACT_EMAIL_TO: string;
  CONTACT_EMAIL_FROM: string;
}

interface ContactPayload {
  name: string;
  organisation: string;
  email: string;
  projectType: string;
  message: string;
  locale: 'en' | 'zh';
  _gotcha: string;
}

const MAX_REQUEST_BYTES = 16_384;
const PROJECT_TYPES = new Set([
  'circular-product-redesign',
  'sustainable-strategy',
  'workshops-and-training',
  'other',
]);

const PROJECT_LABELS: Record<string, string> = {
  'circular-product-redesign': 'Circular product redesign',
  'sustainable-strategy': 'Sustainable strategy',
  'workshops-and-training': 'Workshops and training',
  other: 'Other',
};

function json(body: unknown, status = 200, headers: HeadersInit = {}): Response {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      ...headers,
    },
  });
}

function errorResponse(status: number, code: string, message: string): Response {
  return json({ ok: false, error: { code, message } }, status);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function cleanString(
  value: unknown,
  minimum: number,
  maximum: number,
): string | undefined {
  if (typeof value !== 'string') return undefined;
  const cleaned = value.trim();
  if (cleaned.length < minimum || cleaned.length > maximum) return undefined;
  return cleaned;
}

function parseContactPayload(value: unknown): ContactPayload | undefined {
  if (!isRecord(value)) return undefined;

  const name = cleanString(value.name, 1, 120);
  const organisation = cleanString(value.organisation, 1, 160);
  const email = cleanString(value.email, 3, 254);
  const projectType = cleanString(value.projectType, 1, 80);
  const message = cleanString(value.message, 10, 5_000);
  const locale = value.locale;
  const honeypot = typeof value._gotcha === 'string' ? value._gotcha.trim() : '';

  if (
    !name ||
    !organisation ||
    !email ||
    !projectType ||
    !message ||
    (locale !== 'en' && locale !== 'zh') ||
    !PROJECT_TYPES.has(projectType) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return undefined;
  }

  return {
    name,
    organisation,
    email,
    projectType,
    message,
    locale,
    _gotcha: honeypot,
  };
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  );
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return errorResponse(405, 'method_not_allowed', 'Only POST requests are accepted.');
  }

  const contentType = request.headers.get('Content-Type')?.split(';', 1)[0].trim();
  if (contentType !== 'application/json') {
    return errorResponse(415, 'unsupported_media_type', 'Content-Type must be application/json.');
  }

  const declaredLength = Number(request.headers.get('Content-Length') ?? 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) {
    return errorResponse(413, 'payload_too_large', 'The request payload is too large.');
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return errorResponse(400, 'invalid_request', 'The request body could not be read.');
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
    return errorResponse(413, 'payload_too_large', 'The request payload is too large.');
  }

  let decoded: unknown;
  try {
    decoded = JSON.parse(rawBody);
  } catch {
    return errorResponse(400, 'invalid_json', 'The request body must contain valid JSON.');
  }

  if (isRecord(decoded) && typeof decoded._gotcha === 'string' && decoded._gotcha.trim()) {
    return json({ ok: true });
  }

  const payload = parseContactPayload(decoded);
  if (!payload) {
    return errorResponse(400, 'validation_error', 'The submitted contact details are invalid.');
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_TO || !env.CONTACT_EMAIL_FROM) {
    return errorResponse(503, 'service_unavailable', 'The contact service is not configured.');
  }

  const projectLabel = PROJECT_LABELS[payload.projectType] ?? payload.projectType;
  const escaped = {
    name: escapeHtml(payload.name),
    organisation: escapeHtml(payload.organisation),
    email: escapeHtml(payload.email),
    projectType: escapeHtml(projectLabel),
    message: escapeHtml(payload.message).replace(/\n/g, '<br>'),
    locale: escapeHtml(payload.locale),
  };

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_EMAIL_FROM,
      to: [env.CONTACT_EMAIL_TO],
      reply_to: payload.email,
      subject: `New (better)labs enquiry — ${projectLabel}`,
      html: `
        <h1>New website enquiry</h1>
        <p><strong>Name:</strong> ${escaped.name}</p>
        <p><strong>Organisation:</strong> ${escaped.organisation}</p>
        <p><strong>Email:</strong> ${escaped.email}</p>
        <p><strong>Project type:</strong> ${escaped.projectType}</p>
        <p><strong>Locale:</strong> ${escaped.locale}</p>
        <p><strong>Message:</strong><br>${escaped.message}</p>
      `,
      text: [
        'New website enquiry',
        `Name: ${payload.name}`,
        `Organisation: ${payload.organisation}`,
        `Email: ${payload.email}`,
        `Project type: ${projectLabel}`,
        `Locale: ${payload.locale}`,
        '',
        payload.message,
      ].join('\n'),
    }),
  });

  if (!resendResponse.ok) {
    console.error('Resend rejected a contact request.', resendResponse.status);
    return errorResponse(502, 'delivery_failed', 'The enquiry could not be delivered.');
  }

  return json({ ok: true });
}

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/contact') {
      return handleContact(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
