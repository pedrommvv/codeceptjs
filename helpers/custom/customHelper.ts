const Helper = require('@codeceptjs/helper');

class MyHelper extends Helper {
  printMessage(msg: string) {
    console.log(msg);
  }
}

export = MyHelper;
