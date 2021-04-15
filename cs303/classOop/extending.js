"use strict";
//In the following code, Rabbit object cannot be created. What do you think is the problem?
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name); //if we don't call super here, rabbit object won't be created. Now it is fixed.
    this.name = name; //This line of code is optional then. Better not to have it to avoid redendency
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("whate rRabbit");
console.log(rabbit.name);
