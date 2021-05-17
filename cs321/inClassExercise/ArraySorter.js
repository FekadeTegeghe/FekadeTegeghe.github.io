"use strict";
class ArraySorter {
  constructor() {
    this._compCount = 0;
    this._swapCount = 0;
    this._shiftCount = 0;
  }
  keyComparisons() {
    return this._compCount;
  }
  numSwaps() {
    return this._swapCount;
  }
  numShifts() {
    return this._shiftCount;
  }
  print(arr) {
    let last = arr.length - 1;
    let res = "[";
    for (let i = 0; i <= last; i++) {
      res = res + arr[i];
      if (i < last) {
        res = res + ", ";
      }
    }
    console.log(res + "]");
  }
  _swapElements(arr, j, k) {
    let temp = arr[j];
    arr[j] = arr[k];
    arr[k] = temp;
    this._swapCount++;
  }

  insertionSort(arr) {
    this._compCount = 0;
    this._shiftCount = 0;
    this._swapCount = 0;
    this._insertionSort(arr, 0, arr.length - 1);
  }

  _insertionSort(arr, lower, upper) {
    let size = arr.length;
    let temp = 0;
    let j = 0;
    for (let i = lower + 1; i <= upper; i++) {
      let temp = arr[i];
      j = i;
      this._compCount++;
      while (j >= lower + 1 && temp < arr[j - 1]) {
        arr[j] = arr[j - 1]; // shift right
        j--;
        this._compCount++;
        this._shiftCount++;
      }
      arr[j] = temp; // place in sorted position
    }
    return arr;
  }
  bubbleSort(array) {
    this._compCount = 0;
    this._shiftCount = 0;
    this._swapCount = 0;
    return this._bubbleSort(array, 0, array.length - 1);
  }
  _bubbleSort(arr, lower, upper) {
    let size = upper - lower + 1;
    for (let i = lower; i < size; i++) {
      this._compCount++;
      for (let j = lower; j <= size - 2; j++) {
        if (arr[j] > arr[j + 1]) {
          this._compCount++;
          this._swapElements(arr, j, j + 1);
        }
      }
    }
    return arr;
  }

  selectionSort(arr) {
    this._compCount = 0;
    this._shiftCount = 0;
    this._swapCount = 0;
    this._selectionSort(arr, 0, arr.length - 1);
  }
  _selectionSort(array, bottom, top) {
    let size = top - bottom + 1;
    for (let i = bottom; i < size; i++) {
      let nextMinPos = minPos(array, i, array.length);
      this._swapElements(array, i, nextMinPos);
      this._compCount++;
    }
    return array;
  }
  minPos(array, bottom, top) {
    let size = top - bottom + 1;
    let min = array[bottom];
    let index = bottom;
    for (let i = bottom + 1; i <= size; i++) {
      //this._compCount++;
      if (array[i] < min) {
        min = array[i];
        index = i;
        this._compCount++;
        this._shiftCount++;
      }
    }
    return index;
  }
}

exports.ArraySorter = ArraySorter;
