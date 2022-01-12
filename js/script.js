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

// html variables
var quizDiv = document.querySelector("#quiz");
var timerDiv = document.querySelector("#timer");
var messageDiv = document.querySelector("#message");

// create html elements variables
var createUl = document.createElement("ul");
var createH2 = document.createElement("h2");

//js variables
let index = 0;

// build timer
// start timer
// end timer

// initialize displayQuiz function - loads first question
displayQuiz(index); 

// display questions on page 
function displayQuiz(index){
    quizDiv.innerHTML = "";
    createUl.innerHTML ="";
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

// create user selection checker function & continue
function checkContinue(event) {
    // target event
    var element = event.target;
    
    // condition li matches correct answer li
    if (element.matches("li")) {
        // create check message in html
        // var createDiv = document.createElement("div");
        // createDiv.setAttribute("id", "message");
        console.log(element.matches("li"));
   
        var gameAnswer = questions[index].correct;
        console.log(gameAnswer);
        // correct answer condition
        if (element.textContent === gameAnswer) { 
            messageDiv.setAttribute("style", "display:block;");
            messageDiv.setAttribute("class", "correct");
            messageDiv.textContent = "You got it right!" + "\n The answer was: " + gameAnswer;
            console.log(element.textContent);
            console.log(gameAnswer);
        } else {
            // incorrect answer condition
            messageDiv.setAttribute("style", "display:block;");
            messageDiv.setAttribute("class", "incorrect");
            messageDiv.textContent = "Sorry, incorrect answer.\n The answer was: " + gameAnswer;
        }        
    }
    
    // go to next question
    //index++;
    //displayQuiz(index);

    //Loop quiz questions for now
    if (index <= questions.length-2) {
        index++;
        displayQuiz(index);
        console.log(index);
        console.log(questions.length-2);
    } else {
        index = 0;
        displayQuiz(index);
        console.log(index);
    }
}




// incorrect answer, subtract 5 second penalty


// show results
// save initials
// save score

// show score