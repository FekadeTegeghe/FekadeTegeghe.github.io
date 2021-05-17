"use strict";
function merge(arr1, arr2) {
  let arr = [];
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]); //S=
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  while (i < n1) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < n2) {
    arr.push(arr2[j]);
    j++;
  }
  return arr;
}
let arr1 = [1, 4, 5, 8, 17]; // i index
let arr2 = [2, 4, 8, 11, 13, 21, 23, 25]; // j indexed elements
console.log(merge(arr1, arr2));
