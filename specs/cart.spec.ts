import { runnerConfig, testData } from "../sp/testSetup";

Feature("Cart Suite");

Before(({ I, homePage }) => {
  I.say("Given I'am in the main page");
  I.amOnPage("");
  homePage.isLoaded();
});

Scenario(
  "Add an item to the cart @cart @smoke",
  ({ I, homePage, productPage, cartPage }) => {
    homePage.isLoaded();
    homePage.openProduct();
    productPage.addToCart(testData.orderQuantity);
    cartPage.fillform(testData);
    I.see("Your order is complete!");
  }
).retry(runnerConfig.retryScenario);
