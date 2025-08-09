# CSS Rules

Standards for CSS and styling, complementing Tailwind CSS usage in this project.

## General principles

- Prefer Tailwind utilities over custom CSS when possible.
- Keep custom CSS minimal and focused in `globals.css`.
- Use CSS custom properties (variables) for reusable values.
- Avoid !important; structure specificity correctly instead.

## Selectors and specificity

- Use low-specificity selectors; avoid deeply nested rules.
- Prefer class selectors over tag or ID selectors for styling.
- Use BEM methodology for component-specific styles when needed.
- Avoid universal selectors (*) except for resets.

## Layout and positioning

- Use Flexbox and Grid for layout; avoid floats and positioning hacks.
- Prefer logical properties (`margin-inline`, `padding-block`) when supported.
- Use viewport units (vh, vw) sparingly; prefer relative units.
- Test responsive behavior across breakpoints.

## Animations and transitions

- Scope transitions to specific properties, not `all`.
- Use `transform` and `opacity` for performant animations.
- Provide `prefers-reduced-motion` alternatives for accessibility.
- Keep animation durations reasonable (200-500ms for interactions).

## Dark mode and theming

- Use CSS custom properties for theme-dependent values.
- Structure color variables logically (semantic names, not literal colors).
- Test both light and dark themes; ensure adequate contrast.
- Avoid hardcoded colors when theme tokens exist.

## Performance

- Minimize reflows and repaints; use `transform` for movement.
- Avoid expensive properties in animations (width, height, margin).
- Use `contain` property for layout-isolated components.
- Optimize critical CSS; defer non-critical styles.

## Browser support

- Use modern CSS features with appropriate fallbacks.
- Test in target browsers; use autoprefixer for vendor prefixes.
- Prefer standardized properties over experimental ones.
- Document any browser-specific workarounds clearly.

## Maintenance

- Remove unused styles regularly; use tools to detect dead CSS.
- Group related styles logically; maintain consistent formatting.
- Use comments for complex calculations or browser workarounds.
- Keep specificity low to enable easy overrides.
