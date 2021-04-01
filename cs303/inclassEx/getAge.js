"use strict";
const p = {
  name: "John",
  birthDate: "2020-9-10",
  getAge: function () {
    const currentYear = new Date().getFullYear();
    let birthYear = new Date(this.birthDate.getFullYear());
    return currentYear - birthYear;
  },
};
console.log(p.getAge());
