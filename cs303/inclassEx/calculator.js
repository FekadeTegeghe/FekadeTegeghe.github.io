"use strict";
function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.add = function () {
  return this.num1 + this.num2;
};
Calculator.prototype.subtract = function () {
  return this.num1 - this.num2;
};
Calculator.prototype.multiply = function () {
  return this.num1 * this.num2;
};
Calculator.prototype.divide = function () {
  return this.num1 / this.num2;
};
const calc = new Calculator(23, 32);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());
