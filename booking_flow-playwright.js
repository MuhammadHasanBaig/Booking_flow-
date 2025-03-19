//const { chromium } = require('playwright');

import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 2000
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://new-staging.get-licensed.co.uk/');
  await page.getByRole('button', { name: 'I Acknowledge' }).click();
  await page.getByRole('link', { name: 'Find SIA courses' }).click();
  await page.getByLabel('1 / 6').getByRole('link', { name: 'Book Now' }).click();
  await page.locator('div').filter({ hasText: /^Birmingham$/ }).nth(2).click();
  await page.getByRole('button', { name: 'View course dates' }).click();
  await page.locator('[id="\\31 2-1-0-51375"]').getByRole('button', { name: 'Book Now' }).click();
  await page.getByRole('button', { name: 'Select Package' }).nth(1).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Testing');
  await page.getByRole('textbox', { name: 'First name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last name' }).fill('User');
  await page.getByRole('textbox', { name: 'Last name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email address' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Mobile number' }).fill('234567898765');
  await page.getByRole('textbox', { name: 'Post code' }).click();
  await page.getByRole('textbox', { name: 'Post code' }).fill('lond');
  await page.getByText('London 2773881 Addresses').click();
  await page.getByText('Blackfaulds Cottage, Doggetts').click();
  await page.getByRole('button', { name: 'Save & Continue' }).click();
  await page.getByRole('radio', { name: 'Add EFAW qualification to my' }).check();
  await page.getByRole('checkbox', { name: 'Leadership Certificate' }).check();
  await page.getByRole('button', { name: 'Continue to payment' }).click();
  await page.getByRole('radio', { name: 'Pay with card' }).check();
  await page.locator('iframe[name="cae9b91d-9a8d-49f5-8bcd-0479f315f695"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' }).click();
  await page.locator('iframe[name="cae9b91d-9a8d-49f5-8bcd-0479f315f695"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' }).fill('4242 4242 4242 42422');
  await page.locator('iframe[name="cae9b91d-9a8d-49f5-8bcd-0479f315f695"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' }).press('Tab');
  await page.locator('iframe[name="\\36 bc09748-b9b6-4f8c-9984-bee776f2351d"]').contentFrame().getByRole('textbox', { name: 'Card expiration date' }).fill('12/26');
  await page.locator('iframe[name="\\36 bc09748-b9b6-4f8c-9984-bee776f2351d"]').contentFrame().getByRole('textbox', { name: 'Card expiration date' }).press('Tab');
  await page.locator('iframe[name="\\33 796e8a5-52b7-41cc-8fa1-13c291d507ed"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).fill('12');
  await page.locator('iframe[name="\\33 796e8a5-52b7-41cc-8fa1-13c291d507ed"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).click();
  await page.locator('iframe[name="\\33 796e8a5-52b7-41cc-8fa1-13c291d507ed"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).fill('123');
  await page.locator('iframe[name="\\33 796e8a5-52b7-41cc-8fa1-13c291d507ed"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).press('Tab');
  await page.getByRole('textbox', { name: 'Name on card' }).fill('Hasan');
  await page.getByRole('checkbox', { name: 'Send me the latest job' }).check();
  await page.getByRole('checkbox', { name: 'I agree to the Get Licensed' }).check();
  await page.getByRole('button', { name: 'Submit Payment' }).click();
  await page.goto('https://new-staging.get-licensed.co.uk/booking/checkout/thankyou?q=7270c81e-bcd6-4e66-87b1-75536fd4f5c8');

  // ---------------------
  await context.close();
  await browser.close();
})();