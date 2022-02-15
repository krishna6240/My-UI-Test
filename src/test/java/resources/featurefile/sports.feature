Feature: As a sports user, I would like to read about all articles related to sports
  @Smoke
  Scenario: Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.
    Given I am on homepage
    When I click on search option "sports"
    Then I should navigate to page successfully
