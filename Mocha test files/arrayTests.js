"use strict";
/* global require */
const arrays = require("./arrays.js");
const assert = require("assert");


describe("getMaxSubSum", function() {
    it("maximal subsum of [1, 2, 3] equals 6", function() {
      assert.equal(arrays.getMaxSubSum([1, 2, 3]), 6);
    });
  
    it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
      assert.equal(arrays.getMaxSubSum([-1, 2, 3, -9]), 5);
    });
  
    it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
      assert.equal(arrays.getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });
  
    it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
      assert.equal(arrays.getMaxSubSum([-2, -1, 1, 2]), 3);
    });
  
    it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
      assert.equal(arrays.getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });
  
    it("maximal subsum of [] equals 0", function() {
      assert.equal(arrays.getMaxSubSum([]), 0);
    });
  
    it("maximal subsum of [-1] equals 0", function() {
      assert.equal(arrays.getMaxSubSum([-1]), 0);
    });
  
    it("maximal subsum of [-1, -2] equals 0", function() {
      assert.equal(arrays.getMaxSubSum([-1, -2]), 0);
    });
  
    it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
      assert.equal(arrays.getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
    });
  });

describe("camelize", function() {

    it("leaves an empty line as is", function() {
      assert.equal(arrays.camelize(""), "");
    });
  
    it("turns background-color into backgroundColor", function() {
      assert.equal(arrays.camelize("background-color"), "backgroundColor");
    });
  
    it("turns list-style-image into listStyleImage", function() {
      assert.equal(arrays.camelize("list-style-image"), "listStyleImage");
    });
  
    it("turns -webkit-transition into WebkitTransition", function() {
      assert.equal(arrays.camelize("-webkit-transition"), "WebkitTransition");
    });
  
  });