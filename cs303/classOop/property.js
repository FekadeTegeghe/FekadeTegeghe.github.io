"use strict";
class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
//Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}
//properties of Rabbit class
/*
prototype: Rabbit.prototype
__proto__: Animal
*/
//Rabbit.prototype
/*
constractor: Rabbit
hide: function
__proto__: Animal.prototype
*/
//properties of animal
/*
compare:function(animalA, animalB){return animalA.speed - animalB.speed}
prototype: Animal.prototype
__proto__: Function.prototype
*/
