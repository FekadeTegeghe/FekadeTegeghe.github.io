"use strict";
//if (!String.prototype.repeat) {
String.prototype.repeat = function (frequency) {
  return new Array(frequency + 1).join(this);
};
//}
console.log("Great! ".repeat(5));

//Alternative
String.prototype.repeat = function (value, frequency) {
  let arr = [];
  for (let i = 0; i < frequency; i++) {
    arr.push(value);
    // console.log(value);
  }
  return arr.join(" ");
};
console.log(String.prototype.repeat("great", 4));
