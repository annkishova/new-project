const { test, expect } = require('@playwright/test');
const { syncBuiltinESMExports } = require('module');
const { LocatorsPage } = require('./locators.po');


test('Login', async ({ page }) => {
    const Locators = new LocatorsPage(page);
    await Locators.goto('https://www.saucedemo.com/');
    await Locators.getLogo();
    await expect(this.installationSelector).toBeVisible();
    await Locators.getuserName();
    await expect(this.userNameSelector).toBeVisible();
    await Locators.getuserPassword();
    await Locators.getLogin();
  });


  //Положить товар в корзину
  test('addInBasket', async ({ page }) => {
    const Locators = new LocatorsPage(page);
    await Locators.goto();
    await Locators.getuserName();
    await Locators.getuserPassword();
    await Locators.getLogin();
    await Locators.getItem();
    //добавила бы проверку что над корзиной изменилось кол-во товаров, но не знаю как сравнить и не знаю как этот локатор вписать
    //await expect(playwrightDev.tocList.first()).toHaveText('Usage');
  });

  //Оформить заказ
  test('completeOrder', async ({ page }) => {
    const Locators = new LocatorsPage(page);
    await Locators.goto();
    await Locators.getuserName();
    await Locators.getuserPassword();
    await Locators.getLogin();
    await Locators.getItem();
    //переход в корзину
    await Locators.goToBusket();
    await Locators.goToCheckout();
    //ввод личных данных
    await Locators.addContacts();
    await Locators.addContactLastName();
    await Locators.addContactZipCode();
    
    //переход по кнопке
    await Locators.Submit();
    //проверка стоимости
    await Locators.Finish();
    //проверка на успешность
  });