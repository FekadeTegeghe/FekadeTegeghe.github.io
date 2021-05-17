"use strict";
const DLL = require("../linkedList/DlinkedList"); //Write 10 times
function findKth(list, k) {
  if (k < 0 || k > list.size() - 1) {
    return null;
  }
  let index = 0;
  let current = list.first();
  while (current != list.last()) {
    if (k === index) {
      return current;
    } else {
      current = list.after(current);
      index++;
    }
  }
  if (k === list.size() - 1) {
    return current;
  }
}
console.log(findKth(arr, 5));
