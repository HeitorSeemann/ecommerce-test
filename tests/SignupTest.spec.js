const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');

let loginPage, signupPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  signupPage = new SignupPage(page);
});


test('Should signup', async ({ page }) => {
  await loginPage.login();
  await signupPage.signupBegin();
  await signupPage.signupFull();
});


