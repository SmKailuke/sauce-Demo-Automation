const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { InventoryPage } = require('../pages/inventory')
const constants = require('../data/constants')
const users = require('../data/users')

let loginPage;
let inventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page); //object of LoginPage class is created
    inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login(users.StandardUser.Username, users.StandardUser.Password);
})

test('card badge update after adding product to cart', async ({ page }) => {
    await inventoryPage.addProductToCart(constants.texts.InventoryProducts1);
    expect(await inventoryPage.getCartBadgeCount()).toBe('1');

    await inventoryPage.addProductToCart(constants.texts.InventoryProducts2);
    expect(await inventoryPage.getCartBadgeCount()).toBe('2');


})