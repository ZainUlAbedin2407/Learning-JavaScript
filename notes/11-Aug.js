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