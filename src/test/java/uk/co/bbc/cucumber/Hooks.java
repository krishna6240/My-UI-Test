package uk.co.bbc.cucumber;

import com.cucumber.listener.Reporter;
import uk.co.bbc.propertyreader.PropertyReader;
import uk.co.bbc.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.bbc.propertyreader.PropertyReader;
import uk.co.bbc.utility.Utility;

import java.io.IOException;


public class Hooks extends Utility {

    @Before
    public void setUP(){
        selectBrowser(PropertyReader.getInstance().getProperty("browser"));
        Reporter.assignAuthor("krishna");

    }
    @After
    public void tearDown(Scenario scenario) {
        if(scenario.isFailed()){

            String screenShotPath = Utility.getScreenshot(driver,scenario.getName().replace("","_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        closeBrowser();
    }
}
