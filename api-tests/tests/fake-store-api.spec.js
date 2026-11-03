import { test, expect } from '@playwright/test';

test('GET/ Products', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products');
  const statusCode = response.status();

  // Verifies the code is one of the allowed numbers
  expect([200, 403]).toContain(statusCode);  //fix-me: change to 200 when API is publicly accessible
});