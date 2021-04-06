"use strict";
/*function countSubstring(str, target) {
  let pos = 0;
  let foundPos = str.indexOf(target, pos);
  while (true) {
    if (foundPos === -1) break;
    pos = foundPos + 1;
  }
  return `Found at ${foundPos}`;
}
let str = "As sly as a fox, as strong as an ox";
console.log(countSubstring(str, "as")); */
let str = "abcdefabcghiabc";
let tar = "abc";

const numberOfMatches = (str.match(tar) ?? []).length;
console.log(numberOfMatches);
