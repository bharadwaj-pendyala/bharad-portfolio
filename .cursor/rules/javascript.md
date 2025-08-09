# JavaScript Rules

Standards for JavaScript code, complementing TypeScript rules for this project.

## Language features

- Use modern ES6+ features: arrow functions, destructuring, template literals.
- Prefer `const` and `let` over `var`; use `const` by default.
- Use async/await over Promise chains for better readability.
- Prefer array methods (`map`, `filter`, `reduce`) over traditional loops.

## Functions and scope

- Use arrow functions for callbacks and inline functions.
- Use regular function declarations for top-level, named functions.
- Avoid function hoisting surprises; declare before use.
- Keep function signatures simple; use objects for multiple parameters.

## Objects and arrays

- Use object shorthand when possible (`{ name, age }` vs `{ name: name, age: age }`).
- Prefer destructuring for extracting multiple values.
- Use spread operator for copying arrays/objects (`[...items]`, `{...user}`).
- Use optional chaining (`user?.profile?.name`) and nullish coalescing (`name ?? 'Unknown'`).

## Error handling

- Use try/catch for async operations and external API calls.
- Provide meaningful error messages with context.
- Avoid silent failures; log errors appropriately.
- Use Error objects, not strings, when throwing exceptions.

## Performance

- Avoid creating functions inside render loops.
- Use `Object.freeze()` for immutable data structures.
- Prefer `Map` and `Set` over plain objects for frequent lookups.
- Cache expensive computations; use memoization wisely.

## Async programming

- Always handle Promise rejections.
- Use `Promise.all()` for parallel operations.
- Avoid callback hell; prefer async/await.
- Set appropriate timeouts for network requests.

## Browser APIs

- Check for feature support before using newer APIs.
- Use progressive enhancement for optional features.
- Handle offline scenarios gracefully.
- Respect user preferences (`prefers-reduced-motion`, `prefers-color-scheme`).

## Memory management

- Remove event listeners when components unmount.
- Cancel pending requests in cleanup functions.
- Avoid memory leaks with closures holding large objects.
- Use WeakMap/WeakSet for object metadata when appropriate.

## Code organization

- Group related functions in modules.
- Use named exports for utilities; default exports for components.
- Keep side effects explicit and isolated.
- Prefer pure functions; make mutations obvious.

## Debugging and development

- Use meaningful variable names in debugging contexts.
- Remove console.log statements before production.
- Use debugger statements sparingly; remove before commits.
- Leverage browser dev tools for performance profiling.

## Security

- Sanitize user inputs before DOM manipulation.
- Use Content Security Policy (CSP) headers.
- Validate data from external APIs.
- Avoid eval() and similar dynamic code execution.

## Next.js/React specifics

- Understand the difference between server and client execution.
- Use appropriate hooks for lifecycle management.
- Optimize re-renders with proper dependency arrays.
- Leverage React's built-in performance optimizations.
