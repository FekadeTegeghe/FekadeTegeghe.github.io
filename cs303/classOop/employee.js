"use strict";
let Employee = (function () {
  let name = "Tina";
  let age = 18;
  let salary = 100;
  let setAge = function (newAge) {
    age = newAge;
  };
  let setSalary = function (newSalary) {
    salary = newSalary;
  };
  let setName = function (newName) {
    name = newName;
  };
  let getAge = function () {
    return age;
  };
  let getSalary = function () {
    return salary;
  };
  let getName = function () {
    return name;
  };
  let increaseSalary = function (percentage) {
    salary = getSalary() * (1 + percentage);
  };
  let incementAge = function () {
    age = getAge() + 1;
    //console.log(age);
  };
  return {
    setAge: setAge,
    setSalary: setSalary,
    setName: setName,
    increaseSalary: increaseSalary,
    incementAge: incementAge,
    getAge: getAge,
  };
})();
console.log(Employee);
console.log(Employee.getAge());
Employee.incementAge();
console.log(Employee.getAge());
