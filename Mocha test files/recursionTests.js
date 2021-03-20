"use strict";
/* global require */
const recurse = require("./recursion.js");
const assert = require("assert");
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

describe("recursion tests", function () {
    it("tests summing by recursion", function () {
        assert.strictEqual(recurse.sumTo(5), 15);
        assert.strictEqual(recurse.sumTo(10), 55);
    });
    it("tests factorial", function () {
        assert.strictEqual(recurse.factorial(5), 120);
        assert.strictEqual(recurse.factorial(10), 3628800);
    });

    it("tests fibonacci 10", function () {
        assert.strictEqual(recurse.fibonacci(10), 55);
    });
    it("tests fibonacci 30", function () {
        assert.strictEqual(recurse.fibonacci(30), 832040);
    });
    it("recursive version prints 1 2 3 4 to console", function () {
        assert.strictEqual(recurse.outputList(list), "1 2 3 4 printed to console");
    });
    it("iterative version prints 1 2 3 4 to console", function () {
        assert.strictEqual(recurse.outputListLoop(list), "1 2 3 4 printed to console");
    }); 

    it("recursive version prints 4 3 2 1 to console", function () {
        assert.strictEqual(recurse.reverseList(list), "4 3 2 1 printed to console");
    });    
    it("loop version prints 4 3 2 1 to console", function () {
        assert.strictEqual(recurse.reverseListLoop(list), "4 3 2 1 printed to console");
    });    

});

