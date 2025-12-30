// example.spec.ts
import { test, expect } from '@playwright/test';

test('should be able to add a new todo item', async ({ page }) => {
  // 1. Navigate to the application
  await page.goto('demo.playwright.dev');

  // 2. Locate the input field and fill it with text
  await page.locator('.new-todo').fill('Buy milk');

  // 3. Press Enter to submit the new item
  await page.locator('.new-todo').press('Enter');

  // 4. Assert that the new item is visible in the list
  const todoItem = page.locator('.todo-list li .view label', { hasText: 'Buy milk' });
  await expect(todoItem).toBeVisible();
});
