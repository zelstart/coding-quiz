// use getElement to grab HTML elements that we'll need to manipulate. might have gone a little ham here, feels excessive
var h1Tags = document.getElementsByTagName("h1");
var h2Tags = document.getElementsByTagName("h2");
var h3Tags = document.getElementsByTagName("h3");
var liTags = document.getElementsByTagName("li");
var startButton = document.getElementById("start");
var viewScores = document.getElementById("scores");
var timer = document.getElementById("timer");
var headingDiv = document.getElementById("heading");
var startDiv = document.getElementById("startDiv");
var instructionsDiv = document.getElementById("instructions");
var questionsDiv = document.getElementById("questions");
var optionsDiv = document.getElementById("options");
var choiceList = document.getElementById("choiceList");
var multipleChoice = document.getElementById("multipleChoice");
var questionsText = document.getElementById("questionsText");
var resultAlertDiv = document.getElementById("result");
var resultAlertText = document.getElementById("resultAlert");
var finalScore = document.getElementById("finalScore");
var userScore = document.getElementById("user-score");
var initialsField = document.getElementById("initials");
var highScoresDiv = document.getElementById("viewHighScores");
var backButton = document.getElementById("back");
var liA = document.getElementById("a");
var liB = document.getElementById("b");
var liC = document.getElementById("c");
var liD = document.getElementById("d");



// Create an object containing all of the questions, options and answers
const questions = [
    {
        num: 1,
        question: "Commonly used data types DO NOT include:",
        correctAnswer: "alerts",
        answers:
            [
                "strings",
                "booleans",
                "alerts",
                "numbers"
            ]
    },
    {
        num: 2,
        question: "The condition in an if / else statement is enclosed with _______.",
        correctAnswer: "curly brackets",
        answers:
            [
                "quotes",
                "curly brackets",
                "parenthesis",
                "square brackets",
            ]

    },
    {
        num: 3,
        question: "Arrays in JavaScript can be used to store _______.",
        correctAnswer: "all of the above",
        answers:
            [
                "numbers and strings",
                "other arrays",
                "booleans",
                "all of the above",
            ],
    },
    {
        num: 4,
        question: "String Values must be enclosed within _______ when being assigned to variables.",
        correctAnswer: "quotes",
        answers:
            [
                "commas",
                "curly brackets",
                "quotes",
                "parenthesis",
            ]
    },
    {
        num: 5,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        correctAnswer: "console.log",
        answers:
            [
                "JavaScript",
                "terminal/bash",
                "for loops",
                "console.log",
            ]

    }]


var highScores = JSON.parse(localStorage.getItem("finalScores")) || []; // storage for high scores?
var timeLeft = 60; // number of seconds timer starts with
var userChoice = ""; // container for user choice
var i = 0; // will be our index number to advance through the questions array



// create the timer
function setTimer() {
    var timerInterval = setInterval(function () {
        if (timeLeft > 0 && i < questions.length) {
            timeLeft--;
            timer.textContent = "Timer: " + timeLeft;
        } else {
            endQuiz()
        }
    }, 1000);
}

// an event listener for answer clicks
// does this need to be inside startQuiz function??? 
optionsDiv.addEventListener("click", function (event) {
    var buttonText = event.target.textContent;
    if (event.target.matches(".multipleChoice")) {
       // this is where we want to validate whether or not the answer was right
        checkAnswer(buttonText);
        i++;
        getQuestion();
    }
})

function getQuestion() {
    if (i < questions.length) {
        questionsText.textContent = questions[i].question;
        liA.textContent = questions[i].answers[0];
        liB.textContent = questions[i].answers[1];
        liC.textContent = questions[i].answers[2];
        liD.textContent = questions[i].answers[3];

        console.log(i);
    } else {
        endQuiz();
    }
}


// functions for showing/hiding the results popup 
function hideResult() {
    resultAlertDiv.classList.add("hidden");
}
function showResult() {
    resultAlertDiv.classList.remove("hidden");
}


// hide the quiz elements on the page, reveal the "final results" element
function endQuiz() {
    questionsDiv.classList.add("hidden");
    optionsDiv.classList.add("hidden");
    finalScore.classList.remove("hidden");
}



// start quiz
function startQuiz() {
    setTimer();
    startDiv.classList.add("hidden");
    headingDiv.classList.add("hidden");
    instructionsDiv.classList.add("hidden");
    questionsDiv.classList.remove("hidden");
    optionsDiv.classList.remove("hidden");
    getQuestion();
    
// i was hoping to progress the startQuiz function by having it wait for a data- attribute to be changed, which I wanted to happen on a click
// this doesn't seem to work
    // var clickState = choiceList.getAttribute("data-click");

    // if (clickState === "true") {

    //     if (i < questions.length) {
    //         checkAnswer();
    //         i++;
    //     }
    // }
}

// checks user's answer against current question's correct answer
function checkAnswer(userChoice) {
    var correct = questions[i].correctAnswer; // will store the correct answer for the current question to be compared with userChoice
    console.log(userChoice, correct)
    if (userChoice === correct) {
        showResult();
        resultAlertText.innerText = "Correct!"
        setTimeout(hideResult, 1500);
    }

    if (userChoice !== correct) {
        timeLeft = timeLeft - 10;
        showResult();
        resultAlertText.innerText = "Incorrect!";
        setTimeout(hideResult, 1500);

    }
}

// listener for button to start the quiz
startButton.addEventListener("click", function () {
    startQuiz();
});

// add an event listener for submit scores
    // save scores to localStorage 
    // they should be added to the global variable highScores, and should not overwrite each other

// add a function for the view highscores page
    // should access the highscores 

