import { test, expect } from '@playwright/test';

test('GET/ Products', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products');
  expect(response.status()).toBe(403);  //fix-me: change to 200 when API is publicly accessible
});