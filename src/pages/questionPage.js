import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SUBMIT_ANSWER_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { startCountdown } from '../views/countdown.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(SUBMIT_ANSWER_BUTTON_ID)
    .addEventListener('click', submitAnswer(currentQuestion));

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

export const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

const answer = (currentQuestion, answerElement, key) => {
  if (currentQuestion.submitted === false) {
    if (
      Object.keys(currentQuestion.answers).includes(currentQuestion.selected)
    ) {
      const previousAnswer = document.querySelector('.selected');
      previousAnswer.classList.remove('selected');
    }
    currentQuestion.selected = key;
    answerElement.classList.add('selected');
  }
};

const submitAnswer = (currentQuestion) => {
  if (Object.keys(currentQuestion.answers).includes(currentQuestion.selected)) {
    currentQuestion.submitted = true;
  }
};
//ahmet
