/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// empty variable to store input number
let num;

// the factorial function to compare the result of factorial calculation from website
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

When("the user enter {string}", (number) => {
  // store input number to variable
  num = number;
  // get field element and type of number
  cy.get("#number").type(number);
});

When("the user click calculate button", () => {
  // get button calculate element and click the button
  cy.get("#getFactorial").click();
});
Then("the factorial number should show correctly", () => {
  // get the result element and assert the result comparing with our factorial function
  cy.get("#resultDiv").should(
    "have.text",
    `The factorial of ${num} is: ${factorial(num)}`
  );
});

Then("the result text should show an error {string}", (message) => {
  // get the result element and assert the text, it should be show and error message
  cy.get("#resultDiv").should("have.text", message);
});
