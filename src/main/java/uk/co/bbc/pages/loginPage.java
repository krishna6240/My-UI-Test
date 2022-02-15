package uk.co.bbc.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bbc.utility.Utility;

public class loginPage extends Utility {
    private static final Logger log = LogManager.getLogger(loginPage.class.getName());

    public loginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "idcta-username")
    WebElement signIn;

    @CacheLookup
    @FindBy(id = "user-identifier-input")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "password-input")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "submit-button")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'It needs to be eight characters or more.')]")
    WebElement errorMessage;

    public void clickOnsign() {
       clickOnElement(signIn);
        log.info("Getting text from : " + signIn.toString());

    }

    public void enterEmailId(String email) {

        sendTextToElement(emailField, email);
    }

    public void enterPassword(String password) {

        sendTextToElement(passwordField, password);
    }

    public void clickOnLoginButton() {

        clickOnElement(signInButton);
    }

    public String getErrorMessage() {

        return getTextFromElement(errorMessage);
    }

    public void loginToApplication(String email, String password) {

        enterEmailId(email);
        enterPassword(password);
        clickOnLoginButton();
    }
}
