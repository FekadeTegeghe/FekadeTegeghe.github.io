"use strict";
function sum(arr) {
  return sumHelper(arr, 0);
}
//return sum of the elements from arr[i] ... to the end
function sumHelper(arr, i) {
  if (i == arr.length) return 0;
  let result = sumHelper(arr, i + 1); // returns sum of elements from arr[i+1] to the end
  return result + arr[i];
}
let arr = [2, 13, 4, 5, 23, 6, 17];
console.log(sum(arr));

// function sum(array) {​​​​​​​​
//   return helper(array, array.length - 1);
//    }​​​​​​​​

// function helper(array, i) {​​​​​​​​
//   if (i < 0) return0;
//     return array[i] + helper(array, i-1);
//      }​​​​​​​​
