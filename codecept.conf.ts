require("dotenv").config();
require("ts-node/register");

exports.config = {
  tests: "./specs/*.spec.ts",
  timeout: 20,
  output: "./reports",
  helpers: {
    Playwright: {
      url: process.env["URL"],
      restart: false,
      waitForNavigation: "networkidle0",
      waitForAction: 500,
      browser: "chromium",
      windowSize: "1920x1024",
    },
    AssertWrapper: {
      require: "codeceptjs-assert",
    },
  },
  bootstrap: null,
  mocha: {},
  require: ["ts-node/register"],
  name: "codeceptjs-frontend",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
