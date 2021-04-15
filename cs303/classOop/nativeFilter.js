"use strict";
String.prototype.filter = function (word) {
  return this.split(" ")
    .filter((w) => w != word)
    .join(" ");
};

console.log("abc def hig".split(" "));

console.log("THis hous is not nice".filter("not"));
//Another filter
Array.prototype.myFilter = function (callback, context) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

//tests
let numbers = [1, 20, 30, 80, 2, 9, 3];
let newNum = numbers.myFilter((n) => n >= 20);
console.log(newNum);
