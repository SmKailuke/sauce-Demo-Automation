const {test,expect}= require('@playwright/test')
const {LoginPage} = require('../pages/LoginPage')
const users = require('../data/users')
const constants = require('../data/constants')

let loginPage;
test.beforeEach(async ({page})=>{
  loginPage = new LoginPage(page); //object of LoginPage class is created
  await loginPage.navigate();
})

test('Verify the login with valid credentials @smoke', async ({page})=>{
  await loginPage.login(users.StandardUser.Username,users.StandardUser.Password);

  // Assertion to verify successful login
  await expect(page).toHaveURL(constants.urls.inventory); 
  await expect(page.locator('.title')).toHaveText(constants.texts.productTitle);
})