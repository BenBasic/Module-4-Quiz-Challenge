var start = document.querySelector("#start-btn");
var timeLeft = document.querySelector("#timer");
var questionTitle = document.querySelector("#question");
var answerList = document.querySelector("#answers");
var scoreAmount = document.querySelector("#score");
// Creates questions for the quiz
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

let score = 0;
function updateScore() {
  scoreAmount.textContent = "Score: " + score;
};


questionAIndex = ["test1", "test2", "test3", "test4"];

let questionA = "";
function updateQuestionA() {
  li1.textContent = questionAIndex;
}

let time = 100;
function timeCount() {
  timeLeft.textContent = time + " seconds left";
};


questionTitles = ["What is JavaScript?", "Question 2", "Question 3", "Question 4"]

optionA = ["test answer", "test answer 2", "3", "4"]
optionB = ["test answer", "test answer 2", "3", "4"]
optionC = ["test answer", "test answer 2", "3", "4"]
optionD = ["test answer", "test answer 2", "3", "4"]

function updateQuestion(index) {
  if (index < 4) {
  console.log(index)
  questionTitle.textContent = questionTitles[index];
  li1.textContent = optionA[index];
  li2.textContent = optionB[index];
  li3.textContent = optionC[index];
  li4.textContent = optionD[index];
} else {
// Add highscore form code here
}

};


start.addEventListener("click", function() {
  updateScore();
  timeCount();

  let answerKey = ["D","A","C","B"];

  let qCounter = 0;

  let userAnswer = "";
  
  questionTitle.textContent = "What is JavaScript?";
  li1.textContent = "A movie script about Java";
  li2.textContent = "My dad's mid life crisis";
  li3.textContent = "A drink at a coffee shop";
  li4.textContent = "A programming language";

  answerList.appendChild(li1);
  answerList.appendChild(li2);
  answerList.appendChild(li3);
  answerList.appendChild(li4);

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

  if (qCounter==0) {

    li1.addEventListener("click", 
    function(){
      userAnswer = "A";
      correctCheck(qCounter);
      updateQuestionA(qCounter);
      updateQuestionA();
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

  if (qCounter==1){

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