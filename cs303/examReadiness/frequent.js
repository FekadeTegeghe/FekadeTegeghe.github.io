"use strict";
//write a function that take an array with duplicates and returns an array containing that element & its count.
let arr = [2, 3, 2, 3, 4, 3, 5, 3, 6, 3, 6]; //solution [3, 5]  incomplete project
function frequent(arr) {
  return arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
    return obj;
  }, {});
}

function f(object) {
  let max = 0;
  for (let key in object) {
    if (object.key > max) {
      max = object.key;
    }
  }
  return [key, max];
}
