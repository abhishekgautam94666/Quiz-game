const quizData = [
  {
    question: "What does HTML stand for",
    options: [
      "Hypertext Markup Language",
      "Hypertext Transform Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },

  {
    question:
      "Which css property is used to control the spacing between elements",
    options: ["Margin", "Padding", "spacing", "border-spacing"],
    correct: 1,
  },

  {
    question:
      "what is JavaScript function used to select an HTML element by its id",
    options: [
      "querySelector",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },

  {
    question:
      "In React.js which hook is used to perform side effect in a function component",
    options: ["useEffect", "useState", "useContext", "usereducer"],
    correct: 0,
  },

  {
    question: "which HTML tag is used to create an orderd list",
    options: ["<ul>", "<li>", "<ol>", "<ul>dl"],
    correct: 2,
  },
];

const quizSection = document.querySelector(".quize-section");
const quiz = document.querySelector("#quiz");
const questionElm = document.querySelector("#question");
const answerElm = document.querySelectorAll(".answer");
const [Option_1, Option_2, Option_3, Option_4] = document.querySelectorAll(
  "#option_1,#option_2,#option_3,#option_4"
);

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// get show data on frionted
const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  questionElm.innerText = `${currentQuiz + 1}:${question}`;

  options.forEach((curOption, index) => {
    const optionElm = document.getElementById(`option_${index + 1}`);
    if (optionElm) {
      optionElm.innerText = curOption;
    }
  });
};

loadQuiz();

// get selected Answer function on button click
const getSelectionOption = () => {
  //   let ans_index;
  //   answerElm.forEach((curOption, index) => {
  //     if (curOption.checked) {
  //       ans_index = index;
  //     }
  //   });
  //   return ans_index;

  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswer = () => {
  answerElm.forEach((curElem) => {
    curElem.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectionOption();

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectedAnswer();
    loadQuiz();
  } else {
    quizSection.innerHTML = `
    <div class="result">
    <h2> Your Score : ${score}/${quizData.length} Correct Answer </h2>
    <p>Congratulation on completing the quiz</p>
    <button class="reload-button" onclick="location.reload()">PLay Again</button>
    </div>
    `;
  }
});
