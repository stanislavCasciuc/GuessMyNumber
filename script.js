'use strict';
/*
let correctNumber;
const generateNumber = () => correctNumber = Math.floor(Math.random() * 19) + 1;
generateNumber();
console.log(correctNumber);
const check = () => {
    const guessNumber = Number(document.querySelector('.guess').value);
    let text = document.getElementsByClassName('.message').textContent;
    console.log(text);
    if (correctNumber > guessNumber) text = 'Too low';
    if (correctNumber < guessNumber) text = 'Too hight';
    if (correctNumber === guessNumber) text = 'You won!';
}
document.querySelector('.check').addEventListener('click', check);
function handleEnterKey(event) {
    if (event.key === "Enter") {
        submitButton.click(); // Trigger a click event on the button
    }
}
*/

/*
console.log(correctNumber);
const secretNumber = document.getElementsByClassName('.number');
const guessNumber = document.getElementsByClassName('.guess');
const message = document.getElementsByClassName('.message');
const score = document.getElementsByClassName('.score');
const highScore = document.getElementsByClassName('.highscore');
const checkButton = document.getElementsByClassName('.check');
const againButton = document.getElementsByClassName('.again');
*/

let correctNumber;
const generateNumber = () => { correctNumber = Math.trunc(Math.random() * 20) + 1 };
generateNumber();

let score = 20;
let highScore = 0;
const checkFunction = () => {
    if (score <= 1) {
        document.querySelector(".message").textContent = '💀 You lose!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#8c3f3f';
    }
    else {
        const guess = Number(document.querySelector('.guess').value);
        if (correctNumber > guess) {
            document.querySelector(".message").textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        if (correctNumber < guess) {
            document.querySelector(".message").textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }
        if (correctNumber === guess) {
            document.querySelector(".message").textContent = '🎉 You win!';
            if (score > highScore) highScore = score;
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = correctNumber;

        }
    }
}
const againBtn = () => {
    score = 20;
    generateNumber();
    document.querySelector('.score').textContent = score;
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

}

document.querySelector('.again').addEventListener('click', againBtn);
document.querySelector('.check').addEventListener('click', checkFunction);

