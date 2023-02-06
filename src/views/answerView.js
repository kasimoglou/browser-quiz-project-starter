/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerEl = (key, answerText) => {
  const button = document.createElement('button');
  button.classList.add(`answer-btn`);
  button.innerHTML = String.raw`
    <div class="choice"><p>(${key.toUpperCase()})</p></div><div class="answer">${answerText}</div>
  `;
  return button;
};
