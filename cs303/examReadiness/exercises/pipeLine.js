"use strict";
function inc(val) {
  return val + 1;
}

function dec(val) {
  return val - 1;
}

function double(val) {
  return val * 2;
}

function halve(val) {
  return val / 2;
}

let pipeline = [inc, halve, dec, double];

let res = pipeline.reduce((total, fn) => {
  return fn(total);
}, 9);

console.log(res);
