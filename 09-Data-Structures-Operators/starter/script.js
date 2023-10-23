'use strict';


// Data needed for first part of the section
const restaurant = {
  name: ['Classico Italiano', 'hello', 'bear'],
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // 解构function参数实践

  deliveryMessage: function (
    { nameIndex = 2,
      orderIndex = 0,
      times = 'tomorrow',
      location = 'Shenzhen'
    }
  ) {
    console.log(`Dear customer ${this.name[nameIndex]}, the ${this.mainMenu[orderIndex]} that you order will be delivery at ${times} to your home: ${location}`)
  },

  orderPasta: (ing1, ing2, ing3) => {
    document.querySelector('h1').textContent = `Here's the pasta that you order before, sir. It contains ${ing1}, ${ing2} and ${ing3}, Enjoy your lanch!`
  },

  orderPizza: (mainIng, ...otherIng) => {
    console.log('mainIng', mainIng);
    console.log('otherIng', ...otherIng)
  }
};


// restaurant.deliveryMessage({
//   nameIndex: 0,
//   location: 'Paris, Franch',
// })



/*
  // 也可以加入重新取名的写法
  // 类似nameIndex :na = 2;
  // 释意 定义的参数 :改名之后的参数 = 默认值;

  // 解构function参数实践

  deliveryMessage: function (
    { nameIndex: na = 2,
      orderIndex: or = 0,
      times: ts = 'tomorrow',
      location: lo = 'Shenzhen'
    }
  ) {
    console.log(`Dear customer ${this.name[na]}, the ${this.mainMenu[or]} that you order will be delivery at ${ts} to your home: ${lo}`)
  }
};


restaurant.deliveryMessage({
  na: 0,
  lo: 'Paris, Franch',
})
*/


/*

// 原 :xx 赋予新变量名
// const { name: restaurantName, categories: types, location: place } = restaurant;
// console.log(restaurantName, types, place);

let a = 999;
let b = 123;
console.log(a, b);


const obj = { a: 21, b: 66, c: 667788 };

// 这里会报错，因为{}直接写出来Javascript会以为它是一个完整的块，而块无法直接赋值
// 运行时会被当成：{a, b} = {a: 21, b: 66, c: 667788};
// 要通过[0, 1]类似的方法才能成功赋值，所以会报错
// { a, b } = obj;

// 这里使用（）包裹，Javascript就会将其视为一个表达式
// 从而完成a(999) = obj.a(21)的操作
({ a, b } = obj);

console.log('this is how the change happen');
console.log(a, b);

const { openingHours: op } = restaurant;
console.log('1️⃣', op);

const { fri: { open: o, close: c } } = op;
console.log('2️⃣', o, c);

*/

// Iterables(可迭代的): arrays, strings, maps, sets. NOT objects.

// const menuCopy = [...restaurant.mainMenu];
// const menu = [...menuCopy, ...restaurant.starterMenu];
// console.log(menu);

// 现实世界使用方法

// const orderSelection = [
//   prompt("You gonna choose your ing1"),
//   prompt('and ing2 is?'),
//   prompt('and ing3')
// ];
// restaurant.orderPasta(...orderSelection);

// 使用...拓展运算符选中object —— ES2018⬇️
// Object.assign()的优化版本?

// const restaurantCopy = { prettier: 0, ...restaurant, object: 'salon' };
// console.log(restaurantCopy);

// const number = (...theNumber) => {

//   let sum = 0;
//   for (let i = 0; i < theNumber.length; i++)
//     sum += theNumber[i];


//   console.log(sum);
// }

// number(3, 1, 2, 5, 635, 1, 2, 123);
// number(3, 1, 455, 1);

// // const x = [Number(prompt('1')), Number(prompt('2')), Number(prompt('3')), Number(prompt('4')), Number(prompt('5')), Number(prompt('6')),];
// const x = [3, 21, 324, 52,];
// number(...x);

// restaurant.orderPizza('mushroom', 'beef', 'apple pen', 'tea');


/*

// 突然想到的一个小游戏，复习一下for循环的continue和break；

const counter = () => {
  let test = Number(prompt('Let\'s give me a number'));
  let finalCount;
  const numberAtFirst = test;
  const updateNum = Number(prompt('Let\'s give me a updateNum'));

  for (let i = 0; ; i++) {
    if (test < 999) {
      test += updateNum;
      continue
    } else {
      finalCount = i;
      break
    }
  }

  document.querySelector('h1').textContent = `Your number ${numberAtFirst} has been updated ${finalCount} times(The updateNum that you set is ${updateNum}), and your final result is ${test}! Let's keep tryin, let the updated times as more as possible!`

};

counter();

*/

