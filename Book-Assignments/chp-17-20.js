////////////////////////////////////////////Chapter-17-20 :- Arrays And Loop//////////////////////////////////////////////

// 1 - Declare and initialize an empty multi-dimensional array.(Arrays of array)

let multiDimensionalArray = [[], [], []];

// 2 - Declare and initialize a multi-dimensional array representing the following matrix
/*
    0   1   2   3
    1   0   1   2
    2   1   0   1
*/

let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// 3 - Write a program to print numerical counting from 1 to 10.

for (let i = 1; i <= 10; i++) {
  document.write(`${i} <br>`);
}

// 4 - Write a program to print multiplication table of any number using for loop.Table number and length should be taken as an input from user.

let tableNumber = +prompt("Enter a number:");
let tableLength = +prompt("Enter the length of the table:");

document.write(`Multiplication table of ${tableNumber} <br>`);
document.write(`Length ${tableLength} <br>`);
for (i = 1; i <= tableLength; i++) {
  document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br>`);
}

// 5 - Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// apple
// banana
// mango
// orange
// strawberry

// Element at index 0 is apple Element at index 1 is banana
// Element at index 2 is mango
// Element at index 3 is orange
// Element at index 4 is strawberry
// */

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write(`${fruits} <br>`);
for (let i = 0; i < fruits.length; i++) {
  document.write(`Element at index ${i} is ${fruits[i]} <br>`);
}

// 6 - Generate the following series in your browser. See example output.
/*
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
*/

// a. Counting: 1 to 15
document.write("<h3>Counting:</h3>");
for (let i = 1; i < 16; i++) {
  document.write(i + ", ");
}

// b. Reverse counting: 10 to 1
document.write("<h3>Reverse Counting:</h3>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

// c. Even: 0 to 20
document.write("<h3>Even Numbers:</h3>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

// d. Odd: 1 to 19
document.write("<h3>Odd Numbers:</h3>");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

// e. Series: 2k to 20k
document.write("<h3>Series (k):</h3>");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////
