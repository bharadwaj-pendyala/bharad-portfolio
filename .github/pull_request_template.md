## Summary

Describe the change, motivation, and context. Link issues if applicable.

## Type of change
- [ ] feat
- [ ] fix
- [ ] docs
- [ ] refactor
- [ ] chore
- [ ] style
- [ ] test

## Checklist
- [ ] I followed repository rules in `.cursor/rules/` and `docs/cleanup-spec.md`.
- [ ] Type-check (`tsc --noEmit`) passes locally.
- [ ] Lint (`npm run lint`) passes.
- [ ] Build (`npm run build`) passes with no warnings.
- [ ] No runtime console errors in affected pages.
- [ ] Server/client boundaries respected; `'use client'` only where needed.
- [ ] Tailwind tokens used (`text-primary`, `bg-background`, `border-border`, etc.) and no ad-hoc colors when tokens exist.
- [ ] Accessibility verified (semantic HTML, labels, `:focus-visible`).
- [ ] Images use `next/image` with proper dimensions or `fill` + `sizes`.
- [ ] Docs updated (README/spec) if behavior or standards changed.

## Screenshots / recordings
If UI changed, include before/after.

## Notes for reviewers
Call out any trade-offs, follow-ups, or config implications (e.g., hosting/basePath, environment variables).


