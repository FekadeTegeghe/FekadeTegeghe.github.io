"use strict";
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function avgAge(arr) {
  return arr.reduce((acc, item) => acc + item.age, 0) / arr.length;
}
console.log(avgAge(arr));
