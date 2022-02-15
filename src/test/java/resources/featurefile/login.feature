Feature: As a QA, I would like to verify all negative scenarios for login
  @Smoke
  Scenario Outline: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it
  contains is as expected.
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errorMessage>"
    Examples:
      | email              | password | errorMessage                             |
      | abcd123@gmail.com  | xyz123   | It needs to be eight characters or more. |
      | xyz123@gmail.com   | abc123   | It needs to be eight characters or more. |
      | adfafasd@gmail.com | xyz123   | It needs to be eight characters or more. |

