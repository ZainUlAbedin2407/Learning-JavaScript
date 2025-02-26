////////////////////////////////////////////Chapter-21-25 :- String Methods///////////////////////////////////////////////

// 1 - Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

let fullName = firstName + " " + lastName;
alert(`Hi ${fullName}, Welcome to our website`);


// 2 - Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

let userInputAboutFavouriteMobilePhone = prompt(
  "What is your favourtite Mobile Phone Model?"
);
alert(
  `My favourite phone is: ${userInputAboutFavouriteMobilePhone}\nLength of string: ${userInputAboutFavouriteMobilePhone.length}`
);


// 3 - Write a program to find the index of letter "n" in the word "Pakistani" and display the result in your browser.

let word = "Pakistani";
let index = word.indexOf("n");

alert(`String: ${word}\nIndex of 'n': ${index}`);


// 4 - Write a program to find the last index of letter "l" in the word "Hello World" and display the result in your browser.

let word2 = "Hello World";
let lastIndex = word2.lastIndexOf("l");
alert(`String: ${word2}\nLast Index of 'l': ${lastIndex}`);


// 5 - Write a program to find the character at 3rd index in the word "Pakistani" and display the result in your browser.

let word3 = "Pakistani";
let charAtThirdIndex = word3.charAt(3);
alert(`String: ${word3}\nCharacter at 3rd index: ${charAtThirdIndex}`);


// 6 - Repeat Q1 using string concat() method.

let fullNameByConcatMethod = firstName.concat(" " + lastName);
alert(`Hi ${fullNameByConcatMethod}, Welcome to our website`);


// 7 - Write a program to replace the "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser.

let city = "Hyderabad";
let replacedCity = city.replace("Hyder", "Islam");
alert(`City: ${city}\nAfter Replacement: ${replacedCity}`);


// 8 - Write a program to replace all occurrences of "and" in the string with "&" and display the result in your browser.

let message =
  "Ali and Sami are best friends. They play cricket and football together.";
let replacedMessage = message.replace(/and/g, "&");
alert(`Message: ${message}\nAfter Replacing of and to &: ${replacedMessage}`);


// 9 - Write a program that converts a string "472" to a number 472. Display the values & types in your browser.

let string = "472";
let number = Number(string);
alert(
  `Value: ${string}\nType: ${typeof string}\nValue: ${number}\nType: ${typeof number}`
);


// 10 - Write a program that takes user input. Convert and show the input in capital letters.

let userInput = prompt(
  "Enter any single word which you want to convert in Upper case"
);
let userInputToUpperCase = userInput.toUpperCase();
alert(`User Input: ${userInput}\nUpper Case: ${userInputToUpperCase}`);


// 11 - Write a program that takes user input. Convert and show the input in title case.

let userInput2 = prompt(
  "Enter any single word which you want to convert in Title case"
);
let userInputToTitleCase =
  userInput2.charAt(0).toUpperCase() + userInput2.slice(1).toLowerCase();
alert(`User Input: ${userInput2}\nTitle Case: ${userInputToTitleCase}`);


// 12 - Write a program that converts the variable num to string
/*Example:
    var num = 35.36;

    Remove the dot to display "3536" in your browser.
    Example Output:
        Number: 35.36
        Result: 3536
*/

let num = 35.36;
let numToString = num.toString().replace(".", "");
alert(`Number: ${num}\nResult: ${numToString}`);


// 13 - Write a program to take user input and store the username in a variable. If the username contains any special symbol among [@, ., !], prompt the user to enter a valid username.
/*
For character codes of [@, .]:

ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64
*/
let username = prompt("Enter your username:");
let specialCharacters = ["@", ".", ",", "!"];

let isValid = true;

for (let i = 0; i < username.length; i++) {
  if (specialCharacters.includes(username[i])) {
    isValid = false;
    break;
  }
}

if (isValid) {
  alert(`Username accepted: ${username}`);
} else {
  alert(
    "Please enter a valid username without special characters like @, ., !, ,"
  );
}


// 14 - You have an array A=['cake', 'apple pie', 'cookie', 'chips', 'patties']. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found on the list or not.

/*
Note: Perform case-insensitive search. Whether the user enters cookie, Cookie, COOKIE, or CoOkIe, the program should inform about its availability.

Example:

Input: cookie
cookie is available at index 2 in our bakery

Input: pastry
We are sorry, pastry is not available in our bakery
*/

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userRequirement = prompt(
  "Welcome to ABC Bakery, What do you want to order sir/ma'am?"
);

userRequirement = userRequirement.toLowerCase();
let itemFound = false;

for (let i = 0; i < A.length; i++) {
  if (userRequirement === A[i].toLowerCase()) {
    alert(`${userRequirement} is available at ${i} in our bakery`);
    itemFound = true;
    break;
  }
}

if (!itemFound) {
  alert(`We are sorry, ${userRequirement} is not available in our bakery.`);
}


// 15 - Write a program to take password as an input from user. The password must qualify these requirements:
/*
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must be at least 6 characters long

If the password does not meet the above requirements, prompt the user to enter a valid password.

For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

Entered password: 123cmad
Password can not begin with a number
Please enter a valid password
*/
let password = prompt("Enter your password");
let hasAlphabet = false;
let hasNumber = false;
let isValid2 = true;

// Check if the password starts with a number
if (password[0] >= "0" && password[0] <= "9") {
  alert("Password cannot begin with a number");
  isValid2 = false;
}

// Check if the password length is at least 6 characters
if (password.length < 6) {
  alert("Password must be at least 6 characters long");
  isValid2 = false;
}

// Check if the password contains both alphabets and numbers
for (let i = 0; i < password.length; i++) {
  let char = password[i];

  if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    hasAlphabet = true;
  } else if (char >= "0" && char <= "9") {
    hasNumber = true;
  }
}

// Alert if the password doesn't contain both alphabets and numbers
if (!hasAlphabet || !hasNumber) {
  alert("Password must contain both alphabets and numbers");
  isValid2 = false;
}

// Final message if everything is correct
if (isValid2 && hasAlphabet && hasNumber) {
  alert("Your password is valid");
}


// 16 - Write a program to convert the following string to an array using string split method.
/* var university = "University of Karachi";*/
// Display the elements of array in your browser.

let university = "University of Karachi";
let universityArray = university.split("");

for (let i = 0; i < universityArray.length; i++) {
  document.write(universityArray[i] + "<br>");
}


// 17 - Write a program to display the last character of a user input.
/*
User input: Pakistan
Last character of input: n
*/
let input = "Pakistan";
let lastChar = input.slice(-1);
document.write("<br>" + lastChar);


// 18 - You have a string "The quick brown fox jumps over the lazy dog".Write a program to count number of occurrences of word "the" in given string
/*
Text: The quick brown fox jumps over the lazy dog
There are 2 occurence(s) of word "the"
*/
let text = "The quick brown fox jumps over the lazy dog";
let textToLowerCase = text.toLowerCase();
let words = textToLowerCase.split(" ");
let count = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}

document.write(
  `<br>Text: ${text}\nThere are ${count} occurence(s) of word "the`
);

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////