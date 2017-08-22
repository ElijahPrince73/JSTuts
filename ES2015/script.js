// Lecture: let and const
//ES5
/*
var names = 'jane smith'
var age = '23'
names = 'jane miller'

console.log(names);

//ES6
const name6 = 'jane smith'
let age6 = 24;

name6 = 'jane miller'

console.log(name6);
*/

//ES5
/*function driversLicence(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1987;
  }
  console.log(firstName + ' born in ' + yearOfBirth + ' is able to drive a car');
}
driversLicence(true)

//ES6
function driversLicence(passedTest) {
  // console.log(firstName);
  let firstName;
  const yearOfBirth = 1987;

  if (passedTest) {
    firstName = 'John';

    console.log(firstName + ' born in ' + yearOfBirth + ' is able to drive a car');
  }
}

driversLicence(true)

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/
//////////////////////////////////////////////////////////////
//Lecture: blocks and IIFEs

//ES6
// {
//   const a = 1;
//   let b = 2;
//   var c = 3
// }
// console.log(a + b);
// console.log(c);

//ES5
// (function() {
//   var c = 3
// })()
//
// console.log(c);

//////////////////////////////////////////////////////////////
//Lecture: Strings

/*let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1995;
function calcAge(year) {
  return 2016 - year
}

//ES6
console.log(`This is ${firstName} ${lastName} he was born in ${yearOfBirth} Today he is ${calcAge(yearOfBirth)} years old`);

//ES5
console.log('this is ' + firstName + ' ' + lastName + ' he was born ' + yearOfBirth + ' Today he is ' + calcAge(yearOfBirth) + ' years old');

const name = `${firstName} ${lastName}`

console.log(name.startsWith('j'));
console.log(name.endsWith('h'));
console.log(name.includes(' '));
console.log(`${firstName} `.repeat(5));*/

//////////////////////////////////////////////////////////////
//Lecture: Arrow Functions

/*const years = [1993, 1997, 3939, 3030]
//ES5
var ages5 = years.map(function(el) {

  return 2016 - el
})

console.log(ages5);

//ES6

let ages6 = years.map(el => 2016 - el)
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${ 2016 - el}`)

console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;

  return `Age element ${index + 1}: ${age}`
})

console.log(ages6);*/

/////////////////////////////////////////////////////////////// Lecture: Arrow functions 2

// ES5
/*var box5 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    var self = this;
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str)

    });
  }
}

// box5.clickMe()

//ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {

    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str)

    });
  }
}

// box6.clickMe()

const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {

    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str)

    });
  }
}

box66.clickMe()*/
//ES5
// function Person(name) {
//   this.name = name;
// }
//
// Person.prototype.myFriends5 = function(friends) {
//
//   var arr = friends.map(function(el) {
//     return this.name + ' is friend with ' + el;
//   }.bind(this));
//
//   console.log(arr);
// }
//
// var friends = ['bob', 'jane', 'mark']
//
// new Person('john').myFriends5(friends)

//ES6
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.myFriends6 = function(friends) {
//
//   var arr = friends.map((el) => {
//     return `${this.name} is friend with ${el}`;
//   });
//
//   console.log(arr);
// }
//
// var friends = ['bob', 'jane', 'mark']
//
// new Person('john').myFriends6(friends)

//Lecture: Destructuring

// ES5

// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

//ES6

// const [name,
//   age] = ['john', 26];
//
// console.log(name);
// console.log(age);
//
// const obj = {
//   firstName: 'john',
//   lastName: 'smith'
// };
//
// const {firstName, lastName} = obj
//
// console.log(firstName);
// console.log(lastName);
//
// const {firstName: a, lastName: b} = obj
//
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year
//
//   return [
//     age, 65 - age
//   ]
// }
//
// const [age,
//   retirement] = calcAgeRetirement(1990)
// console.log(age);
// console.log(retirement);

//Lecture: Arrays

// const boxes = document.querySelectorAll('.box');

//ES5
// var boxesArr = Array.prototype.slice.call(boxes)
// boxesArr.forEach(function(cur) {
//   cur.style.backgroundColor = 'dodgerblue'
// })

//ES6
// const boxesArr6 = Array.from(boxes);
//
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue')

//ES5
// for (var i = 0; i < boxesArr.length; i++) {
//   if (boxesArr[i].className === 'box blue') {
//     continue;
//   }
//   boxesArr[i].textContent = ' I changed to blue'
// };

//ES6
// for (const cur of boxesArr6) {
//   if (cur.className.includes('blue')) {
//     continue;
//   }
//   cur.textContent = ' I changed to blue'
// }

//ES5
// var ages = [12, 21, 3, 44, 66]
//
// var full = ages.map(function(cur) {
//   return cur >= 18
// })

// console.log(full);
//
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

//ES6

// console.log(ages.findIndex(cur => cur >= 18));
//
// console.log(ages.find(cur => cur >= 18));

//Lecture: Spread operator

// function addFourAges(a, b, c, d) {
//   return a + b + c + d
// }
// var sum1 = addFourAges(18, 3, 23, 23)
//
// console.log(sum1);
//
// es5
//
// var ages = [18, 3, 23, 23];
// var sum2 = addFourAges.apply(null, ages)
//
// console.log(sum2);

//ES6
// const sum3 = addFourAges(...ages)
//
// console.log(sum3);
//
// const familySmith = ['john', 'jane', 'bob', 'mark']
//
// const familyMiller = ['mary', 'bov', 'ann']
//
// const bigFamily = [
//   ...familyMiller,
//   'lil',
//   ...familySmith
// ]
// console.log(bigFamily);
//
// const h = document.querySelector('h1');
//
// const boxes = document.querySelectorAll('.box')
//
// const all = [
//   h, ...boxes
// ]
//
// Array.from(all).forEach(cur => cur.style.color = 'purple')
