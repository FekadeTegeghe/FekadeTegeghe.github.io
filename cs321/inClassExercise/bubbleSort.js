"use strict";
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        this._compCount++;
        swap(j, j + 1);
      }
    }
  }
  return arr;
}
function swap(i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  this._swapCount++;
}
let array = [2, 3, 4, 3, 6, 7, 2, 1];
console.log(bubbleSort(array));
