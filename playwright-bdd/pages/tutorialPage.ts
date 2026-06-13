import { Page } from '@playwright/test';

export class tutorialPage {

    constructor(private page: Page) {}

    async open() {
        await this.page.goto("http://localhost:8081");
    }

    async createTutorial(
        title: string,
        description: string
    ) {

        await this.page.getByText("Add").click();

        await this.page.locator("#title")
            .fill(title);

        await this.page.locator("#description")
            .fill(description);

        await this.page.getByText("Submit")
            .click();
    }
}