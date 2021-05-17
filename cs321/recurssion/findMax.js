"use strict";
function findMax(array) {
  return helper(array, array.length - 1);
}

function helper(array, i) {
  let max = array[0];
  if (i < 0) return max;
  if (array[i] > max) max = array[i];
  return helper(array, i - 1);
}
let arr = [2, 13, 4, 5, 23, 6, 17];
console.log(findMax(arr));
