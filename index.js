
/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE READ TASK INSTRUCTIONS CAREFULLY TO KNOW WHEN TO USE OBJECT AS CONSTRUCTOR ARGUMENT. TESTS WILL NOT PASS IF USED WHEN NOT INSTRUCTED. ❗❗ */

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from 2 arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = []; // Initialize the stomach as an empty array
  }

  eat(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food); // Push the food into the stomach
    }
  }

  poop() {
    this.stomach = []; // Empty the stomach
  }

  toString() {
    return `${this.name}, ${this.age}`; // Return the string representation of name and age
  }
}

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon`, from 2 arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon) {
    this.model = model; // Initialize the 'model' property with the 'model' argument
    this.milesPerGallon = milesPerGallon; // Initialize the 'milesPerGallon' property with the 'milesPerGallon' argument
    this.tank = 0; // Initialize the 'tank' property at 0
    this.odometer = 0; // Initialize the 'odometer' property at 0
  }

  fill(gallons) {
    this.tank += gallons; // Add the 'gallons' argument to the 'tank'
  }

  drive(distance) {
    const maxDistance = this.tank * this.milesPerGallon; // Calculate the maximum distance the car can drive with the current fuel level
    const actualDistance = Math.min(distance, maxDistance); // Determine the actual distance the car can drive, considering fuel and requested distance
    this.odometer += actualDistance; // Increase the 'odometer' by the actual distance driven
    this.tank -= actualDistance / this.milesPerGallon; // Reduce the 'tank' by the fuel consumed for the actual distance driven

    if (this.tank === 0) {
      // If the tank is empty after driving, return a specific string
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  }
}


/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

class Lambdasian {
  constructor({ name, age, location }) {
    this.name = name; // Initialize the 'name' property with the 'name' argument from the object
    this.age = age; // Initialize the 'age' property with the 'age' argument from the object
    this.location = location; // Initialize the 'location' property with the 'location' argument from the object
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`; // Return a string with the name and location from the instance's properties
  }
}




/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

class Instructor extends Lambdasian {
  constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
    super({ name, age, location }); // Call the parent constructor (Lambdasian) and pass the required arguments

    this.specialty = specialty; // Initialize the 'specialty' property with the 'specialty' argument from the object
    this.favLanguage = favLanguage; // Initialize the 'favLanguage' property with the 'favLanguage' argument from the object
    this.catchPhrase = catchPhrase; // Initialize the 'catchPhrase' property with the 'catchPhrase' argument from the object
  }

  demo(subject) {
    return `Today we are learning about ${subject}`; // Return a string with the subject passed as an argument
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`; // Return a string with the student's name and the subject passed as arguments
  }
}






/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before BloomTech
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/

class Student extends Lambdasian {
  constructor({ name, age, location, previousBackground, className, favSubjects }) {
    super({ name, age, location }); // Call the parent constructor (Lambdasian) and pass the required arguments

    this.previousBackground = previousBackground; // Initialize the 'previousBackground' property with the 'previousBackground' argument from the object
    this.className = className; // Initialize the 'className' property with the 'className' argument from the object
    this.favSubjects = favSubjects; // Initialize the 'favSubjects' property with the 'favSubjects' argument from the object
  }

  listSubjects() {
    return `Loving ${this.favSubjects.join(', ')}!`; // Return a string with the student's favorite subjects joined by commas
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`; // Return a string indicating that the student has submitted a PR for the given subject
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`; // Return a string indicating that the student has begun a sprint challenge for the given subject
  }
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor {
  constructor({ name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor }) {
    super({ name, age, location, specialty, favLanguage, catchPhrase }); // Call the parent constructor (Instructor) and pass the required arguments

    this.gradClassName = gradClassName; // Initialize the 'gradClassName' property with the 'gradClassName' argument from the object
    this.favInstructor = favInstructor; // Initialize the 'favInstructor' property with the 'favInstructor' argument from the object
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`; // Return a string indicating that the Project Manager announces to the given channel for stand-up time
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`; // Return a string indicating that the Project Manager debugs the student's code on the given subject
  }
}






/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from BloomTech
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/


//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  return 'bar';
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager
}
