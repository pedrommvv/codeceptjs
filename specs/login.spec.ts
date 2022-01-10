Feature('Test Feature - Test Suite');

Scenario(
  'Open Site - Test case @smoke',
  ({ I }) => {
    I.say("Given I'am in the main page");
    //I.amOnPage(process.env['URL']);
    I.amOnPage('http://www.google.pt');
  }
).retry(2);
