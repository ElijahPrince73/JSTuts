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

var age = 25

if (age < 20) {
  console.log("john is a wee lad");
} else if (age >= 20 && age < 30) {
  console.log('John is a young man');
} else {
  console.log('John is tall lad');
}

var job = 'teacher';

job = prompt('What does john do')

switch (job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
    console.log('John drives a cab d');
    break;
  case 'cop':
    console.log('John fights crime');
    break;

  default:
    console.log('He does something else');
}
