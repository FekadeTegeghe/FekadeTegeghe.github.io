"use strict";
function range(num1, num2) {
  let arr = [];
  if (num2 - num1 < 2) {
    return [];
  }
  return [num1 + 1].concat(range(num1 + 1, num2));
}
console.log(range(8, 13)); //[9, 10, 11, 12]
