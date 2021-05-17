"use strict";
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}
Car.prototype.accelerate = function () {
  return this.speed + 10;
};
Car.prototype.brake = function () {
  return this.speed - 5;
};
let car1 = new Car("BMW", 120);
let car2 = new Car("Mercedes", 95);
console.log(car1.accelerate());
console.log(car1.brake());
console.log(car2.accelerate());
console.log(car2.brake());
