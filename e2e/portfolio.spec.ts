import { expect, test } from '@playwright/test';

const BASE_PATH = process.env['PLAYWRIGHT_BASE_PATH'] ?? '';
const withBasePath = (path: string): string =>
  `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;

test.describe('Portfolio website', () => {
  test('loads the home page and core navigation', async ({ page }) => {
    await page.goto(withBasePath('/'));
    const headerNav = page.locator('header nav');

    await expect(page).toHaveTitle(/Bharadwaj P/i);
    await expect(
      headerNav.getByRole('link', { name: 'CV', exact: true })
    ).toBeVisible();
    await expect(
      headerNav.getByRole('link', { name: 'Blog', exact: true })
    ).toBeVisible();
    await expect(
      headerNav.getByRole('link', { name: 'Projects', exact: true })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { name: /Technical Excellence/i })
    ).toBeVisible();
    await expect(
      page.locator(`a[href="${withBasePath('/about')}"]`).first()
    ).toBeVisible();
  });

  test('opens each primary section route directly', async ({ page }) => {
    const checks: Array<{ path: string; text: RegExp }> = [
      { path: '/about', text: /About Bharadwaj/i },
      { path: '/cv', text: /Bharadwaj Pendyala/i },
      { path: '/projects', text: /Selected projects focused on/i },
      { path: '/blog', text: /Thoughts, tutorials, and insights/i },
    ];

    for (const check of checks) {
      await page.goto(withBasePath(check.path));
      await expect(page).toHaveURL(
        new RegExp(`${withBasePath(check.path).replace('/', '\\/')}$`)
      );
      await expect(page.getByText(check.text)).toBeVisible();
    }
  });

  test('navigates from blog list to post and back', async ({ page }) => {
    await page.goto(withBasePath('/blog'));

    await page
      .getByRole('link', {
        name: /Building a Modern Portfolio with Next.js and Tailwind CSS/i,
      })
      .click();

    await expect(page).toHaveURL(
      new RegExp(`${withBasePath('/blog/post-1')}$`)
    );
    await expect(
      page.getByRole('heading', {
        name: /Building a Modern Portfolio with Next.js and Tailwind CSS/i,
      })
    ).toBeVisible();

    await page.getByRole('link', { name: /Back to Blog/i }).click();
    await expect(page).toHaveURL(new RegExp(`${withBasePath('/blog')}$`));
  });

  test('toggles theme from header control', async ({ page }) => {
    await page.goto(withBasePath('/'));

    const html = page.locator('html');
    const toggleButton = page.getByRole('button', { name: 'Toggle theme' });
    await expect(toggleButton).toBeVisible();

    const initialIsDark = ((await html.getAttribute('class')) ?? '').includes(
      'dark'
    );

    await toggleButton.click();
    await expect
      .poll(async () => {
        const className = (await html.getAttribute('class')) ?? '';
        return className.includes('dark');
      })
      .toBe(!initialIsDark);
  });
});

test.describe('Mobile viewport', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('keeps key actions visible on mobile', async ({ page }) => {
    await page.goto(withBasePath('/'));
    const headerNav = page.locator('header nav');

    await expect(
      headerNav.getByRole('link', { name: 'CV', exact: true })
    ).toBeVisible();
    await expect(
      headerNav.getByRole('link', { name: 'Blog', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Toggle theme' })
    ).toBeVisible();
  });
});
