"use strict";
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = this.insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (let i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}
function setData() {
  for (let i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}
function clear() {
  for (let i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0;
  }
}
function insert(element) {
  this.dataStore[this.pos++] = element;
}
function toString() {
  let retstr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retstr += this.dataStore[i] + " ";
    if (i > 0 && i % 10 === 0) {
      retstr += "\n";
    }
  }
  return retstr;
}
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

let numElements = 100;
let myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