/*

console.log(0 || true); // 返回true，因为0=false；
console.log(undefined || false || null); // 返回null，因为全部false；
console.log(0 || undefined || null || false || '' || '测试' || '');
// 返回测试，因为前面全是false

console.log(0 && true); // 因为0 && true = false，所以返回第一个false值0；
console.log('01' && 'fine' && true);
// 返回true，因为'01' && 'fine' && true = 0，所以返回最后一个true值
console.log('1' && true && number && 'false' && null);
// 返回null，前面都是true，所以返回的是最后的false
console.log('1' && false && true);

*/

/*

console.log('--- OR ---');

let mainMen1u; // undefined;
const orTest = mainMen1u || 10;
console.log(orTest); // return 10;

mainMen1u = 0; // mainMen1u = 0 = false;
console.log(orTest); // return 10(default value);

console.log('--- ??空值合并运算符 ---');

const hebingTest = mainMen1u ?? 10; // 如果mainMen1u不是undefined或者null，则返回mainMen1u值
console.log(hebingTest); // 因为mainMen1u = 0，会被判断成false，但是空值合并运算符将其正确显示出来了

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*

// 守门员
const gk1 = (game.players[0])[0];
const gk2 = (game.players[1])[0];

// 各队球员
const fieldCount = (teamNum) => {
  const currentTeam = game.players[teamNum];
  let temp = [];
  for (let i = 1; i < currentTeam.length; i++) {
    temp.push(currentTeam[i]);
  }
  return temp;
};
const [fieldPlayer1, fieldPlayer2] = [fieldCount(0), fieldCount(1)];


*/

/*

// 1
const [players1, players2] = game.players;

// 2
const [gk, ...fieldPlayers] = players1;

// 3
const allPlayers = [...players1, ...players2];

// 4 最终出场成员team1
const players1Final = [...game.players[0], 'Thiago', 'Countinho', 'perisic'];

// 5 将game里odds中的内容解构成三个新的对象
const { odds: { team1, x: draw, team2 } } = game;

//6 提示有几个人得分了
const printGoals = (...players) => {
  // 必须要加...，才能正确识别输入了多少个players
  // 不然的话计算出来的只会是第一个值被分解成string后的长度
  console.log(`${players.length} goals were scored!`)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

/*

// 打印目标
const printGoals = (name) => {
  let number;
  let score = 0;

  for (let x = 0; x < 2; x++) {
    let currentTeam = game.players[x]

    for (let i = 0; i < currentTeam.length; i++) {

      if ((currentTeam)[i] === name) {
        number = i;
      }
    }
  }

  console.log(`Player name: ${name},Player Numbers: ${number}, Total score:${score}`)
}

printGoals('Davies');
printGoals('Muller');
printGoals('Lewandowski');
printGoals('Kimmich');



// 判断谁要赢
const scores = game.odds;

// 一个就够了
scores.team1 > scores.team2 && console.log('Team1 看起来赢面很大') ||
  scores.team1 < scores.team2 && console.log('Team1 看起来要输了')

// scores.team2 > scores.team1 && console.log('Team2 看起来赢面很大') ||
// scores.team2 < scores.team1 && console.log('Team2 看起来要输了');

// for (const all of allPlayers) {
//   console.log(all);
// }

// for (const all of allPlayers.entries()) {
//   // .entries()迭代器，每次迭代会包含计数器跟内容

//   console.log(`Menu ${all[0] + 1}: ${all[1]}`)
//   // 因为第一个数组的数字是0，所以要[0] + 1
//   // all[1] 则是迭代器的第二个内容，实际内容
// }

// 解构后
for (const [i, el] of allPlayers.entries()) {
  // .entries()迭代器，每次迭代会包含计数器跟内容

  console.log(`Menu ${i + 1}: ${el}`)
};



const { openingHours } = restaurant;

// for of其他用法解释：
// Object.keys() 提取对象的名字
// Object.values() 提取对象里的内容
const propertiesName = Object.keys(openingHours);
const propertiesValue = Object.values(openingHours);
const propertiesEntries = Object.entries(openingHours);

let alert = `Our restaurant open ${propertiesName.length} days a week: `;

for (const days of propertiesName) alert += days + ', ';

// Object.entries() 提取对象的所有内容，包含keys、values还有迭代次数产生的序号
// for (const x of propertiesEntries) console.log(x);

// 由于提取出来的array是：[KeyWord][value1][value2]，所以可以直接解构并输出结果
for (const [theDays, { open, close }] of propertiesEntries) {
  // const用[]，array的方法来进行，可以按顺序解构出[0,1,2]的值出来
  console.log(`We open on ${theDays},
  Open at: ${open}.am,
  Close at: ${close}.pm.`)
}

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// Example: 'Goal 1: Lewandowski'
const goalsAchive = game.scored;

for (const [goals, name] of Object.entries(goalsAchive))
  console.log(`Goal ${Number(goals) + 1}: ${name}.`);

// 第二步看不懂
const odd = Object.values(game.odds);
let average = 0;
for (const odds of odd)
  average += odds
average /= odd.length;
console.log(average)

// Print the 3 odds to the console
// team1和team2是game里有的值，x是里面没有的值
const oddsProperties = Object.entries(game.odds);

for (const [key, score] of oddsProperties) {
  const printOdds = `Odd of ${game[key] && 'victory' + ' ' + game[key] || 'draw'}: ${score}`;
  console.log(printOdds);
}

// BONUS: Creat an object called 'scorers'

const scorers = [];

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);

  // if (scorers[player] == true) {
  //   scorers[player]++;
  // } else {
  //   scorers[player] = 1;
  // }

  // scorers[player] && scorers[player]++ || scorers[player] || (scorers[player] = 1);

}

console.log(scorers);

const ceshi = new Set([
  'hello',
  'hey',
  'what>',
  'hello',
  'hello',
  'hey',
  'heysl'
])
console.log(ceshi);

// const ceshi2 = new Map();
// ceshi2.set('hello', 3)
//   .set(true, '对对对的')
//   .set(false, '错错错的')
//   .set('openTime', 11)
//   .set('closeTime', 23)
// console.log(ceshi2)


const question = new Map([
  ['question', 'what is the best language of coding?'],
  [1, 'Python'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'You are right!'],
  [false, 'Of course not~']
])

// const answer = Number(prompt(question.get('question')));
// document.querySelector('h1').textContent = answer === question.get('correct') ? question.get(true) : question.get(false);

// document.querySelector('h1').textContent = question.get(answer === question.get('correct'));



///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
const events = [...new Set(gameEvents.values())];

// 2
gameEvents.delete(64);

// 3
const endTimes = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${endTimes / gameEvents.size} minutes`);

// 4
for (const [time, events] of gameEvents) {
  const half = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF]${time}: ${events}.`);
}

*/


