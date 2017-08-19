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
