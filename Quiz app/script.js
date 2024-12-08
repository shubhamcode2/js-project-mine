const question = [
    {
        question: "which is the largest animal on earth?",
        answers: [
            { text: "shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "blueWhale", correct: true },
            { text: "dog", correct: false }
        ]
    },
    {
        question: "which is the fastest animal on earth?",
        answers: [
            { text: "shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "cheetah", correct: true },
            { text: "car", correct: false }
        ]
    },
    {
        question: "which is the high gdp country on earth?",
        answers: [
            { text: "india", correct: false },
            { text: "usa", correct: false },
            { text: "china", correct: true },
            { text: "japan", correct: false }
        ]
    },
    {
        question: "which is the cutest man on earth?",
        answers: [
            { text: "shubham", correct: false },
            { text: "shubham", correct: false },
            { text: "shubham", correct: false },
            { text: "me", correct: true }
        ]
    },
]


let questionElement = document.querySelector('#question');
let answerbuttons = document.querySelector('#answer_buttons');
let nextButton = document.querySelector('#nextBtn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState()
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;  //because array indexing
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;//doubt
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild)//doubt
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';//doubt(If the clicked button has dataset.correct set to true, it’s a correct answer, so the score increases.) 
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => { //doubt all
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of  ${question.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz()


