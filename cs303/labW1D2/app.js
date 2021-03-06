/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";
// See tests.js for behavior
function nameString(obj) {
  if (obj === null) {
    return "null argument";
  }
  if (obj === undefined || obj === null) {
    return "no object passed";
  }
  if (Object.keys(obj).length === 0) {
    return "object has no properties";
  }
  let arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  arr.sort();

  let str = arr.join(".");
  return str;
}
