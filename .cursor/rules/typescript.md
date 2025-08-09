# TypeScript Rules

These rules align with Awesome Cursor Rules principles and this repo's standards. Optimize for clarity, safety, and maintainability.

## Language and compiler

- Enable and keep strictness: `strict`, `noImplicitAny`, `noImplicitThis`, `strictNullChecks`, `noUnusedLocals`, `noUnusedParameters`.
- Keep `moduleResolution: bundler` and ESM imports; prefer named imports.
- Use path alias `@/*` for local modules. Avoid relative deep paths (`../../../`).

## Types and interfaces

- Prefer `type` aliases and discriminated unions for domain modeling.
- Avoid `enum` unless interoperating with external constraints; use union types or string literals.
- Export precise types for public APIs; keep internal types module-local.
- Use utility types (`Pick`, `Omit`, `Partial`, `Readonly`, `Record`) to avoid duplication.
- For nullable data, encode explicitly (`T | null`) and narrow early with guards.

## Safety and casts

- Forbid `any`, `unknown as`, and `//@ts-ignore`. Use type guards, predicates, and exhaustive switches.
- Avoid non-null assertions (`!`) except in tightly scoped, proven-safe spots.
- Prefer narrow function parameters and explicit return types for exported functions/components.

## Naming and structure

- Use descriptive names: functions as verbs, values as nouns (e.g., `loadUserProfile`, `userIdToUser`).
- Organize files by concern; extract pure helpers into `src/lib` with explicit signatures.
- Keep files focused (< ~200 lines when practical). Split types to `src/types` only when shared broadly.

## Control flow

- Use guard clauses and early returns over deep nesting.
- Prefer pure functions; avoid hidden side effects. Make async boundaries explicit.

## Errors and results

- Model recoverable failures with discriminated unions (e.g., `{ ok: false; error: 'NotFound' }`).
- Throw for truly exceptional cases only. Catch at route/handler boundaries and map to user-facing errors.

## React/JSX specifics

- No `React.FC`. Use named function components with typed props and explicit return types when exported.
- Derive props types (`type Props = { ... }`) close to the component. Avoid sprawling prop bags; prefer composition.

## Testing and DX

- Add `type-check` (`tsc --noEmit`) to CI and local scripts.
- Keep dead code out. Remove unused exports promptly.
