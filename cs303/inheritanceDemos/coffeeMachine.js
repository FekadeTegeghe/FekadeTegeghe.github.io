"use strict";
class CoffeeMachine {
  constructor() {
    this._waterAmount = 0;
  }
  setWaterAmount(value) {
    if (value < 0) throw new error("Negative water");
    this._waterAmount = value;
  }
  getWaterAmount() {
    return this._waterAmount;
  }
}
let coffeeMachine = new CoffeeMachine();
coffeeMachine.setWaterAmount(100);
console.log(coffeeMachine.getWaterAmount());
