'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

const gk1 = (game.players[0])[0];
const gk2 = (game.players[1])[0];

const [fieldPlayer1, fieldPlayer2] = [
  [...game.players[0]],
  [...game.players[1]]
];

console.log(gk1, gk2);
console.log('player1:', fieldPlayer1, 'player2:', fieldPlayer2);
/*

const players1 = {

  allPlayers: [
    'Davie',
    'Muller',
    'Smith',
    'Johnson',
    'Brown',
    'Taylor',
    'Williams',
    'Jones',
    'Garcia',
    'Miller',
    'Davis',
  ],

};

const players2 = {

  allPlayers: [
    'Rodriguez',
    'Martinez',
    'Hernandez',
    'Lopez',
    'Gonzalez',
    'Nelson',
    'Anderson',
    'Lee',
    'Wilson',
    'Thomas',
    'Moore',
  ],

};

const [gk1, gk2] = [players1.allPlayers[0], players2.allPlayers[0]];
// const [fieldPlayer1, fieldPlayer2] = [
//   players1.allPlayers,
//   players2.allPlayers
// ];

const fieldPlayer1 = players1.allPlayers;
const fieldPlayer2 = '';

console.log(fieldPlayer1, fieldPlayer2)

*/