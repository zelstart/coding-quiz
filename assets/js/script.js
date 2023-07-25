// use getElement to grab HTML elements that we'll need to manipulate.
var startButton = document.getElementById("start");
var viewScores = document.getElementById("scores");
var timer = document.getElementById("timer");
var headingDiv = document.getElementById("heading");
var startDiv = document.getElementById("startDiv");
var instructionsDiv = document.getElementById("instructions");
var questionsDiv = document.getElementById("questions");
var optionsDiv = document.getElementById("options");
var highScoresDiv = document.getElementById("viewHighScores");
var choiceList = document.getElementById("choiceList");
var multipleChoice = document.getElementById("multipleChoice");
var questionsText = document.getElementById("questionsText");
var resultAlertDiv = document.getElementById("result");
var resultAlertText = document.getElementById("resultAlert");
var finalScoreDiv = document.getElementById("finalScore");
var userScore = document.getElementById("user-score");
var initialsField = document.getElementById("initials");
var backButton = document.getElementById("back");
var submitScore = document.getElementById("submit-score")
var clearButton = document.getElementById("clear");
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

var highScores = JSON.parse(localStorage.getItem("highScores")) || [] // storage for high scores?
var timeLeft = 60; // number of seconds timer starts with
var userChoice = ""; // container for user choice
var qIndex = 0; // will be our index number to advance through the questions array


// create the timer
function setTimer() {
    var timerInterval = setInterval(function () {
        if (timeLeft > 0 && qIndex < questions.length) {
            timeLeft--;
            timer.textContent = "Timer: " + timeLeft;
        } else {
            endQuiz()
        }
    }, 1000);
}

// an event listener for answer clicks
optionsDiv.addEventListener("click", function(event) {
    var buttonText = event.target.textContent;
    if (event.target.matches(".multipleChoice")) {
       // validate whether the answer was correct
        checkAnswer(buttonText);
        qIndex++;
        getQuestion();
    }
})


// changes the question and choices based on how far along in the quiz you are
function getQuestion() {
    if (qIndex < questions.length) {
        questionsText.textContent = questions[qIndex].question;
        liA.textContent = questions[qIndex].answers[0];
        liB.textContent = questions[qIndex].answers[1];
        liC.textContent = questions[qIndex].answers[2];
        liD.textContent = questions[qIndex].answers[3];
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
    // hides questions + answers divs, reveals finalScore div
    questionsDiv.classList.add("hidden");
    optionsDiv.classList.add("hidden");
    finalScoreDiv.classList.remove("hidden");
    userScore.textContent = "Score: " + timeLeft;
}


// save the submitted value of the initials field and the score
function saveScore() {
    var userScore = timeLeft;
    var userName = initialsField.value;
    var savedScore = {
        'name': userName,
        'score': userScore,
    }
    highScores.push(savedScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// append each item in the highScores variable as a list item to the page
function addScores() {
    var highScoresUl = document.getElementById("viewHighScores");
    var scoresList = JSON.parse(localStorage.getItem("highScores"))
    
    for (var i = 0; i < highScores.length; i++) {
        var addScore = document.createElement("li");
        addScore.textContent = "Player: " + highScores[i].name + " // Score: " + highScores[i].score;
        highScoresUl.appendChild(addScore);
    }
}

// start quiz hides and unhides certain divs, sets timer and grabs first question
function startQuiz() {
    setTimer();
    startDiv.classList.add("hidden");
    headingDiv.classList.add("hidden");
    instructionsDiv.classList.add("hidden");
    questionsDiv.classList.remove("hidden");
    optionsDiv.classList.remove("hidden");
    getQuestion();
}

// checks user's answer against current question's correct answer
function checkAnswer(userChoice) {
    var correct = questions[qIndex].correctAnswer; // will store the correct answer for the current question to be compared with userChoice
    if (userChoice === correct) {
        showResult();
        resultAlertText.innerText = "Correct!"
        setTimeout(hideResult, 1000);
    }
    if (userChoice !== correct) {
        timeLeft = timeLeft - 10;
        showResult();
        resultAlertText.innerText = "Incorrect!";
        setTimeout(hideResult, 1000);
    }
}

// executes saveScore function on submit
submitScore.addEventListener("click", function(){
    saveScore();
})

// hides all irrelevant elements, reveals the viewScores div
viewScores.addEventListener("click", function() {
    startDiv.classList.add("hidden");
    headingDiv.classList.add("hidden");
    instructionsDiv.classList.add("hidden");
    questionsDiv.classList.add("hidden");
    optionsDiv.classList.add("hidden");
    resultAlertDiv.classList.add("hidden");
    finalScoreDiv.classList.add("hidden");
    highScoresDiv.classList.remove("hidden");
    timer.classList.add("hidden")
    var viewscoresbtn = document.getElementById("scores")
    viewscoresbtn.classList.add("hidden")
    addScores();
})


backButton.addEventListener("click", function(){
    location.reload();
})
// event listener that will clear all recorded scores
clearButton.addEventListener("click", function() {
    localStorage.removeItem("highScores");
    location.reload();
})

// listener for button to start the quiz
startButton.addEventListener("click", function () {
    startQuiz();
});

