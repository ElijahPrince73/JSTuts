// Function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1999,
//   job: 'teacher'
// }

//Constructor
/*var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2017 - this.yearOfBirth);
}

Person.prototype.lastName = 'smith'

var john = new Person('John', 1999, 'teacher');

var jane = new Person('Jane', 1996, 'designer')

var mark = new Person('Mark', 1950, 'retirred')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/

//Testing

/*var Spaceship = function(type, lightSpeedLimit, crewLimit) {
  this.type = type
  this.lightSpeedLimit = lightSpeedLimit;
  this.crewLimit = crewLimit
}

Spaceship.prototype.Appears = 'Appears in all starwars movies'

var deathStar = new Spaceship('Star Destroyer', '600', '1 Million')

var burrito = new Spaceship('burrito', '10 minutes', 'none')

console.log(burrito);

console.log(deathStar.Appears);

console.log(deathStar);*/

//Object.create

/*var personProto = {
  calculateAge: function () {
    console.log(2017 - this.yearOfBirth);
  }
}

var john = Object.create(personProto)

console.log(john);

john.name = 'john'
john.yearOfBirth = 1899
john.job = 'teacher'

var jane = Object.create(personProto, {
  name: {value: 'jane'},
  yearOfBirth:{value: 1997},
  job: {value:'Designer'}
})

console.log(jane);*/

// Primitive vs Objects

//Primitives
/*var a = 23;
var b = a
a = 46
console.log(a);
console.log(b);
//Objects
var obj1 = {
  name: 'john',
  age: 26
}

var obj2 = obj1;

obj1.age = 30

console.log(obj1.age);
console.log(obj2.age);*/

//functions

/*var age = 27;
var obj = {
  name: 'elijah',
  city: 'Las Vegas'
}

function change(a, b) {
  a = 30
  b.city = 'LA'
}

change(age, obj);

console.log(age);

console.log(obj.city);*/

//Lecture: Passing functions as arguments

/*var years = [1990, 1837, 2006, 1996];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2017 - el;
}

function isFullAge(el) {
  return el >= 18
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206 - (0.67 * el))
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge)
var rate = arrayCalc(ages, maxHeartRate)
console.log(rate);
console.log(fullAges);
console.log(ages);*/

//Functions returning functions

/*function interviewQuestion(job) {
  if (job === 'designer') {
    return function (name) {
       console.log(name + ', can you please explain what UX is');
    }
  }else if (job === 'teacher') {
   return function (name) {
      console.log('What subject do you teach ' + name + '?');
    }
  }else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

function starshipName(starship) {
  if (starship === 'deathStar') {
    return function (weapon) {
      console.log('You own the ' + starship + ' Its weapons are ' + weapon);
    }
  }else {
    return function (weapon) {
      console.log('You aint shit with your ' + starship + ' and your ' + weapon);
    }
  }
}

starshipName('deathStar')('the planet killer')
starshipName('millenium falcom')('laser lights')
interviewQuestion('teacher')('mark')
interviewQuestion('designer')('rachel')
interviewQuestion('bum')('bobo')*/

// IIFE
//keeps data private from being accesed
/*(function () {
  var score = Math.random() * 10;
  console.log(score >- 5);
})();

(function (goodluck) {
  var score = Math.random() * 10;
  console.log(score >- 5 -goodluck);
})();*/

//Closures
/*function retirement(retirementAge) {
  var a = ' years left until retirement'
  return function (yearOfBirth) {
    var age = 2017 - yearOfBirth
    console.log((retirementAge - age) + a);
  }
}

var retirmentUS = retirement(66);
var retirementGER = retirement(68)
var retirementIceland = retirement(67)

retirmentUS(1996)
retirementGER(1990)
retirementIceland(1997)*/

//Challenge
/*function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX is');
    } else if (job === 'teacher') {
      console.log('What subject do you teach ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

interviewQuestion('teacher')('mark')
interviewQuestion('designer')('rachel')
interviewQuestion('bum')('bobo')*/
