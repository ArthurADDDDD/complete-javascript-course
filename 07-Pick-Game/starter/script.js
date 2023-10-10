'use strict';

const rollBTN = document.querySelector('.btn.btn--roll');
const holdBTN = document.querySelector('.btn.btn--hold');
const diceBTN = document.querySelector('.dice');

let current = 0;
let activePlayer = 0;


rollBTN.addEventListener('click', function () {
    // 1.首先判断是否是第一次开始游戏，将DICE图片显示出来
    diceBTN.classList.contains('hidden') ? diceBTN.classList.remove('hidden') : undefined;

    // 2.点击以后生成1-6的随机数
    const dice = Math.trunc(Math.random() * 6 + 1);
    // 2.1  根据点击事件生成的随机数，赋予相对应的骰子图案

    // 方法1：
    // diceBTN.setAttribute('src', `dice-${dice}.png`);
    diceBTN['src'] = `dice-${dice}.png`;

    // 将每次的结果相加，输入进当前累计分
    // 制订规则，当骰子摇到1时数值清零，并且换人


    if (dice != 1) {
        current += dice;
        console.log(current, activePlayer);
    } else {
        current = 0;
        activePlayer === 0 ? 1 : 0;
        console.log(current, activePlayer);

    }

    // // 先在后台计算current的值，随后生成textContent，
    // // 如果顺序反过来的话显示的值会跟不上计算的值
    document.querySelector(`#score--${activePlayer}`).textContent = current;

});

holdBTN.addEventListener('click', function () {
    // 1.将值记录进#score；
    // 2.换人；


});


