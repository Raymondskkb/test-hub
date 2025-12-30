import { test, expect } from '@playwright/test';
test('opens homepage', async ({ page }) => {
  await page.goto('https://google.com');
  await page.screenshot({ path: 'google.png' });
  await expect(page).toHaveTitle(/Google/);
});