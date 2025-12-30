import { test, expect } from '@playwright/test';

test('opens homepage', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products');
  expect(response.status()).toBe(200);
  expect(await response.json()).toBeInstanceOf(Array);
});