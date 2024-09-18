////////////////////////////////////////////Chapter # 6-9 :- Math Expressions/////////////////////////////////////////////

// 1 - Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
/*
Result:
The value of a is: 10
********************************
The value of ++a is: 11
Now the value of a is: 11
The value of a++ is: 11 
Now the value of a is: 12
The value of --a is: 11
Now the value of a is: 11
The value of a-- is: 11
Now the value of a is:10
*/

let a = 10;

document.write("Result:<br>");
document.write(`The value of a is: ${a} <br><br>`);
document.write(`****************************<br><br>`);

document.write(`The value of ++a is: ${++a} <br>`);
document.write(`Now the value of a is: ${a} <br><br><br>`);

document.write(`The value of a++ is: ${a++} <br>`);
document.write(`Now the value of a is: ${a} <br><br><br>`);

document.write(`The value of --a is: ${--a} <br>`);
document.write(`Now the value of a is: ${a} <br><br><br>`);

document.write(`The value of a-- is: ${a--} <br>`);
document.write(`Now the value of a is: ${a} <br><br><br>`);

// 2 - What will be the output in variables a, b & result after execution of the following script:
/*
var a = 2, b = 1;
var result=--a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
*/

let a2 = 2;
let b = 1;
let result = --a2 - --b + ++b + b--;

// --a is a pre decrement operator so the value of a which is 2 will become 1.
// let result = 1 - --b + ++b + b--;
// --b is a pre decrement operator so the value of b which is 1 will become 0.
// let result = 1 - 0 + ++b + b--;
// ++b is a pre increment operator so the value of b which is 0 will become 1.
// let result = 1 - 0 + 1 + b--;
// b-- is a post decrement operator so the value of b which is 0 will used first as 1 and then decrease by 1 and will become 0.
// let result = 1 - 0 + 1 + 1;

document.write(`The value of a is: ${a2} <br><br>`); // 1
document.write(`The value of b is: ${b} <br><br>`); // 0
document.write(`The value of result is: ${result} <br><br>`); // 3

// 3 - Write a program that takes input a name from user & greet the user.

let userName = prompt("What is your name?");
document.write(`Hello ${userName}!`);

// 4 - Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

let num = +prompt("Enter a number for the multiplication table:", 5);

num = num || 5;

document.write("<h2>Multiplication Table of " + num + "</h2>");
document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br>");

// 5 -
/*  
    a) Take three subjects name from user and store them in 3 different variables.
    b) Total marks for each subject is 100, store it in another variable.
    c) Take obtained marks for first subject from user and stored it in different variable.
    d) Take obtained marks of remaining two subjects from user and store them in different variable
    e) Now,Calculate the total marks and percentage and show the result in browser(Hint:use tables)
*/

// a) Take subject names from user
let subject1 = prompt("Enter the name of first subject:");
let subject2 = prompt("Enter the name of second subject:");
let subject3 = prompt("Enter the name of third subject:");

// b) Total marks for each subject is 100
let totalMarks = 100;

// c) Take obtained marks for the first subject from user
let obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ":");

// d) Take obtained marks of remaining two subjects
let obtainedMarks2 = +prompt("Enter obtained marks for " + subject2 + ":");
let obtainedMarks3 = +prompt("Enter obtained marks for " + subject3 + ":");

// e) Calculate total obtained marks and percentage
let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let totalMaxMarks = totalMarks * 3; // Since there are 3 subjects
let percentageOfSubject1 = (obtainedMarks1 / totalMarks) * 100;
let percentageOfSubject2 = (obtainedMarks2 / totalMarks) * 100;
let percentageOfSubject3 = (obtainedMarks3 / totalMarks) * 100;
let percentage = (totalObtainedMarks / totalMaxMarks) * 100;

// Display result in a table format in the browser
document.write("<h2>Result Summary</h2>");
document.write("<table border='1'>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks1 +
    "</td><td>" +
    percentageOfSubject1.toFixed(2) +
    "%</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks2 +
    "</td><td>" +
    percentageOfSubject2.toFixed(2) +
    "%</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks3 +
    "</td><td>" +
    percentageOfSubject3.toFixed(2) +
    "%</td></tr>"
);
document.write(
  "<tr><td></td><td><strong>" +
    totalMaxMarks +
    "</strong></td><td><strong>" +
    totalObtainedMarks +
    "</strong></td><td><strong>" +
    percentage.toFixed(2) +
    "%</strong></td></tr>"
);
document.write("</table>");

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////