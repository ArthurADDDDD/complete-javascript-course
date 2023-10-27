'use strict';

/*

const bookings = [];

const createBooking = (flightNum,
    price = 158,
    cost = 6 * price
    // 这里使用的对象必须是在括号里命名的，并且是在该行之前就定义的 
) => {

    const tempData = {
        flightNum, price, cost
    }
    console.log(tempData);
    bookings.push(tempData);
}

createBooking('LH234');
createBooking('LHLH248', 143);
createBooking('LH231', undefined, 56)

*/

// const upperFisrt = (str) => {
//     const [first, ...others] = str;
//     console.log([first.toUpperCase(), ...others].join(''));
// }

// upperFisrt('mamamiya')

const greet = (str) => {
    return (name) => {
        console.log(str + '! ' + name)
    }
}
greet('hey')('sam');

const getArr = str => name => console.log(str + '! ' + name);
// 箭头函数会默认return（property）的值，所以可以省略return
// 扩展一下，这个getArr的执行步骤是：

// (str) => {return (name)=>console.log(str + '! ' + name)}

// 甚至还能嵌套成：
// const getArr = str => name => suffix => console.log(str + '! ' + name + ' ' + suffix);
// getArr('Hey')('smith')('Jr')
getArr('Heyyyy')('smith');

const guohang = {
    name: 'guohang',
    code: 'CN',
    bookings: [],
    books: function (names, number) {
        this.bookings.push({ flight: `${this.code}${number}`, names })
        console.log(`Dear customer ${names}, You're on ${this.name}.${this.code} airplane, on number No.${number}`);
    },
}

guohang.books('william', 213);

const haihang = {
    name: 'haihang',
    code: 'HN',
    bookings: [],
}

const book = guohang.books;

// 错误示范，因为book=guohang.books就是完整copy了整个函数，而函数中的this所指向的位置变成了Window
// books('arthur', 21)

// 所以这里要用到call()功能，XXX.call(function,properties1,properties2...)
book.call(guohang, 'Arthur', 254);
book.call(haihang, 'Sam Smith', 434); // 将guohang.books()的功能运用到了haihang{}里面

book.apply(haihang, ['Peter', 266])
console.log(...guohang.bookings, ...haihang.bookings);