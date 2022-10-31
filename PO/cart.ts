const { I } = inject();

export = {
  cart: {
    totalItems: "h3",
    emptyCartBtn: ".cymbal-button-secondary",
    continueShoppingBtn: "a[role='button']",
  },
  form: {
    shipping: {
      email: "#email",
      streetAddress: "#street_address",
      zipCode: "#zip_code",
      city: "#city",
      state: "#state",
      country: "#country",
    },
    payment: {
      ccNumber: "#credit_card_number",
      month: "#credit_card_expiration_month",
      year: "#credit_card_expiration_year",
      cvvCode: "#credit_card_cvv",
    },
    placeOrderBtn: ".col button",
  },

  getQuantity() {
    //TODO
  },
  continueShopping(quantity: string) {
    I.click(this.continueShoppingBtn);
  },

  emptyCard(quantity: string) {
    I.click(this.emptyCartBtn);
  },

  fillform(testData: any) {
    I.fillField(this.form.shipping.email, testData.email);
    I.fillField(this.form.shipping.streetAddress, testData.streetAddress);
    I.fillField(this.form.shipping.zipCode, testData.zipCode);
    I.fillField(this.form.shipping.city, testData.city);
    I.fillField(this.form.shipping.state, testData.state);
    I.fillField(this.form.shipping.country, testData.country);
    I.fillField(this.form.payment.ccNumber, testData.ccNumber);
    I.fillField(this.form.payment.cvvCode, testData.cvvNumber);
    //I.fillField(this.email, testData.email);
    I.click(this.placeOrderBtn);
  },
};
