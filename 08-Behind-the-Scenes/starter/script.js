'use strict';

// const name = 'Jonas';

// const first = () => {
//     let a = 1;
//     const b = second(7, 9);
//     a = a + b;
//     return a;
// }

// function second(x, y) {
//     var c = 2;
//     return c
// }

// const x = first();
// console.log(x);

// function calcAge(birthYear) {
//     const age = 2023 - birthYear;

//     function printAge() {
//         const output = `You are ${age} years old, and you born in ${birthYear}!`
//         console.log(output)
//     }
//     printAge();
//     return age;
// }

// calcAge(1991);
// const test = calcAge(1991);
// console.log(calcAge(1991), test, typeof test)


function test() {
    console.log(this)
}

test();

const testExr = function () {
    console.log(this)
}

testExr();

const testArrow = () => {
    console.log(this)
}

testArrow();