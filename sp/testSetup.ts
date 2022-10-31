const faker = require("@faker-js/faker");
let config = require("codeceptjs").config.get().helpers;

export const runnerConfig = {
  browserName: config.Playwright.browser,
  retryScenario: 2,
  waitShort: 2,
  waitMedium: 4,
  waitLong: 8,
};

export const testData = {
  productName: "Sunglasses",
  orderQuantity: faker.datatype.number({ min: 1, max: 5 }),
  emailAddress: faker.internet.email(),
  streetAddress: faker.address.streetAddress(),
  zipCode: faker.address.zipCode("####"),
  city: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  ccNumber: faker.finance.creditCardNumber("visa"),
  ccMonth: faker.date.month(),
  ccYear: 2022,
  cvvNumber: faker.finance.creditCardCVV(),
};
