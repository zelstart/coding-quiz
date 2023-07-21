// use getElement to grab HTML elements that we'll need to manipulate
var h1Tags = document.getElementsByTagName("h1");
var h2Tags = document.getElementsByTagName("h2");
var h3Tags = document.getElementsByTagName("h3");
var ulTags = document.getElementsByTagName("ul");
var liTags = document.getElementsByTagName("li");

var startButton = document.getElementById("start");
var viewScores = document.getElementById("scores");
var timer = document.getElementById("timer");

var headingDiv = document.getElementById("heading");
var startDiv = document.getElementById("startDiv");
var instructionsDiv = document.getElementById("instructions");
var questionsDiv = document.getElementById("questions");
var optionsDiv = document.getElementById("options");
var questionsText = document.getElementById("questionsText");
var resultAlert = document.getElementById("result");

// dont know if i'll actually need these ones for the list items, but jic
var liA = document.getElementById("a");
var liB = document.getElementById("b");
var liC = document.getElementById("c");
var liD = document.getElementById("d");


// global variables 
var score = 0;
var highScores = [];
var timeLeft = 90;



// Create an object containing all of the questions, options and answers
var questions = [{
    // question 1
    question: "Commonly used data types DO NOT include:",
    answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
    },
    correctAnswer: "c"
},
{
    // question 2
    question: "The condition in an if / else statement is enclosed with _______.",
    answers: {
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
    },
    correctAnswer: "b"
},
{
    // question 3
    question: "Arrays in JavaScript can be used to store _______.",
    answers: {
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
    },
    correctAnswer: "d"
},
{
    // question 4
    question: "String Values must be enclosed within _______ when being assigned to variables.",
    answers: {
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
    },
    correctAnswer: "c"
},
{
    // question 5
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console.log",
    },
    correctAnswer: "d"
}]

// create the timer
function setTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Timer: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            // end the quiz, take the user to a page to input their initials and record the score
        }


    }, 1000);
}

// start the timer and modify the elements seen on screen when the quiz button is pressed
startButton.addEventListener("click", function () {
    setTimer();
    // will hide the start button heading and instructions divs
    startDiv.classList.add("hidden");
    headingDiv.classList.add("hidden");
    instructionsDiv.classList.add("hidden");

    questionsDiv.classList.remove("hidden");
    optionsDiv.classList.remove("hidden");
});


    // will unhide the questions and multiple choice divs
    // questionsDiv.classList.remove("hidden");
    // optionsDiv.classList.remove("hidden");

    // will unhide the result alert div
    // resultAlert.classList.remove("hidden");


// start quiz
// function quiz() {
//     var userAnswer = "";
//     questionText.textContent = "";
//     if (timeLeft > 0) {
//         h2Tags.textContent = 
//         liA.textContent = "test"
//         liB.textContent = "test"
//         liC.textContent = "test"
//         liD.textContent = "test"
//     }
// }

// if (correctAnswer === userAnswer)
// if correctAnswer !== userAnswer) {
// timeLeft - 10}


// when quiz starts, the h2 tag should have it's contents changed to one of the questions stored in the object "questions"
// when quiz starts, the li tags should be populated with the answers for the question currently in the h2 tag
// add event listener for quiz questions
    // when the answer is correct, textcontent of h2 should be "Correct"
    // when the answer is incorrect, textcontent of h2 should be "Incorrect"
// after an answer has been chosen, the next question should pop up and cycle through all 5 questions
// once all 5 questions have been answered, the timer should stop 
// the user should be taken to a screen with their final score and a place to submit their initials
// the score and initials should be saved to local storage

// when the user clicks view high scores, it should take them to a page that displays a list of scores and initials




