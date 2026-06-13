import {
  Before,
  After
} from "@cucumber/cucumber";

import {
  chromium,
  Browser,
  Page
} from "@playwright/test";

export let browser: Browser;
export let page: Page;

Before(async () => {

    browser = await chromium.launch({
        headless: false
    });

    page = await browser.newPage();
});

After(async () => {

    await page.close();
    await browser.close();
});