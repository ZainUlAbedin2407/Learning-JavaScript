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