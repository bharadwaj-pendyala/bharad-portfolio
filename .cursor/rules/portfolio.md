# Project-Specific Rules for portfolio

Core guidelines for this portfolio project. These rules take precedence over all other cursor rules.

## Project Philosophy

**Lean & Fast**: Prioritize performance and simplicity over features.
**Type-Safe**: Strict TypeScript with zero tolerance for `any` or unsafe patterns.
**Accessible**: WCAG 2.1 AA compliance by default.
**Minimal Dependencies**: Only add dependencies that provide significant value.

## Tech Stack

| Category | Technology | Requirements |
|----------|------------|--------------|
| **Framework** | Next.js 14 App Router | Server Components first, `src/app` structure |
| **Language** | TypeScript (strict) | Path alias `@/*`, no `any` types |
| **Styling** | Tailwind CSS | Theme tokens only, minimal custom CSS |
| **Theming** | `next-themes` | Class strategy, proper SSR handling |
| **Fonts** | `next/font` (Spectral) | CSS variables, display swap |
| **Images** | `next/image` | Required for all non-icons |
| **Config** | Minimal setup | No custom webpack, SWC only |

## Non-Negotiable Patterns

### ✅ Required Patterns
```typescript
// ✅ Server Components (default)
export default function Page() {
  return <main>...</main>
}

// ✅ Type-safe props
type Props = {
  id: string
  data: UserData | null
}

// ✅ Theme tokens
<div className="bg-background text-foreground border-border">

// ✅ Path imports
import { utils } from '@/lib/utils'
```

### ❌ Forbidden Patterns
```typescript
// ❌ Client components without necessity
'use client'
export default function Page() { ... }

// ❌ Any unsafe types
const data: any = response
const user = data as unknown as User

// ❌ Custom colors when tokens exist
<div className="bg-blue-500 text-gray-900">

// ❌ Relative deep imports
import { utils } from '../../../lib/utils'
```

## Project Structure

```
src/
├── app/              # Next.js App Router (routes, layouts, error boundaries)
├── components/       # Reusable components (Server Components first)
├── config/
│   └── site.ts      # Single source for metadata, nav, social links
├── lib/             # Framework-agnostic utilities
└── types/           # Shared TypeScript types
```

## Quick Reference

**When making any change:**
1. **Check dependencies** - Use existing tech stack, avoid new deps
2. **Maintain type safety** - No `any`, explicit types for exports
3. **Server Components first** - Only use `'use client'` when required
4. **Use theme tokens** - `text-primary`, `bg-background`, etc.
5. **Test accessibility** - Semantic HTML, keyboard nav, screen readers
6. **Verify performance** - Core Web Vitals, bundle size impact

## AI Assistant Checklist

Before completing any edit:
- [ ] **Build passes** - `npm run build` succeeds
- [ ] **Types check** - `tsc --noEmit` passes
- [ ] **Linting passes** - `npm run lint` succeeds
- [ ] **No console errors** - Runtime is clean
- [ ] **Server/client boundaries** - `'use client'` only when necessary
- [ ] **Theme tokens used** - No hardcoded colors
- [ ] **Accessibility maintained** - Semantic HTML, keyboard nav
- [ ] **Imports use aliases** - `@/*` for local modules
- [ ] **No new dependencies** - Unless absolutely required and justified

## Override Rules

This project-specific rule file takes precedence over:
- Generic coding standards
- Language-specific rules
- Technology-specific rules
- Cross-cutting standards

*See `.cursor/rules/meta-rule-index.md` for complete rule hierarchy.*
