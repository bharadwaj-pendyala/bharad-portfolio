# React Rules

Applies to React components within Next.js App Router.

## Components

- Use named function components. Avoid `React.FC`.
- Prefer Server Components; only mark `'use client'` when required (events, browser APIs, `next-themes`).
- Keep components focused and composable. Avoid prop bags; prefer composition over conditionals.

## Hooks

- Minimize `useEffect` and client state. Derive state from props where possible.
- Prefer `useMemo` and `useCallback` only for expensive computations or referential stability in dependencies.
- Avoid global side effects; keep effects idempotent and properly scoped.

## Suspense and error handling

- Wrap client components that lazy load or fetch in `Suspense` with accessible fallbacks.
- Provide `error.tsx` at route boundaries; avoid swallowing errors.
- Add `loading.tsx` in routes with slow data.

## Accessibility

- Use semantic elements and ARIA only when needed.
- Ensure focus visibility via `:focus-visible`; keyboard nav should work by default.
- Provide meaningful alt text and labels.

## Performance

- Split non-critical client code with dynamic import.
- Avoid heavy client dependencies; keep bundle small.
- Use `next/image` and responsive `sizes`.
