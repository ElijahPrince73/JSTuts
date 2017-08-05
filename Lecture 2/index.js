// Lecture: Hoisting

// functions
// calculateAge(1999)
//
// function calculateAge(year) {
//   console.log(2016 - year);
// }

// calculateYears(1996)

// var calculateYears = function(year) {
//   console.log(65 - (2016 - year));
// }

// variables

// console.log(age);
// var age = 23
// console.log(23);

// function foo() {
//   // console.log(age);
//   var age = 65
//   console.log(age);
// }
// foo()
//
// console.log(age);

//Lecture: Scoping

/*var a = 'Hello';

first();

function first() {
  var b = 'hi'
  second();
  function second() {
    var c = 'hey'
    // console.log(a + b + c);
    third()
  }
}

function third() {
  var d = 'john'
  console.log(a + b + c + d);
}*/

// Lecture: this keyword

// calculateAge(1996)

// function calculateAge(year) {
//   console.log(2017 - year);
//   console.log(this);
// }

/*var john = {
  name: 'john',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
}

john.calculateAge()

var mike = {
  name: 'mike',
  yearOfBirth: 1995
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/
