const { Given, When, Then} =  require("@cucumber/cucumber");

const {expect} = require('@playwright/test');



Given('User launch the application', async function () {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

});

When('User enter the username as {string} and password as {string}', async function (username, password) {
    await page.fill('input[name="username"]', username);
    await page.fill('input[name="password"]', password);
});

When('User click on the login button', async function () {
    await page.click('button[type="submit"]');
});

Then('User should be navigated to the dashboard', async function () {
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

Then('User should see an login error message', async function () {
    await expect(page.locator('//p[text()="Invalid credentials"]')).toBeVisible();
});






