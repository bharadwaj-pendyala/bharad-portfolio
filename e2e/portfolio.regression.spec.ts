import { expect, test } from '@playwright/test';

const BASE_PATH = '/bharad-portfolio';

test.describe('Portfolio regression suite', () => {
  test('navigation card links route to expected pages', async ({ page }) => {
    await page.goto(`${BASE_PATH}/`);

    const linkChecks: Array<{ name: RegExp; path: string }> = [
      { name: /About\.md/i, path: '/about' },
      { name: /CV\.pdf/i, path: '/cv' },
      { name: /Projects\//i, path: '/projects' },
      { name: /Posts\//i, path: '/blog' },
    ];

    for (const check of linkChecks) {
      await page.goto(`${BASE_PATH}/`);
      await page.getByRole('link', { name: check.name }).first().click();
      await expect(page).toHaveURL(new RegExp(`${BASE_PATH}${check.path}$`));
    }
  });

  test('header navigation visibility changes by viewport', async ({
    browser,
  }) => {
    const desktopPage = await browser.newPage({
      viewport: { width: 1280, height: 800 },
    });
    await desktopPage.goto(`${BASE_PATH}/`);
    const desktopNav = desktopPage.locator('header nav');

    await expect(
      desktopNav.getByRole('link', { name: 'About', exact: true })
    ).toBeVisible();
    await expect(
      desktopNav.getByRole('link', { name: 'Projects', exact: true })
    ).toBeVisible();
    await desktopPage.close();

    const mobilePage = await browser.newPage({
      viewport: { width: 390, height: 844 },
    });
    await mobilePage.goto(`${BASE_PATH}/`);
    const mobileNav = mobilePage.locator('header nav');

    await expect(
      mobileNav.getByRole('link', { name: 'About', exact: true })
    ).toBeHidden();
    await expect(
      mobileNav.getByRole('link', { name: 'Projects', exact: true })
    ).toBeHidden();
    await expect(
      mobileNav.getByRole('link', { name: 'CV', exact: true })
    ).toBeVisible();
    await expect(
      mobileNav.getByRole('link', { name: 'Posts', exact: true })
    ).toBeVisible();
    await mobilePage.close();
  });

  test('unknown route renders terminal 404 and returns home', async ({
    page,
  }) => {
    await page.goto(`${BASE_PATH}/missing-path`);

    await expect(
      page.getByRole('heading', { name: /404 - Page Not Found/i })
    ).toBeVisible();
    await expect(
      page.getByText(/cannot access '\/requested\/path'/i)
    ).toBeVisible();

    await page.getByRole('link', { name: /cd ~\/home/i }).click();
    await expect(page).toHaveURL(new RegExp(`${BASE_PATH}/?$`));
  });

  test('footer external links include secure attributes', async ({ page }) => {
    await page.goto(`${BASE_PATH}/`);

    const githubLink = page.locator('footer a', { hasText: 'GitHub' });
    const linkedinLink = page.locator('footer a', { hasText: 'LinkedIn' });

    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', /noopener noreferrer/);
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', /noopener noreferrer/);
  });

  test('metadata is present on home and cv pages', async ({ page }) => {
    await page.goto(`${BASE_PATH}/`);
    await expect(page).toHaveTitle(/Bharadwaj P/i);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /portfolio/i
    );

    await page.goto(`${BASE_PATH}/cv`);
    await expect(page).toHaveTitle(/CV/i);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Professional experience/i
    );
  });

  test('theme preference persists after reload', async ({ page }) => {
    await page.goto(`${BASE_PATH}/`);

    const html = page.locator('html');
    const toggleButton = page.getByRole('button', { name: 'Toggle theme' });
    await expect(toggleButton).toBeVisible();

    const initialIsDark = ((await html.getAttribute('class')) ?? '').includes(
      'dark'
    );

    await toggleButton.click();
    const toggledIsDark = !initialIsDark;

    await expect
      .poll(async () => {
        const className = (await html.getAttribute('class')) ?? '';
        return className.includes('dark');
      })
      .toBe(toggledIsDark);

    await page.reload();

    await expect
      .poll(async () => {
        const className = (await html.getAttribute('class')) ?? '';
        return className.includes('dark');
      })
      .toBe(toggledIsDark);
  });
});
