// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.LocatorsPage = class LocatorsPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  export default class LocatorsPage extends Selector{
    getLoginLogoSelector: string = ".login_logo";
    getLoginUserNameSelector: string = '.login_logo';
    getLoginPasswordSelector : string = '.login_logo';
    userNameSelector : string = "[name='user-name']";
    userPasswordSelector : string = "[name='password']";
    loginSelector : string = "#login-button";
    getItemInSelector : string = '#add-to-cart-sauce-labs-bike-light';
    goBusketSelector : string = '#shopping_cart_container';
    goCheckoutSelector : string = '#checkout';
    addContactNameSelector : string = '#first-name';
    ContactLastNameSelector : string = '#last-name';
    ContactZipCodeSelector : string = '#postal-code';
    SubmitButtonSelector : string = ".submit-button";
    FinishButtonSelector : string = "#finish";
    installationSelector : string = '.login-box';
  
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async getLogo() {
    const getLoginLogo: ElementHandle = await this.find(this.getLoginLogoSelector);
    await this.getLoginLogo.first().click();
  }

  async getuserName() {
    const userName: ElementHandle = await this.find(this.getLoginUserNameSelector);
    await this.userName.click().fill("standard_user");  
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