const quizData = [
  {
    question: "What does HTML Stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hyper Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which CSS property used to control the spacing between element?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the javascript function used to select an HTML element by its id?",
    options: [
      "document.qurey",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question: "Which Htlm tag is used to creat an ordered list?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    correct: 2,
  },
  {
    question: "HTML is considered as ______ ?",
    options: [
      "Programming language",
      "OOP language",
      "High level language",
      "Markup languag",
    ],
    correct: 3,
  },
];

const answerElm = document.querySelectorAll(".answer");
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

//load quiz function//

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];
  console.log(options);

  questionElm.innerText = `${currentQuiz + 1}: ${question}`;
  score.innerText = ` Score: ${score}/${quizData.length}`;
  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();

//get selected answer function on button

const getSelectedOption = () => {
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswers = () => {
  return answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
        <div class ="result" >
        <h2>  Your Score: ${score}/${quizData.length} Correct Answer </h2>
        <p> Congratulation on completing the quiz!  </p>
        <button class = "reload-button" onclick="location.reload()">Play Again </button> 
        </div>
        `;
  }
});
