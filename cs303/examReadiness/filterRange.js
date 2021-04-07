"use strict";
function filter(arr, num1, num2) {
  return arr.filter((item) => item >= num1 && item <= num2);
}
let arr = [5, 3, 8, 1];
console.log(filter(arr, 1, 8));
