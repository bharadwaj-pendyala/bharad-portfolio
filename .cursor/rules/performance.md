# Performance Standards

Guidelines for building fast, efficient web applications with optimal user experience.

## Core Web Vitals

- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100 milliseconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- Monitor these metrics regularly; use tools like Lighthouse and PageSpeed Insights.

## Loading performance

- Optimize images: use WebP/AVIF formats, proper sizing, lazy loading.
- Implement critical CSS inlining; defer non-critical styles.
- Use resource hints: `preload` for critical resources, `prefetch` for likely navigation.
- Minimize render-blocking resources; load JavaScript asynchronously when possible.

## JavaScript optimization

- Keep bundle sizes small; analyze with webpack-bundle-analyzer.
- Use code splitting for large applications.
- Implement tree shaking to eliminate dead code.
- Avoid polyfills for modern browsers when possible.
- Use dynamic imports for non-critical features.

## CSS optimization

- Minimize unused CSS; use tools like PurgeCSS or Tailwind's purging.
- Prefer transform and opacity for animations (GPU-accelerated).
- Avoid layout-triggering animations (width, height, margin).
- Use CSS containment for isolated components.

## Next.js specific optimizations

- Use `next/image` for automatic optimization and responsive images.
- Implement static generation (`getStaticProps`) when possible.
- Use `getServerSideProps` only when data must be fresh.
- Leverage Incremental Static Regeneration (ISR) for semi-static content.
- Optimize fonts with `next/font` and `font-display: swap`.

## Network optimization

- Enable compression (gzip/brotli) for text assets.
- Use CDN for static assets and global distribution.
- Implement efficient caching strategies with proper cache headers.
- Minimize HTTP requests; bundle related resources appropriately.
- Use HTTP/2 features like server push judiciously.

## React performance

- Use `React.memo()` for expensive components that re-render frequently.
- Optimize `useEffect` dependencies; avoid unnecessary re-runs.
- Use `useMemo()` and `useCallback()` for expensive calculations.
- Avoid creating objects/functions in render methods.
- Profile with React DevTools Profiler.

## Database and API optimization

- Implement efficient database queries; avoid N+1 problems.
- Use pagination for large datasets.
- Cache API responses when appropriate.
- Implement request debouncing for search inputs.
- Use GraphQL query optimization or REST endpoint efficiency.

## Memory management

- Remove event listeners in cleanup functions.
- Cancel pending network requests on component unmount.
- Avoid memory leaks with closures holding large objects.
- Use weak references (WeakMap, WeakSet) when appropriate.

## Mobile performance

- Optimize for slower networks; test on 3G conditions.
- Use appropriate touch targets (minimum 44px).
- Minimize main thread work; use Web Workers for heavy computation.
- Implement proper viewport meta tags.

## Monitoring and measurement

- Set up performance monitoring (Real User Monitoring).
- Use synthetic testing for consistent benchmarking.
- Monitor bundle sizes in CI/CD pipeline.
- Track performance budgets; fail builds that exceed limits.
- Use tools: Lighthouse CI, WebPageTest, Chrome DevTools.

## Caching strategies

- Implement effective browser caching with proper headers.
- Use service workers for offline functionality and caching.
- Cache static assets aggressively; use versioning for cache busting.
- Implement smart caching for dynamic content.

## Progressive enhancement

- Ensure core functionality works without JavaScript.
- Implement graceful degradation for advanced features.
- Use feature detection instead of browser detection.
- Provide offline functionality where appropriate.

## Performance budgets

- Set and enforce bundle size limits.
- Monitor third-party script impact.
- Regular performance audits and optimization.
- Document performance decisions and trade-offs.
