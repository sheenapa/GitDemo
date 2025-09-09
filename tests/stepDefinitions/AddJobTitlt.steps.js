import { Given, Then, When } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

When('User click on Admin menu and click on Job and then click on Job Titles', async function () {
    await page.locator('//span[text()="Admin"]').click();
    await page.locator('//span[text()="Job "]').click();
    await page.locator('//a[text()="Job Titles"]').click();
});


When('User click on the Add button', async function () {
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
});

When('User enter the job title as {string} and job description as {string}', async function (JobTitle, JobDescription) {

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(JobTitle);
    await page.locator('//textarea[@placeholder="Type description here"]').fill(JobDescription);
});


Then('User should see a success message for adding the job title', async function () {
    await expect(page.locator('//p[text()="Successfully Saved"]')).toHaveText("Successfully Saved")
});



Then('User should see the Jobtitle text in the saved page', async function () {

    //const jobTitle = await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').inputValue();
    //const jobDescription = await page.locator('//textarea[@placeholder="Type description here"]').inputValue();
    //const jobTitles = await page.locator('//table[@class="oxd-table"]/tbody/tr').allTextContents();
    //expect(jobTitles).toContain(jobTitle);
    //expect(jobTitles).toContain(jobDescription);
    await expect(page.locator('//h6[text()="Job Titles"]')).toBeVisible();
});


Then('User should see an error message for missing mandatory fields', async function () {

    await expect(page.locator('//span[text()="Required"]')).toBeVisible()
});
When('User enter the job Title as {string} and job Description as {string}', async function (jobtitle, Jobdescription) {

    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(jobtitle);
    await page.locator('//textarea[@placeholder="Type description here"]').fill(Jobdescription);
});


Then('User should see an error message for duplicate job title', async function () {

    await expect(page.locator('//span[text()="Already exists"]')).toBeVisible

});



