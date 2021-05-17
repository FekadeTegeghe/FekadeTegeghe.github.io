"use strict";
function _shellSortForDemo(arr) {
  let size = arr.length;
  let h = 1;
  // find largest value of h
  while (h <= size / 3) h = h * 3 + 1;
  while (h > 0) {
    // decreasing h, until h=1
    //h-sort //insertion on the array with gap = h
    for (let i = h; i < size; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= h && arr[j - h] > temp) {
        arr[j] = arr[j - h];
        j -= h;
      }
      arr[j] = temp;
    }
    h = (h - 1) / 3;
  }
}
