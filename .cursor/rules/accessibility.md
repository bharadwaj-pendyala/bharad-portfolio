# Accessibility Standards

Comprehensive accessibility guidelines to ensure inclusive user experiences.

## Semantic HTML

- Use semantic elements (`<nav>`, `<main>`, `<section>`, `<article>`) over generic divs.
- Maintain proper heading hierarchy (h1 → h2 → h3, no skipping levels).
- Use `<button>` for actions, `<a>` for navigation.
- Associate form labels with inputs using `for`/`id` or wrapping.

## Keyboard navigation

- Ensure all interactive elements are keyboard accessible.
- Provide clear `:focus-visible` styles for keyboard users.
- Implement logical tab order; use `tabindex="-1"` to remove from tab flow.
- Support standard keyboard shortcuts (Enter for buttons, Space for checkboxes).
- Provide skip links for main navigation and content areas.

## Screen readers

- Use descriptive alt text for informative images.
- Use empty `alt=""` for decorative images.
- Provide descriptive link text; avoid "click here" or "read more".
- Use ARIA labels when semantic HTML isn't sufficient.
- Test with screen readers (VoiceOver on macOS, NVDA on Windows).

## Color and contrast

- Ensure minimum contrast ratios: 4.5:1 for normal text, 3:1 for large text.
- Don't rely solely on color to convey information.
- Test both light and dark themes for adequate contrast.
- Support high contrast mode preferences.

## Motion and animation

- Respect `prefers-reduced-motion` for users with vestibular disorders.
- Provide pause/stop controls for auto-playing content.
- Keep animations brief and purposeful.
- Avoid flashing content that could trigger seizures.

## Forms and input

- Provide clear error messages with specific guidance.
- Use appropriate input types (`email`, `tel`, `date`) for better mobile experience.
- Group related form fields with `<fieldset>` and `<legend>`.
- Use `aria-describedby` to associate help text with inputs.
- Validate inputs accessibly; announce errors to screen readers.

## ARIA usage

- Use ARIA roles, properties, and states only when semantic HTML isn't sufficient.
- Common patterns: `aria-expanded` for collapsible content, `aria-current="page"` for navigation.
- Use `aria-live` regions for dynamic content updates.
- Provide `aria-label` or `aria-labelledby` for complex interactions.

## Responsive design

- Ensure content works at 200% zoom level.
- Support both portrait and landscape orientations.
- Make touch targets at least 44px × 44px on mobile.
- Ensure text remains readable when zoomed.

## Testing and validation

- Use automated tools (axe-core, Lighthouse accessibility audit).
- Test with keyboard-only navigation.
- Test with screen readers on different platforms.
- Validate HTML for proper structure and semantics.
- Test with users who have disabilities when possible.

## Content accessibility

- Write in plain language; avoid jargon when possible.
- Use descriptive headings that summarize section content.
- Provide transcripts for audio/video content.
- Offer alternative formats for complex visual content.

## Next.js/React specifics

- Use `next/image` with proper alt text.
- Manage focus for client-side navigation.
- Ensure Server Components maintain accessibility.
- Test accessibility across different rendering modes.

## Common pitfalls to avoid

- Don't suppress focus outlines without providing alternatives.
- Don't use placeholder text as the only form label.
- Don't auto-refresh pages without user control.
- Don't open new windows/tabs without warning users.
- Don't use ARIA incorrectly; no ARIA is better than bad ARIA.

## Legal and standards compliance

- Follow WCAG 2.1 AA guidelines as minimum standard.
- Consider Section 508 compliance for government projects.
- Document accessibility decisions and testing results.
- Provide accessibility statements for public-facing sites.
