let config = require("codeceptjs").config.get().helpers;

export const runnerConfig = {
  browserName: config.Playwright.browser,
  retryScenario: 2,
  waitShort: 2,
  waitMedium: 4,
  waitLong: 8,
};
