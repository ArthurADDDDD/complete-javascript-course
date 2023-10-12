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
  }
};


restaurant.deliveryMessage({
  nameIndex: 0,
  location: 'Paris, Franch',
})


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
