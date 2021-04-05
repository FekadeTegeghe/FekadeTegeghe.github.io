"use strict";
//1. write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
function printNumbers(from, to) {
  let current = from;
  let timerId = setInterval(function () {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
printNumbers(5, 10);

//2. In the code below there’s a setTimeout call scheduled, then a heavy calculation is run,
//that takes more than 100ms to finish.
// • When will the scheduled function run?
// • After the loop.
// • Before the loop.
// • In the beginning of the loop.
// • What is alert going to show?  Double the number of milliseconds
let i = 0;
setTimeout(() => console.log(i), 100); //assume that time to execute this function is > 100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
//solution:
// Any setTimeout will run only after the current code has finished
//The i will be the last one: 100000000
// let i = 0;
setTimeout(() => console.log(i), 100);
for (let j = 0; j < 100000000; j++) {
  i++;
}
