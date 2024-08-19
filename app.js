// Date:- 10 Aug 2024

// 3 functions that we learn

// 1 - Alert : It shows a pop-up to user on website 

alert('Warning')

// 2 - Console.log : It prints a message on console

console.log('Hello World')

// 3 - document.write : It shows a message on browser body

document.write('Hello World')

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //

// Variables for Strings

// If we want to print one message in lot of times generally we use this method

// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')
// console.log('Hello world')

// but when we want to change some thing in it we should implemented in all of these messages which take a lot of time so the better way for this work is this

// we store a message in a variable

var message = "Hello World"

console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);
console.log(message);

// Now if we want to change something in message we couldn't implement our message line by line on every console function.  We just change our desired thing in our (message name variable)


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //

// Variables for numbers

// The same method apply on numbers but when we want to write a numbers we don't use commas("" , `` , '') to store numbers. if we store numbers in commas("" , `` , '') the javascript consider it as a string 

var myWeight = 45

console.log(myWeight);

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //

// Variable Names Legal and Illegal

// Variables names should fulfill these rules

// 1_There is no space allow in variable names 
// var my Name = "Zain Ul Abedin"   //it shows me an error
// 2_Variable names must start with letters, dollar sign ($), underscore (_) 
// 3_Variable name allows to add numbers in between or end but not in start 
// 4_Variables names are not allowed if it is JavaScript Keywords like :- function , console etc
// 5_Variable names are case sensitive so myVariable and myvariable are different variables
// 6_The better way to declare a names of variable is camelCase 
// var myName = "Zain Ul Abedin"  // the second word of variable name will be capital in this case
// 7_ If Variable names are descriptive it helps us to understand the work happens in it 


// Date:- 11 Aug 2024 

var myMessage;   // Declaration
myMessage = "What are you doing?"  // Assign a value

var userAnswer = "Nothing"  // Declaration + Assign a value

// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //

// Arithmetic Operators

var a = 6; 
var b = 8;


// Addition +

var add = a + b;
console.log(add); 


// Subtraction -

var sub = a - b;
console.log(sub); 


// Multiplication *

var mul = a * b;
console.log(mul); 


// Division /

var div = a / b;
console.log(div); 


// Modulus %

var mod = a % b
console.log(mod);


// Exponential **

var exp = a ** b
console.log(exp);


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //


// We can also perform arithmetic operators like this

var number = 3;
number = number + 8;
console.log(number); 


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //


// Post and Pre Increment and Decrement


var myNumber = 5;
myNumber++;       // Post Increment
console.log(myNumber);

var myNumber = 5;
myNumber--;       // Post Decrement
console.log(myNumber);

var myNumber = 5;
++myNumber;       // Pre Increment
console.log(myNumber);

var myNumber = 5;
--myNumber;       // Pre Decrement
console.log(myNumber);

// Here, we got no difference in post and pre increment and decrement but when we perform big operations it matters alot

// Post performs a work after the number and pre performs before the number

// Example;

var c = 4
//              4  +  5  -  3  +  4  +  5  +  5  -  6  -  6  - 6   -  6  = -4
var equation = c++ + c-- - --c + ++c + ++c + c++ - c++ - --c - c-- - ++c 
console.log(equation);


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //


// The most frequently question is this that which method JavaScript perform in Arithmetic operations? ( + , - , * , /)


// Answer : BODMAS

// B = Bracket
// O = Order
// D = Divison
// M = Multiplication
// A = Addition
// s = Subraction

// For Example :- 

var operation = 3 + 8 - 9 / 3 * 7 + ( 7 * 4 + 2)
//            = 3 + 8 - 9 / 3 * 7 + ( 28 + 2)
//            = 3 + 8 - 9 / 3 * 7 + 30
//            = 3 + 8 - 3 * 7 + 30
//            = 3 + 8 - 21 + 30
//            = 11 - 21 + 30
//            = 41 - 21 
//            = 20 Answer
console.log(operation);


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //


// Concatenation

// It is used to combine a message in one sentence 

// For Example :-

var personName = "Ali";
var anotherPersonName = "Usman";

console.log(personName + ' wants to invite ' + anotherPersonName + ' in his Birthday Party');

// Generally we give whitespaces seperately in message but when we want everytime space in message we should follow the method above

// For Example :-

console.log(personName + ' ' + 'wants to invite' + ' ' + anotherPersonName + ' ' + 'in his Birthday Party');


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //


// Prompts :-

// is used to ask the user for information and provide a response

prompt('How many Cars you have?')


// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* //

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

// Date :- 18-Aug-2024

// if statement 
// syntax :-
/*if(condition){
    // execution
}*/

// Example :- 
let x = prompt("Where does the Zain Ul Abedin live?")
if( x === "karachi"){
    alert("Correct")
}

// Comparison operator:-
// ==    --->>> just check the appearance of data
// ===   --->>> it checks the data type too
// For Example :-

let y = prompt("What is your age?")
if(y == 18)(
    alert("You are adult")
); // here if i user (===) operator it shows me error because alert/prompt doesn't have ability to identify the data type. It consider it as a string

// We can check it out by example that it can really give us an error or not
let z = prompt("What is your age?")
if(z === 10)(
    alert("You are child")
); // the alert code cannot be executed because (===) check the type too and prompt consider our age as a string