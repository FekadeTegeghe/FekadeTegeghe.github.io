"use strict";
String.prototype.includes = function (str, word) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      return true;
    }
  }
  return false;
};
let str = "Abebe beso bela";
let word = "beso";
let kal = "teta";
let txt = "bela";
console.log(String.prototype.includes(str, word));
console.log(String.prototype.includes(str, kal));
console.log(String.prototype.includes(str, txt));
