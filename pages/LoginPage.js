class LoginPage {

    constructor(page) {
        this.page = page;
    }


    async login() {
        await this.page.goto('https://automationexercise.com');
    }

}

module.exports = LoginPage;