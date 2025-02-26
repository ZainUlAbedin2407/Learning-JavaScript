/////////////////////////////////////////////Chapter-26-30 :- Math Methods////////////////////////////////////////////////

// 1 - Write a program that takes a positive integer from user & display the following in your browser.
/*
1. number
2. round off value off the number
3. floor value of the number
4. ceil value of the number
*/

let userInput = parseFloat(prompt("Enter a positive integer"));

if (isNaN(userInput) || userInput <= 0) {
  alert("Please enter a positive integer");
} else {
  document.write("Number: ", userInput);
  document.write("<br>Round off value: ", Math.round(userInput));
  document.write("<br>Floor value: ", Math.floor(userInput));
  document.write("<br>Ceil value: ", Math.ceil(userInput));
}


// 2 - Write a program that takes a negative floating point number from user & display the following in your browser.
/*
1. number
2. round off value off the number
3. floor value of the number
4. ceil value of the number
*/

let userInput2 = parseFloat(prompt("Enter a negative integer"));

if (isNaN(userInput2) || userInput2 >= 0) {
  alert("Please enter a negative integer");
} else {
  document.write("<br>Number: ", userInput2);
  document.write("<br>Round off value: ", Math.round(userInput2));
  document.write("<br>Floor value: ", Math.floor(userInput2));
  document.write("<br>Ceil value: ", Math.ceil(userInput2));
}


// 3 - Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5.

let userInput3 = parseFloat(prompt("Enter a number"));
document.write("<br>The absolute value of ", userInput3, " is ", Math.abs(userInput3));


// 4 - Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser. E.g. random dice value: 4    ||    random dice value: 6

let diceValue = Math.floor(Math.random() * 10) + 1;
document.write("<br>Random dice value: ", diceValue);


// 5 - Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
/*
E.g.
2
Random coin value: Heads

1
Random coin value: Tails
*/
let coinValue = Math.floor(Math.random() * 2) + 1;
if (coinValue === 1) {
  document.write("<br>Random coin value: Heads");
} else {
  document.write("<br>Random coin value: Tails");
}


// 6 - Write a program that shows a random number between 1 and 100 in your browser.
// E.g. Random number between 1 and 100: 86

let randomNumber = Math.floor(Math.random() * 100 + 1);
document.write("<br>Random number between 1 and 100: ", randomNumber);


// 7 - Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
/*
Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

let weight = parseFloat(prompt("Enter your weight"));
if (!isNaN(weight)) {
  document.write("The weight of the user is " + weight + " kilograms.");
} else {
  document.write("Invalid input. Please enter a valid weight.");
}


// 8 - Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

let secretNumber = Math.floor(Math.random() * 10 + 1);
let userGuess = parseInt(prompt("Guess the number between 1 and 10"));

if (userGuess < 1 || userGuess > 10 || isNaN(userGuess)) {
  document.write("Please enter a valid number between 1 and 10.");
} else {
  if (userGuess === secretNumber) {
    document.write("Congratulations! You guessed the number correctly.");
  } else {
    document.write(
      "Sorry, the secret number was " + secretNumber + ". Try again!"
    );
  }
}


///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////