//variabls
var start = document.querySelector("#start");
var secondsDisplay = document.querySelector("#seconds");


//questions

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var score = 0;

var questions = [
  {
      question1: "Is JavaScript a case-sensitive language?",
      a: "Yes",
      b: "No",
      c: "Maybe",
      answer: "A"
    },
  {
      question2: "What are the advantages of JavaScript?",
      a: "Less server interaction",
      b: "Immediate feedback to the visitors",
      c: "All of the above",
      answer: "C"
    },
  {
      question3: "In how many ways a JavaScript code can be involved in an HTML file?",
      a: "1",
      b: "3",
      c: "4",
      answer: "B"
    },
  {
      question4: "The statement (Provide more details on an element like id, type, value etc.) is the definition of what JS term?",
      a: "Attribute",
      b: "Property",
      c: "Element",
      answer: "A"
    }
  ];



//for (var i = 0; i < questions.length; i++) {
 // var result = window.questions.answer;
  //if (result == questions[i].answer){
 //   score++;
 //   alert("Correct");
 // } else {
    //alert("Wrong!");
//  }
//}
//alert(" You got " + score + " / " + questions.length);

var fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
}


//const keys = Object.keys(fruits)
//for (const key of keys) {
  //console.log(key)
//}

//const keys = Object.keys(questions)
//for (const key of keys) {
  //console.log(key)
//}
var entries = Object.entries(questions)
console.log(entries)

const keys = Object.keys(questions)
console.log(keys)

const object = { 1: "Is JavaScript a case-sensitive language?" , 2: "What are the advantages of JavaScript?", 3: "In how many ways a JavaScript code can be involved in an HTML file?" };

for (const property in question1) {
  console.log(`${property}: ${question1[property]}`);
}





//Timer 

var timeleft = 120;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("seconds").innerHTML = "Finished";
  } else {
    document.getElementById("seconds").innerHTML = timeleft + " Seconds Remaining";
  }
  timeleft -= 1;
}, 1000);

//start.addEventListener("click",);




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