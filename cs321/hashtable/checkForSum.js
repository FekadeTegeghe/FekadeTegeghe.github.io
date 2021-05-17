"use strict";
function checkForSum(list, z) {
  let map = new HashMap.HashMap();
  let iterator = list.elements();
  while (iterator.hasNext()) {
    let ob = iterator.nextObject();
    if (map.contains(z - ob)) {
      return true;
    }
  }
  return false;
}
let arr = [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5];
let list = new LinkedList.DLinkedList();
list.insertLast(8);
list.insertLast(8);
list.insertLast(1);
list.insertLast(2);
list.insertLast(1);
list.insertLast(3);
removeDup(list).print();
