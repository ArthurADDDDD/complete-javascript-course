/*
let js = 'amazing';
// if (js === 'amazing') alert('牛鼻')
console.log((156277 + 71415) * 10086)

let firstLove = 'hyperAshy';
console.log(firstLove);
console.log(firstLove);
console.log(firstLove);
console.log(firstLove);

let $hello = 'BBAACCD';
let _3Money = 3;
// let 3funny = 'ERROR';
let ZERO = 0; //常数,永远不会变更的数值我们就用全大写

// 只允许 数字.下划线,美元符号 ,数字无法用于命名开头

let myFirstJob = 'videoEditor';
let myCurrentJob = 'designer';

let job1 = 'videoEditor';
let job2 = 'desinger'


let haha = true;
console.log(haha);

console.log(typeof haha);
// console.log(typeof 'nihaoma) 字符串
// console.log(typeof 23) 数值
// console.log(typeof true) 布尔值
// console.log(typeof undefine) 未定义值

let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(typeof year);
*/

/*
const year = 2023;
const jojoAge = year - 1999;
const myAge = year - 1950;

console.log(jojoAge, myAge)

const x = 10 + 5;
x += 10; // x = x + 10
x *= 2; // x = x * 2
x--; // x = x - 1
x--; // x = x - 1

console.log(x)

console.log(jojoAge > myAge);
console.log(jojoAge >= 18);

const fullAge = jojoAge >= 18;
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massHeight = 'm';
// const massWeight = 'kg';
// const marksW1 = 78;
// const marksH1 = 1.69;

// const marksW2 = 95;
// const marksH2 = 1.88;

// const johnW1 = 92;
// const johnH1 = 1.95;

// const johnW2 = 85;
// const johnH2 = 1.76;

// let marksBMI1, marksBMI2, johnBMI1, johnBMI2;
// marksBMI1 = marksW1 / marksH1 ** 2;
// marksBMI2 = marksW2 / marksH2 ** 2;

// johnBMI1 = johnW1 / johnH1 ** 2;
// johnBMI2 = johnW2 / johnH2 ** 2;

// console.log(marksBMI1, johnBMI1, marksBMI1 > johnBMI1);
// console.log(marksBMI2, johnBMI2, marksBMI2 > johnBMI2);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


// const marksW1 = 78;
// const marksH1 = 1.69;

// const marksW2 = 95;
// const marksH2 = 1.88;

// const johnW1 = 92;
// const johnH1 = 1.95;

// const johnW2 = 85;
// const johnH2 = 1.76;

// let marksBMI1, marksBMI2, johnBMI1, johnBMI2;
// marksBMI1 = marksW1 / marksH1 ** 2;
// marksBMI2 = marksW2 / marksH2 ** 2;

// johnBMI1 = johnW1 / johnH1 ** 2;
// johnBMI2 = johnW2 / johnH2 ** 2;

// if (marksBMI1 < johnBMI1) {
//     console.log(`Mark's BMI1 is lower than john's BMI1!
//     Mark's BMI1 is ${marksBMI1},
//     John's BMI1 is ${johnBMI1}`)
// } else {
//     console.log(`Mark's BMI1 is higher than John's BMI1!
//     Mark's BMI1 is ${marksBMI1},
//     John's BMI1 is ${johnBMI1}`)
// }

// if (marksBMI2 < johnBMI2) {
//     console.log(`Mark's BMI2 is lower than john's BMI2!
//     Mark's BMI2 is ${marksBMI2},
//     John's BMI2 is ${johnBMI2}`)
// } else {
//     console.log(`Mark's BMI2 is higher than John's BMI2!
//     Mark's BMI2 is ${marksBMI1},
//     John's BMI2 is ${johnBMI1}`)
// }

// 5 falsy values: 0, '', undefined, null, NaN

/* 速通 */
// ==是松散相等运算符，会强制转换类型 ===是绝对相等运算符，不仅检查值，还会检查类型（建议使用）
// AND（实际使用时候写作&&），AND 其中一个是False则结果是False
// OR （实际使用时候写作 ||）其中有一个值是True则结果是True
// NOT（实际使用时候写作!x），会反转值，将true变成false，将false变成true，且具有高优先级，NOT会被第一个运算。


