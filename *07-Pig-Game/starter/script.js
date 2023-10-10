'use strict';

const rollBTN = document.querySelector('.btn.btn--roll');
const holdBTN = document.querySelector('.btn.btn--hold');
const diceBTN = document.querySelector('.dice');
const againBTN = document.querySelector('.btn.btn--new');

let scores = [0, 0];
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');

let current = 0;
let activePlayer = 0;
let playing = true;
let currentPlayer = document.querySelector(`.player--${activePlayer}`);

const output = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = current;
};

const changePlayer = () => {
    currentPlayer.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentPlayer.classList.toggle('player--active');
};

const refresh = () => {
    score0.textContent = 0;
    score1.textContent = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    if (document.querySelector('.player--winner'))
        document.querySelector('.player--winner').classList.remove('player--winner', 'player--active');
    diceBTN.classList.add('hidden');
    document.querySelector('.player--0').classList.add('player--active');
    playing = true;
    current = 0;
    scores = [0, 0];
    activePlayer = 0;
};

rollBTN.addEventListener('click', function () {
    if (playing) { // 最后加入的，用以DISABLE按钮
        // 1.首先判断是否是第一次开始游戏，将DICE图片显示出来
        diceBTN.classList.contains('hidden') ? diceBTN.classList.remove('hidden') : undefined;

        // 2.点击以后生成1-6的随机数
        const dice = Math.trunc(Math.random() * 6 + 1);
        // 2.1  根据点击事件生成的随机数，赋予相对应的骰子图案

        // 方法1：
        // diceBTN.setAttribute('src', `dice-${dice}.png`);
        diceBTN['src'] = `dice-${dice}.png`;

        // 3.当骰子摇到1时数值清零，并且换人
        if (dice != 1) {
            current += dice;
            output();
        } else {
            current = 0;
            output();
            changePlayer();
        }
    }
});

holdBTN.addEventListener('click', function () {
    if (playing) {
        // 1.将值记录进#score；
        // 2.换人；


        if (activePlayer === 0) {
            score0.textContent = Number(score0.textContent) + current;
            scores[0] = Number(score0.textContent);
        } else {
            score1.textContent = Number(score1.textContent) + current;
            scores[1] = Number(score1.textContent);
        };

        if (scores[activePlayer] >= 100) {
            playing = false;
            currentPlayer.classList.remove('player--active');
            currentPlayer.classList.add('player--winner');
        };

        current = 0;
        output();
        changePlayer();
    }
});

againBTN.addEventListener('click', refresh);