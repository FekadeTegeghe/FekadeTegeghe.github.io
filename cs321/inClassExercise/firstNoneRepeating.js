"use strict";
function firstDistinct(arr) {
  let temp = [];
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      if (!count) {
        return i;
      }
      count = 0;
    } else {
      count++;
    }
  }
  return -1;
}
let arr = [1, 2, 4, 9, 3, 2, 1, 4, 5];
console.log(firstDistinct(arr));
