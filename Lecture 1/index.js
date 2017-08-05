// Variables

// var name = 'john';
// var age = 26;
//
// var job, isMarirred;
//
// job = 'teacher';
// isMarirred = false;
// console.log(name + ' is a ' + age + ' year old ' + job + ' is he married ' + isMarirred);
//
// age = 'thirty six';
// job = 'driver'
//
// console.log(name + ' is a ' + age + ' year old ' + job + ' is he married ' + isMarirred);
//
// var lasName = prompt('What is the last name')
// console.log(lasName);

//Operators
// var now = 2017
//
// var birthYear = now - 25;
//
// birthYear = now - 26 * 2
//
// console.log(birthYear);
//
// var ageJohn = 30;
// var ageMark = 30;
// ageJohn = ageMark = (3 + 5) * 4 - 6
//
// ageJohn++
// ageMark *= 2;
// ageMark + ageJohn
//
// console.log(ageJohn);

// IF else statement s

// var name = 'john'
// var age = 26
// var isMarirred = 'no';
//
// if (isMarirred === 'yes') {
//   console.log(name + ' is married');
// } else {
//   console.log(name + ' is not married');
// }
//
// isMarirred = true
//
// if (isMarirred) {
//   console.log('YES');
// }
//
// //Use this type of operator
// if (23 === '23') {
//   console.log('something here');
// } else {
//   console.log('not a number');
// }

// Boolean Logic and switch

// var age = 25
//
// if (age < 20) {
//   console.log("john is a wee lad");
// } else if (age >= 20 && age < 30) {
//   console.log('John is a young man');
// } else {
//   console.log('John is tall lad');
// }
//
// var job = 'teacher';
//
// job = prompt('What does john do')
//
// switch (job) {
//   case 'teacher':
//     console.log('John teaches kids');
//     break;
//   case 'driver':
//     console.log('John drives a cab d');
//     break;
//   case 'cop':
//     console.log('John fights crime');
//     break;
//
//   default:
//     console.log('He does something else');
// }

// Challenge 1
// var johnHeight = 150;
// var smithHeight = 156;
// var amyHeight = 157;
//
// var johnAge = 12;
// var smithAge = 12;
// var amyAge = 12
//
// var johnScore = (johnHeight + johnAge) * 5;
// var smithScore = (smithAge + smithHeight) * 5;
// var amyScore = (amyAge + amyHeight) * 5;
//
// console.log(johnScore);
// console.log(smithScore);
// console.log(amyScore);
//
// if (johnScore > smithScore && amyScore < johnScore) {
//   console.log('John wins', johnScore);
// } else if (smithScore > johnScore && amyScore < smithScore) {
//   console.log('Smith wins', smithScore);
// } else if (amyScore > johnScore && smithScore < amyScore) {
//   console.log('Amy Wins', amyScore);
// } else {
//   console.log('Its a tie');
// }

// function calculateAge(yearOfBirth) {
//   var age = 2017 - yearOfBirth;
//   return age;
// }
//
// var johnAge = calculateAge(1990)
// var mikeAge = calculateAge(2005)
// var samAge = calculateAge(2000)
//
// function yearsUntilReitirement(name, year) {
//   var age = calculateAge(year)
//   var retirement = 65 - age
//
//   if (retirement >= 0) {
//     console.log(name + ' retires in ' + retirement + ' years');
//   } else {
//     console.log(name + ' has already retired');
//   }
//
// }
//
// yearsUntilReitirement('john', 1990)
// yearsUntilReitirement('sam', 2000)
// yearsUntilReitirement('oop', 1945)

//function statements and expression

//expression
// function someFun() {}
//Statement
// var someFun = function(parameter) {
//
// }

//expressions produces a value

// 3 + 4;
//
// var x = 4

//statements produces a action from something
// if (x === 5) {
//   console.log();
// }

