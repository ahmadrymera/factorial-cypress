/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Then(
  "the site should show the correct UI following this data:",
  (dataTable) => {
    // shorthand of switch case
    let element = {
      Header: "h1",
      "Input Field": "#number",
      "Button ": "#getFactorial",
    };
    dataTable.hashes().forEach((dataInput) => {
      // check if element is input field
      if (dataInput["Element"] == "Input Field") {
        // assert using placeholder text
        cy.get(`${element[dataInput["Element"]]}`).should(
          "have.attr",
          "placeholder",
          dataInput["Text"]
        );
      } else {
        // assert using text
        cy.get(`${element[dataInput["Element"]]}`).should(
          "have.text",
          dataInput["Text"]
        );
      }
    });
  }
);

When("the user click {string} on the Footer", (footer) => {
  // get a element contains with footer text, and click
  cy.get("a").contains(footer).click();
});
Then("the user should redirect to {string}", (url) => {
  // get an url and check the url should include the correct url path
  cy.url().should("include", url);
});
Then("the page should show a text {string}", (text) => {
  // get an body text and check the text should have correct text
  cy.get("body").should("have.text", text);
});
