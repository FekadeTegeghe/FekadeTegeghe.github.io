/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {
	let str = "";
	for(let i = 0; i<string.length; i++){
		if(string !== "" && i%2 === 1){
			continue;
		}else if(string = ""){
			str = "";
		}else if(string === null){
			console.log("missing argument");
		}else if(typeOf (string[i]) !== "string"){
			console.log("argument not string");
		}else{
			str +=string[i];
		}
		return str;
		}
		let txt = "abcd";
		removeEvenCharacters(txt);

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
	let acum = 0;
	for(let current of array){
		if(current > 0){
		array.reduce(function(acum, current){
			acum += current;
		}
		)};
return acum;
}

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
	function numberFilter(item) {
		return typeof item == "number";
	}
	function stringFilter(item) {
		return typeof item == "string";
	}
	this.numbers = array.filter(numberFilter);
	this.strings = array.filter(stringFilter);
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
	const inverted = array.map(n => {
		if(n >= 0){
			continue;
		}
		inverted = n*(-1);
		return inverted;
	})
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
}


