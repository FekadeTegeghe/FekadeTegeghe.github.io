/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
// let numProperties = () => {
//   let count = 0;
//   for (let prop in this.Person) {
//     count++;
//   }
//   return count;
// };

// let cntShortName = () => {
//   let count = 0;
//   for (let key in this.Person) {
//     if (key.length < 3) {
//       count++;
//     }
//   }
//   return count;
// };

// let cntReferences = () => {
//   let count = 0;
//   for (let prop in this.Person) {
//     if (typeOf(Person.prop) === Object) {
//       count++;
//     }
//   }
//   return count;
// };
/**
 *
 * @param {number} numProperties is a number
 * @param {number} cntShortName is a number
 * @param {number} cntReferences is a number
 * @returns {number} count is a number
 */
function analyzer() {
  let counter = 0;
  for (let pro in this) {
    counter++;
  }

  let count = 0;
  for (let key in this) {
    if (key.length < 3) {
      count++;
    }
  }
  let count1 = 0;
  for (let key in this) {
    if (typeof this[key] === "object") {
      count1++;
    }
  }

  return { numProperties: counter, cntShortName: count, cntReference: count1 };
}

function Person(name, country, grades) {
  this.name = name;
  this.country = country;
  this.grades = grades;
  this.computeGrade = function () {
    let sum = 0;
    for (let grade of grades) {
      sum += grade;
    }
    return sum / grades.length;
  };
}

//module.exports = { analyzer, person: Person };
