// Date :- 17-Aug-2024

// var VS let VS const

// var :- is a global variable. It can be redeclare and reinitialize
// Example:-
var globalVariable = "var is able to redeclare";
var globalVariable = "Hence proved";  // redeclaration
globalVariable = "var is also able to reinitialize";  // reinitialization || reassignment

// let :- is a local variable. It can reinitialize but cannot redeclare
// Example:-
let localVariable = "let is a localVariable";
// let localVariable = "Hence proved that it is not able to redeclare "  // redeclaration shows an error
localVariable = "let is able to reinitialize"  // reinitialization || reassignment

// const :- cannot be redeclare nor reinitialize. const must be initialize on that line where it declare. It is used for constant things which cannot change 
// Example:-
// const weekDays;   // It shows an error because we must initialize it on same line
const season = "Summer";
// season = "Winter";   // It shows an error on console ( Error :- Assignment || or Reinitialization to constant variable)
// const season = "Autumn"  // It shows an error because of redeclaration 


// Quotations :-
//console.log('I don't know)  // here we use single quotations but the remaining text shows an error because the JS thinks that the strings end after letter (n). The interchange of this problem is mention below
console.log("I dont't know");
// Similary when we want to use ("") this in our text we have interchange of that problem is this 
// Using backticks (``) or single commas ('')


// Template literals

// In ES5 we use (+ or ,) to concatenate our text but in ES6 the latest feature is introduce which is known as template lterals
// Syntax:-
let myCountry = "Pakistan";
let myCity = "Karachi";

console.log(`I live in ${myCity} ${myCountry}`)


// Short method of Arithmetic Operations

let randomNumber = 8;
randomNumber += 10    // randomNumber = randomNumber + 10     // 18
randomNumber -= 5     // randomNumber = randomNumber - 5      // 13
randomNumber *= 2     // randomNumber = randomNumber * 2      // 26
randomNumber /= 2     // randomNumber = randomNumber / 2      // 13
randomNumber %= 5     // randomNumber = randomNumber % 5      // 3
randomNumber **=2     // randomNumber = randomNumber ** 2     // 9
console.log(randomNumber)  // output 9

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //