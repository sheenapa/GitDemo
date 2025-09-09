import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";


When('User click on PIM menu and click on Add Employee', async function () {
    await page.locator('//span[text()="PIM"]').click();
    await page.locator('//a[text()="Add Employee"]').click();
});
When('User enter the firstname as {string} and lastname as {string}', async function (firstName, lastName) {
    await page.locator('input[name="firstName"]').fill(firstName);
    await page.locator('input[name="lastName"]').fill(lastName);
});

 When('User capture the employee id as {string}', async function (employeeId) {
          let r = (Math.random() + 1).toString(36).substring(7);
    console.log("random", r);
    await page.locator('//label[text()="Employee Id"]/following::div/input').fill(employeeId +r); 
         });
When('User click on the save button', async function () {
    await page.locator('button[type="submit"]').click();
});

Then('User should be navigated to the personal details page', async function () {
    //await page.waitForURL('**/personal-details');
    await expect(page.locator('//h6[text()="Personal Details"]')).toBeVisible();
});
Then('User should see the error message for mandatory fields', async function () {
    await expect(page.locator('(//span[text()="Required"])[1]')).toBeVisible();
    await expect(page.locator('(//span[text()="Required"])[2]')).toBeVisible();
});