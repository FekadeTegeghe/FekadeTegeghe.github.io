"use strict";
//1. Implement shellsort (sorting the entire array)
function shellSort(array) {}

//2. Implement shellSort (sorting the array from arr[lower] ... arr[upper])
function shellSort(arr, lower, upper) {
  let size = upper - lower + 1;
  let h = 1;
  while (h <= size / 3) {
    h = h * 3 + 1;
    while (h > 0) {
      for (let i = h; i < size; i++) {
        let temp = arr[i];
        let j = i;
        while (j > h - 1 && arr[j - h] > temp) {
          arr[j] = arr[j - h];
          j -= h;
        }
        arr[j] = temp;
      }
      h = (h - 1) / 3;
    }
  }
}

//3. Add the three counters (shifts, swaps, comparisons) to exercise 2.
