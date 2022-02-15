package uk.co.bbc.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.bbc.pages.searchPage;

public class MyStepsearch {


    @When("^I click on search option \"([^\"]*)\"$")
    public void iClickOnSearchOption(String search)  {
        new searchPage().clickOnsearchLink(search);
    }

    @Then("^I should navigate to page successfully$")
    public void iShouldNavigateToPageSuccessfully() {
    }
}
