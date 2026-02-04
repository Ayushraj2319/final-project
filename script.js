let timer;
let timeLeft = 15;
let score = 0;
let currentQuestionIndex = 0;
const questions = document.querySelectorAll('.question');

document.addEventListener("DOMContentLoaded", function () {
  startTimer();
  
  // Show the first question
  showQuestion(currentQuestionIndex);

  document.getElementById("submit-btn").addEventListener("click", function () {
    calculateScore();
    showResults();
  });
});

function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      calculateScore();
      showResults();
    }
  }, 1000);
}

function navigateQuestion(direction) {
  // Hide the current question
  questions[currentQuestionIndex].style.display = 'none';
  
  // Update the current question index
  currentQuestionIndex += direction;

  // Ensure the index stays within bounds
  if (currentQuestionIndex < 0) {
    currentQuestionIndex = 0;
  } else if (currentQuestionIndex >= questions.length) {
    currentQuestionIndex = questions.length - 1;
  }

  // Show the next or previous question
  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  questions[index].style.display = 'block';
}

function calculateScore() {
  
}

function showResults() {
    score = 0;

  const answers = {
    q1: "b",  // Answer for question 1
    q2: "a",  // Answer for question 2
    q3: "a",  // Answer for question 3
  };

  for (let question in answers) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === answers[question]) {
      score++;
    }
  }

  document.getElementById("quiz-container").classList.add("hidden");
  const resultMessage = `You scored ${score} out of ${Object.keys(answers).length}`;
  document.getElementById("score").textContent = resultMessage;
  document.getElementById("results-container").style.display = "block";
}
function submitbtn(){
      showResults();
}
