"use strict";
//1. add numbers greater than 20 in an array.
const array = [1, 50, 40, 3, 10];
let result = array
  .filter((item) => item > 20)
  .reduce((sum, item) => sum + item);

console.log(result);

//2. Given an array of strings, return a sub array with length >= 5 and contain letter "a".
let strArr = ["abebe", "tirunesh", "kenenisa", "almaz", "john"];
const longString = strArr.filter(
  (item) => item.length >= 5 && item.includes("a")
);

console.log(longString);

//Create a constructor function employee with properties
function Employee(firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
  this.getAge = function () {
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  };
}
let arr = [];
arr.push(
  new Employee("Abebe", "Feleke", "2003-11-09"),
  new Employee("Mamo", "Wolde", "2005-7-09"),
  new Employee("Demisse", "Damtie", "1956-01-17"),
  new Employee("Alebachew", "Teka", "1960-06-27"),
  new Employee("Belayneh", "Dinsamo", "1948-05-11")
);

//console.log(arr[0].getAge());
const filtered = arr.filter((item) => item.getAge() > 20);
console.log(filtered);
const fullNamed = arr
  .filter((item) => item.getAge() < 21)
  .map((item) => item.getFullName());
console.log(fullNamed);
