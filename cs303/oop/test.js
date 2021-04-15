"use strict";

Array.prototype.myMap = function (callback) {
  arr = [];
  for (let i = 0; i < this.length; i++) arr.push(callback(this[i], i, this));
  return arr;
};

//tests
let arrs = ["dic tanin", "boo radley", "hans gruber"];
let numbers2 = [1, 4, 9];

let goodT = arrs.myMap(function (n) {
  return n;
});

let squareRoot = numbers2.myMap(function (num) {
  return Math.sqrt(num);
});

console.log(goodT); // [ 'dic tanin', 'boo radley', 'hans gruber' ]
console.log(squareRoot); // [ 1, 2, 3 ]
