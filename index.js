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

// Points
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

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var johnAge = calculateAge(1990)
var mikeAge = calculateAge(2005)
var samAge = calculateAge(2000)

function yearsUntilReitirement(name, year) {
  var age = calculateAge(year)
  var retirement = 65 - age

  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years');
  } else {
    console.log(name + ' has already retired');
  }

}

yearsUntilReitirement('john', 1990)
yearsUntilReitirement('sam', 2000)
yearsUntilReitirement('oop', 1945)
