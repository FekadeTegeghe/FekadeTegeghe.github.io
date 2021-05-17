"use strict";
const ArraySorter = require("./ArraySorter");
const sorter = new ArraySorter.ArraySorter();

let arr = [4, 8, 9, 0, 3, 2, 7, 8, 8];
sorter.print(arr);
//sorter.insertionSort(arr);
//sorter.bubbleSort(arr);
sorter.selectionSort(arr);
sorter.print(arr);
console.log(sorter.keyComparisons());
console.log(sorter.numShifts());
console.log(sorter.numSwaps());
