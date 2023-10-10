'use strict';




/*

//箭头函数的介绍：

const calcAge3 = birthYear => 2077 - birthYear;
// 该箭头函数的意思是：function calcAge3(birthYear),【2077 - birthYear】的后面省略了return birthYear（单行的箭头函数才会自动省略return，如果是多行则需要自己写）;

const age3 = calcAge3(1999);
console.log(age3);

const noNeedToWorkAge = (birthYear, name) => {
    // 这里birthYear就是列出名为birthYear的变量插槽
    const age = 2077 - birthYear;
    const retire = 90 - age;

    return (`${name} gonna retired after ${retire} years.`)
}

console.log(noNeedToWorkAge(2077, 'V'));
console.log(noNeedToWorkAge(1999, 'Arthur'));

*/

/*

// 同时调用两个function

const cuttingMachine = fruit => fruit * 4;

const calcFruit = function (apple, oranges) {
    const applePieces = cuttingMachine(apple);
    const orangesPieces = cuttingMachine(oranges);

    return `When the Fruit processing by the machine, The apple become ${applePieces} pieces.And the oranges become ${orangesPieces} pieces.`
}

console.log(calcFruit(3, 4));

*/

/*

// 注：三目运算符不能够写在return前面，必须使用if/else才能够在后面带return

const birthYear = age => 2023 - age;

const retireCalc = (age, name) => {
    const ageNow = birthYear(age);
    const stillLeft = 65 - ageNow;

    if (stillLeft > 0) {
        return `${name} still need ${stillLeft} years to retire, he is only ${ageNow} years old now.`
    } else {
        return `${name} are already retired, he is ${ageNow} years old now`
    }
}

console.log(retireCalc(1999, 'Arthur'));
console.log(retireCalc(1940, 'puppy'));

*/


///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

GOOD LUCK 😀
*/

/*

// 需要了解的是，function是可复用的，checkWinner只需要有一个能够成功运行就能够反复填入不同的数值；
// 而使用的技巧则是，将不同的数组储存在不同的变量名称中。

const scoreCaculator = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const teamA1 = scoreCaculator(44, 23, 71);
const teamA2 = scoreCaculator(85, 54, 41);
const teamB1 = scoreCaculator(65, 54, 49);
const teamB2 = scoreCaculator(23, 34, 27);


// console.log(teamA1, teamA2, teamB1, teamB2);

const checkWinner = (a, b) => {
    if (a >= b * 2) {
        return `Dolphins win! The score is ${a} vs ${b}!`
    } else if (b >= a * 2) {
        return `Koalas win! The score is ${b} vs ${a}!`
    } else { return `nobody win this game.` }

}

const score1 = checkWinner(teamA1, teamB1);
const score2 = checkWinner(teamA2, teamB2);

console.log(`${score1}
${score2}`)

*/

// let friends = ['Me', '66', 'daymond'];

// console.log(friends);
// friends = ['haha', '22']
// console.log(friends)


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

GOOD LUCK 😀
*/


// 两种写法：

// const calcTip = (bill) => {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15
//     } else {
//         return bill * 0.2
//     }
// }

// const calcTip = (bill) => {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = new Array(125, 555, 44);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total)

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

