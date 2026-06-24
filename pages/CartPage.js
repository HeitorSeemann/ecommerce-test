const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
    }

    async addToCart() {
        const productContainer = this.page.locator('.single-products').filter({ hasText: 'Blue Top' });

        const addToCartButton = productContainer.locator('a.add-to-cart').first();
        await addToCartButton.click();

        // 💡 FIXED: Re-added this variable so the modal steps don't crash
        const successModal = this.page.locator('.modal-content');
        await expect(successModal).toBeVisible();

        await this.page.waitForTimeout(7000);

        await expect(this.page.getByText('Added!')).toBeVisible();

        await successModal.locator('u', { hasText: 'View Cart' }).click();

        const cartTable = this.page.locator('#cart_info_table');
        await expect(cartTable).toContainText('Blue Top');
    }
}

module.exports = CartPage;
