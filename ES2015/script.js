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

//////////////////////////////////////////////////////////////////////Lecture: Rest Paremeters

//ES5
// function isFullAge() {
// console.log(arguments);

//   var argsArr =  Array.prototype.slice.call(arguments);
//
//   argsArr.forEach(function (cur) {
//     console.log((2016 - cur) >= 18);
//   })
// }
//

//ES6
// function isFullAge(...years) {
//   years.forEach( cur =>console.log((2016 - cur) >= 18));
// }
//
// isFullAge(1998, 2006, 1977, 3030, 2016)

// function isFullAge(limit) {
//   console.log(arguments);
//
//   var argsArr =  Array.prototype.slice.call(arguments , 1);
//
//   console.log(argsArr);
//
//   argsArr.forEach(function (cur) {
//     console.log((2016 - cur) >= limit);
//   })
// }
//
// isFullAge(16, 2006, 1977, 3030, 2016)

//ES6
// function isFullAge(limit, ...years) {
//   years.forEach( cur =>console.log((2016 - cur) >= limit));
// }
//
// isFullAge(16, 2006, 1977, 3030, 2016)

//////////////////////////////////////////////////////////////////////Lecture: Default Paremeters

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//
//   lastName === undefined ? lastName = 'smith' : lastName = lastName
//
//   nationality === undefined ? nationality = 'American' : nationality = nationality
//
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
// var john = new SmithPerson('john', 1997)
// console.log(john);
//
// var emily = new SmithPerson('Emily', 1967, ' Diaz', 'Spanish')
//
// console.log(emily);

//ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'smith', nationality = 'American') {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality;
// }
//
// var john = new SmithPerson('john', 1997)
// console.log(john);
//
// var emily = new SmithPerson('Emily', 1967, ' Diaz', 'Spanish')
//
// console.log(emily);

//////////////////////////////////////////////////////// Lecture: Maps

// const question = new Map();
//
// question.set('question', 'What is the official name of the latest major JS version');
//
// question.set(1, 'es5')
//
// question.set(2, 'es6')
//
// question.set(3, "es2016")
//
// question.set('Correct', 3)
//
// question.set(true, 'correct answer')
//
// question.set(false, 'Wrong please try again')

// console.log(question.get('question'));
// console.log(question.size);

// if (question.has(2)) {
// question.delete(2)
// console.log('es6');
// }

// question.clear();

// question.forEach((value, key) => console.log(`This is ${key} set ${value}`))

// for (let [key, value] of question.entries()) {
//   if (typeof(key) === 'number') {
//     console.log(`Anser ${key} ${value}`);
//   }
// }

// const ans = parseInt(prompt('Write the correct answer'))
// console.log(question.get(ans === question.get('Correct')));

//////////////////////////////////////////////////////// Lecture: Classes

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }
//
// Person5.prototype.calcAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth
//   console.log(age);
// }
//
// var john5 = new Person5('john', 1999, 'teacher')
//
// console.log(john5);

//ES6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//
//   calcAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age);
//   }
//   static greeting() {
//     console.log("Hey there");
//   }
// }
//
// const john6 = new Person6('john', 1996, 'teacher')
//
// console.log(john6);
//
// Person6.greeting()

////////////////////////////////////////////////////////Lecture: subclasses

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth
//   this.job = job
// }
//
// Person5.prototype.calcAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth
//   console.log(age);
// }
//
// var Athlete5 = function(name, yearOfBirth, job, games, medals) {
//   Person5.call(this, name, yearOfBirth, job)
//   this.games = games;
//   this.medals = medals;
// }
//
// Athlete5.prototype = Object.create(Person5.prototype)
//
// Athlete5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }
//
// var johnAthlete5 = new Athlete5('john', 1999, 'swimmer', 10, 12)
//
// console.log(johnAthlete5);
//
// johnAthlete5.calcAge();
// johnAthlete5.wonMedal()

//ES6
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//
//   calcAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth
//     console.log(age);
//   }
// }
//
// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, games, medals) {
//     super(name, yearOfBirth, job)
//     this.games = games
//     this.medals = medals
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }
//
// const johnAthlete6 = new Athlete6('john', 1990, 'swimmer', 3, 10)
//
// console.log(johnAthlete6);
//
// johnAthlete6.wonMedal()
// johnAthlete6.calcAge()

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
