"use strict";
function getMostFrequent(arr) {
  const hashmap = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
}
let arr = [2, 3, 2, 3, 4, 3, 5, 3, 6, 3, 6];
console.log(getMostFrequent(arr));
