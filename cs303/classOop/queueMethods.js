"use strict";
class Queue {
  constructor() {
    this.input = [];
    //this.output = [];
  }
  add(element) {
    this.input.push(element);
  }
  remove() {
    return this.input.shift();
  }
}
const queue = new Queue();
queue.add("somebody");
queue.add("Sosina");
queue.add("Yemaryam");
queue.add("Mami");
queue.add("Ene");
let removed = queue.remove();
console.log(queue);
console.log(removed);
