"use strict";
class LinkStack {
  LinkStack() {
    // constructor
    list = new LinkList();
  }
  // put item on top of stack
  push(j) {
    list.insertFirst(j);
  }
  // take item from top of stack
  pop() {
    return list.deleteFirst();
  }
  // true if stack is empty
  isEmpty() {
    return list.isEmpty();
  }
}

//Queue
class LinkedQueue {
  constructor(front, rear, data) {
    this._front = front;
    this._rear = rear;
    this._data = data;
  }
  enquene() {
    this.insertFirst(); //O(1). Constant
  }
  dequene() {
    //O(1). Constant
    this.remove(this.first());
  }
}
