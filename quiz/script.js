import { quizQuestions } from './quizQuestions.js';

const root = document.createElement('div');
root.classList.add('root');

const title = document.createElement('h1');
title.textContent = 'Quiz';

// Fisher-Yates Shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let selectedQuestions = shuffle([...quizQuestions]).slice(0, 10);

let currentQuestionIndex = 0;

function displayQuestion(index) {
    root.innerHTML = '';

    const questionElement = document.createElement('div');
    questionElement.classList.add('question-box');

    const optionsElement = document.createElement('div');
    optionsElement.classList.add('options');

    root.appendChild(questionElement);

    const question = selectedQuestions[index];
    questionElement.textContent = question.question;

    question.choices.forEach(choice => {
        const option = document.createElement('button');
        option.textContent = choice;
        option.addEventListener('click', () => checkAnswer(option, choice));
        option.classList.add('option');
        optionsElement.appendChild(option);
    });

    root.appendChild(optionsElement);
}

function checkAnswer(option, selectedChoice) {
    const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;

    // Disable all options after selection
    const options = document.querySelectorAll('.option');
    options.forEach(btn => btn.disabled = true);

    // Change color based on correctness
    if (selectedChoice === correctAnswer) {
        option.style.backgroundColor = '#4CAF50';  // Green for correct
    } else {
        option.style.backgroundColor = '#f44336';  // Red for incorrect
    }
}

const next = document.createElement('button');
next.textContent = 'Next Question';
next.classList.add('next');
next.addEventListener('click', function () {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    } else {
        root.innerHTML = '<h2>Quiz Completed!</h2>';
        next.remove();
        newQuiz();
    }
});

function newQuiz() {
    const newQuiz = document.createElement('button');
    newQuiz.textContent = 'Start New Quiz';
    newQuiz.addEventListener('click', function () {
        selectedQuestions = shuffle([...quizQuestions]).slice(0, 10);
        currentQuestionIndex = 0;
        displayQuestion(currentQuestionIndex);
        newQuiz.remove();
        document.body.appendChild(next)
    });
    root.append(newQuiz);
    newQuiz.classList.add('next');
}

document.body.append(title, root, next);

displayQuestion(currentQuestionIndex);
