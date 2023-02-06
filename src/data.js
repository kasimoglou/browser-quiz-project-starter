/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'How many planets are there in the Solar System?',
      answers: {
        a: '10',
        b: '8',
        c: '7',
        d: '9',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What is the biggest planet in the Solar System?',
      answers: {
        a: 'Earth',
        b: 'Mars',
        c: 'Jupiter',
        d: 'Neptune',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        'What is the order of Earth between the planets, starting from the sun?',
      answers: {
        a: 'Second planet',
        b: 'Fifth planet',
        c: 'Third planet',
        d: 'Seventh planet',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'What is the theory that explains the beginning of the universe?',
      answers: {
        a: 'The Big Bang Theory',
        b: 'The Super String Theory',
        c: 'The M-Theory',
        d: 'The Special Theory of Relativity',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'According to M-Theory, how many dimensions are there?',
      answers: {
        a: '3 Dimensions',
        b: '7 Dimensions',
        c: '9 Dimensions',
        d: '11 Dimensions',
      },
      correct: 'd',
      selected: null,
    },
    {
      text:
        'At which of the following, the laws of physics, as we know them, break down?',
      answers: {
        a: 'Sun surface',
        b: 'Singularity',
        c: 'Quasar',
        d: 'Edge of a galaxy',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'Where is the location of our Solar System in the universe?',
      answers: {
        a: 'On the 3rd arm of Andromeda galaxy',
        b: 'On the 4th arm of Milky Way galaxy',
        c: 'On the 4th arm of Andromeda galaxy',
        d: 'On the 3rd arm of Milky Way galaxy',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What does a Light Year represents?',
      answers: {
        a: 'The speed of light in a year',
        b: 'The time light takes to travel between two points',
        c: 'The year that light speed has been discovered',
        d: 'The distance that light travels in one year',
      },
      correct: 'd',
      selected: null,
    },
    {
      text:
        'According to Einsteins general theory of relativity, energy is proportional to mass. What is the equation that demonstrate this relation?',
      answers: {
        a: 'E = dc^2',
        b: 'E = mc^2',
        c: 'E = cd^2',
        d: 'E = cm^2',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'At which of the following, time stops completely?',
      answers: {
        a: 'At the speed of light',
        b: 'At the edge of the universe',
        c: 'At the center of the sun',
        d: 'At the coldest point in the universe',
      },
      correct: 'a',
      selected: null,
    },
  ],
};
