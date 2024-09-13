///////////////////////////////////////////Chapter-3 :- Variables for Numbers/////////////////////////////////////////////

// 1 - Declare a varibale called age and assign it to my age. Show my age in an alert box

let age = 17;
alert(`I am ${age} years old`);


// 2 - Declare and initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your webpage. For Example: "You have visited this sited N times"

let numberOfTimesOfVisitorToVisitAPage = 18;
alert(`You have visited this sited ${numberOfTimesOfVisitorToVisitAPage} times`)


// 3 - Declare a variable called "birthYear" and assign to it your birth year. Show the following message in your browser:
/*
My birth year is ____
Data type of my declared variable is ______
*/ 

let birthYear = 2007;
document.write(`My birth year is ${birthYear}<br> Data type of my declared variable is ${typeof birthYear}`);


// 4 -  A visitor visits an online clothing website www.xyzClothing.com.Write a script to store in variables the following information:
/*  a. Visitor's name
    b. Product title
    c. Quantity of product purchased
Show the following message in your browser:
"John Doe ordered 5 T-shirts on XYZ Clothing store".
*/

let vistorName = "John Doe";
let productTitle = "T-shirts";
let quantity = 5;

document.write(`<br>${vistorName} ordered ${quantity} ${productTitle} on XYZ Clothing store`)

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////