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

function analyzer() {
  this.numProperties = function () {
    let count = 0;
    for (let prop in person) {
      count++;
    }
    return count;
  };
  this.cntShortName = function () {
    let count = 0;
    for (let key in person) {
      if (key.length < 3) {
        count++;
      }
    }
    return count;
  };
  this.cntReferences = function () {
    let count = 0;
    for (let prop in person) {
      if (typeOf(Person.prop) === Object) {
        count++;
      }
    }
    return count;
  };
}
// let person = new Person("bob", "usa", [100, 90]);
// Person.f = analyzer; // name too short
// Person.x = 0; // name too short

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
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
