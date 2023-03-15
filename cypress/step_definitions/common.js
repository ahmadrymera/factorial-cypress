import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user open Prospace factorial calculator website", () => {
  // visiting url
  cy.visit(Cypress.config("baseUrl"));
});
