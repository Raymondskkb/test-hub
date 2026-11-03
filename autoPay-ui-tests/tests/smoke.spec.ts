import { test, expect } from '@playwright/test';
test('opens homepage', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'homepage.png' });
  await expect(page).toHaveTitle(/Example/);
});

test('opens selenium homepage', async ({ page }) => {
  await page.goto('https://www.selenium.dev/');
  await page.screenshot({ path: 'homepage.png' });
  await expect(page).toHaveTitle(/Selenium/);
});
