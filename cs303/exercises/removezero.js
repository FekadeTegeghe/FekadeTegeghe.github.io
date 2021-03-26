"use strict";
function removeZeros(array) {
  let arr = [];
  for (let value of array) {
    if (value !== 0) {
      arr.push(value);
    }
  }
  return arr.join(".*");
}
removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]);
