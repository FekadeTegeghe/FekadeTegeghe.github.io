"use strict";
/* global require */
const fns = require("./functions.js");
const assert = require("assert");


/* 1.	1.	Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.  */
describe("maxOfThree", function () {
    it("tests 1 2 3", function () {
        assert.strictEqual(fns.maxOfThree(1, 2, 3), 3);
    });
    it("tests 3 2 1", function () {
        assert.strictEqual(fns.maxOfThree(3, 2, 1), 3);
    });
    it("tests -1 -2 -3", function () {
        assert.strictEqual(fns.maxOfThree(-1, -2, -3), 3);
    });
});

/*
2.	Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
 and multiply([1,2,3,4]) should return 24. 
 */
describe("sum and multiply", function () {
    it("tests sum of 1 2 3", function () {
        assert.strictEqual(fns.sum([1, 2, 3]), 6);
    });
    it("tests multiply 3 2 10", function () {
        assert.strictEqual(fns.multiply([3, 2, 10]), 60);
    });
});


/*
3.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one. 
*/
describe("findLongestWord", function () {
    it("tests longest", function () {
        assert.strictEqual(fns.findLongestWord(["this", "is", "a", "test", "longest"]), "longest");
    });
    it("tests longest with spaces", function () {
        assert.strictEqual(fns.findLongestWord(["this", "is", "a word with spaces", "test", "longest"]), "a word with spaces");
    });
});


/*
4.	Reverse an Array 
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. 
*/
describe("reverseArray", function () {
    it("tests reverseArray odd number elements", function () {
        assert.strictDeepEqual(fns.reverseArray(["A", "B", "C"]), ["C", "B", "A"]);
    });
    it("tests reverseArray even number elements", function () {
        assert.strictDeepEqual( fns.reverseArrayInPlace(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverseArrayInPlace even number elements", function () {
        assert.strictDeepEqual(fns.reverseArrayInPlace(["A", "B", "C", "D"]), ["D", "C", "B", "A"]);
    });
    it("tests reverseArrayInPlace odd number elements", function () {
        assert.strictDeepEqual(fns.reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
    });
});