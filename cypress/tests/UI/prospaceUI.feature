Feature: Prospace UI

  as an user
  I want to use prospace site
  So it should show all element, text and URL

  # all the test will be failed, because the site has wrong page for Terms and Conditions and Privacy
  Scenario Outline: success navigate to "<Footer>"
    Given the user open Prospace factorial calculator website
    When the user click "<Footer>" on the Footer
    Then the user should redirect to "<Correct URL>"
    And the page should show a text "Page Text"

    Examples:
      | Footer               | Correct URL   | Page Text                                                                             |
      | Terms and Conditions | /terms.html   | This is the terms and conditions document. We are not yet ready with it. Stay tuned!" |
      | Privacy              | /privacy.html | This is the privacy document. We are not yet ready with it. Stay tuned!               |


  # Comment Header and Button to make test is success, because Header and Button still have a wrong text
  Scenario: check prospace UI
    Given the user open Prospace factorial calculator website
    Then the site should show the correct UI following this data:
      | Element     | Text                          |
      | Button      | Calculate!                    |
      | Header      | Prospace factorial calculator |
      | Input Field | Enter an integer              |

