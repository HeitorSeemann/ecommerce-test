class SignupPage {

    constructor(page) {
        this.page = page;
    }

    async signupBegin() {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
        await this.page.locator('[data-qa="signup-name"]').fill('Heitor');
        await this.page.locator('[data-qa="signup-email"]').fill('heitor@' + Date.now());
        await this.page.locator('[data-qa="signup-button"]').click();
    }

    async signupFull() {
        await this.page.locator('#id_gender1').click();
        await this.page.locator('#password').fill("pass");
        await this.page.locator('#first_name').fill("Heitor");
        await this.page.locator('#last_name').fill("Seemann");
        await this.page.locator('#address1').fill("Street 5");
        await this.page.locator('#state').fill("RS");
        await this.page.locator('#city').fill("POA");
        await this.page.locator('#zipcode').fill("545454");
        await this.page.locator('#mobile_number').fill("4343434");
        await this.page.locator('#id_gender1').click();
        await this.page.getByRole('button', { name: 'Create Account' }).click();
    }

}

module.exports = SignupPage;