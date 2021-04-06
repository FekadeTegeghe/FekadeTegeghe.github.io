"use strict";
const promp = require("prompt-sync")();
//What is the result of accessing its ref? why?
/*function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}
let user = makeUser(); //the return value is an object
console.log(user.ref.name); // error: cannot read property 'name' of undefined
*/
//create an object calculator with three methods: read(), sum(), mul();
/* let calculator = {
  sum(a, b) {
    return this.a + this.b;
  },
  mul(a, b) {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/
let user = {
  firstName: "John",
  lastName: "smith",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
let fullName = user.fullName();
console.log(fullName);