//Arrays
// var names = ['john', 'jane', 'mark'];
//
// var yearsBorn = new Array(1999, 1991, 1965)
//
// console.log(names[2]);
//
// names[1] = 'Ben'
//
// console.log(names);
//
// var john = ['john', 'smith', 1999, 'teacher',
//   false
// ]
//Data Mutation
// john.push('blue') // Adds to end of array
// john.unshift('Mr.') // Adds to begining of Array
// john.pop() // Removes from end of Array
// john.shift() // Removes from start of Attay
// alert(john.indexOf('smith')) // Shows location of item in Array but returns value
// console.log(john);
//
// if (john.indexOf('teacher') === -1) {
//   console.log('not a teacher');
// }

// Objects
// var john = {
//   name: 'john',
//   lastName: 'smith',
//   yearOfBirth: '1999',
//   job: 'teacher',
//   isMarirred: 'false'
// }
//
// console.log(john);

//2 ways to retrieve and element from an Object
// console.log(john['lastName']);
// console.log(john.lastName);

// var xyz = 'job';
// console.log(john[xyz]);

//Data Mutation
// john.lastName = 'miller';
// john.job = 'programmer'
//
// console.log(john);

// new Object(); creates a empty object
// var jane = new Object();
// jane.name = 'jane'
// jane.lastName = 'miller';
// jane['yearOfBirth'] = 1969;
// jane['isMarirred'] = 'yas'
//
// console.log(jane);

// Objects and Methods

// v1
/*var john = {
  name: 'john',
  lastName: 'smith',
  yearOfBirth: '1999',
  job: 'teacher',
  isMarirred: 'false',
  family: [
    'jane', 'mark', 'bob'
  ],
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
}

console.log(john.calculateAge());

var age = john.calculateAge();

john.age = age

console.log(john);*/

// var john = {
//   name: 'john',
//   lastName: 'smith',
//   yearOfBirth: '1999',
//   job: 'teacher',
//   isMarirred: 'false',
//   family: [
//     'jane', 'mark', 'bob'
//   ],
//   calculateAge: function() {
//     //return 2017 - this.yearOfBirth;
//     this.age = 2017 - this.yearOfBirth
//   }
// }
//
// john.calculateAge();
//
// console.log(john);

//Loops
//for loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// var names = ['john', 'jane', 'mark', 'bob'];

// console.log(names);
//
// for (var i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }
//
// for (var i = names.length - 1; i >= 0; i--) {
//   console.log(names[i]);
// }

//while loops
// var i = 0
// while (i < names.length) {
//   console.log(i);
//   i++
// }

//Break
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
//
//   if (i === 3) {
//     break
//   }
// }
//Continue
// for (var i = 1; i <= 5; i++) {
//
//   if (i === 3) {
//     Continue;
//   }
//   console.log(i);
// }

//Challenge 2

// function printFullAge(yearOfBirth) {
//   var ages = [];
//   var fullAges = [];
//
//   for (var i = 0; i < yearOfBirth.length; i++) {
//     ages[i] = 2017 - yearOfBirth[i]
//   }
//
//   for (i = 0; i < ages.length; i++) {
//     if (ages[i] >= 18) {
//       console.log('Person ' + (i + 1) + ' is ' +
//         ages[i] + ' years old, and is of full age');
//       fullAges.push(true)
//     } else {
//       console.log('Person ' + (i + 1) + ' is ' +
//         ages[i] + ' years old, and is NOT of full age');
//       fullAges.push(false)
//     }
//   }
//   return fullAges;
// }
//
// var yearOfBirth = [1996, 1955, 2000, 2012]
//
// var full_1 = printFullAge(yearOfBirth)
// var full_2 = printFullAge([1999, 2001, 2005])
//
// console.log(full_1);
// console.log(full_2);

// var name = 'bbibi'
//
// function first() {
//   var a = 'hello ';
//   setTimeout(function() {
//     second();
//   }, 2000)
//   var x = a + name
//   console.log(x);
// }
//
// function second() {
//   var b = 'hi '
//   setTimeout(function() {
//     third();
//   }, 2000)
//   var z = b + name
//   console.log(z);
// }
//
// function third() {
//   var c = 'hey'
//   var z = c + name;
//   console.log(z);
// }
// first();
