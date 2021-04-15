"use strict";
class Clock {
  constructor(timer) {
    this.timer = timer;
  }
}
Clock.prototype.render = function () {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) hours = "0" + hours;
  let minutes = date.getMinutes();
  if (minuts < 10) minutes = "0" + minutes;
  let secs = date.getSeconds();
  if (secs < 10) secs = "0" + secs;
  let output = template
    .replace("h", hours)
    .replace("m", minutes)
    .replace("s", secs);
  console.log(output);
};
this.stop = function () {
  clearInterval(timer);
};
this.start = function () {
  render();
  timer = setInterval(render, 1000);
};
let clock = new Clock({ template: "h:m:s" });
clock.start();
