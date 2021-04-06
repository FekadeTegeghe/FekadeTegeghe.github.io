"use strict";
function sumPositiveNumbers(array) {
  let sum = 0;
  let sumPositive = array.reduce((sum, current) => {
    if (current > 0) {
      sum += current;
      return sum;
    } else if (current < 0) {
      return 0;
    }
  });
}
let arr = [-1, 4, 5, -2, -3, 10];
console.log(sumPositiveNumbers(arr));
