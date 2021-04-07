"use strict";
//Borrow method
const me = {
  first: "John",
  last: "Smith",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};
const log = function (height, weight) {
  console.log(this.getFullName() + height + " " + weight);
};
const logMe = log.bind(me);
logMe("180cm", "70kg");
log.call(me, "180cm", "70kg");
log.apply(me, ["180cm", "70kg"]);
log.bind(me, "180cm", "70kg")();
