/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
  let str = "";
  if (string === undefined) {
    return "missing argument";
  } else if (typeof string !== "string") {
    return "argument not string";
  } else if (string === "") {
    return "";
  } else {
    for (let i = 1; i < string.length; i += 2) {
      str = str + string[i];
    }
    return str;
  }
}

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
  let sumPositive = array.reduce((sum, current) => {
    if (current > 0) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);

  return sumPositive;
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
  function numberFilter(item) {
    return typeof item == "number";
  }
  function stringFilter(item) {
    return typeof item == "string";
  }
  this.numbers = array.filter(numberFilter);
  this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      array[i] = array[i] * -1;
    }
  }
  return array.join(".");
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      arr.push(array[i]);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      arr[j] = "*";
    }
  }
  return arr.join(".");
}
