"use strict";
function unique(arr) {
  let dup = [];
  let set = new Set();
  for (let val of arr) {
    set.add(val);
  }
  for (let value of set) {
    dup.push(value);
  }
  return dup;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(strings));

//Alternative unique
function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

//Alternative 2
function unique(array) {
  return array.reduce((uniqueArray, number) => {
    if (uniqueArray.indexOf(number) === -1) {
      uniqueArray.push(number);
    }
    return uniqueArray;
  }, []);
}
var numbers = [1, 1, 2, 3, 4, 4];
console.log(unique(numbers));
