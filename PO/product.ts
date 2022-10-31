const { I } = inject();

export = {
  productContainer: {
    productWrapper: ".product-wrapper",
    productName: ".product-wrapper h2",
    price: ".product-price",
    description: ".product-wrapper p:nth-of-type(2)",
    quantitySelector: "#quantity",
    addToCardBtn: "//button[@type='submit']",
  },

  getProductName(name: string) {
    I.assert(
      I.grabTextFrom(this.productName),
      name,
      "The product name does not match"
    );
  },
  addToCart(quantity: string) {
    I.click("#quantity");
    I.selectOption("//*[@id='quantity']/option[3]", "3");
    I.click(this.addToCardBtn);
  },

  accessItem(index: number) {
    const number = index;
    I.click(`.recommendations .col-md-3:nth-of-type(${index})`);
    return `.recommendations .col-md-3:nth-of-type(${index}) h5`;
  },
};
