import { test, expect } from '@playwright/test';
test('opens homepage', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'homepage.png' });
  await expect(page).toHaveTitle(/Example/);
});