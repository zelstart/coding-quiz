// use getElement to grab HTML elements that we'll need to manipulat. might have gone a little ham here, feels excessive
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
var initialsField = document.getElementById("initials");

var liA = document.getElementById("a");
var liB = document.getElementById("b");
var liC = document.getElementById("c");
var liD = document.getElementById("d");


// global variables 
// will store scores here? idk if that will actually work
var highScores = [];
var timeLeft = 3;




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



// global variables that will check for whether or not all questions have been answered. 
// probably not good and descriptive names, but couldn't come up with anything else
// don't know which function I should put this in, but I think the logic would be:
// if (currentQuestion === lastQuestion) {
// endQuiz ();
// }
// and then something to say every time a question is printed to the screen, currentQuestion goes up by 1. not sure how that might work yet.
var lastQuestion = questions.length;
var currentQuestionNum = 0;
// storage for user answer
var userAnswer = "";
// need to make userAnswer = the answer they click on
userAnswer = "";


// create the timer
function setTimer() {
    var timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = "Timer: " + timeLeft;
        } else {
            // end the quiz, take the user to a page to input their initials and record the score
            endQuiz()
        }
        // need an if statement to stop the timer when all questions have been answered ?
    }, 1000);
}

// an event listener for answer clicks
// definitely not sure if this is the right way to do this
optionsDiv.addEventListener("click", function () {
    // record which list item was clicked
})

// functions for showing/hiding the results popup 
function hideResult() {
    resultAlert.classList.add("hidden");
}

function showResult() {
    resultAlert.classList.remove("hidden");
}


// hide the quiz elements on the page, reveal the "final results" element
function endQuiz() {
    var finalScores = {
        initials: initialsField.value,
        score: timeLeft
    };
    questionsDiv.classList.add("hidden");
    optionsDiv.classList.add("hidden");
    finalScore.classList.remove("hidden");
    // user's score should be equal to the time left on the timer
    userScore.textContent = "Score: " + timeLeft;
    // save the user's initials and the score as an object in localstorage
localStorage.setItem("finalScores",JSON.stringify(finalScores))

}


    // start quiz
    function startQuiz() {
        i = 0;
        // Questions and multiple choice options need to be pulled from the questions object and put here
        // It needs to cycle through all 5 questions, moving to the next one after the previous has an answer selected
        questionsText.textContent = questions[i].question;
        liA.textContent = questions[i].answers[0];
        liB.textContent = questions[i].answers[1];
        liC.textContent = questions[i].answers[2];
        liD.textContent = questions[i].answers[3];

        // if userAnswer is the correct answer
        if (userAnswer === correctAnswer) {
            showResult();
            resultAlert.textContent("Correct!")
            // make the resultAlert only last a second or two before going away again
            setTimeout(hideResult, 1500)
        }

        // if userAnswer is not the correct answer, timer goes down 10s
        if (userAnswer !== correctAnswer) {
            // I don't know if this will actually have the intended result, can't test it till I figure out other stuff
            timeLeft = timeLeft - 10;
            showResult();
            resultAlert.textContent("Incorrect!");
            // make the resultAlert only last a second or two before going away again
            setTimeout(hideResult, 1500)

        }
        // if timer runs out, quiz ends
        if (timeLeft === 0) {
            endQuiz();
        }

        // if all questions have been answered, stop the timer
        // stopTimer();
    }

// event listener for submitting scores
// submitScore.addEventListener("click", function() {

// })


// start the timer and modify the elements seen on screen when the quiz button is pressed
startButton.addEventListener("click", function () {
    setTimer();
    // will hide the start button heading and instructions divs
    startDiv.classList.add("hidden");
    headingDiv.classList.add("hidden");
    instructionsDiv.classList.add("hidden");
    // will reveal the divs for questions and multiple choice options
    questionsDiv.classList.remove("hidden");
    optionsDiv.classList.remove("hidden");
    startQuiz();
});

viewScores.addEventListener("click", function() {


}
)


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




