const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
    }

    async addToCart() {
        const productContainer = this.page.locator('.single-products').filter({ hasText: 'Blue Top' });
        const addToCartButton = productContainer.locator('a.add-to-cart').first();
        await addToCartButton.click();
        const successModal = this.page.locator('.modal-content');
        await expect(successModal).toBeVisible();
    }

    async checkTheProductAdded() {
        await expect(this.page.getByText('Added!')).toBeVisible();
        await this.page.getByRole('link', { name: 'View Cart' }).click();
        const cartTable = this.page.locator('#cart_info_table');
        await expect(cartTable).toContainText('Blue Top');
    }

    async accessTheCart() {
        await this.page.getByRole('link', { name: ' Cart' }).click();
        const cartTable = this.page.locator('#cart_info_table');
        await expect(cartTable).toContainText('Blue Top');
    }

    async deleteTheCart() {
        const cartTable = this.page.locator('#cart_info_table');
        await  cartTable.locator('td.cart_delete a').click();
        await expect(this.page.getByText('Cart is empty!')).toBeVisible();
    }
}

module.exports = CartPage;
