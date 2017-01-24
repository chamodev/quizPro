//Contructor function to create new questions
function Question (statement, choice1, choice2, correctAnswer){
  this.statement = statement;
  this.choice1 = choice1;
  this.choice2 = choice2;
  this.correctAnswer = correctAnswer;
}

//Method to load questions in the UI
Question.prototype.loadQuestion = function () {
  questionStatement.innerHTML = this.statement;
  choice1.innerHTML = this.choice1;
  choice2.innerHTML = this.choice2;
  progress.innerHTML = 'pregunta '+ (i+1) + ' de ' + questions.length;
}

//Method to check if selected choice is correct and loads next question
Question.prototype.checkAnswerAndLoadNext = function (selectedChoice) {
    if (selectedChoice === this.correctAnswer){
      score++;
    }
    loadNext();
}

//Function that loads next question, checking if game is over before loading
function loadNext() {
  i++;
  if(i >= questions.length){
    layout.innerHTML = '<h1> Game over.</h1>'
    layout.innerHTML += '<h3> Obtuviste ' + score + ' respuestas correctas </h3>';
  }else{
    questions[i].loadQuestion();
  }
}
