"use strict";
class Map {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  hash(key) {
    return key.toString().length;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}
// Usage:
const map = new Map();

map.set("cat", 2);
map.set("rat", 7);
map.set("dog", 1);
map.set("art", 8);

console.log(map);
/*
  bucket #0: <1 empty item>,
  bucket #1: 8
*/
