# (better)labs website

The (better)labs company website is statically generated with Astro, TypeScript, and Tailwind CSS. A minimal Cloudflare Worker handles the contact API while Cloudflare Static Assets continues to serve the generated site.

## Requirements

- Node.js 22.12 or newer
- npm

## Architecture

- Astro generates the English and Chinese pages into `dist/`.
- Cloudflare serves matching files directly from `dist/` through the `ASSETS` binding.
- Only `/api/*` is configured to run Worker code first.
- `POST /api/contact` validates the form payload and sends the enquiry through Resend.
- Other Worker requests fall back to `env.ASSETS.fetch(request)`.

The site remains statically generated; the Worker does not convert it to Astro SSR.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start Astro for front-end-only development |
| `npm run dev:worker` | Build Astro and run the complete site with the local Worker |
| `npm run worker:types` | Regenerate Cloudflare runtime types |
| `npm run check` | Run Astro and TypeScript checks |
| `npm run build` | Generate the static production site in `dist/` |
| `npm run preview` | Preview only the static Astro build |
| `npm run deploy` | Build and deploy the Worker with its static assets |

## Local contact-form testing

Copy `.dev.vars.example` to `.dev.vars` and add a Resend API key:

```dotenv
RESEND_API_KEY=re_...
CONTACT_EMAIL_TO=hello@betterlabs.cc
CONTACT_EMAIL_FROM=(better)labs Website <website@mail.betterlabs.cc>
```

Then run:

```sh
npm run dev:worker
```

Use the Wrangler local URL for contact-form testing. `npm run dev` runs Astro alone and cannot provide the `/api/contact` Worker binding.

## Cloudflare configuration

`wrangler.jsonc` is the source of truth. It defines:

- `src/worker.ts` as the Worker entrypoint;
- `dist/` as the static asset directory;
- `ASSETS` as the static asset binding;
- `/api/*` as the only Worker-first route;
- the public recipient and verified sender as Worker variables.

Add the Resend key as a Cloudflare secret:

```sh
npx wrangler secret put RESEND_API_KEY
```

`CONTACT_EMAIL_TO` and `CONTACT_EMAIL_FROM` are non-secret variables declared in `wrangler.jsonc`. Their production values are:

```text
CONTACT_EMAIL_TO=hello@betterlabs.cc
CONTACT_EMAIL_FROM=(better)labs Website <website@mail.betterlabs.cc>
```

For a Git-connected Cloudflare Worker, configure:

```text
Build command: npm run build
Deploy command: npx wrangler deploy
```

Alternatively, a manual deployment runs both steps with:

```sh
npm run deploy
```

After deployment, verify `/`, `/cn/`, a static image, `/fonts/inter-variable.woff2`, and the expandable contact form. A `GET` request to `/api/contact` should return `405`; a valid form submission should return JSON with `{ "ok": true }`.
