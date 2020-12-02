//variabls
var start = document.querySelector("#start");
var secondsDisplay = document.querySelector("#seconds");


//questions

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  {
      question: "Is JavaScript a case-sensitive language?",
      a: "Yes",
      b: "No",
      c: "Maybe",
      answer: "A"
    },
  {
      question: "What are the advantages of JavaScript?",
      a: "Less server interaction",
      b: "Immediate feedback to the visitors",
      c: "All of the above",
      answer: "C"
    },
  {
      question: "In how many ways a JavaScript code can be involved in an HTML file?",
      a: "1",
      b: "3",
      c: "4",
      answer: "B"
    },
  {
      question: "The statement (Provide more details on an element like id, type, value etc.) is the definition of what JS term?",
      a: "Attribute",
      b: "Property",
      c: "Element",
      answer: "A"
    }
  ];

  function get(x){
    return document.getElementById(x);
  }
  
  // this function renders a question for display on the page
  function renderQuestion(){
    test = get("test");
    if(pos >= questions.length){
      test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct</h3>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    }
  
    get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    
    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;
  
    // display the question
    test.innerHTML = "<h4>"+question+"</h4>";
  
    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  }
  
  function checkAnswer(){
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
      }
    }
    // checks if answer matches the correct choice
    if(choice == questions[pos].answer){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
  }
  // Add event listener to call renderQuestion on page load event
  window.addEventListener("load", renderQuestion);





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

start.addEventListener("click",);




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