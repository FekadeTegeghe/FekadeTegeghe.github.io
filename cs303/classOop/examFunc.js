"use strict";
function checkExam(arr1, arr2) {
  let score = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      score = score + 4;
    } else {
      score -= 1;
    }
  }
  if (score < 0) {
    score = 0;
  }
  return score;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); //6
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); //16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); //0
