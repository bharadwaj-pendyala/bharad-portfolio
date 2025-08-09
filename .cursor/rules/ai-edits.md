# AI Edit and Process Rules

Standards for AI-assisted edits to keep diffs minimal, safe, and aligned with the stack.

## General principles

- Favor minimal diffs; change only what the task requires.
- Preserve type safety; never introduce `any`, non-null assertions, or `//@ts-ignore`.
- Do not add new dependencies unless necessary; justify in the PR description.
- Prefer Server Components; add `'use client'` only when strictly needed.

## Process

- Before editing, scan related files for context; avoid breaking server/client boundaries.
- After edits:
  - Run `npm run lint` and `npm run build` (or `tsc --noEmit`) locally.
  - Fix linter/type errors you introduced.
  - Ensure no runtime console errors.

## Commit and PR hygiene

- Commits: use `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`, `style:`, `test:`.
- Keep PRs scoped; include a brief description, rationale, and any config implications.
- Reference updates to docs like `docs/cleanup-spec.md` when behavior changes.

## Tailwind and CSS

- Use theme tokens: `text-primary`, `text-secondary`, `text-muted`, `text-foreground`, `bg-background`, `border-border`.
- Avoid universal CSS transitions and global overrides; scope to interactive elements.

## Acceptance checklist

- Type-check, lint, and build pass.
- No new warnings/errors in the console.
- Accessibility preserved or improved.
- Server/client boundaries respected.
