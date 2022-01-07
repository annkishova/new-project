// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LocatorsPage = class LocatorsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getLoginLogo = page.locator('.login_logo');
    this.getLoginUserName = page.locator('.login_logo');
    this.getLoginPassword = page.locator('.login_logo');
    this.userName = page.locator("[name='user-name']");
    this.userPassword = page.locator("[name='password']");
    this.login = page.locator("#login-button")
    this.getItemIn = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.goBusket = page.locator('#shopping_cart_container');
    this.goCheckout = page.locator('#checkout');
    this.addContactName = page.locator('#first-name');
    this.ContactLastName = page.locator('#last-name');
    this.ContactZipCode = page.locator('#postal-code');
    this.SubmitButton = page.locator(".submit-button");
    this.FinishButton = page.locator("#finish");
    this.installation = page.locator('.login-box');
    this.tocList = page.locator('article ul > li > a');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async getLogo() {
    await this.getLoginLogo.first().click();
    await expect(this.installation).toBeVisible();
  }

  async getuserName() {
    await this.userName.click();
    await this.userName.fill("standard_user")
    await expect(this.userName).toBeVisible();
  }

  async getuserPassword() {
    await this.userPassword.click();
    await this.userPassword.fill("secret_sauce")
    await expect(this.userPassword).toBeVisible();
  }

  async getLogin() {
    await this.login.click();
    await expect(this.page.locator('.inventory_container')).toBeVisible();
  }

  async getItem() {
    await this.getItemIn.click();
    await expect(this.page.locator("#remove-sauce-labs-bike-light")).toBeVisible();
  }

  async goToBusket() {
    await this.goBusket.click();
  }

  async goToCheckout() {
    await this.goCheckout.click();
  }

  async addContacts() {
    await this.addContactName.click();
    await this.addContactName.fill("Anna")
    await expect(this.addContactName).toBeVisible();
  }

  async addContactLastName() {
    await this.ContactLastName.click();
    await this.ContactLastName.fill("Iv")
    await expect(this.ContactLastName).toBeVisible();
  }

  async addContactZipCode() {
    await this.ContactZipCode.click();
    await this.ContactZipCode.fill("444")
    await expect(this.ContactZipCode).toBeVisible();
  }

  async Submit() {
    await this.SubmitButton.click();
  }

  async Finish() {
    await this.FinishButton.click();
  }

  async addInBasket() {
    await this.goto();
    await this.getuserName;
    await this.getuserPassword();
    await this.getLogin();
    await this.getItem();
    //await expect(this.page.locator('h1').locator("text=Library")).toBeVisible();
  }


  async completeOrder() {
    await this.goto();
    await this.goToBusket();
    await this.goToCheckout();
    await this.addContactName();
    await this.ContactLastName();
    await this.ContactZipCode();
    await this.SubmitButton();
    await this.FinishButton();    
  }
}

//после завершения заказа проверить что успешно? [class="title"] >Checkout: Complete!<