/*

// 同一节课的内容

const jonas = {
    firstName: 'Owl',
    lastName: 'Jonas',
    birthYear: 1999,
    job: 'doctor',
    friends: ['Michael', 'Arthur', 'Penny'],
    hasDriverLicense: false,
    calcAge: function () {
        this.age = 2023 - this.birthYear; // 这样的做法是能够减少计算次数，值已经一次计算出来了
        return this.age;
        // return 2023 - this.birthYear;
    },

    // 方法2：
    getSummery: function () {
        return `${this.lastName} is a ${this.calcAge()} years old ${this.job}, and he ${this.hasDriverLicense ? `has a driver's license` : `do not has driver's license`}.`
    }
}
console.log(jonas.getSummery())



//方法1，不太好用
jonas.calcAge();
console.log(`${jonas['lastName']} is a ${jonas.age} years old ${jonas.job}, and he ${jonas.hasDriverLicense ? `has a driver's license` : `do not has driver's license`}`)


// const nameKey = 'Name';
// console.log(`${jonas['first' + nameKey]} ${jonas['last' + nameKey]} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)

*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        // const BMI = this.mass / this.height ** 2;
        // return BMI;

        // 这种写法的泛用性更强一些，上面定义的BMI在外面不能用this.BMI引出，而这种办法在计算过一次后就可以用this.BMI在控制台中获取这个值
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    },

    getSummery: function () { // 修改，增加易读性。
        return `${this.firstName + ' ' + this.lastName}'s BMI (${this.calcBMI()})`
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        // const BMI = this.mass / this.height ** 2;
        // return BMI;

        // 这种写法的泛用性更强一些，上面定义的BMI在外面不能用this.BMI引出，而这种办法在计算过一次后就可以用this.BMI在控制台中获取这个值
        this.BMI = this.mass / this.height ** 2;
        return this.BMI
    },

    getSummery: function () { // 修改，增加易读性。
        return `${this.firstName + ' ' + this.lastName}'s BMI (${this.calcBMI()})`
    }
}

// 办法1：太乱了，集成到OBJECT里吧。

// console.log(mark.calcBMI() > john.calcBMI() ? `${mark.firstName + ' ' + mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName + '' + john.lastName}'s (${john.calcBMI()})` : `${john.firstName + ' ' + john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName + ' ' + mark.lastName}'s (${mark.calcBMI()})!`)

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.getSummery()} is higher than ${john.getSummery()}!` : `${john.getSummery()} is higher than ${mark.getSummery()}!`)

*/

// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`ohhhhhhh ${rep}`);
// };

/*

const jonas = [
    'jonas',
    'SilverHand',
    19,
    'student',
    ['hello', 'hi', 'how old are you'],
    true
];

const types = [];
for (let i = 0; i < 6; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // 办法1
    // types[i] = typeof jonas[i];

    // 办法2
    types.push(typeof jonas[i])
};

console.log(types);

*/

/*

const birthYear = [1999, 1979, 1968, 2003, 1967, 2005, 2017];
const age = [];

for (let i = 0; i < birthYear.length; i++) {
    // age[i] = 2023 - birthYear[i];
    age.push(2023 - birthYear[i]);
    console.log(age[i]);
}

*/

/*

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }

    // 执行完所有内容算一次loop
}

*/

/*

// 1.使用for创建循环：

for (let i = 1; i <= 10; i++) {
    console.log(i)
};

// 2.使用while创建循环：

let i = 1;
while (i <= 10) {
    console.log(`I'm ${i}`);
    i++;
}

*/

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a number ${dice}.`)
//     dice = Math.trunc(Math.random() * 6) + 1;
// }



///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
    4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*

const bills = [
    22, 295, 176, 440, 37, 105, 10, 1100, 86, 52
];

const tips = [];
const totals = [];

const calcTip = (bills) => { // 50 - 300 收15%消费，else收20%。
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {

    // 我来讲一下这个错误，因为tips=calcTip(bills)这个写法是覆盖数组，但是每次for（）迭代的时候只计算一次，那么第一次迭代的时候， tips = calcTip(bills[0]) = 26.4 ,这个值明显是个value，而不是数组，所以会出现报错。
    // tips = calcTip(bills[i]);

    // 使用push的方法，每次迭代把新的值记录到数组的最后端，这样迭代完以后，数组的顺序则是完全正常的计算。
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);

    console.log(`This the ${i} bills(Total), The bills is ${bills[i]}, So the Tips is ${tips[i]}, And the total bills is ${totals[i]}.`)
};




const calcAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }

    return sum / arr.length;
};

// 以下是我做过的错误示范
// console.log(calcAverage(1, 32, 422, 1, 3, 52, 2));
// 注： 401行的const calcAverage = (arr)标识需要赋值的只有arr一个，而calcAverage(1, 32, 422, 1, 3, 52, 2)的意思是给N个值赋值，那么对应的401行就应该有很多个类似arr的赋值空位，所以在这里应该改为：

// calcAverage([])，这样才能将数组传递进入一个定义，也就是arr里。

console.log(calcAverage([1, 32, 422, 1, 3, 52, 2]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

*/