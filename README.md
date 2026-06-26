# Trans Express — Company Profile Website

Static marketing site for **Trans Express** ("Speed You Can Trust"), built with
**Astro** (static output / SSG) and **Tailwind CSS v4**.

- Mobile-first, performance-focused (target Lighthouse 100).
- No analytics, no server runtime — fully static.
- Lead capture & contact happen via WhatsApp deep links.
- Deployable to Cloudflare Pages (or any static host).

## 🧞 Commands

| Command                 | Action                                       |
| :---------------------- | :------------------------------------------- |
| `npm install`           | Install dependencies                         |
| `npm run dev`           | Start local dev server at `localhost:4321`   |
| `npm run build`         | Build the production site to `./dist/`       |
| `npm run preview`       | Preview the build locally                    |
| `npm run optimize:images` | Regenerate `.avif`/`.webp` image siblings  |

## Project layout

- `src/config/site.ts` — brand + contact details (single source of truth). **Contains TODO placeholders to fill in.**
- `src/data/services.ts` — all service content (drives service pages + JSON-LD).
- `src/styles/global.css` — design tokens (`@theme`) + shared component styles.
- `src/layouts/` — `Layout.astro` (head/SEO/JSON-LD) → `PageLayout.astro` (nav + main + footer).
- `src/components/`, `src/pages/` — UI components and routes.
- `public/` — static assets, `robots.txt`, `llms.txt`, `_headers`, manifest.

## TODO before launch

- Fill real contact details in `src/config/site.ts`.
- Confirm the production domain in `astro.config.mjs` (`site`).
- Replace placeholder stock photos with real Trans Express imagery.
- Provide a square/monogram logo if the generated favicons need refining.
