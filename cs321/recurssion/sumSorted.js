"use strict";
function addOnes(array, start, end) {
  if (array[end] == 0) {
    return 0;
  }
  if (array[start] == 1) {
    return end - start + 1;
  }
  let mid = Math.floor((end + start) / 2);

  return addOnes(array, start, mid) + addOnes(array, mid + 1, end);
}

let array = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];

console.log(addOnes(array, 0, array.length - 1));
