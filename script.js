//variabls
var startBtn = document.getElementById("start-button");
var secondsDisplay = document.querySelector("#seconds");
var testspace = document.querySelector("#test");
var timeleft = 60;
var timeDeduct = 10;
var Btn = document.querySelectorAll(".answers");
var answerBtn = document.querySelectorAll(".data-answer");
var submitBtn = document.querySelector(".submit");
var questionSection = document.getElementById("questionSection");
var answerSection = document.getElementById("answerSection");


console.log("This should be the start button element", startBtn);

//questions

var pos = 0,
  test,
  test_status,
  question,
  choice,
  choices,
  chA,
  chB,
  chC,
  chD,
  correct = 0;
var score = 0;
var currentQuestionIndex = 0;

var questions = [
  {
    question: "Is JavaScript a case-sensitive language?",
    choices: ["Yes", "No", "Maybe"],
    answer: "A",
  },
  {
    question: "What are the advantages of JavaScript?",
    choices: [
      "Less server interaction",
      "Immediate feedback to the visitors",
      "All of the above",
    ],
    answer: "C",
  },
  {
    question:
      "In how many ways a JavaScript code can be involved in an HTML file?",
    choices: ["1", "3", "4"],
    answer: "B",
  },
  {
    question:
      "The statement (Provide more details on an element like id, type, value etc.) is the definition of what JS term?",
    choices: ["Attribute", "Property", "Element"],
    answer: "A",
  },
];




function Results() {
  var lastQuestionIndex = questions.length - 1;

  for (var i = 0; i < questions[currentQuestionIndex].answer.length; i++) {
    //selectedanswer = questions[i].choices[questions[i].selectedIndex].value;
    questions[currentQuestionIndex].answer[i]
    //question.textContent = questions[currentQuestionIndex].answers[i]
    //document.querySelector('#answers').appendChild(question)
    //if (selectedanswer === Btn) {
    //score++;
  }
}

  //alert(" You got " + score + " / " + questions.length);
  //var button = document.createElement("button");
  //button.setAttribute("class", "answers")

  //<button class="answers" data-answer="A">Yes</button>
  //};

  //Button Clicks [Verified Don't Touch]
  function buttonClick() {
    alert("It works")
  };




  //Timer [Verified Don't Touch]

  function startQuiz() {
    console.log("Is this working?");
    createAnswers()
    var downloadTimer = setInterval(function () {
      if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("seconds").innerHTML = "Finished";
      } else {
        document.getElementById("seconds").innerHTML =
          timeleft + " Seconds Remaining";
      }
      timeleft -= 1;
    }, 1000);

  
  }
  function createAnswers() {
    console.log("the create answers works");
    var q = questions[currentQuestionIndex]
    for (var i = 0; i < q.choices.length; i++) {
      answerBtn,q.choices[i]
      Btn[i].textContent = q.choices[i]
    }
  }

  //for (var i = 0; i < questions.length; i++) {
  //var result = window.questions.answer;
  //if (result == questions[i].answer) {
  //score++;
  //alert("Correct");
  ///} else {
  //alert("Wrong!");
  //}
  // }

  //document.getElementsByClassName("answers").addEventListener("click", displayDate);

  //function display() {
  //document.getElementsByClassName("demo").innerHTML = Date();
  //}




  //var answerButtons = document.getElementsByClassName(".answers").getAttribute("data-answers");

  //Andrew Comments
  // Create your answer buttons first
  //It should contain a class called "answers" and an attribute called "data-answer"
  //The value of data-answer should be "A" for the first button, "B" for the second, etc"




  //compare the user choice to the answer
  //counter for the number of correct answers
  //grab the value of their initials and their score and save it to local storage

  startBtn.addEventListener("click", startQuiz);
  startBtn.addEventListener("click", createAnswers);
  //answerButtons.addEventListener("click", checkAnswer);
  //Btn.addEventListener("click", buttonClick);

  for (var i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click", buttonClick)
    var q = questions[currentQuestionIndex]
    Btn[i].textContent = q.choices[i]
  }
  submitBtn.addEventListener("click", Results);
