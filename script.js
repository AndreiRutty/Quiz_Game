const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const homeScreen = document.getElementById("home");
const quizScreen = document.getElementById("quiz");
const resultScreen = document.getElementById("result");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const scoreCountText = document.getElementById("score-count");

let currentQuestionIndex = 0;
let score = 0;
let hasSelected = false;

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

startBtn.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  hasSelected = false;
  // close home screen
  homeScreen.classList.remove("active");

  // open quiz screen
  quizScreen.classList.add("active");

  showQuestion();
});

restartBtn.addEventListener("click", () => {
  // close result screen
  resultScreen.classList.remove("active");

  //open home screen
  homeScreen.classList.add("active");
});

const selectAnswer = (event) => {
  const isCorrect = event.target.dataset.correct == "true";

  while (!hasSelected) {
    if (isCorrect) {
      event.target.classList.add("correct");
    } else {
      event.target.classList.add("incorrect");
    }
    hasSelected = true;
    currentQuestionIndex++;
  }

  setTimeout(() => {
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }

    hasSelected = false;
  }, 1000);
};

const showQuestion = () => {
  answersContainer.innerHTML = "";

  questionText.textContent = quizQuestions[currentQuestionIndex].question;

  // adding the answers
  quizQuestions[currentQuestionIndex].answers.forEach((answer) => {
    // create a button
    let button = document.createElement("button");

    button.classList.add("answers-btn");

    button.textContent = answer.text;

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
};

const showResult = () => {
  resultScreen.classList.add("active");
  quizScreen.classList.remove("active");
};

showQuestion();
