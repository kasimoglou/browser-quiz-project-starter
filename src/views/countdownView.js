import { COUNT_DOWN } from '../constants.js';
import { nextQuestion } from '../pages/questionPage.js';

const paragraphEl = document.createElement('p');
paragraphEl.textContent = '05 : 00';
paragraphEl.setAttribute('id', COUNT_DOWN);
document.body.prepend(paragraphEl);

/*countdown start */
let countdownTime = 300;

const countdownEl = document.getElementById(COUNT_DOWN);
export const startCountdown = () => {
  let minutes = Math.floor(countdownTime / 60);
  let seconds = countdownTime % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  countdownEl.innerHTML = `${minutes} : ${seconds}`;
  countdownTime--;

  const originalTime = 300;
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i in n) {
    if (countdownTime === originalTime - i * 31) {
      nextQuestion();
    }
  }
};

/*countdown end */