// String Method：

// XXX.indexOf() / XXX.lastIndexOf() : indexOf查找功能;
// XXX.slice() : Slice切割功能;
// XXX.toLowerCase() / XXX.toUpperCase() : 大小写功能；
// XXX.trim() : 裁切空格以及其它不合规input；
// XXX.replace() :replace可连续使用，且大小写敏感
// ECMAScript 2021规范中引入： XXX.replaceAll();
//（如果需要适配性好的替换，可以用(/值/g, ' ')来表示 ——/值/global）;
// XXX.join(' ') :将array中的keys用()内的内容连接;
// XXX.padStart() / XXX.padEnd() :(Num, '填充内容')通过设置string的数量，填充输入的内容;
// 若string的长度小于设定值，则会直接返回当前的string;
// XXX.repeat() :()内输入数值，为重复次数;

// Boorlean
// XXX.includes() :返回布尔值，大小写敏感;
// XXX.startsWith() / XXX.endsWith() :返回布尔值，大小写敏感;


const ceshiX = 'hellsiichoanks';
console.log(ceshiX.lastIndexOf('i'));


console.log(ceshiX.slice(-5)); // output: oanks;

const wrongName = 'jOnAs'; // Jonas
const lowerCase = wrongName.toLowerCase(); // jonas
const correctName = wrongName[0].toUpperCase() + lowerCase.slice(1); // Jonas

console.log(wrongName, lowerCase, correctName);


const email = 'helloyouha@ppp.io';
const loginEmail = '   hellOYouHA@ppp.io \n';

const normalize = (data) => {
  const normalize = (data.trim()).toLowerCase();
  // 首先trim删去不合规文字，然后将其转为小写
  return normalize
}

console.log(email === normalize(loginEmail));

