# Next.js Rules

Applies to Next.js 14 App Router projects using Server Components by default.

## Routing and rendering
- Use App Router under `src/app`. Do not mix with the Pages Router.
- Prefer Server Components. Add `'use client'` only when required (event handlers, browser APIs, `next-themes`).
- Prefer Static Rendering where possible. Use `generateStaticParams` for dynamic segments.
- Use `export const metadata` and `export const viewport` for SEO/meta; avoid `<Head/>`.
- Use `not-found.tsx` and `error.tsx` per route group for 404 and error UI.

## Data and boundaries
- Fetch data in Server Components or Route Handlers. Avoid client data fetching unless necessary.
- Handle loading and error states: add `loading.tsx` for routes with slow data and robust error boundaries.
- Validate external inputs and sanitize outputs at server boundaries.

## Links and navigation
- Use `next/link` for internal navigation with accessible text. Avoid naked icons as links.
- When using `basePath` (static export/GitHub Pages), ensure all internal links and asset paths respect it.

## Images and fonts
- Use `next/image` for non-icon images; specify `width`/`height` or `fill` and `sizes`.
- Use `next/font` for fonts; set `display: 'swap'` and CSS var bindings.

## Config
- Keep `next.config.js` minimal. Avoid custom webpack/terser overrides; rely on SWC.
- Do not use deprecated `experimental` flags (e.g., `optimizeCss`).
- Set `reactStrictMode: true` and `compiler.removeConsole` in production when appropriate.

## Metadata and SEO
- Centralize site metadata (name, description, url, open graph) in a config module and consume in `layout.tsx`.
- Provide `app/sitemap.ts` and `app/robots.ts` (or `robots.txt`) aligned with hosting (Vercel vs GitHub Pages).

## Client components
- Minimize state/effects. Avoid wide `useEffect` usage and global client providers unless needed.
- Wrap client components in `Suspense` if they lazily load or fetch.


