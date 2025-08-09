# Meta Rules - Complete Cursor Rules Index

This is the master index of all cursor rules for the bharad-portfolio project. AI assistants should reference this meta rule to understand the complete standards and conventions.

## Rule Categories and Hierarchy

### 🎯 Project-Specific Rules (Highest Priority)
These rules define the specific conventions for this portfolio project:

- **`portfolio.md`** - ⭐ **START HERE** - Core project philosophy, tech stack, and non-negotiable patterns
- **`ai-edits.md`** - Workflow for AI-assisted edits with pre/post validation steps
- **`code-review.md`** - Review standards and checklist for PRs
- **`commits-pr.md`** - Git workflow, commit messages, and PR conventions

### 🛠️ Technology-Specific Rules
Framework and library-specific standards that align with the project stack:

- **`nextjs.md`** - Next.js 14 App Router patterns, routing, and data fetching
- **`react.md`** - React component patterns, hooks, and Server Components
- **`typescript.md`** - TypeScript strictness, type safety, and naming conventions
- **`tailwind.md`** - Tailwind CSS usage, theme tokens, and responsive design

### 📝 Language-Specific Rules
Standards for individual languages and file formats:

- **`javascript.md`** - Modern JavaScript features, async patterns, and performance
- **`css.md`** - CSS standards, animations, and styling best practices
- **`html.md`** - Semantic HTML, accessibility, and Next.js specifics
- **`json.md`** - JSON structure, configuration files, and API responses
- **`markdown.md`** - Documentation standards and content authoring

### 🌐 Cross-Cutting Standards
Universal principles that apply across all code:

- **`coding-standards.md`** - The Big Four principles + naming, error handling, and security
- **`accessibility.md`** - WCAG compliance, keyboard navigation, and inclusive design
- **`performance.md`** - Core Web Vitals, optimization, and performance budgets

## Rule Application Priority

When rules conflict, apply in this order:
1. **Project-specific rules** override all others
2. **Technology-specific rules** for the current stack
3. **Language-specific rules** for the file being edited
4. **Cross-cutting standards** as universal fallbacks

## Quick Reference Summary

### Core Principles
- **Server Components first** - Add `'use client'` only when necessary
- **Type safety** - No `any`, unsafe casts, or `//@ts-ignore`
- **Minimal diffs** - Change only what the task requires
- **Accessibility** - WCAG 2.1 AA compliance by default
- **Performance** - Core Web Vitals and bundle size awareness

### Tech Stack
- **Framework**: Next.js 14 App Router with TypeScript
- **Styling**: Tailwind CSS with theme tokens
- **Fonts**: `next/font` with Spectral font family
- **Themes**: `next-themes` with class strategy
- **Images**: `next/image` for optimization

### File Conventions
- **Components**: Server Components by default, named functions
- **Paths**: Use `@/*` alias for local imports
- **Config**: Keep `next.config.js` minimal, strict TypeScript
- **Styles**: Use Tailwind tokens, avoid custom CSS when possible

### Code Quality
- **Linting**: ESLint + Prettier, must pass before commits
- **Testing**: Type-check with `tsc --noEmit`
- **Reviews**: Follow checklist in `code-review.md`
- **Commits**: Conventional Commits format

## AI Assistant Guidelines

**Essential workflow for every edit:**

1. **Start with `portfolio.md`** - Review project philosophy and non-negotiable patterns
2. **Follow `ai-edits.md`** - Use the pre-edit analysis → edit execution → post-edit validation workflow
3. **Apply specific rules** - Check language/technology-specific rules for the files being edited
4. **Validate thoroughly** - Run lints, builds, and runtime checks before completing

**Remember: Project-specific rules in `portfolio.md` override all other rules.**

## Rule Maintenance

- **Update frequency**: Rules should be updated when patterns change
- **Consistency**: New rules must align with existing project conventions
- **Documentation**: Changes to rules should be documented in PRs
- **Validation**: Test rule compliance with linting and type-checking

## Complete Rule List

For quick navigation, here are all available rules:

```
.cursor/rules/
├── meta-rule-index.md     # This file - master index
├── portfolio.md           # Project-specific guidelines
├── ai-edits.md           # AI-assisted editing standards
├── code-review.md        # Review standards and checklist
├── commits-pr.md         # Git and PR conventions
├── nextjs.md             # Next.js App Router standards
├── react.md              # React component standards
├── typescript.md         # TypeScript safety and conventions
├── tailwind.md           # Tailwind CSS usage and tokens
├── javascript.md         # JavaScript modern patterns
├── css.md                # CSS standards and performance
├── html.md               # Semantic HTML and accessibility
├── json.md               # JSON structure and configuration
├── markdown.md           # Documentation and content standards
├── coding-standards.md   # Universal coding principles
├── accessibility.md      # WCAG compliance and inclusive design
└── performance.md        # Core Web Vitals and optimization
```

## Integration with Development Workflow

These rules integrate with:
- **ESLint configuration** for automated code quality
- **Prettier** for consistent formatting
- **TypeScript compiler** for type safety
- **GitHub Actions** for CI/CD validation
- **PR templates** for review consistency

---

*This meta rule ensures all cursor rules work together cohesively to maintain high code quality, accessibility, and performance standards throughout the bharad-portfolio project.*
