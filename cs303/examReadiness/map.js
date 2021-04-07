"use strict";
function keyArr(arr) {
  return arr.reduce((acc, item) => acc.concat(item.name), []);
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [john, pete, mary];
console.log(keyArr(users));
