// use getElement to grab HTML elements that we'll need to manipulate
    // h1 tags - to remove from dom when starting quiz
    // h2 tags - to modify text content to be questions
    // li tags (ids a, b, c, d) - to modify text content to multiple choice options
    // results id - should flash on the screen after an answer is selected, with text depending on correct/incorrect answers
    // start id - should be removed from the dom after pushed
    // card1 (align text left)

    var h1Tags = document.getElementsByTagName("h1");
    var h2Tags = document.getElementsByTagName("h2");
    var liTags = document.getElementsByTagName("li");

    var card1 = document.getElementsByClassName("card1");
    var card1 = document.getElementsByClassName("card2");
    
    var startButton = document.getElementById("start");
    var resultAlert = document.getElementById("result");
    var viewScores = document.getElementById("scores");
    var timer = document.getElementById("timer");
    //dont know if i'll actually need these ones for the list items, but jic
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var c = document.getElementById("c");
    var d = document.getElementById("d");




// global variables 
var score = 0;
var timeLeft = 90;



// Create an object containing all of the questions, options and answers
var Questions = [{
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

// create timer interval
// timer should decrease by 10 when the user answers incorrectly

// add event listener for start quiz button

// when quiz starts, the h1 tag and start quiz button should be removed from the dom
// when quiz starts, the h2 tag should have it's contents changed to one of the questions stored in the object "questions"
// when quiz starts, the li tags should be populated with the answers for the question currently in the h2 tag

// add event listener for quiz questions
// when the answer is correct, textcontent of h2 should be "Correct"
// when the answer is incorrect, textcontent of h2 should be "Incorrect"




