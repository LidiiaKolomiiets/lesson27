import './all.css'

const answer = ["Yes", "No", "Ask again later", "The answer is yes", "Vaguely", "Chances are good", "I think not", "I can't say", "Spirits say so", "It is unclear", "Without a doubt", "Not now"];

const centerBall = document.querySelector('.ball-center');
const textAnswer = document.createElement('p');
centerBall.appendChild(textAnswer);
textAnswer.classList.add('text-answeer');
textAnswer.textContent = '8';

function answerRandom() {
    const randomIndex = Math.floor(Math.random() * answer.length);

    textAnswer.textContent = answer[randomIndex];
    textAnswer.style.fontSize = '20px';
    textAnswer.style.display = 'none'
}

const ask = document.querySelector('.ask-btn');

ask.addEventListener("click", function () {
    const ball = document.querySelector('.ball');
    ball.classList.add('ball-click');

    setTimeout(function() {
        ball.classList.remove('ball-click');
        textAnswer.style.display = 'block'
      }, 500);

    answerRandom()
})