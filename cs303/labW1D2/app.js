/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";
// See tests.js for behavior
/**
 *
 * @param {object} obj is an object
 * @returns {string} is a string
 */
function nameString(obj) {
  let prop = [];
  if (obj === undefined) return "No object passed";
  if (obj === null) return "Null argument";
  for (let key in obj) {
    prop.push(key);
  }
  if (prop.length === 0) {
    return "object has no properties";
  } else {
    prop.sort();
    return prop.join(".");
  }
}

module.exports = { nameString };
