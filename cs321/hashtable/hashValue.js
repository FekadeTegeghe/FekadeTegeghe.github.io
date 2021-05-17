"use strict";
function hashCode(key) {
  return key;
}
function hashValue(hashCode) {
  return (2 * hashCode + 5) % 11;
}
function computeAll(arr) {
  for (let e of arr) {
    let hc = hashCode(e);
    let hv = hashValue(hc);
    console.log(hv);
  }
}
let arr = [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5];
computeAll(arr);
