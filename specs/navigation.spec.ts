import { runnerConfig } from "../sp/testSetup";

Feature("Navigation Suite");

Before(({ I }) => {
  I.say("Given I'am in the main page");
  I.amOnPage("");
  runnerConfig.browserName === "safari"
    ? I.say("do this")
    : I.say("test failed");
});

Scenario("Open store @smoke @navigation", ({ I, homePage }) => {
  homePage.isLoaded();
}).retry(runnerConfig.retryScenario);

Scenario(
  "Refresh action stays on the same page @navigation",
  async ({ I, homePage }) => {
    I.say("When I refresh the page");
    I.refreshPage();
    I.say("Then I'm still on the same URL");
    const newUrl = await I.grabCurrentUrl();
    I.assertEqual(newUrl, process.env["URL"]), "The URL is not the same";
    homePage.isLoaded();
  }
).retry(runnerConfig.retryScenario);
