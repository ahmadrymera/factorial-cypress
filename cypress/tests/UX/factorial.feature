Feature: Prospace factorial calculator

  as an user
  I want to do factorial calculation
  So when I input the numbers and click the calculate button, it should show the correct factorial calculation results

  # P.S: You can add / change the example
  Scenario Outline: unable calculation user input except number
    Given the user open Prospace factorial calculator website
    When the user enter "<Number>"
    And the user click calculate button
    Then the result text should show an error "Please enter an integer"

    Examples:
      | Number   |
      | hello    |
      | test     |
      | check123 |
      | !@#4567  |

  # Sometimes my factorial function result will be different with the site result
  # Example when you input: 30, 35, 100
  # P.S: You can add / change the example
  Scenario Outline: successful factorial calculation for the number "<Number>"
    Given the user open Prospace factorial calculator website
    When the user enter "<Number>"
    And the user click calculate button
    Then the factorial number should show correctly

    Examples:
      | Number |
      | 5      |
      | 10     |
      | 17     |
      | 23     |
