"use strict";
let vals = [-1, -2, 3, 4, -5, -6];

let filtered = vals.reduce((total, next) => {
  if (next > 0) {
    total.push(next * 2);
  }

  return total;
}, []);

console.log(filtered);

function isInRange(val) {
  return val >= this.lower && val <= this.upper;
}
let range = {
  lower: 1,
  upper: 10,
};
let data = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let res = data.filter(isInRange, range);
console.log(res);

function isNumber(value) {
  if (typeof value === "number") {
    return true;
  }
}
let data = [10, null, "30", 1.4, "falcon", undefined, true, 17];
let res = data.filter(isNumber);
console.log(res);
