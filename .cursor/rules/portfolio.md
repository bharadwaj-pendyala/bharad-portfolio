# Cursor Rules for bharad-portfolio

These rules guide AI-assisted edits and reviews in this repository. Favor clarity, type safety, and minimal diffs aligned with the existing stack.

## Project overview and priorities

- Keep the portfolio lean, fast, and accessible.
- Prefer stability and DX over adding new dependencies.
- Maintain strict TypeScript and modern Next.js 14 App Router conventions.

## Tech-stack standards

- Framework: Next.js 14 App Router (`src/app`), ESM, SWC.
- Language: TypeScript (strict), path alias `@/*` → `./src/*`.
- Styling: Tailwind CSS with plugins (typography, forms, aspect-ratio).
- Theming: `next-themes` (class strategy, `ThemeProvider`).
- Fonts: `next/font` (Google `Spectral`) with CSS variable `--font-spectral`.
- Images: Prefer `next/image` for all non-icon images.
- Config: Avoid custom webpack/terser; keep `next.config.js` minimal.
- Export/hosting: Decide Vercel vs GitHub Pages; respect `basePath` only if doing static export.

## Coding standards (TypeScript/React/Next)

- TypeScript
  - Use explicit function signatures for exported/public APIs.
  - Avoid `any` and unsafe casts; model domains with precise types.
  - Prefer `type` aliases and discriminated unions; avoid enums unless necessary.
  - Use `const` by default; narrow types with guards; prefer early returns.
  - Keep files focused; extract pure helpers into `src/lib`.

- React/Next.js
  - Server Components by default. Use `'use client'` only when strictly needed (event handlers, `next-themes`, browser APIs).
  - No `React.FC`. Use named function components.
  - Use `next/link` for internal navigation, `next/navigation` for router hooks in client components.
  - Use Next metadata API (`export const metadata`, `viewport`) not `<Head/>`.
  - Prefer static generation with `generateStaticParams` where applicable.
  - Co-locate route UI under `src/app/**` with minimal cross-route coupling.
  - Avoid reading process env in the client except `NEXT_PUBLIC_*`.

- Tailwind/CSS
  - Prefer utilities over custom CSS. Keep `globals.css` minimal (variables, resets, a11y).
  - Use theme tokens defined in `tailwind.config.ts`:
    - Colors: `text-primary`, `text-secondary`, `text-muted`, `border-border`, `bg-background`, `text-foreground`.
    - Do not use custom `*-color` utility names in class strings.
  - Do not use universal `* { transition: ... }` rules; scope transitions to interactive elements.
  - Define keyframes/animations in Tailwind config when reusable; keep `@keyframes` well-formed.
  - Prefer `container mx-auto max-w-4xl px-6` pattern used in this repo or Tailwind container plugin consistently.

## Project structure conventions

- `src/app`: routes, layouts, and error/not-found files.
- `src/components`: reusable components (server-first; client only when necessary).
- `src/config/site.ts`: single source for site metadata, navigation, social links, and feature toggles.
- `src/lib`: framework-agnostic helpers.
- `src/types`: shared types.

## Accessibility

- Use semantic HTML, correct heading hierarchy, and labels.
- Ensure focus states (`:focus-visible`) are visible in both themes.
- Provide alt text for images; avoid title-only links; use accessible names for interactive controls.

## Performance

- Use `next/image` and `next/font` optimizations.
- Minimize client-side code; avoid unnecessary state and effects.
- Avoid global CSS that triggers layout/reflow on theme toggles.
- Keep bundle size small; prefer static rendering; no custom webpack chunking.

## SEO

- Centralize metadata in layout using `site` config.
- Provide `sitemap` and `robots` routes; include Open Graph/Twitter metadata and preview images.

## Security

- Never commit secrets. Only expose `NEXT_PUBLIC_*` to the client.
- Sanitize external links with `rel="noopener noreferrer"` and `target="_blank"` where appropriate.

## Git and PR conventions

- Commit messages: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`.
- Keep diffs minimal and scoped. Update related docs when changing behavior (`README.md`, `docs/cleanup-spec.md`).

## Cursor usage guidelines

- When generating or editing code:
  - Follow these rules and existing code style. Keep changes tightly scoped.
  - Maintain type safety; add/import types as needed.
  - Avoid introducing new dependencies unless justified and documented.
  - Prefer server components; add `'use client'` only when required.
  - Align Tailwind classnames with configured theme tokens; avoid ad-hoc color literals when a token exists.
  - Ensure imports use `@/*` alias for local modules.
  - If touching config (`next.config.js`, `tailwind.config.ts`, `tsconfig.json`), explain implications in the PR description.

- When adding routes/pages:
  - Place in `src/app/**`; export `metadata` when needed; ensure 404/edge cases are handled.
  - Use `generateStaticParams` and static rendering when possible.

- When editing global styles:
  - Do not add universal selectors that animate colors or layout.
  - Keep variables in `:root` and `.dark` only; prefer Tailwind utilities elsewhere.

## Disallowed/avoid patterns

- Custom webpack/terser in `next.config.js` unless absolutely required.
- Deprecated Next.js experimental flags (e.g., `experimental.optimizeCss`).
- Importing from `pages/` router or mixing routing paradigms.
- Using `any`, broad `as unknown as`, or suppressing errors with `//@ts-ignore`.
- Hardcoding social links or nav in multiple places; must come from `src/config/site.ts`.

## Acceptance checklist for AI edits

- Type-check, lint, and build pass.
- No runtime console errors.
- Tailwind classes align with theme tokens.
- Server/client boundaries respected; `'use client'` only where needed.
- Accessibility is preserved or improved.
