'use strict';

const modal = document.querySelector('.modal');
const showBTN = document.querySelectorAll('.show-modal');
const closeBTN = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const open = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const close = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('关闭模态框');
};

for (let i = 0; i < showBTN.length; i++) {
    // showBTN[i].addEventListener('click', function () {
    //     modal.classList.remove('hidden');
    //     overlay.classList.remove('hidden');
    // })
    showBTN[i].addEventListener('click', open)
}


// 正确写法

closeBTN.addEventListener('click', close);
overlay.addEventListener('click', close);

// 错误写法，在click事件发生之前就会自动执行
// closeBTN.addEventListener('click', close());
// overlay.addEventListener('click', close());

// 课程一开始:
// document.addEventListener('keypress', function (e) {
//     console.log(typeof e['key'], typeof e.key)
// })

document.addEventListener('keypress', function (e) {
    console.log(e['key']);

    // 不明BUG，有的浏览器会记录不了esc,caps lock, shift等
    if (e['key'] === 'Escape' && !modal.classList.contains('hidden')) {
        close();
    };
})