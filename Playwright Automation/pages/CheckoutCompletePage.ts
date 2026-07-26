import { Page, Locator, expect } from '@playwright/test';

export class CheckoutCompletePage {
  readonly page: Page;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
  }

  async verifyOrderSuccess() {
    await expect(this.completeHeader)
      .toHaveText('Thank you for your order!');
  }
}