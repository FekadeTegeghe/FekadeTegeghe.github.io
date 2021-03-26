"use strict";
let vals = [1, 2, 3, 4, 5];
let sum = vals.reduce((total, current) => {
  return total + current;
});
let product = vals.reduce((result, current) => {
  return result * current;
});
console.log(`The sum is: ${sum}`);
console.log(`The product is: ${product}`);

const [initial] = vals;
const min = vals.reduce((total, next) => Math.min(total, next), initial);
const max = vals.reduce((total, next) => Math.max(total, next), initial);
console.log(`The minimum is: ${min} `);
console.log(`The maximum is: ${max} `);
