"use strict";
class User {
  constructor(name = "Anonymous") {
    this.name = name;
  }
  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}
let fred = new User();
console.log(fred); //Anonymous
console.log(fred.__proto__); //User.prototype
console.log(User.prototype); //User
fred.sayHi(); //Hello, Anonymous
let bob = new User("Bob");
console.log(bob); //Bob
bob.sayHi(); //Hello, Bob
