const data =[
    {
        id: 1,
        question: "which of these fish is actually a fish?",
        answers: [
            {answer: "Swordfish", isCorrect: true},
            {answer: "jellyfish", isCorrect: false},
            {answer: "starfish", isCorrect: false},
            {answer: "crazyfish", isCorrect: false},
        ],
    },
    {
        id: 2,
        question: "A flutter is group of:",
        answers: [
            {answer: "bees", isCorrect: false},
            {answer: "penguins", isCorrect: false},
            {answer: "butterflies", isCorrect: true},
            {answer: "camels", isCorrect: false},
        ],
    },
    {
        id: 1,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            {answer: "bats", isCorrect: false},
            {answer: "vultures", isCorrect: true},
            {answer: "ants", isCorrect: false},
        ],
    },
]

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;


const showQuestion = (qNumber) => {
    question.textContent = data[qNumber].question;
}
showQuestion(qIndex);