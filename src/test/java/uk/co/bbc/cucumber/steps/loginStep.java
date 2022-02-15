package uk.co.bbc.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.co.bbc.pages.loginPage;

public class loginStep {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new loginPage().clickOnsign();
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
       new loginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new loginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new loginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String message)  {
        Assert.assertEquals("Error message not display",message,new loginPage().getErrorMessage());

    }
}
