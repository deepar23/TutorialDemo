import {
    Given,
    When,
    Then
} from "@cucumber/cucumber";

import { tutorialPage }
from "../pages/tutorialPage";

import { page }
from "./hooks";

const tutorial = () => new tutorialPage(page);

Given(
"user opens the application",

async function () {

    await tutorial().open();
});

When(
"user creates a tutorial with title {string}",

async function (title) {

    this.title = title;
});

When(
"description {string}",

async function (description) {

    await tutorial().createTutorial(
        this.title,
        description
    );
});

Then(
"tutorial should be created successfully",

async function () {

    // Add validation here

});