# Rankoya landing page

Marketing site for [Rankoya](https://rankoya.uk). Be the answer.

Standalone Next.js 16 app (App Router, Cache Components, Tailwind 4 via `@tailwindcss/turbopack`). Kept separate from the product app at `app.rankoya.uk`. The design tokens are copied from the app's `globals.css`.

## Scripts

| Command                | What it does                        |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Dev server on http://localhost:3000 |
| `npm run build`        | Production build (fully static)     |
| `npm run lint`         | ESLint                              |
| `npm run typecheck`    | TypeScript, no emit                 |
| `npm run format:check` | Prettier check                      |

## Environment

| Variable               | Default                  |
| ---------------------- | ------------------------ |
| `NEXT_PUBLIC_SITE_URL` | `https://rankoya.uk`     |
| `NEXT_PUBLIC_APP_URL`  | `https://app.rankoya.uk` |

Only production on Vercel (`VERCEL_ENV=production`) is indexable. Previews are served `noindex`.

## Where things live

- `content/`: all copy and mock data. Edit these files, not the components.
- `lib/site.ts`: URLs, nav links, legal links.
- `components/sections/`: one file per page section.
- `docs/IMPLEMENTATION_PLAN.md`: the phased plan, with the gaps it fixes in v1.
