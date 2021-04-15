"use strict";
function User(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
}
let user1 = new User("John", "Smith", new Date("2000-10-01"));
let user2 = new User("Edward", "Hopkins", new Date("1991-11-14"));
User.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
User.prototype.getAge = function () {
  return new Date().getFullYear() - this.birthYear.getFullYear();
};
console.log(user1.getFullName(), user1.getAge());
console.log(user2.getFullName(), user2.getAge());
