"use strict";
let user = {
  name: "John",
  surname: "Smith",
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};
let admin = {
  __proto__: user, //link admin to user object to inherit
  isAdmin: true,
};
console.log(admin.fullName); //John Smith
//Modifying full name
admin.fullName = "Alice Cooper";

console.log(admin.fullName);
console.log(user.fullName);
