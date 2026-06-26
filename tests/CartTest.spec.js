const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');

let loginPage, cartPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  cartPage = new CartPage(page);
});


test('Select a product and add it to the cart on Automation Exercise', async ({ page }) => {
  await loginPage.login();
  await cartPage.addToCart();
  await cartPage.checkTheProductAdded();
  await loginPage.login();
  await cartPage.accessTheCart();
  await cartPage.deleteTheCart();
});