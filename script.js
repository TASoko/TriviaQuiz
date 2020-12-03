//variabls
var startBtn = document.getElementById("start-button");
var secondsDisplay = document.querySelector("#seconds");
var testspace = document.querySelector("#test");
var timeleft = 120;

console.log("This should be the start button element", startBtn)


//questions

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var score = 0;
var currentQuestionIndex = 0

var questions = [
  {
      question: "Is JavaScript a case-sensitive language?",
      choices: ["Yes", "No", "Maybe"],
      answer: "A"
    },
  {
      question: "What are the advantages of JavaScript?",
      choices: ["Less server interaction",  "Immediate feedback to the visitors", "All of the above"],
      answer: "C"
    },
  {
      question: "In how many ways a JavaScript code can be involved in an HTML file?",
      choices: ["1", "3", "4"],
      answer: "B"
    },
  {
      question: "The statement (Provide more details on an element like id, type, value etc.) is the definition of what JS term?",
      choices: ["Attribute", "Property", "Element"],
      answer: "A"
    }
];


var lastQuestionIndex = questions.length - 1;

//}
//alert(" You got " + score + " / " + questions.length);

var button = document.createElement("button");
button.setAttribute("class", "answers")

//<button class="answers" data-answer="A">Yes</button>





//Timer 
function startQuiz() {
console.log("Is this working?")
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("seconds").innerHTML = "Finished";
  } else {
    document.getElementById("seconds").innerHTML = timeleft + " Seconds Remaining";
  }
  timeleft -= 1;
}, 1000);

function checkAnswers() {
for (var i = 0; i < questions.length; i++) {
  var result = window.questions.answer;
if (result == questions[i].answer){
   score++;
    alert("Correct");
  } else {
    alert("Wrong!");
  }
}
}
}

var answerButtons = document.querySelector(".answers")

//Andrew Comments
// Create your answer buttons first
//It should contain a class called "answers" and an attribute called "data-answer"
//The value of data-answer should be "A" for the first button, "B" for the second, etc"



//heading and instructions on how to play the game
//when you hit start quiz the timer should start
//some type of array that can iterate over for all the questions
//array of objects
//object should include 
//title of question
//another key for choices
//answer key
//compare the user choice to the answer
//counter for the number of correct answers
//grab the value of their initials and their score and save it to local storage

startBtn.addEventListener("click", startQuiz);
answerButtons.addEventListener("click", checkAnswer)
