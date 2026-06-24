const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');

test('Select a product and add it to the cart on Automation Exercise', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);

  await loginPage.login();
  await cartPage.addToCart();

});
