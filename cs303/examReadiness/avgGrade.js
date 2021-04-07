"use strict";
const students = [
  { name: "Quincy", grade: 96, courses: ["cs301", "cs303"] },
  { name: "Jason", grade: 84, courses: ["cs201", "cs203"] },
  { name: "Alexis", grade: 100, courses: ["cs105", "cs211"] },
  { name: "Sam", grade: 65, courses: ["cs445", "cs303"] },
  { name: "Katie", grade: 90, courses: ["cs303", "cs477"] },
];

let filtered = students.filter((item) => item.courses.includes("cs303"));
let avg = filtered.reduce((acc, item) => acc + item.grade, 0) / filtered.length;
console.log(avg);
