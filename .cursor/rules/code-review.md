# Code Review Standards

Shared standards for reviewing changes in this repository. Apply them to both human and AI-assisted PRs.

## Review principles

- Prioritize correctness, safety, and clarity over cleverness.
- Keep scope tight: prefer small, focused PRs.
- Enforce server-first patterns and strict TypeScript.
- Ensure changes align with `.cursor/rules/*` and `docs/cleanup-spec.md`.

## What to check

- Architecture
  - Server Components by default. `'use client'` only where necessary.
  - Next.js App Router conventions followed (metadata, loading, error, not-found).
  - No mixing Pages Router.
- TypeScript
  - No `any`, unsafe casts, or `//@ts-ignore`.
  - Precise types and explicit function signatures for exports.
  - Remove unused types/vars and dead code.
- Styling
  - Uses Tailwind tokens (`text-primary`, `bg-background`, `border-border`, etc.).
  - Avoids ad-hoc color literals when tokens exist.
  - No global `* { transition: ... }`; transitions scoped to interactive elements.
- Accessibility
  - Semantic HTML, labels, `:focus-visible` states preserved.
  - Links have meaningful names; external links use `rel="noopener noreferrer"` when `target="_blank"`.
- Performance
  - Minimal client JS; limited `useEffect`/state; lazy/dynamic where appropriate.
  - Proper `next/image` usage with dimensions or `fill` and `sizes`.
- Security
  - No secrets committed; only `NEXT_PUBLIC_*` on client.
  - Input validation at server boundaries; safe external URLs.
- SEO
  - Metadata complete and sourced from site config when possible.
  - `sitemap`/`robots` present or plan documented.
- Config
  - `next.config.js` minimal; no custom webpack/terser unless justified.
  - Tailwind `content` globs accurate; TS config strict.

## Review checklist

- [ ] Build, lint, and type-check pass locally.
- [ ] No console errors/warnings at runtime.
- [ ] Server/client boundaries respected; `'use client'` only where required.
- [ ] Tailwind classes align with theme tokens; no stray `*-color` utilities.
- [ ] Accessible labels and focus states verified.
- [ ] Images optimized with `next/image` where applicable.
- [ ] No unused deps/vars; no dead code.
- [ ] Docs/README updated if behavior changes.

## PR expectations

- Clear summary of what/why, scope, and screenshots if UI changes.
- Note config implications (hosting, basePath, environment variables) if any.
- Link to or update `docs/cleanup-spec.md` when adjusting agreed standards.
