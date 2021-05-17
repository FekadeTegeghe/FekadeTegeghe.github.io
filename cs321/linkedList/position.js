"use strict";
function findPos(i) {
  let k = 0;
  let current = head.next;
  while (current != head.next) {
    if (k === i) {
      return current;
    } else {
      current = current.next;
      k++;
    }
  }
}
