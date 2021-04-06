"use strict";
//write function that take list of numbers & return array that contain count of positives and their sum
function manipulate(arr) {
  let positives = arr.filter((item) => item > 0);
  let total = positives.reduce((total, item) => (total += item));
  return [positives.length, total];
}
console.log(manipulate([2, 3, -3, -5, 9, 6, 7]));
// Write a function fromto which takes two numbers and a list and outputs all the elements
// in the list starting from the position indicated by the first integer up to the position indicated
// by the second integer. For example:
// Miranda fromto (3, 5, [’a’,’b’,’c’,’d’,’e’,’f’])
// [’d’,’e’,’f’]
function fromTo(start, end, array) {
  let subArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i >= start && i <= end) {
      subArr.push(array[i]);
    }
  }
  return subArr;
}
console.log(fromTo(3, 5, ["a", "b", "c", "d", "e", "f"]));

// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5].
// If the times argument is negative, return an empty array.
function replicate(repeat, num) {
  if (repeat === 1) {
    return num;
  } else {
    return [num].concat(replicate(repeat - 1, num));
  }
}
console.log(replicate(3, 7));
