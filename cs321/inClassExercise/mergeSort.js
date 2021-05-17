"use strict";
function mergeSort(arr1, arr2) {
  let mergedSorted = [];
  while (arr1.length || arr2.length) {
    if (typeof arr1[0] === "undefined") {
      mergedSorted.push(arr2[0]);
      arr2.splice(0, 1);
    } else if (arr1[0] > arr2[0]) {
      mergedSorted.push(arr2[0]);
      arr2.splice(0, 1);
    } else {
      mergedSorted.push(arr1[0]);
      arr1.splice(0, 1);
    }
  }
  return mergedSorted;
}
function sorted(a, b) {
  return a - b;
}
let arr1 = [1, 4, 5, 8, 17]; // i index
let arr2 = [2, 4, 8, 11, 13, 21, 23, 25]; // j indexed elements
console.log(mergeSort(arr1, arr2));

//efficient sorting of the above type is:
//create new array of size arr1.length + arr2.length
//if(arr1[i] < arr2[j]) => add(arr1[i]) to a third return array & proceed, i++
//if(arr1[j] < arr2[i]) => add(arr1[j]) to a third return array & proceed, j++
//if(arr1[i] = arr2[j]) => add(arr1[i])->add(arr2[j]) to a third return array & proceed, i++
