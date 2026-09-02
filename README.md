# CreatorClick

Landing page for CreatorClick — a revenue-share product partner for fitness
creators. Built as a Next.js static export and deployed to GitHub Pages.

> **You built the audience. We help you build the business.**

---

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, `output: "export"`) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Motion | Framer Motion 12 |
| Fonts | Archivo (variable, incl. width axis), Instrument Serif, JetBrains Mono — self-hosted via `next/font` |
| Hosting | GitHub Pages via GitHub Actions |

No images are loaded at runtime. Every device mockup, app screen and website
specimen is real DOM/CSS, so the page stays sharp at any resolution and ships
with nothing to download.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export into ./out
npm run typecheck
```

## Deployment

`.github/workflows/static.yml` builds on every push to `main` and publishes
`./out`. The base path comes from `actions/configure-pages`, so the same build
works on the project page (`/creatorclick`) and on a custom domain (no prefix)
without any code change.

---

## Things to change before this goes live

Everything below is a deliberate placeholder. None of it invents client
results, testimonials or revenue figures.

### 1. Contact address — `src/lib/site.ts`

```ts
email: "partners@creatorclick.co",
```

The application form composes a `mailto:` to this address. **Point it at a
mailbox you actually read**, or wire up a form service (see below).

### 2. Social links — `src/components/sections/Footer.tsx`

`SOCIAL` currently points at platform home pages. Replace with real profiles.

### 3. Case studies — `src/lib/cases.ts`

Two placeholder cases, each labelled `PLACEHOLDER` on the page, with metric
values left as `—`. To publish a real one:

```ts
{
  id: "01",
  status: "live",            // drops the placeholder chip
  image: "/creators/name.jpg", // file goes in /public
  metrics: [{ label: "Members", value: "1,240" }, …],
}
```

A real reference already exists from the previous site —
`sculpte.fitness` (@onka_kegakilwe). Fill in the details and flip `status`
once the figures are confirmed with the creator.

### 4. Photography

`<Plate />` renders a designed, labelled placeholder when it has no `src`.
Swap in a real asset with one prop:

```tsx
<Plate src="/creators/mara.jpg" alt="Mara K." ratio="4/5" />
```

Used in: Selectivity, Case studies, Philosophy (full-bleed backdrop), and the
product cards in "What we build".

### 5. Partnership terms — `src/components/sections/FAQ.tsx`

The answers state sensible defaults (revenue share over a defined period,
8–14 weeks to launch, creator keeps ownership). Adjust the wording to match
the terms you actually offer before publishing.

### 6. Optional: a real form endpoint

`src/components/sections/ApplyForm.tsx` builds a `mailto:` because static
hosting has no server. To capture applications properly, POST the same
`FormData` to a form service (Formspree, Tally, Basin) in `handleSubmit`.

---

## Structure

```
src/
  app/
    layout.tsx        fonts, metadata, skip link
    page.tsx          section composition + JSON-LD
    globals.css       the whole design system
    not-found.tsx     styled 404 (exported as /404.html)
  components/
    ui/               Reveal, Parallax, Magnetic, Marquee, Cursor, Plate, Cta
    mockups/          phone shell + app screens, website specimen, floating cards
    sections/         the 13 page sections
  lib/
    site.ts           nav, contact, brand strings
    cases.ts          case-study data
```

### Design system

Tokens live in the `@theme` block at the top of `globals.css`:

- **Surfaces** `--color-ink` `#0B0B0C` → `--color-ink-4`
- **Type** `--color-bone` `#F2F0EA`, plus alpha steps tuned to clear WCAG AA
  (4.5:1) on the base surface. `--color-bone-18` is ornament only — hairlines
  and outline strokes, never text.
- **Accent** `--color-volt` `#D9FF43`, one accent used sparingly. 17:1 against
  the base surface in both directions.

Typographic roles: `.t-display` (heavy grotesque, tight tracking),
`.t-serif` (italic counterpoint — one or two words per headline, never more),
`.t-eyebrow` / `.t-index` (mono labels), `.t-outline` (stroke-only display).

### Accessibility

Skip link, semantic landmarks and heading order, real `<button>`/`<fieldset>`
controls with `aria-expanded`/`aria-controls` on the accordion and menu,
visible `:focus-visible` rings, and a full `prefers-reduced-motion` path that
disables parallax, floats, marquees and the custom cursor.
