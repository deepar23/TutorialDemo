Feature: Tutorial Management

  Scenario: Create a new tutorial

    Given user opens the application

    When user creates a tutorial with title "Playwright"

    And description "BDD Framework"

    Then tutorial should be created successfully