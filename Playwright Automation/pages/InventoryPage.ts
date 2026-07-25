import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly cartIcon: Locator;
  readonly addBackpackButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
  }

  async verifyInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.pageTitle).toHaveText('Products');
  }
  async addBackpackToCart() {
  await this.addBackpackButton.click();
}
}