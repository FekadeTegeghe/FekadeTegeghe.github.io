"use strict";
//Implement a function named aggregate which takes an array as argument,return an object which properties are
//the distinct element in the given array, values are how many time each element existing in the given array.
let pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"]; //Example {dog: 2, chicken: 3, cat: 1 .}
function aggregate(arr) {
  return arr.reduce((count, item) => {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item]++;
    }
    return count;
  }, {});
}
let petCount = aggregate(pets);
console.log(aggregate(pets));

//The function replicate should return an array containing repetitions of the number times argument.
//For instance, replicate(3, 5) should return [5,5,5]. If the times argument(the first argument) is negative,
//return an empty array.
function replicate(repeat, value) {
  if (repeat <= 0) return [];
  return [value].concat(replicate(repeat - 1, value));
}
console.log(replicate(5, 3));
