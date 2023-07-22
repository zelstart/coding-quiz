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
var finalScore = document.getElementById("finalScore");
var userScore = document.getElementById("user-score");

var liA = document.getElementById("a");
var liB = document.getElementById("b");
var liC = document.getElementById("c");
var liD = document.getElementById("d");



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

    function startQuiz() {
        var userAnswer = "";
        userAnswer = "";
    
        questionsText.textContent = questions.question;
        liA.textContent = questions.answers[0] ;
        liB.textContent = questions.answers[1] ;
        liC.textContent = questions.answers[2];
        liD.textContent = questions.answers[3];
    
    
        if (userAnswer === correctAnswer) {
            showResult();
            resultAlert.textContent("Correct!")
            setTimeout(hideResult, 1500)
        }
    
        if (userAnswer !== correctAnswer) {

            timeLeft = timeLeft - 10;
            showResult();
            resultAlert.textContent("Incorrect!");
            setTimeout(hideResult, 1500)
    
        }

        if (timeLeft === 0) {
            endQuiz();
        }
    }
    


function setTimer() {
    var timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = "Timer: " + timeLeft;
        }
    }, 1000);
}


startButton.addEventListener("click", function () {
    setTimer();

    startDiv.classList.add("hidden");
    headingDiv.classList.add("hidden");
    instructionsDiv.classList.add("hidden");
    questionsDiv.classList.remove("hidden");
    optionsDiv.classList.remove("hidden");

    startQuiz();
});