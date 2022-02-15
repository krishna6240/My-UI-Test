package uk.co.bbc.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.bbc.utility.Utility;

public class searchPage extends Utility {
    private static final Logger log = LogManager.getLogger(searchPage.class.getName());
    public searchPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(id = "orb-search-q")
    WebElement searchLink;
    public void clickOnsearchLink(String search) {
        sendTextToElement(searchLink,search);
        log.info("Clicking on login link : " + searchLink.toString());
    }

}
