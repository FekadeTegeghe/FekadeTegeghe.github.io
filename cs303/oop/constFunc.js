"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

//up on using the word new tocreate objects four things happen internally
//1. {} object is created
//2. the key word this is assigned to the {}
//3. {} is linked to prototype
//4. Function automatically return this || {}

const sosina = new Person("Sosina", 2017);
const yemar = new Person("Yemaryam", 2016);
const mami = new Person("Desta", 1987);
console.log(sosina, yemar, mami);

Person.prototype.calcAge = function () {
  return 2021 - this.birthYear;
};
console.log(sosina.calcAge());
console.log(yemar.calcAge());
console.log(mami.calcAge());
