# CreatorClick

Website for CreatorClick — a revenue-share product partner for fitness
creators. Next.js static export, deployed to GitHub Pages.

> **You built the audience. We help you build the business.**

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, `output: "export"`) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Motion | Framer Motion 12 |
| Fonts | Archivo (variable, incl. width axis), Instrument Serif, JetBrains Mono — self-hosted via `next/font`, no runtime request to Google |
| Hosting | GitHub Pages via GitHub Actions |

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run typecheck
```

## Pages

| Route | Contents |
|---|---|
| `/` | Hero, statement marquee, the problem, chapter index, philosophy, application |
| `/how-it-works` | The opportunity chain, the five-stage process |
| `/what-we-build` | Websites, training apps, digital products |
| `/partnership` | Revenue share, selectivity, FAQ |
| `/work` | SCULPTÉ case study |
| `/legal/imprint` | Impressum / legal notice (EN + DE) |
| `/legal/privacy` | Datenschutzerklärung / privacy policy (EN + DE) |

Every content page ends with the application form (`#apply`), so the header
CTA always has a target on the current page.

## Deployment

`.github/workflows/static.yml` builds on every push to `main` and publishes
`./out`. The base path comes from `actions/configure-pages`, so the same build
works on the project page (`/creatorclick`) and on a custom domain without any
code change. Plain `<img>` sources go through `asset()` in `src/lib/asset.ts`
so they pick up that prefix too.

---

## The application form

The form posts `application/x-www-form-urlencoded` (a "simple" request, so no
CORS preflight) to the Make webhook in `SITE.formWebhook`:

```
https://hook.eu2.make.com/bedd5qsx8mojpp449sn2nn9llmx09dxt
```

Team **My Team** → webhook **CreatorClick — Partnership Applications**.

**One manual step is still needed.** A Make webhook only accepts data while a
scenario is listening on it. In Make:

1. New scenario → add **Webhook → Custom webhook** as the trigger.
2. Pick the existing hook *CreatorClick — Partnership Applications*.
3. Add the delivery step you want — Email to `info@creator-click.com`, Google
   Sheets, Airtable, whatever you prefer.
4. Run once, submit the form on the site so Make learns the payload shape,
   then map the fields and **activate** the scenario.

Payload fields: `name`, `email`, `platform`, `handle`, `audience`, `vision`,
`source`, `submittedAt`.

If the POST fails for any reason the form does not pretend it worked — it
shows an error and offers a `mailto:` link with the same details pre-filled.

---

## Assets

Real SCULPTÉ material lives in `public/sculpte/`, resized and re-encoded to
WebP (≈550 KB for all eleven files):

- `iphone-frame.webp` — device frame with a transparent screen cutout
- `app-home / app-programs / app-workout.webp` — app screenshots
- `onka.webp` — creator portrait
- `cover-*.webp` — programme and section photography

`Device` (`src/components/mockups/Device.tsx`) composites a screenshot behind
the frame at the exact cutout rect measured off the frame's alpha channel
(870×1886 at 81,81 in a 1032×2048 image). The cutout's aspect is 0.46129
against the screenshots' 0.46127, so nothing is stretched and the frame's own
rounded opening masks the corners.

## Logo

`src/app/icon.svg` (favicon), `src/app/apple-icon.png` and the `Mark`
component in `src/components/ui/Logo.tsx` are **a vector reconstruction** of
the CreatorClick mark — the PNG did not arrive as a file, only the asset zip
did. To swap in the original, replace `icon.svg` / `apple-icon.png` and point
`Mark` at the file.

---

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, grain, cursor, header, footer
    page.tsx          home
    how-it-works|what-we-build|partnership|work/page.tsx
    legal/imprint|privacy/page.tsx
    icon.svg          favicon (file convention → basePath-safe)
    globals.css       the whole design system
    not-found.tsx     styled 404 (exported as /404.html)
  components/
    ui/               Reveal, Parallax, Marquee, Cursor, Plate, Cta, Logo
    mockups/          Device, SiteMockup, CreatorCard, floating cards
    sections/         page sections
  lib/
    site.ts           nav, contact, webhook
    cases.ts          case-study data
    legal.ts          imprint + privacy, EN and DE
    asset.ts          basePath-aware asset URLs
```

### Design system

Tokens sit in the `@theme` block at the top of `globals.css`.

- **Surfaces** `--color-ink` `#0B0B0C` → `--color-ink-4`
- **Type** `--color-bone` `#F2F0EA` plus alpha steps tuned to clear WCAG AA
  (4.5:1). `--color-bone-18` is ornament only — hairlines and outline strokes,
  never text.
- **Accents**, one job each:
  - `--color-volt` `#D9FF43` — the argument *and* structure: CTAs, active
    states, the frame around the philosophy plate, the held-open case slot.
    17:1 against the base surface both ways.
  - `--color-cream` `#ECEDB2` / `--color-paper` `#FBFAF6` — creator artifacts:
    programme cards and product tiles, ink text on light.

Typographic roles: `.t-display` (heavy grotesque, tight tracking), `.t-serif`
(italic counterpoint — one or two words per headline, never more),
`.t-eyebrow` / `.t-index` (mono labels), `.t-outline` (stroke-only display).

### Accessibility

Skip link, semantic landmarks, exactly one `h1` per page, real
`<button>`/`<fieldset>` controls with `aria-expanded`/`aria-controls`, visible
`:focus-visible` rings, and a full `prefers-reduced-motion` path that disables
parallax, floats, marquees and the custom cursor.

---

## Still to do

- **Attach a Make scenario to the webhook** (see above) — until then the form
  falls back to email.
- **Case study figures** — `src/lib/cases.ts` keeps `audience`, `members` and
  `recurring revenue` as `—` until Onka signs off on real numbers.
- **Have the legal texts reviewed.** They are written to describe what this
  site actually does (GitHub Pages logs, self-hosted fonts, the Make webhook,
  one localStorage key, no cookies or analytics), but they are not legal
  advice.
