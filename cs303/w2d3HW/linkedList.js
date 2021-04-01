"use strict";
/*let linkedList = { value: 1 };
linkedList.next = { value: 2 };
linkedList.next.next = { value: 3 };
linkedList.next.next.next = { value: 4 };
let newItem = { value: "new item", next: linkedList };
linkedList = newItem;
console.log(linkedList);
//To delete value one (node 1)
let node1 = linkedList.next.next;
linkedList.next = node1;
console.log(linkedList);
node1.next = null;
console.log(linkedList);  */

//HW Question 1.
function add(num) {
  if (num === 0) {
    return num;
  } else {
    return num + add(num - 1);
  }
}
console.log(add(10));
//Question2
//creating an empty linkedList
let linkedList = {};
//adding elements to the linked list
linkedList.next = { value: 1 };
linkedList.next.next = { value: 2 };
linkedList.next.next.next = { value: 5 };
linkedList.next.next.next.next = { value: 2 };
linkedList.next.next.next.next.next = { value: 7, next: null };
//Printing the linked list befor deletion
console.log(`linkedList {${printList(linkedList.next)}}`);
//Deleting the first node
let node = linkedList.next.next;
linkedList.next = node;
node = null;
//printing the list after deletion of an element
console.log(`linkedList {${printList(linkedList.next)}}`);
//Working on recursive function.
function printList(linkedList) {
  if (linkedList.next == null) {
    return linkedList.value;
  } else {
    return linkedList.value + ", " + printList(linkedList.next);
  }
}
