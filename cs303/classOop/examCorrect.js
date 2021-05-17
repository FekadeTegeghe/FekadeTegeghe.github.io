"use strict";
function checkAnswers(studentAnswer, correctAnswer) {
  let score = 0;
  for (let i = 0; i < studentAnswer.length; i++) {
    if (
      studentAnswer[i].qid === correctAnswer[i].qid &&
      studentAnswer[i].answer !== correctAnswer[i].answer
    ) {
      score = 0;
    } else {
      score++;
    }
  }
  return score;
}
let studentAnswers2 = [
  { qid: 1, answer: "a" },
  { qid: 2, answer: "b" },
  { qid: 3, answer: "b" },
];

let correctAnswers2 = [
  { qid: 1, answer: "b" },
  { qid: 2, answer: "b" },
  { qid: 3, answer: "d" },
];
console.log(checkAnswers(studentAnswers2, correctAnswers2));
