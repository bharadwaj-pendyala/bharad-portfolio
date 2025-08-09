# Markdown Rules

Standards for documentation, README files, and content authoring in Markdown.

## Document structure

- Start with a descriptive H1 title (`# Title`).
- Use proper heading hierarchy (H1 → H2 → H3, don't skip levels).
- Include a table of contents for long documents (> 100 lines).
- Use consistent heading styles throughout the document.

## Formatting and syntax

- Use **bold** for emphasis, *italic* for slight emphasis.
- Use `inline code` for technical terms, file names, and short code snippets.
- Use ``` code blocks with language specification for syntax highlighting.
- Use > blockquotes for important notes or citations.

## Lists and organization

- Use `-` for unordered lists consistently.
- Use `1.` for ordered lists; let Markdown handle numbering.
- Keep list items concise; use nested lists sparingly.
- Add blank lines between list items with multiple paragraphs.

## Links and references

- Use descriptive link text; avoid "click here" or bare URLs.
- Prefer reference-style links `[text][ref]` for repeated URLs.
- Use relative links for internal documentation navigation.
- Add `rel="noopener noreferrer"` for external links when using HTML.

## Code examples

- Include language identifier for syntax highlighting (```typescript, ```bash).
- Keep code examples short and focused.
- Test code examples to ensure they work.
- Use comments to explain complex code snippets.

## Images and media

- Use descriptive alt text for images `![Alt text](image.png)`.
- Keep image sizes reasonable; optimize for web delivery.
- Use relative paths for project images.
- Provide fallback text for media that might not load.

## Tables

- Use pipe syntax for simple tables.
- Align columns for better readability in source.
- Keep tables narrow enough to display on mobile.
- Use header rows and clear column labels.

## Project-specific conventions

- Use `README.md` for project overview and quick start.
- Create separate docs for detailed guides (`docs/`).
- Include badges for build status, version, license when relevant.
- Document installation, usage, and contribution guidelines.

## Accessibility

- Use meaningful heading structure for screen readers.
- Provide alt text for images and diagrams.
- Use descriptive link text.
- Ensure adequate contrast if using colored text.

## Maintenance

- Keep documentation up to date with code changes.
- Use linters (markdownlint, prettier) for consistent formatting.
- Remove outdated information promptly.
- Use spellcheck tools for professional presentation.

## Common sections

- **README.md**: Project overview, installation, usage, contributing.
- **CHANGELOG.md**: Version history and notable changes.
- **CONTRIBUTING.md**: Guidelines for contributors.
- **API docs**: Clear examples and parameter descriptions.

## Writing style

- Use clear, concise language; prefer active voice.
- Write for your audience's technical level.
- Use consistent terminology throughout documentation.
- Include examples and practical use cases.
