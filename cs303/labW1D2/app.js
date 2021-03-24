/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
// function nameString(obj) {
//   let prop = [];
//   let reversed;
//   let j = 0;
//   if (obj === {}) {
//     return "Object has no property";
//   } else if (typeOf(obj) === undefined) {
//     return "No object passed";
//   } else if (obj === null) {
//     return "Null argument";
//   } else if (obj !== null || typeOf(obj) !== undefined) {
//     for (let object in obj) {
//       if (Object.keys(obj).length === 1) {
//         return Object.keys(obj);
//       } else {
//         prop.push(object);
//
//       }
//			prop.sort();
//         prop.join(".");
//     }
//     return prop;
//   }
// }
// module.exports = { nameString };

function nameString(obj) {
  let prop = [];
  if (obj === {}) {
    return "object has no properties";
  } else if (obj === undefined) {
    return "No object passed";
  } else if (obj === null) {
    return "null argument";
  } else {
    for (let key in obj) {
      prop.push(key);
    }
    prop.sort();
    return prop.join(".");
  }
}
module.exports = { nameString };