const priceCN = '8000,8888¥';
// const priceUS = priceCN.replace('¥', '$') && priceCN.replace(',', '.');
const priceUS = priceCN.replace('¥', '$').replace(',', '.');

// 继续添加.replace能够继续运算，如果想用&&的话也行，但是代码会变多没意义
// .replace只会更改一次，并且不对原本的值造成永久影响
console.log(priceUS);


// .split()
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// 返回(2) ['Jonas', 'Schmedtmann']

console.log(firstName, '啊啊啊', lastName);

const nameFormat = (name) => {
  const convertArray = name.split(' ');
  const output = [];

  for (const x of convertArray) {
    // 方法1
    // output.push(x[0].toUpperCase() + (x.slice(1)).toLowerCase())

    // 方法2
    output.push(x[0].replace(x[0], x[0].toUpperCase()) + (x.slice(1)).toLowerCase());
  }

  console.log(output.join(' '))
};

nameFormat('john smith ppa');
nameFormat('johnny walKKer');
nameFormat('JOhny C silverhand');

// 切掉第三个以后的内容并且输出以'*'填充，yourPassword为隐藏密码，safetyPassword为显示密码：
// const yourPassword = prompt('please enter your password(10 String Max)');

// const safetyPassword = yourPassword.replace(yourPassword.slice(3), '')
// document.querySelector('h1').textContent = safetyPassword.padEnd(10, '*');

// 另一种方法。更加灵活、代码更少：
const safetyPass = (number) => {
  let str = number + '';

  const last = str.slice(-4);

  console.log(last.padStart(str.length, '*'), str.length)
}

safetyPass(12312312321);

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*

// 这个太蠢了，重来
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const input = { 0: '', 1: '', 2: '111', 3: '', 4: '', };
let i = 0;

document.querySelector('button').addEventListener('click', function () {
  i++;
  const getText = document.querySelector('textarea');
  input[i] = getText.value;

  const standardlize = (i) => {
    if (i.indexOf('_')) {
      const upper = i.indexOf('_');
      const str = i.slice(0, upper);
      const last = i.slice(upper + 1);

      const replace1 = last[0];
      const replace2 = last.slice(1);
      const final = (str.toLowerCase() + last.replace(replace1, replace1.toUpperCase()).replace(replace2, replace2.toLowerCase())).trim();

      return final
    }

    // 1.找到_之后的第一个字母，将其转为大写

    // 2.将_转为空格

    // 3.trim掉所有不合规字符


  };

  console.log(standardlize(input[i]))
});

*/

/*

// 新的challenge#4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const br = text.split('\n');
  // let i = 0;

  for (const [index, value] of br.entries()) {
    const fixed = value.trim().toLowerCase().replace(value[value.indexOf('_') + 1], (value[value.indexOf('_') + 1]).toUpperCase()).replace('_', '');
    // i++;

    // let emoji = '';
    // console.log(fixed.padEnd(20, ' ') + emoji.padEnd(index + 1, '✅'))
    // i++的方法略差于[index, value]，将br变换成带迭代次数的.entries() ARRAY
    // 这样能直接获取迭代次数而不用通过i++计算

    console.log(fixed.padEnd(20, ' ') + '✅'.repeat(index + 1))
    // repeat优于空字符后padEnd ✅

  }

})

*/


// !!!记住String Function的种类很重要!!!



///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// .replaceAll('+', ';') = .replace(/\+/g,';') : +这个符号，要转换成\+才能被识别到，所以是'/\+/g'
/*
const fixValue = flights.replace(/_/g, ' ').replaceAll('+', ';').split(';').entries();
for (const [i, value] of fixValue) {

  // 1.'_'改空格, ';'是截断,'+'为完结 
  console.log(i, value)


}
*/

const split = flights.split('+');

for (const [i, value] of split.entries()) {
  const outputMsg = value.replace(/_/g, ' ').split(';');
  const [status, plane1, plane2, arrivalTimes] = [...outputMsg];
  const formatter = (status, plane1, plane2, arrivalTimes) => {
    const statusNew = status.replace('Delayed', '🔴 Delayed');
    const [planeNew1, planeNew2] = [plane1.slice(0, 3).toUpperCase(), plane2.slice(0, 3).toUpperCase()];
    const arrivalTimesNew = arrivalTimes.replace(';', 'h');

    return `${statusNew.padStart(30, ' ')} from ${planeNew1} to ${planeNew2} (${arrivalTimesNew})`
  }

  console.log(formatter(status, plane1, plane2, arrivalTimes))
}