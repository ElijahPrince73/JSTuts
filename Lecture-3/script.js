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

var a = 23;

var b = a

a = 46

console.log(a);
console.log(b);

var obj1 = {
  name: 'john',
  age: 26
}

var obj2 = {
  name: 'john',
  age: 26
}

var obj2 = obj1;

obj.age = 3

console.log();