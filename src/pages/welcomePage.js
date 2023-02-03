import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { startCountdown } from '../views/countdown.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', () => {
      setInterval(startCountdown, 1000);
    });
};

function setFavicons(favImg){
  const headTitle = document.querySelector('head');
  const setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel','shortcut icon');
  setFavicon.setAttribute('href',favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons('/public/images/3285297-andromeda-astronomy-cosmos-galaxy-space-spiral-universe_106791.png');

document.title = "Singularity";

const startQuiz = () => {
  initQuestionPage();
};

