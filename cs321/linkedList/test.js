"use strict";
function sumProduct(x, y) {
  if (y === 1) {
    return x;
  } else {
    return x + sumProduct(x, y - 1);
  }
}
console.log(sumProduct(5, 10));
//The code below needs revisiting.
function smallestDifference(arr, x) {
  let smallest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - x) < smallest) {
      smallest = Math.abs(arr[i] - x);
    }
    return smallest;
  }
}
let arr = [3, 6, 9, 2, 11, 13, 15];
console.log(smallestDifference(arr, 17));
console.log(smallestDifference(arr, 1));
console.log(smallestDifference(arr, 5));
