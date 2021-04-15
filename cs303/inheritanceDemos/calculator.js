"use strict";
function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  Calculator.prototype.add = function () {
    return num1 + num2;
  };
  Calculator.prototype.subtract = function () {
    return num1 - num2;
  };
  Calculator.prototype.multiply = function () {
    return num1 * num2;
  };
  Calculator.prototype.divide = function () {
    return num1 / num2;
  };
}
let result = new Calculator(23, 32);
console.log(result.add());
console.log(result.subtract());
console.log(result.multiply());
console.log(result.divide());
