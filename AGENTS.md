# AGENTS.md - Development Guidelines for bharad-portfolio

This file provides guidelines for AI agents working on this codebase.

## Build Commands

```bash
# Development
npm run dev              # Start Next.js dev server

# Build & Production
npm run build            # Production build
npm run start            # Start production server

# Linting & Type Checking
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type check (tsc --noEmit)

# Formatting
npm run format           # Format all files with Prettier
npm run format:check     # Check formatting without modifying
```

## Testing

This project does not currently have a test framework configured. If adding tests:

- Use Vitest for unit tests
- Use Playwright for E2E tests
- Run a single test: `npm test -- --run <test-name>` or `npx vitest run <file>`

## Code Style Guidelines

### TypeScript (Strict)

- **Strict mode enabled** - All TypeScript strictness flags are on
- **No `any`** - Use `unknown` or proper types instead
- **No type assertions** - Avoid `as unknown as T`, use type guards
- **No `@ts-ignore`** - Fix the underlying issue
- **Export functions need explicit return types**
- **Use union types over enums**

```typescript
// Good
type Status = 'loading' | 'success' | 'error';
type Result<T, E = string> =
  | { success: true; data: T }
  | { success: false; error: E };

// Bad
const data: any = response;
const user = data as unknown as User;
```

### Import Patterns

- Use path alias: `import { utils } from '@/lib/utils'`
- Use type-only imports: `import type { User } from '@/types'`
- Avoid relative deep imports: `../../../lib/utils`

### React & Next.js

- **Server Components first** - Default to server components
- **Only use `'use client'` when required** - Event handlers, browser APIs, next-themes
- **Avoid `React.FC`** - Use named function components
- **Minimize `useEffect`** - Prefer derived state from props
- **Use `useMemo`/`useCallback`** only for expensive computations

```typescript
// Good
export default function UserCard({ user, onSelect }: Props) {
  return <div>{user.name}</div>
}

// Bad
const UserCard: React.FC<Props> = ({ user }) => { ... }
```

### Tailwind CSS

- Use theme tokens: `text-primary`, `text-secondary`, `bg-background`, `border-border`
- Avoid ad-hoc color literals when tokens exist
- Use `@tailwindcss/typography` for prose content
- Standard wrapper: `container mx-auto max-w-4xl px-6`

### Naming Conventions

| Type      | Pattern              | Example                     |
| --------- | -------------------- | --------------------------- |
| Functions | Verbs (camelCase)    | `loadUser`, `validateEmail` |
| Variables | Nouns (camelCase)    | `userName`, `isLoading`     |
| Constants | SCREAMING_SNAKE_CASE | `API_BASE_URL`              |
| Files     | kebab-case           | `user-profile.tsx`          |

### Error Handling

- Validate early at function boundaries
- Handle gracefully with user-friendly messages
- Throw meaningful errors with context

```typescript
// Good
if (!userId) throw new Error('User ID is required');
try {
  const response = await api.get(`/users/${userId}`);
  return response.data;
} catch (error) {
  throw new Error(`Failed to fetch user ${userId}: ${error.message}`);
}
```

### General Principles

1. **Clarity over cleverness** - Code should be self-explanatory
2. **Small and focused** - Functions < 20 lines, files < 300 lines
3. **Pure when possible** - Minimize side effects and mutations
4. **Fail fast** - Validate early, handle errors explicitly
5. **Guard clauses** - Reduce nesting with early returns

### Security

- Validate all external inputs
- Use environment variables for secrets
- Add `rel="noopener noreferrer"` to external links with `target="_blank"`

### Accessibility

- Use semantic HTML elements
- Ensure keyboard navigation works
- Provide meaningful alt text and labels
- Ensure focus visibility via `:focus-visible`

### Prettier Configuration

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

### ESLint Configuration

Extends `next/core-web-vitals` and `@typescript-eslint/recommended`.
Rules: `@typescript-eslint/no-unused-vars: warn`, `@typescript-eslint/no-explicit-any: warn`

## Project Structure

```
src/
├── app/           # Next.js App Router (routes, layouts, error boundaries)
├── components/    # Reusable components (Server Components first)
├── config/        # Site configuration (metadata, nav, social links)
├── lib/           # Framework-agnostic utilities
└── types/         # Shared TypeScript types
```

## Before Submitting Changes

- [ ] `npm run build` succeeds
- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] No `any` types introduced
- [ ] Server Components used where possible
- [ ] Theme tokens used (no hardcoded colors)
- [ ] Semantic HTML and accessibility maintained

## Cursor Rules

This project has detailed Cursor rules in `.cursor/rules/`. Key files:

- `portfolio.md` - Project-specific guidelines (takes precedence)
- `typescript.md` - TypeScript standards
- `react.md` - React patterns
- `nextjs.md` - Next.js App Router
- `tailwind.md` - Tailwind CSS
- `coding-standards.md` - Universal coding standards
