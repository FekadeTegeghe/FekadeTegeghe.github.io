"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.root = null; // first/head/root element
    this.size = 0; // total number of elements in the list
  }

  addFirst(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
  }

  removeFirst() {
    const first = this.root;

    if (first) {
      this.root = first.next;
      return first.value;
    }
  }
}
