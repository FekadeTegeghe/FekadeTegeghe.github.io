"use strict";
//1. Object creation using object litral
let student = {
  firstName: "String",
  lastName: "String",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    let average =
      this.grades.reduce((accumulator, grade) => accumulator + grade, 0) /
      this.grades.length;
    return average;
  },
};
let Abebe = Object.create(student);
Abebe.firstName = "Abebe";
Abebe.lastName = "Bikilla";
Abebe.inputNewGrade(89);

let Challa = Object.create(student);
Challa.firstName = "Challa";
Challa.lastName = "Bacha";
Challa.inputNewGrade(95);

let Mamo = Object.create(student);
Mamo.firstName = "Mamo";
Mamo.lastName = "Wolde";
Mamo.inputNewGrade(97);

let students = [Abebe, Challa, Mamo, student.grades];
console.log(students);
console.log(`Average grade is: ${student.computeAverageGrade()}`);

//2. Using constructor function
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Student.prototype.inputNewGrade = function (newGrade) {
  this._grades = [];
  this._grades.push(newGrade);
  return this._grades;
};

let stud1 = new Student("Abebe", "Bikilla");
let stud2 = new Student("Mamo", "Wolde");
let stud3 = new Student("Genzebe", "Dibaba");
stud1.inputNewGrade(95);
stud2.inputNewGrade(78);
stud3.inputNewGrade(97);
let grades = [
  ...stud1.inputNewGrade(95),
  ...stud1.inputNewGrade(78),
  ...stud1.inputNewGrade(97),
];

let avgGrade =
  grades.reduce((accumulator, grade) => accumulator + grade, 0) / grades.length;

let temari = [stud1, stud2, stud3, grades];

console.log(temari);
console.log(`Average grade is: ${avgGrade}`);
//3. Sorting algorithm
Array.prototype.sort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (this[j] > this[j + 1]) {
        let current = this[j];
        this[j] = this[j + 1];
        this[j + 1] = current;
      }
    }
  }
  return this;
};

let arr = [11, 2, 13, 4, 55, 3];
let result = arr.sort();
console.log(result);
