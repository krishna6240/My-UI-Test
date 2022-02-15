$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "As a QA, I would like to verify all negative scenarios for login",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 12,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "It needs to be eight characters or more."
      ],
      "line": 13,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "It needs to be eight characters or more."
      ],
      "line": 14,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "It needs to be eight characters or more."
      ],
      "line": 15,
      "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7669457800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 195140700,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 194679200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "loginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 1340753700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "loginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 134988700,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 129550400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It needs to be eight characters or more.",
      "offset": 32
    }
  ],
  "location": "loginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 74725500,
  "status": "passed"
});
formatter.after({
  "duration": 1046650100,
  "status": "passed"
});
formatter.before({
  "duration": 3579303200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 157361000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "loginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 1503507800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "loginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 174991100,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 116676900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It needs to be eight characters or more.",
      "offset": 32
    }
  ],
  "location": "loginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 79351900,
  "status": "passed"
});
formatter.after({
  "duration": 955412200,
  "status": "passed"
});
formatter.before({
  "duration": 4062990900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it",
  "description": "contains is as expected.",
  "id": "as-a-qa,-i-would-like-to-verify-all-negative-scenarios-for-login;select-‘sign-in’,-and-enter-as-many-negative-scenarios-as-possible.-verify-that-a-error-message-is-displayed-and-the-text-that-it;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the error message \"It needs to be eight characters or more.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 25700,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginLink()"
});
formatter.result({
  "duration": 107826500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "loginStep.iEnterEmail(String)"
});
formatter.result({
  "duration": 1395282400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "loginStep.iEnterPassword(String)"
});
formatter.result({
  "duration": 140869000,
  "status": "passed"
});
formatter.match({
  "location": "loginStep.iClickOnLoginButton()"
});
formatter.result({
  "duration": 100980100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "It needs to be eight characters or more.",
      "offset": 32
    }
  ],
  "location": "loginStep.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 52665400,
  "status": "passed"
});
formatter.after({
  "duration": 977195400,
  "status": "passed"
});
formatter.uri("match.feature");
formatter.feature({
  "line": 1,
  "name": "As a business user, I would like to make a record of all teams which are playing today",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3316734600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Output all team names with a match today. If there  are no matches today, output a message to convey this.",
  "description": "",
  "id": "as-a-business-user,-i-would-like-to-make-a-record-of-all-teams-which-are-playing-today;output-all-team-names-with-a-match-today.-if-there--are-no-matches-today,-output-a-message-to-convey-this.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should navigate to page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsearch.iShouldNavigateToPageSuccessfully()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.after({
  "duration": 965947400,
  "status": "passed"
});
formatter.uri("sports.feature");
formatter.feature({
  "line": 1,
  "name": "As a sports user, I would like to read about all articles related to sports",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3321756000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Use the search option to find all articles related to ‘sports’. Output the first heading and the last heading returned on the page.",
  "description": "",
  "id": "as-a-sports-user,-i-would-like-to-read-about-all-articles-related-to-sports;use-the-search-option-to-find-all-articles-related-to-‘sports’.-output-the-first-heading-and-the-last-heading-returned-on-the-page.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on search option \"sports\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sports",
      "offset": 26
    }
  ],
  "location": "MyStepsearch.iClickOnSearchOption(String)"
});
formatter.result({
  "duration": 381196100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepsearch.iShouldNavigateToPageSuccessfully()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.after({
  "duration": 1128335300,
  "status": "passed"
});
});