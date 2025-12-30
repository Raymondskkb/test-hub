import { test, expect } from '@playwright/test';
test('opens homepage', async ({ page }) => {
  await page.goto('https://google.com');
  await page.screenshot({ path: 'google.png' });
  await expect(page).toHaveTitle(/Google/);
});

test('opens homepage 1', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.screenshot({ path: 'example.png' });
  await expect(page).toHaveTitle(/Example/);
});

test('opens homepage 2', async ({ page }) => {
  await page.goto('https://en.wikipedia.org/wiki/1');
  await page.screenshot({ path: 'wikipedia.png' });
  await expect(page).toHaveTitle(/1 - Wikipedia/);
});