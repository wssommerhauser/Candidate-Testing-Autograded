const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? " ,
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("Please input your name: ");
    console.log("Hello, " + candidateName + "!");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //  candidateAnswer = input.question(question);
    for(i = 0; i < questions.length; i++){
      candidateAnswers[i] = input.question(`${questions[i]}-- `);
    }
    //return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {
  
  let answeredCorrect = 0;
  let gradeArray = candidateAnswers;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(i = 0; i < candidateAnswers.length; i++){
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      console.log(`Question ${i + 1} - You answered: ${candidateAnswers[i]}. That is correct!`);
      answeredCorrect = answeredCorrect + 1;
    }
    else{
      console.log(`Question ${i + 1} - You answered: ${candidateAnswers[i]}. Correct answer is ${correctAnswers[i]}.`);
    }
  }

  console.log(answeredCorrect);
  
  let quizQuestions = questions.length;
  let grade = (answeredCorrect / quizQuestions) * 100;  //TODO 3.2 use this variable to calculate the candidates score.
  

  if (grade >= 80){
  console.log(`You scored ${grade}%. You Passed!`)
  }
  else{
  console.log(`You scored ${grade}%. You failed the test.`)
  }
  return grade;

  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(candidateAnswers);
}
//console.log(runProgram());
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};