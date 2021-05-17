"use strict";
const dup = require("./item.js");
const hash = require("./hashMap.js");
function removeDuplicates(list) {
  let hashmap = new hash.HashMap();
  let val = new dup.Item();
  for (let i = 0; i < list.length; i++) {
    hashmap.put(list[i], list[i]); //
  }
  return hashmap.val.keys();
}
let list = [12, 13, 15, 23, 11, 11, 12, 13, 11];
removeDuplicates(list);

function checkSum(list, z) {
  let hashtable = new Hashmap();
  for (let i = 0; i < list.length; i++) {
    hashtable.put(list[i], list[i]);
    if (hashtable.keys().contains(z - list[i])) {
      return true;
    }
  }
  return false;
}
let arr = [1, 3, 5, 11, 4];
console.log(checkSum(arr, 23));
