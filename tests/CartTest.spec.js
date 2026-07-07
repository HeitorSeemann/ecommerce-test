const { test, expect } = require('@playwright/test');
const CartPage = require('../pages/CartPage');

let cartPage;

test.beforeEach(async ({ page }) => {
  cartPage = new CartPage(page);
});

test('Select a product and add it to the cart on Automation Exercise ', async ({ page }) => {
  await page.goto('/'); 
  await cartPage.addToCart();
  await cartPage.checkTheProductAdded();
  await page.goto('/'); 
  await cartPage.accessTheCart();
  await cartPage.deleteTheCart();
});