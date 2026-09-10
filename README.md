# Troott Website

### Marketing site for troott.com

> **Troott** — discipleship infrastructure for ministers and teachers. Stay rooted; find, listen, and share sermons with fewer distractions. **Troott Website** is the public Next.js marketing surface (listener and minister stories, legal pages, download / demo CTAs). It is **not** the studio or admin product UI.

Package: **`@troott/website`**.

## Introduction

Visitors need:

- Clear stories for **listeners** and **ministers**.
- Paths to download the app or request a demo.
- Legal / trust pages and newsletter subscribe.
- Dark-first brand presentation aligned with product UI (`@troott/ui`).

Product apps live elsewhere: portal on **5053**, API on **5025/8080**, mobile Metro on **8177**.

## Technologies

- **Next.js 15** (App Router, Turbopack in dev)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **MDX**
- **Framer Motion / Motion**
- **Radix UI** primitives (as used in components)
- **`@troott/ui`** (theme + styles; CSS copied for static serving per `next.config`)
- **Axios**
- **Vercel Analytics**
- **MailerLite** (server subscribe route)
- **Sonner** toasts

## Getting Started

### Prerequisites

- **Node.js** 20+
- **npm**
- Optional: Troott API for any client calls; MailerLite keys for newsletter

### 1. Enter the app

```bash
cd troott-website
```

### 2. Install

```bash
npm install
```

### 3. Environment

```bash
cp .env.sample .env
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | This site origin. Sample: `http://localhost:3051` |
| `NEXT_PUBLIC_APP_API_URL` | Troott API origin. Sample: `http://localhost:5025` |
| `NEXT_PUBLIC_APP_ENVIRONMENT` | `development` locally |
| `NEXT_PUBLIC_WEB_APP_URL` | Studio / web portal. Sample: `http://localhost:5053` |
| `NEXT_PUBLIC_GET_TROOTT_PATH` | Path for get-troott (default `/get-troott`) |
| `NEXT_PUBLIC_GET_TROOTT_ENABLED` | Toggle download CTAs |
| `NEXT_PUBLIC_REQUEST_DEMO_URL` | Optional external demo (e.g. Calendly) |
| `MAILERLITE_API_KEY` | Server-only newsletter |
| `MAILERLITE_GROUP_ID` | Server-only group id |

Never commit real MailerLite secrets.

### 4. Develop

```bash
npm run dev
```

**http://localhost:3051** (`next dev --turbopack -p 3051`)

### 5. Production

```bash
npm run build
npm start
```

`next start` defaults to **port 3000** unless `PORT` is set. Docker images typically expose **3000** with `output: 'standalone'`.

### 6. Lint

```bash
npm run lint
```

## Project structure

```text
troott-website/
├── app/
│   ├── page.tsx              # Marketing home
│   ├── listener/             # Listener story
│   ├── minister/             # Minister story
│   ├── legal/                # Legal pages
│   ├── preview/
│   ├── api/subscribe/        # MailerLite route
│   ├── siteConfig.tsx        # Site name, description, links
│   ├── layout.tsx
│   └── globals.css
├── components/
├── lib/
├── styles/
├── public/                   # includes troott-ui.css when copied
├── hooks/
├── utils/
├── _data/
├── next.config.ts
└── .env.sample
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Next dev on **3051** (Turbopack) |
| `npm run build` | Production build |
| `npm start` | `next start` (default **3000**) |
| `npm run lint` | Next lint |
| `npm run clean:vite` | Cleanup helper (see package scripts) |

## Brand / theming

- Dark-first marketing shell (`#0d0d0d` / `#131312`).
- Product teal (`#08FFDB`) is an accent on marketing; hero CTAs often use **white chrome** (`button-marketing` in `@troott/ui` / `DESIGN.md`).
- Matter font loaded in layout; Troott theme forced dark via theme helpers where applicable.

## Integrations

| Integration | Notes |
| --- | --- |
| `@troott/ui` | Tokens / components; styles may be copied to `public/troott-ui.css` |
| Troott API | `NEXT_PUBLIC_APP_API_URL` |
| Web portal | `NEXT_PUBLIC_WEB_APP_URL` for login / studio links |
| MailerLite | `app/api/subscribe` |
| Vercel Analytics | Production analytics |
| Unsplash (etc.) | Remote image hosts as configured in Next |

## Contributing

Branching, PR targets, release flow, and contribution guidelines live in **[CONTRIBUTING.md](./CONTRIBUTING.md)**. PRs should target `staging`.

## Related apps

| App | Role |
| --- | --- |
| `troott-web` / `troott-studio` | Product portal |
| `troott-mobile` | Listener app |
| `troott-api` | Backend |
| `troott-ui` | Design system |

## License

MIT (see repository `LICENSE` if present).
