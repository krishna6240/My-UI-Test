Feature: As a business user, I would like to make a record of all teams which are playing today
  @Smoke
  Scenario: Output all team names with a match today. If there  are no matches today, output a message to convey this.
    Given I am on homepage
    Then I should navigate to page successfully

