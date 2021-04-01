"use strict";
// Use filter, map, reduce to implement the tasks below:
// 1. Count the total of users which name’s length is greater than 4.
// 2. Return an array which contains the length of user’s name for those user’s name
// contains letter ‘a’.
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Smith" },
  { id: 4, name: "William" },
  { id: 5, name: "Ivy" },
  { id: 6, name: "Christina" },
  { id: 7, name: "Martin" },
  { id: 8, name: "Stephine" },
  { id: 9, name: "Charlie" },
  { id: 10, name: "Zard" },
];

const nameLengthMoreThan4 = users.reduce(
  (sum, current) => (current.name.length > 4 ? sum + 1 : sum),
  0
);
const filtered = users
  .filter((item) => item.name.toLowerCase().includes("a"))
  .map((item) => item.name.length);
console.log(nameLengthMoreThan4);
console.log(filtered);
