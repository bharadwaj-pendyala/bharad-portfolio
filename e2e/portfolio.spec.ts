import { expect, test } from '@playwright/test';

const BASE_PATH = '/bharad-portfolio';

test.describe('Portfolio website', () => {
  test('loads the home page and core navigation', async ({ page }) => {
    await page.goto(`${BASE_PATH}/`);
    const headerNav = page.locator('header nav');

    await expect(page).toHaveTitle(/Bharadwaj P/i);
    await expect(
      headerNav.getByRole('link', { name: 'CV', exact: true })
    ).toBeVisible();
    await expect(
      headerNav.getByRole('link', { name: 'Posts', exact: true })
    ).toBeVisible();
    await expect(
      headerNav.getByRole('link', { name: 'Projects', exact: true })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { name: /Technical Excellence/i })
    ).toBeVisible();
    await expect(
      page.locator('a[href="/bharad-portfolio/about"]').first()
    ).toBeVisible();
  });

  test('opens each primary section route directly', async ({ page }) => {
    const checks: Array<{ path: string; text: RegExp }> = [
      { path: '/about', text: /About Bharadwaj/i },
      { path: '/cv', text: /Bharadwaj Pendyala/i },
      { path: '/projects', text: /A collection of projects showcasing/i },
      { path: '/blog', text: /Thoughts, tutorials, and insights/i },
    ];

    for (const check of checks) {
      await page.goto(`${BASE_PATH}${check.path}`);
      await expect(page).toHaveURL(new RegExp(`${BASE_PATH}${check.path}$`));
      await expect(page.getByText(check.text)).toBeVisible();
    }
  });

  test('navigates from blog list to post and back', async ({ page }) => {
    await page.goto(`${BASE_PATH}/blog`);

    await page
      .getByRole('link', {
        name: /Building a Modern Portfolio with Next.js and Tailwind CSS/i,
      })
      .click();

    await expect(page).toHaveURL(/\/bharad-portfolio\/blog\/post-1$/);
    await expect(
      page.getByRole('heading', {
        name: /Building a Modern Portfolio with Next.js and Tailwind CSS/i,
      })
    ).toBeVisible();

    await page.getByRole('link', { name: /Back to Blog/i }).click();
    await expect(page).toHaveURL(/\/bharad-portfolio\/blog$/);
  });

  test('toggles theme from header control', async ({ page }) => {
    await page.goto(`${BASE_PATH}/`);

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
    await page.goto(`${BASE_PATH}/`);
    const headerNav = page.locator('header nav');

    await expect(
      headerNav.getByRole('link', { name: 'CV', exact: true })
    ).toBeVisible();
    await expect(
      headerNav.getByRole('link', { name: 'Posts', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Toggle theme' })
    ).toBeVisible();
  });
});
