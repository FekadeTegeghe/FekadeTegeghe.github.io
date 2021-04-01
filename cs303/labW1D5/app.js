function load() {
  let id = document.getElementById("result");
  id.innerHTML = "Lab W1D5";
}
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
("use strict");

function countSubstring(str, tar) {
  let start = str.substring(str.indexOf(tar, 0));
  if (!str.includes(tar)) {
    return 0;
  } else {
    return 1 + countSubstring(start.substring(tar.length), tar);
  }
}

// Save obj in localStorage
function saveInLocalStorage(name, obj) {
  const str = JSON.stringify(obj);
  localStorage.setItem(name, str);
}

// Return value of name in local storage
function getFromLocalStorage(name) {
  const obj = localStorage.getItem(name);
  return JSON.parse(obj);
}

// This function has an unbounded this. When it is called, the this will be bound to some object
// The argument "obj" is a single key/value pair, e.g. {location:"Fairfield"}
// It can be any key/value pair
// addMissProperty tests the object bound to its "this" for the key of "obj" (e.g., location)
// If the bound object doesn't have that key then the key and its value is added to the bound object.
function addMissingProperty(obj) {
  for (let prop in obj) {
    if (this.hasOwnProperty(prop) === undefined) {
      return undefined;
    } else {
      return this.prop;
    }
  }
}

// Constructor function which creates object {name:name, country:country, creationData:...}
// Where creationDate is the time that the object is created.
function Person(name, country) {
  const person = { name: "name", country: "country", creationDate: new Date() };
  return person;
}

// The parameter "students" is an array of student objects. Each student object has form
// {name:some name, country: some country}
// This function creates a Map using the "students" parameter and sets the value of each student
// in it to zero. This will be the number of classes that the student has missed.
// The function incrementAbscences (see next) can be called to increment the number of absences.
function register(students) {
  const student = new Map();
  for (let i = 0; i < students.length; i++) {
    student.set(students[i], 0);
  }
  return student;
}

// Parameters:
// course is a Map mapping student objects to an integer which is the number of days missed
// student is an object that can be used as a key to course.
// This function increments the number of days missed for the student.
function incrementAbsences(course, student) {
  let attendance = course.get(student);
  course.set(student, attendance + 1);
}
