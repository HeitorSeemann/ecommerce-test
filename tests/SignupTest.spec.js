const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/SignupPage');
const PersonService = require('../services/PersonService');

test.describe('User Registration Flow', () => {

    test('Should register user using dynamic environment data and random email', async ({ page }) => {
        const signupPage = new SignupPage(page);
        const personService = new PersonService(page);
        const personData = await personService.mockData();
        await page.goto('/'); 
        await signupPage.signupBegin(personData);
        await signupPage.signupFull(personData);
        await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
    });

});
