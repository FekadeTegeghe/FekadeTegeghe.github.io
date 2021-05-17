"use strict";
function findKth(list, k) {
  if (head === null) {
    return null;
  }
  if (k <= 0) {
    return undefined;
  }
  let kFinder = head;
  let marker = head;
  let count = 0;
  while (count < k) {
    if (marker === null) {
      console.log("arrived at trailor");
    }
    marker = marker.next;
    count++;
  }
  while (marker !== null) {
    marker = marker.next;
    kFinder = kFinder.next;
  }
  return kFinder;
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
//Lab result
function findKth(L, k) {
  let iter = L.this.elements();
  let i = 0;
  while (iter.hasNext()) {
    i++;
    if (i == k) {
      return iter;
    }
  }
}

function removeMiddle() {
  let middle;
  let i = 0;
  let iter = this.element();
  if (this.size() % 2 === 0) {
    middle = this.size() / 2;
  } else {
    middle = (this.size() + 1) / 2;
  }
  while (iter.hasNext()) {
    i++;
    if (i == middle) {
      this.remove(iter);
    }
  }
}
