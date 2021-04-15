"use strict";
class Map {
  constructor() {
    this.collection = {};
    this.count = 0;
    this.size = function () {
      return this.count;
    };
  }

  add(key, value) {
    this.collection[key] = value;
    this.count++;
  }
  remove(key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  }
}
let map = new Map();

map.add("key1", 1);

map.add("key2", 2);

map.remove("key2");

map.add("key3", 3);
console.log(map);
