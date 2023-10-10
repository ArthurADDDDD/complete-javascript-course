'use strict';


/*

const number = Math.trunc(Math.random() * 30 + 1);
let hint = document.querySelector('.message').textContent;
// 提前定义hint，省略写法，后面记得把hint重新输出
let score = 100;

const body = document.querySelector('body');
const title = document.querySelector('#mainTitle').textContent;
const checkBtn = document.querySelector('.check');

const rule = (score) => {
    if (score < 1) {
        title = 'You lost';
        hint = '💥 You lost!';
        body.style.backgroundColor = 'red';
        checkBtn.style.pointerEvents = 'none';
    } else if (score < 60) {
        title = 'You should keep in mind!';
    };
}

document.querySelector('.btn.check').addEventListener('click', function () {
    const myGuess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent = myGuess;

    if (myGuess < number) {
        hint = 'Too low';
        score -= 3;
        document.querySelector('.score').textContent = score;
        rule(score);
    } else if (myGuess > number) {
        hint = 'Too much';
        score -= 3;
        document.querySelector('.score').textContent = score;
        rule(score);
    } else if (myGuess == number) {
        hint = 'You win!';
        document.querySelector('.highscore').textContent = score;
        checkBtn.style.pointerEvents = 'none';
        body.style.backgroundColor = '#60b347';
    }

    document.querySelector('.message').textContent = hint;
});

document.querySelector('.btn.again').addEventListener('click', function () {
    title = 'Start guessing...';
    score = 100;

    // 样式清除
    body.style.backgroundColor = '#222';
    checkBtn.style.pointerEvents = 'auto';


});

*/

///////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

// 之前的思路太混乱了，重写

let number = Math.trunc(Math.random() * 30 + 1);

let score = 100;
let highscore = 0;

const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const numDisplay = document.querySelector('.number');
const checkBtn = document.querySelector('.btn.check');
const body = document.querySelector('body');
const title = document.querySelector('#mainTitle');

const rules = () => {

    // 功能用来给玩家进行提示

    if (score >= 60) {
        title.textContent = 'Guess My Number!';
        body.style.backgroundColor = '#222';
    } else if (score < 60 && score > 0) {
        title.textContent = 'Oops';
        body.style.backgroundColor = '#540000';
    } else if (score <= 0) {
        scoreDisplay.textContent = '0';
        title.textContent = '💥 You lose!';
        numDisplay.textContent = 'X';
        checkBtn.style.pointerEvents = 'none';
        body.style.backgroundColor = 'red';
        document.querySelector('.btn.again').style.backgroundColor = '#60b347';
    };

};

document.querySelector('.btn.check').addEventListener('click', function () {

    // 实时反馈，提供线索

    const myGuess = Number(document.querySelector('.guess').value);
    numDisplay.textContent = '?';

    // 按照分数先判断是否要变色
    rules();

    // 优化以后
    if (!myGuess) {
        message.textContent = 'Please follow the rules!';
        numDisplay.textContent = '?';
    } else if (myGuess === number) {
        score > highscore ? highscore = score : undefined;

        message.textContent = '🎉 You Win!';
        numDisplay.textContent = myGuess;
        document.querySelector('.highscore').textContent = highscore;
        checkBtn.style.pointerEvents = 'none';
        body.style.backgroundColor = '#60b347';
    } else if (myGuess != number) {
        message.textContent = myGuess > number ? '⬆️ Too much' : '⬇️ Too low';
        score -= 3;
    }

    /* 

    // 需要优化
    if (!myGuess) {
        message.textContent = 'Please follow the rules!';
        numDisplay.textContent = '?';
    } else if (myGuess > number) {
        message.textContent = 'Too much';
        score -= 3;
    } else if (myGuess < number) {
        message.textContent = 'Too low';
        score -= 3;
    } else if (myGuess === number) {

        // if / else写法
        // if (score > highscore) {
        //     highscore = score;
        // };

        // 简化的三目运算写法
        score > highscore ? highscore = score : undefined;

        message.textContent = '🎉 You Win!';
        numDisplay.textContent = myGuess;
        document.querySelector('.highscore').textContent = highscore;
        checkBtn.style.pointerEvents = 'none';
        body.style.backgroundColor = '#60b347';
    };

    */

});

const reset = () => {

    // 重置所有内容
    number = Math.trunc(Math.random() * 30 + 1);
    score = 100;
    scoreDisplay.textContent = score;
    rules();
    message.textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    numDisplay.textContent = '?';
    checkBtn.style.pointerEvents = 'auto';
    checkBtn.style.pointerEvents = 'auto';
}
document.querySelector('.btn.again').addEventListener('click', function () {
    reset();
});