////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const Dolphins = (96 + 108 + 89) / 3;
// const Koalas = (88 + 91 + 110) / 3;

// if (Dolphins > Koalas) {
//     console.log(`Dolphins win! There's score is ${Dolphins}, Ahead Koalas teams ${Dolphins - Koalas}score!`)
// } else {
//     console.log(`Koalas win! There's score is ${Koalas}, Ahead Dolphins teams ${Koalas - Dolphins} score!`)
// };

// const Dolphins1 = (97 + 112 + 101) / 3;
// const Dolphins2 = (97 + 112 + 101) / 3;
// const Koalas1 = (109 + 95 + 123) / 3;
// const Koalas2 = (109 + 95 + 106) / 3;

// const minimum = 100;

// BONUS 1:
// if (Dolphins1 > Koalas1 && Dolphins1 >= minimum) {
//     console.log(`Dolphins1 Win! There final score is ${Dolphins1}.`)
// } else if (Dolphins1 > Koalas1 && Dolphins1 < minimum) {
//     console.log(`Nobody win, The final score is lower than ${minimum}.`)
// } else if (Koalas1 > Dolphins1 && Koalas1 >= minimum) {
//     console.log(`Koalas1 win! The final score is ${Koalas1}.`)
// } else if (Koalas1 > Dolphins1 && Koalas1 < minimum) {
//     console.log(`Nobody win, The final score is lower than ${minimum}.`)
// }

// BONUS 2:
// if (Dolphins2 > Koalas2 && Dolphins2 >= minimum) {
//     console.log(`Dolphins2 Win! There final score is ${Dolphins2}.`)
// } else if (Dolphins2 > Koalas2 && Dolphins2 < minimum) {
//     console.log(`Nobody win, The final score is lower than ${minimum}.`)
// } else if (Koalas2 > Dolphins2 && Koalas2 >= minimum) {
//     console.log(`Koalas2 win! The final score is ${Koalas2}.`)
// } else if (Koalas2 > Dolphins2 && Koalas2 < minimum) {
//     console.log(`Nobody win, The final score is lower than ${minimum}.`)
// } else if (Dolphins2 === Koalas2 && Dolphins2 >= minimum && Koalas2 >= minimum) {
//     console.log(`The game is draw!`)
// }



// switch语句
// const today = '星期';

// switch (today) {
//     case '星期一':
//         console.log('周一周一，我的头七');
//         break;
//     case '星期二':
//         console.log('周二周二，命剩一半儿');
//         break;
//     case '星期三':
//         console.log('周三周三，续命上班');
//         break;
//     case '星期四':
//         console.log('周四周四，重见天日');
//         break;
//     case '星期五':
//         console.log('周五周五，敲锣打鼓');
//         break;
//     case '星期六':
//     case '星期日':
//         console.log('周末周末，全场欢呼！');
//         break;
//     default:
//         console.log('日期都打不明白飒？飒飒？');
//         break
// }

// if (today === '星期一') {
//     console.log('周一周一，我的头七');
// } else if (today === '星期二') {
//     console.log('周二周二，命剩一半儿');
// } else if (today === '星期三') {
//     console.log('周三周三，续命上班');
// } else if (today === '星期四') {
//     console.log('周四周四，重见天日');
// } else if (today === '星期五') {
//     console.log('周五周五，敲锣打鼓');
// } else if (today === '星期六' || today === '星期日') {
//     console.log('周末周末，全场欢呼！');
// } else {
//     console.log('日期都打不明白飒？飒飒？')
// }

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 40;
let tip;

console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : bill < 50 ? tip = 0 : tip = bill * 0.2}, and the total value is ${bill + tip}. `)

