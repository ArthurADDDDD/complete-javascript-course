// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const measurement = () => {
//     const arrays = {
//         type: 'celus',
//         date: '2023.9.28',

//         temperture: Number(prompt('Please record today temperture here:')),
//     };


//     const kelvinTemp = arrays.temperture + 273;
//     console.table(arrays);
//     console.log(kelvinTemp);

//     return kelvinTemp;
// }

// measurement()

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*

// version01 - 似乎有点执着于储存数组

const printForecast = (arr) => {

    const array1 = [];
    let output = '...';
    for (let i = 0; i < arr.length; i++) {
        // console.log(`${arr[i]}ºC in ${i + 1}days.`);

        array1.push(` ${arr[i]}ºC in ${i + 1}days ...`);

        if (i < arr.length) {
            output += array1[i];
        }
    };

    // console.table(array1);

    return output
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));



// version02 - 不储存数组，直接显示output

const printForecast = (arr) => {

    let output = '...';
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length) {
            output += ` ${arr[i]}ºC in ${i + 1}days ...`;
        }
    };

    return output
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));

✅✅✅

// version03 - 不需要if/else语句，因为i本身就永远不会超过arr.length
// - 虽然将数据储存在数组是非必要的操作，但是将内容存储起来会有利于后续进行调取。
// - 而将其拼接为一个长字符，是属于一次性操作，数据后期不好调取。

const printForecast = (arr) => {

    let output = '...';
    for (let i = 0; i < arr.length; i++) {
        output += ` ${arr[i]}ºC in ${i + 1}days ...`;
    };

    return output
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data1));
console.log(printForecast(data2));

✅✅✅
*/
