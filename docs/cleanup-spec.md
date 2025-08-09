## Portfolio Cleanup Specification

- Owner: You
- Status: Draft
- Target branch: `main`
- Hosting: Decide (Vercel vs GitHub Pages) before config edits

### Context

The project is an MVP built on Next.js 14 App Router with Tailwind and next-themes. It contains placeholder content, redundant config, and minor correctness issues.

### Goals

- Improve correctness, consistency, and DX without changing visual design dramatically.
- Prepare for content-driven blog and better SEO.
- Keep footprint lean by removing unused code/deps.

### Non-goals

- Full redesign
- Introducing a CMS
- Feature work beyond listed requirements

### Decisions required

- Hosting: Vercel or GitHub Pages (affects `next.config.js`, `basePath`, static export).
- Blog source: MDX now or later.
- Keep or remove placeholder routes/content.

---

## Requirements

### 1) Correctness fixes

- Fix CSS keyframes block in `src/app/globals.css` (mis-nested braces around `@keyframes fadeIn`).
- Replace custom classes with Tailwind theme tokens you already defined:
  - `text-primary-color` → `text-primary`
  - `text-secondary-color` → `text-secondary`
  - `text-muted-color` → `text-muted`
  - `border-border-color` → `border-border`
  - `bg-[rgb(var(--background-rgb))]` → `bg-background`
  - `text-[rgb(var(--foreground-rgb))]` → `text-foreground` (where applicable)
- Metadata assets:
  - Either add `public/favicon.ico` and `public/manifest.json`, or remove references from `src/app/layout.tsx`.

Acceptance criteria

- No CSS parse errors; `@keyframes fadeIn` applies as expected.
- No usage of `*-color` utility classes remains.
- Build passes and pages render without console errors.

### 2) Config and dependencies

- `next.config.js`
  - If Vercel: remove `output: 'export'`, `basePath`, custom webpack/terser, and `experimental.optimizeCss`.
  - If GitHub Pages: keep `output: 'export'` and `basePath: '/bharad-portfolio'`; ensure all internal links respect `basePath`; remove custom webpack/terser; remove `experimental.optimizeCss`.
- Tailwind
  - In `tailwind.config.ts`, remove `./src/pages/**/*` from `content` globs (App Router only).
- TypeScript
  - In `tsconfig.json`, keep `noEmit: true`; remove `declaration`, `declarationMap`, `sourceMap`.
- Dependencies
  - Remove packages not used in code: audit `critters`, `framer-motion`, `lucide-react`, `@radix-ui/react-dropdown-menu`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`. Keep only those actually imported.

Acceptance criteria

- `next build` succeeds with no warnings about deprecated `experimental` flags.
- No custom webpack/terser logic remains.
- Tailwind only scans `app`, `components`, and any other present folders with UI.
- `npm ls` shows no unused deps (post-audit).

### 3) Content and configuration

- Introduce site config: `src/config/site.ts`
  - Expose: `name`, `url`, `basePath`, `description`, `nav` items, `social` links, and feature toggles (`showAbout`, `showProjects`, `showBlog`).
- Replace `process.env.NEXT_PUBLIC_SHOW_*` gates with config flags across:
  - `src/components/Layout.tsx`
  - `src/app/page.tsx`
- Replace placeholder social/email links (`yourusername`, example email) with values from `site` config.
- Remove unused/empty directories:
  - `src/app/api/blog/[id]/` (unless you intend to add an API route)
  - `src/components/ui/` if empty

Acceptance criteria

- A single `site` source of truth config drives nav, social links, feature toggles.
- No `process.env.NEXT_PUBLIC_SHOW_*` references remain.
- No placeholder links remain in layout/footer/pages.

### 4) Blog routing foundation

- Keep current static placeholder pages for now, but:
  - Ensure `app/blog/[slug]/page.tsx` uses `params.slug` and `generateStaticParams` returns matching slugs.
  - Add TODOs in code for MDX migration (or implement MDX if chosen now).

Acceptance criteria

- `/blog`, `/blog/post-1`, `/blog/post-2`, `/blog/post-3` render with consistent layout.
- No dead links on the blog index.

### 5) Styling and UX polish

- Replace global wildcard transition in `globals.css`:
  - Remove `* { transition: background-color, color, border-color }` rule.
  - Scope hover/focus transitions to interactive elements (buttons/links/nav).
- Keep typography plugin overrides; ensure they honor CSS variables without forcing `inherit` where not necessary.
- Optional: adopt Tailwind `container` plugin or consistently use `container mx-auto max-w-4xl px-6` via a utility component if desired.

Acceptance criteria

- No global jank from universal transitions.
- Visuals unchanged or slightly smoother; dark/light mode transitions remain reasonable.

### 6) SEO and platform files

- Add `app/sitemap.ts` and `app/robots.ts` (respect `basePath` if on GitHub Pages).
- Unify metadata in `src/app/layout.tsx` from `site` config.
- Add `app/icon.png` and `app/opengraph-image.tsx` (or static `public/og.png`) to improve previews.

Acceptance criteria

- `/sitemap.xml` and `/robots.txt` available.
- OpenGraph/Twitter preview works with consistent title/description/image.

### 7) DX, formatting, and CI

- Add Prettier with config (`.prettierrc`, `.prettierignore`) and scripts:
  - `format`, `format:check`.
- Add `type-check` script: `tsc --noEmit`.
- Optionally add GitHub Actions workflow to run `install`, `lint`, `type-check`, and `next build` on PRs.

Acceptance criteria

- Repo has consistent formatting.
- Local and CI checks: `lint`, `type-check`, and `build` pass.

---

## Deliverables

- Updated config files: `next.config.js`, `tailwind.config.ts`, `tsconfig.json`.
- New `src/config/site.ts`.
- Updated `src/app/layout.tsx`, `src/app/page.tsx`, `src/components/Layout.tsx`, `src/app/globals.css`.
- Optional: `app/sitemap.ts`, `app/robots.ts`, icon/og assets, Prettier config.

## Testing and QA

- Commands: `npm run lint`, `npm run type-check`, `npm run build`, `npm run start`.
- Manual checks:
  - Home, About, Projects, Blog index and example posts load with no console errors.
  - Theme toggle works; layout stable across mobile/desktop.
  - Links and basePath (if used) correct.
  - Lighthouse Performance/Best Practices/SEO ≥ 90 locally.

## Phases

- Phase 1: Correctness, config, tokens, remove dead code.
- Phase 2: Site config, links, metadata, SEO files.
- Phase 3: Optional MDX blog + CI polish.
