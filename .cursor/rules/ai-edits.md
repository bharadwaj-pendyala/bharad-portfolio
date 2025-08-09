# AI-Assisted Editing Workflow

Streamlined process for AI code changes to ensure quality and consistency.

## Pre-Edit Analysis

**Before making any changes:**
1. **Understand the request** - What specifically needs to be changed?
2. **Scan related files** - Check imports, dependencies, and usage patterns
3. **Identify boundaries** - Server vs client components, API boundaries
4. **Plan minimal changes** - Change only what's necessary

## Edit Execution

**While editing:**
- ✅ Use existing patterns and conventions
- ✅ Maintain type safety (no `any`, proper imports)
- ✅ Use theme tokens (`text-primary`, `bg-background`)
- ✅ Keep Server Components as default
- ❌ Don't add unnecessary dependencies
- ❌ Don't break existing functionality

## Post-Edit Validation

**Required checks after editing:**
```bash
npm run lint        # ESLint passes
npm run build       # TypeScript compilation succeeds
npm run type-check  # Type checking passes (if separate script)
```

**Runtime verification:**
- No console errors in browser
- Functionality works as expected
- Accessibility maintained (keyboard nav, screen readers)
- Both light and dark themes work

## Commit Standards

**Use Conventional Commits:**
- `feat:` - New features
- `fix:` - Bug fixes
- `refactor:` - Code restructuring
- `style:` - Formatting changes
- `docs:` - Documentation updates
- `chore:` - Tooling and maintenance

**Commit message format:**
```
type(scope): brief description under 50 chars

Longer explanation if needed, including:
- What changed and why
- Any trade-offs made
- Breaking changes or config implications
```

## When to Stop and Ask

**Stop and request clarification if:**
- Requirements are ambiguous or conflicting
- Changes would require significant architectural shifts
- New dependencies seem necessary
- Breaking changes would be required
- Multiple valid approaches exist
