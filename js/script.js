/* 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score 
*/

// sample questions from mock
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        options: ["Javascript", "terminal / bash", "for loops", "console log"],
        correct: "console log"
    }
];

// create html elements variables
var createUl = document.createElement("ul");
var createH2 = document.createElement("h2");




// html variables
var quizDiv = document.querySelector("#quiz");
var timerDiv = document.querySelector("#timer");
var messageDiv = document.querySelector("#message");
var startButton = document.querySelector("#startButton");



// js variables
let index = 0;

// quiz variables
var runningTime = 0; // duration of 60 seconds
var secondsLeft = 60; // countdown max, change this to make shorter or longer
var penalty = 15; // seconds to subtract if wrong
var score = 0;

// start button starts timer
startButton.addEventListener("click", function () {

    if (runningTime === 0) {
        runningTime = setInterval(function () {
            secondsLeft--;
            timerDiv.textContent = "You have " + secondsLeft + " seconds left in this challenge.";

            if (secondsLeft <= 0) {
                clearInterval(runningTime);
                // clear quizDiv
                quizDiv.innerHTML ="";
                createUl.innerHTML ="";
                timerDiv.textContent = "Challenge over!";
                scoreSummary();
                    }

        }, 1000);
    }   
    displayQuiz(index);
});


// function to display questions on page 
function displayQuiz(index){

    quizDiv.innerHTML = "";
    createUl.innerHTML = "";
    // loop through all questions in questions array
    for (var i = 0; i < questions.length; i++) {
        //declare game components
        var gameQuestions = questions[index].question;
        var gameOptions = questions[index].options;
        // append question in h2
        quizDiv.appendChild(createH2);
        createH2.textContent = gameQuestions;

        // log question 
        // console.log(gameQuestions);
    }
    // creates list for question options
    gameOptions.forEach(function(optionItem) {
        // declare create listItem variable
        var listItem = document.createElement("li");
        //append options
        listItem.textContent = optionItem;
            // append ul > li to quizDiv
            quizDiv.appendChild(createUl);
            createUl.appendChild(listItem);

        // user selects option - add event listener
        listItem.addEventListener("click", (checkContinue));

        // log answers
        // console.log(optionItem);
    })
}

// function to check users choice and match against array answer key. also continues
function checkContinue(event) {
    // target event
    var element = event.target;
    
    // condition li matches correct answer li
    if (element.matches("li")) {

        var gameAnswer = questions[index].correct;

        // CORRECT ANSWER BLOCK
        if (element.textContent === gameAnswer) { 
            score++; // increase score by 1
            messageDiv.setAttribute("style", "display:block;");
            messageDiv.setAttribute("class", "correct");
            messageDiv.textContent = "Nice job!" + "\n The answer was: " + gameAnswer;

        } else {
            // INCORRECT ANSWER BLOCK
            secondsLeft = secondsLeft - penalty; //15 second penalty
            messageDiv.setAttribute("style", "display:block;");
            messageDiv.setAttribute("class", "incorrect");
            messageDiv.textContent = "Minus " + penalty + " seconds. Incorrect answer. The answer was: " + gameAnswer;
        }        
    }
    
    // go to next question
    index++;
    // end quiz conditions
    if (index >= questions.length) { // if no more questions, record score and game over
        
        // call function scoreSummary
        clear();
        scoreSummary();
        

    } else { // continue showing questions
        displayQuiz(index);
    }

// utility functions: clear div — broken?    
function clear() {
    quizDiv.innerHTML ="";
    createUl.innerHTML ="";
}

// PRACTICE MORE HTML

// score summary
function scoreSummary() {

    // declare html creation variables in scoreSummary function scope
    var createButton = document.createElement("button");
    var createLabel = document.createElement("label");
    var createInput = document.createElement("input");
    var createP = document.createElement("p");

    // clear containers
    quizDiv.innerHTML ="";
    timerDiv.innerHTML ="";

    // clear timer
    clearInterval(runningTime);

    // change message to Challenge Over
    timerDiv.textContent = "Challenge over!";
    
    // show messageDiv 
    messageDiv.removeAttribute("style", "display:none;");
    // change messageDiv styles
    messageDiv.setAttribute("style", "display:block;text-align:center;color:#343434;");
    // messageDiv message
    messageDiv.textContent = "Quiz: " + score + "/" + questions.length + " questions answered correctly"; 

    // Change title in HTML
    var titleH1 = document.querySelector("h1");
    titleH1.textContent = "Score Summary";

    // show Score in quizDiv
    quizDiv.textContent = "Your Score: " + secondsLeft + " seconds!";
        // new quizDiv message styles
        quizDiv.setAttribute("style", "text-align:center;");
        
    // create instruction for scoreboard
    quizDiv.appendChild(createP);
        createP.textContent = "Type your initials to submit score.";
    
    // create inputfield
    quizDiv.appendChild(createInput);
        createInput.setAttribute("placeholder", "Initials");


    // create submitScore button
    quizDiv.appendChild(createButton);
        // give new button id
        createButton.setAttribute("id", "submitButton");
        // assign new button to var
        var submitButton = document.querySelector("#submitButton");

        // finalize button
        submitButton.setAttribute("type", "submit");
        submitButton.textContent = "Submit";


        // show results
// save initials
// save score
// show high score


}

    
}




