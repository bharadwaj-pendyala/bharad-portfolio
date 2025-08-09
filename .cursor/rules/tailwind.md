# Tailwind CSS Rules

These rules complement the Tailwind setup and theme tokens in `tailwind.config.ts`.

## Tokens and utilities
- Use theme tokens only:
  - Colors: `text-primary`, `text-secondary`, `text-muted`, `text-foreground`, `bg-background`, `border-border`.
  - Avoid ad-hoc color literals when a token exists.
- Prefer utilities over custom CSS. Keep `globals.css` limited to variables, resets, and a11y.
- Define reusable animations in Tailwind config (`theme.extend.animation`/`keyframes`).

## Layout and spacing
- Use the standardized wrapper: `container mx-auto max-w-4xl px-6`.
- Use responsive spacing via Tailwind (`py-8 md:py-12`) rather than custom classes.

## Dark mode
- Use `dark:` variant with class strategy (`next-themes`).
- Do not apply universal transitions on color/background; scope transitions to interactive elements.

## Typography
- Use `@tailwindcss/typography` for prose content; enable `dark:prose-invert` when needed.
- Avoid forcing `color: inherit` globally; let tokens drive color.

## Components
- Co-locate component-specific styles via class composition; avoid global `.component-*` selectors.
- If using utility composition helpers (e.g., `clsx`, `tailwind-merge`), ensure they are actually needed before adding deps.
