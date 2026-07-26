import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';



test('Valid user can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.verifyInventoryPage();

  await inventoryPage.addBackpackToCart();
  await cartPage.verifyCartBadge('1');
  
  await cartPage.openCart();
  await cartPage.verifyProductInCart('Sauce Labs Backpack');
});