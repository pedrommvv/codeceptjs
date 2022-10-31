const { I } = inject();

export = {
  currencyForm: "#currency_form",
  cartImage: "//img[@title='Cart']",
  product: ".col-md-4",

  isLoaded() {
    I.say("Then I see the homepage items straight away");
    I.see("Hot Products");
    I.seeElement(this.cartImage);
    I.seeElement(this.currencyForm);
  },

  openProduct() {
    I.click(this.product);
  },
};
