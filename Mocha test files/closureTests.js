"use strict";
/* global require */
const assert = require("assert");
const fil = require("./filter.js");


describe("inArray", function () {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    it("returns the filter for values in array", function () {
        let filter1To7 = fil.inArray(arr);
        assert.strictEqual(filter1To7(5), true);
        assert.strictEqual(filter1To7(0), false);

    });

    it("tests inArray works with Array.filter", function () {
        let filter1To7 = fil.inArray(arr);
        const arr2 = [0, 5, 10, 6, 100];
        assert.deepStrictEqual(arr2.filter(filter1To7), [5, 6]);
    });
});

describe("inBetween", function () {

    it("returns the filter for values between", function () {
        let filter3to6 = fil.inBetween(3, 6);
        assert.strictEqual(filter3to6(5), true);
        assert.strictEqual(filter3to6(0), false);
    });

    it("tests inBetween works with Array.filter", function () {
        let filter3to6 = fil.inBetween(3, 6);
        const arr2 = [0, 4, 5, 10, 6, 100];
        assert.deepStrictEqual(arr2.filter(filter3to6), [4, 5]);
    });
});


describe("byField", function(){

    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
    ];
  
    it("sorts users by name", function(){
      let nameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      let nameSortedAnswer = users.sort(fil.byField("name"));
      assert.deepEqual( nameSortedAnswer, nameSortedKey);
    });
  
    it("sorts users by age", function(){
      let ageSortedKey = [
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
      ];
      let ageSortedAnswer = users.sort(fil.byField("age"));
      assert.deepEqual(ageSortedAnswer, ageSortedKey);
    });
  
    it("sorts users by surname", function(){
      let surnameSortedKey = [
        { name: "Ann", age: 19, surname: "Hathaway" },
        { name: "John", age: 20, surname: "Johnson"},
        { name: "Pete", age: 18, surname: "Peterson" },
      ];
      let surnameSortedAnswer = users.sort(fil.byField("surname"));
      assert.deepEqual(surnameSortedAnswer, surnameSortedKey);
    });
  

    describe("army", function() {

      let army = fil.makeArmy();;
      
    
      it("army[0] shows 0", function() {
        const shooter0 = army[0]();
        assert.strictEqual(shooter0, 0);
      });
    
    
      it("army[5] shows 5", function() {
        const shooter5 = army[5]();
        assert.strictEqual(shooter5, 5);
      });
    

    
    });    
  });