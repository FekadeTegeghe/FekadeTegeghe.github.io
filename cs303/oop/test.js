"use strict";

log();
log(6, 7);
log(5);

function log(x) {
  console.log("1 Argument: " + x);
}
function log() {
  console.log("No Arguments");
}
function log(x, y) {
  console.log("2 Arguments: " + x + ", " + y);
}
