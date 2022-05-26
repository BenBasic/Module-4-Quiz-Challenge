// Query selectors for html references
var start = document.querySelector("#start-btn");
var timeLeft = document.querySelector("#timer");
var questionTitle = document.querySelector("#question");
var answerList = document.querySelector("#answers");
var scoreAmount = document.querySelector("#score");
var highscoreInput = document.querySelector("#todo-text");
var highscoreForm = document.querySelector("#todo-form");
var highscoreList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");
// Creates questions for the quiz
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Assigning score value
let score = 0;

// Function for printing score to the screen during the quiz
function updateScore() {
  scoreAmount.textContent = "Score: " + score;
};

// Assigning time value
let time = 100;

// If there is no currently stored highscore list, then create a highscore list for local storage
if (localStorage.getItem("highscore list") === null) {
  localStorage.setItem("highscore list", "[]");
}

// Renders highscore list
function renderHighscore() {
  // Clears highscoreList and updates initialArray
  highscoreList.innerHTML = "High Scores";

  // Renders a new li item for each high score
  var initialArray = JSON.parse(localStorage.getItem("highscore list"));
  for (var i = 0; i < initialArray.length; i++) {
    var initials = initialArray[i];
    var li = document.createElement("li");
    li.textContent = initials;
    li.setAttribute("data-index", i);
    highscoreList.appendChild(li);
  }
}

// Adds submit enter button functionality to the highscoreForm
highscoreForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Removes the highscoreForm from the display once an initial is submitted
  highscoreForm.style.display = "none";

  // Sets highscoreText to equal the value of the initials inputted into the form as well as the score from the quiz
  var highscoreText = highscoreInput.value.trim() + " | Score: " + score;

  // Returns from function early if submitted text field is blank
  if (highscoreText === "") {
    return;
  }

  // Makes initialArray equal a parsed version of the locally stored highscore list
  var initialArray = JSON.parse(localStorage.getItem("highscore list"));
  // Pushes the highscoreText to the initialArray
  initialArray.push(highscoreText);
  // Sets the stringified initialArray into the locally stored highscore list
  localStorage.setItem("highscore list", JSON.stringify(initialArray));
  // Sets the highscoreInput to equal an empty string
  highscoreInput.value = "";

  // Store updated highscore in localStorage, re-renders the list
  renderHighscore();
});

// Makes it so if the time is greater than or equal to 0, it will clear the timer and set it to say "Finished", if the time is a greater value, it will continue to tick down in value 1 second at a time
function timeCount() {
  let downloadTimer = setInterval(function(){
    if(time <= 0){
      clearInterval(downloadTimer);
      timeLeft.textContent = "Finished";
    } else {
      timeLeft.textContent = time + " seconds remaining";
    }
    time--;
  }, 1000);
};

// Removes elements from the display which don't need to be there before the quiz starts
highscoreForm.style.display = "none";
questionTitle.style.display = "none";
timeLeft.style.display = "none";
scoreAmount.style.display = "none";



// Array of questions
questionTitles = ["What is JavaScript?", "When was JavaScript created?", "What is JavaScript commonly confused for?", "Who invented JavaScript?"]

optionA = ["A coffee-like beverage", "1995", "A famous actor", "Bill Gates"]
optionB = ["An old movie", "1990", "A model of car", "Brendan Eich"]
optionC = ["My dad's mid life crisis", "2005", "Java", "Lil Nas X"]
optionD = ["A programming language", "1960", "A number", "My aunt"]

// If the index is lower than 4, the quiz will populate with questions based on their index referenced in the qCounter, otherwise it will populate and depopulate elements relevant to the quiz
function updateQuestion(index) {
  if (index < 4) {
  console.log(index)
  questionTitle.textContent = questionTitles[index];
  li1.textContent = optionA[index];
  li2.textContent = optionB[index];
  li3.textContent = optionC[index];
  li4.textContent = optionD[index];
} else {
  highscoreForm.style.display = "block";
  highscoreList.style.display = "inline-block";
  questionTitle.style.display = "none";
  li1.style.display = "none";
  li2.style.display = "none";
  li3.style.display = "none";
  li4.style.display = "none";

  // Assigning time a value of 0 if the quiz is out of questions
  time = 0;
}

};

// Starts quiz once clicking the start button
start.addEventListener("click", function startQuiz() {
  // Removes start button
  start.style.display = "none";
  // Assigns time to 100 seconds
  time = 100;
  
  // Displays score and time
  updateScore();
  timeCount();

  // Removes and adds relevant items from the display once the quiz starts
  highscoreForm.style.display = "none";
  questionTitle.style.display = "block";
  timeLeft.style.display = "inline-block";
  scoreAmount.style.display = "inline-block";
  highscoreList.style.display = "none";
  questionTitle.style.display = "block";
  li1.style.display = "block";
  li2.style.display = "block";
  li3.style.display = "block";
  li4.style.display = "block";

  // Correct answers referenced
  let answerKey = ["D","A","C","B"];
  // Sets current question to 0 so it begins at the first question
  let qCounter = 0;
  // Assigns an empty string to populate for reference of answerKey
  let userAnswer = "";
  // Runs updateQuestion function with reference to the current question the quiz is on
  updateQuestion(qCounter);
  // Adds list items for the questions
  answerList.appendChild(li1);
  answerList.appendChild(li2);
  answerList.appendChild(li3);
  answerList.appendChild(li4);

  // Checks for corect answer, if its correct it adds score, if incorrect it removes score and time, both then continue to the next question
  function correctCheck(answerIndex) {
    console.log(userAnswer, answerKey[answerIndex])
    if (userAnswer == answerKey[answerIndex]) {
      console.log("test")
      score = score+5;
      qCounter++;
      updateScore();
      updateQuestion(qCounter);
    } else {
      score = score-5;
      qCounter++;
      time = time-5;
      updateQuestion(qCounter);
      updateScore();
    }
  };

  // When quiz starts, populate answers with click event listeners and user answers to reference for correct answers
  if (qCounter==0) {

    li1.addEventListener("click", 
    function(){
      userAnswer = "A";
      correctCheck(qCounter);
    });

    li2.addEventListener("click", 
    function(){
      userAnswer = "B";
      correctCheck(qCounter);
    });

    li3.addEventListener("click", 
    function(){
      userAnswer = "C";
      correctCheck(qCounter);   
    });

    li4.addEventListener("click", 
    function(){
      userAnswer = "D";
      correctCheck(qCounter);  
    });
      
    
  }

  

});
