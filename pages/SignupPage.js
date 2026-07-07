class SignupPage {

    constructor(page) {
        this.page = page;
    }

    async signupBegin(personData) {
        await this.page.getByRole('link', { name: 'Signup / Login' }).click();
        await this.page.locator('[data-qa="signup-name"]').fill(personData.name);
        await this.page.locator('[data-qa="signup-email"]').fill(personData.email);
        await this.page.locator('[data-qa="signup-button"]').click();
    }

    async signupFull(personData) {
        const genderSelector = `#id_gender${personData.genderId || 1}`;
        await this.page.locator(genderSelector).click();
        await this.page.locator('#password').fill(personData.password);
        await this.page.locator('#first_name').fill(personData.firstName);
        await this.page.locator('#last_name').fill(personData.lastName);
        await this.page.locator('#address1').fill(personData.address);
        await this.page.locator('#state').fill(personData.state);
        await this.page.locator('#city').fill(personData.city);
        await this.page.locator('#zipcode').fill(personData.zipcode);
        await this.page.locator('#mobile_number').fill(personData.mobileNumber);
        await this.page.locator('#id_gender1').click();
        await this.page.getByRole('button', { name: 'Create Account' }).click();
    }

}

module.exports = SignupPage;
