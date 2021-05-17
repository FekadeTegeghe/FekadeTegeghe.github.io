"use strict";
function removeDup(list) {
  let map = new HashMap();
  let iterator = list.elements();
  while (iterator.hasNext()) {
    let ob = iterator.nextObject();
    if (!map.contains(ob)) {
      map.put(ob, ob);
    }
  }
  return map.keys();
}
let arr = [12, 44, 13, 88, 23, 94, 11, 39, 20, 16, 5];
let list = new LinkedList.DLinkedList();
list.insertLast(8);
list.insertLast(8);
list.insertLast(1);
list.insertLast(2);
list.insertLast(1);
list.insertLast(3);
