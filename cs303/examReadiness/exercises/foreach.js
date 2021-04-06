"use strict";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times10 = [];
numbers.forEach((num) => times10.push(num * 10));

console.log(times10);

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
// Write your code below
let arr = [3, 4, 9, 7, 8, 9, 11, 6];
console.log(arr.lastIndexOf(9, 5));
console.log(arr.includes(4, 3));
console.log(arr.includes(4, 0));
console.log(arr.includes(4, 1));
console.log(arr.includes(4));
