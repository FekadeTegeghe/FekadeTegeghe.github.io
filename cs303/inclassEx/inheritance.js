"use strict";
// 1.Use Object.create() to assign prototypes in a way that any property
// lookup will follow the path: pockets → bed → table → head. For
// instance, pockets.pen should be 3 (found in table),
// and bed.glasses should be 1 (found in head).
// 2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses?
//Benchmark if needed.  Answer: it is about the same!

// //Solution
let head = {
  glasses: 1,
};
let table = Object.create(head);
table.pen = 3;
let bed = Object.create(table);
bed.sheet = 1;
bed.pillow = 2;
let pockets = Object.create(bed);
pockets.money = 2000;

console.log(bed.glasses);
console.log(pockets.pen);
