/// <reference types='codeceptjs' />
type homePage = typeof import("./PO/home");
type cartPage = typeof import("./PO/cart");
//type orderPage = typeof import("./PO/order");
type productPage = typeof import("./PO/product");

type AssertWrapper = import("codeceptjs-assert");

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    current: any;
    homePage: homePage;
    cartPage: cartPage;
    productPage: productPage;
    //orderPage: orderPage;
  }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
