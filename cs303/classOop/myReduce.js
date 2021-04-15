"use strict";
Array.prototype.myReduce = function (callback, initialVal) {
  let accumulator = initialVal === undefined ? undefined : initialVal;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    else accumulator = this[i];
  }
  return accumulator;
};

//tests
let numbers3 = [20, 20, 2, 3];
let total = numbers3.myReduce(function (a, b) {
  return a + b;
}, 10);
console.log(total); // 55

let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((a, b) => a.concat(b));
console.log(flattened);
