"use strict";
function removeDuplicates(array) {
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique;
}
let array = [2, 3, 3, 4, 5, 3, 9, 5, 3, 2, 7, 3];
console.log(removeDuplicates(array));
