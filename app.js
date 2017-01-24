// getting html elements and declaring variables needed
var questionStatement = document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var btn1 = document.getElementById('btn-1');
var btn2 = document.getElementById('btn-2');
var layout = document.getElementById('layout');
var progress = document.getElementById('progress');
var score = 0;
var i = 0;

//Load first question
questions[i].loadQuestion();

//When either button clicked, check answers and load next question
btn1.onclick = function () {questions[i].checkAnswerAndLoadNext(choice1.innerHTML)};
btn2.onclick = function () {questions[i].checkAnswerAndLoadNext(choice2.innerHTML)};
