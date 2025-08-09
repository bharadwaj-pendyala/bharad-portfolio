# HTML Rules

Semantic HTML standards and best practices, particularly for Next.js/React applications.

## Semantic structure

- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Maintain proper heading hierarchy (h1 → h2 → h3, don't skip levels).
- Use `<button>` for actions, `<a>` for navigation.
- Prefer semantic elements over `<div>` with ARIA roles when possible.

## Accessibility

- Provide meaningful `alt` text for images; use empty `alt=""` for decorative images.
- Use `<label>` elements associated with form controls.
- Ensure interactive elements are keyboard accessible.
- Provide `:focus-visible` styles for keyboard navigation.
- Use ARIA attributes only when semantic HTML isn't sufficient.

## Forms

- Use appropriate input types (`email`, `tel`, `date`, `number`).
- Associate labels with inputs using `for`/`id` or wrapping.
- Provide `placeholder` text for guidance, not labels.
- Use `fieldset` and `legend` for grouped form elements.
- Include validation attributes (`required`, `pattern`, `min`, `max`).

## Links and navigation

- Use descriptive link text; avoid "click here" or "read more".
- Add `rel="noopener noreferrer"` to external links with `target="_blank"`.
- Provide skip links for keyboard users.
- Use `aria-current="page"` for current navigation items.

## Performance

- Minimize DOM depth; avoid unnecessary wrapper elements.
- Use appropriate image formats (WebP, AVIF) with fallbacks.
- Lazy load images below the fold.
- Preload critical resources with `<link rel="preload">`.

## SEO and metadata

- Use descriptive `<title>` tags (50-60 characters).
- Include `<meta name="description">` for pages.
- Use structured data (JSON-LD) for rich snippets.
- Provide Open Graph and Twitter Card metadata.

## Next.js specifics

- Use Next.js metadata API instead of manual `<head>` manipulation.
- Leverage `next/image` for optimized image delivery.
- Use `next/link` for internal navigation.
- Implement proper error boundaries and not-found pages.

## Validation and standards

- Write valid HTML5; use validation tools.
- Include `lang` attribute on `<html>` element.
- Use HTTPS for all external resources.
- Ensure proper character encoding (`<meta charset="utf-8">`).

## Maintenance

- Keep HTML structure simple and predictable.
- Avoid inline styles; use CSS classes or Tailwind utilities.
- Comment complex structures or accessibility requirements.
- Remove unused attributes and deprecated elements.
