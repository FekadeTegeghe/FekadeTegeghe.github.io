"use strict";
function secondSmallest(arr) {
  let smallest = arr[0];
  let secSmall = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secSmall = smallest;
      smallest = arr[i];
    } else if (arr[i] < secSmall) {
      secSmall = arr[i];
    }
  }
  return [smallest, secSmall];
}
let arr = [3, 4, 9, 1, 7];
console.log(secondSmallest(arr));

//recursive solution
