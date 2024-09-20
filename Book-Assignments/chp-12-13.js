/////////////////////////Chapter-12-13 :- IF..ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS//////////////////////////

// 1 - Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

let character = prompt("Enter a character:");

// 1st Method
if (!isNaN(character)) {
  alert(`${character} is a number.`);
} else if (character >= "A" && character <= "Z") {
  alert(`${character} is an uppercase letter.`);
} else if (character >= "a" && character <= "z") {
  alert(`${character} is an lowercase letter.`);
}

// 2nd Method

if (character.length > 1) {
  alert("Please enter a single character");
} else {
  let asciiCode = character.charCodeAt(0);

  if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The input is a number.");
  } else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The input is an uppercase letter.");
  } else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The input is a lowercase letter.");
  } else {
    alert("The input is not a number or a letter.");
  }
}


// 2 - Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

let firstInteger = +prompt("Enter 1st Integer");
let secondInteger = +prompt("Enter 2nd Integer");

if (firstInteger > secondInteger) {
  alert(`${firstInteger} is greater than ${secondInteger}`);
} else if (secondInteger > firstInteger) {
  alert(`${secondInteger} is greater than ${firstInteger}`);
} else {
  alert(`${firstInteger} and ${secondInteger} are equal`);
}


// 3 - Write a program that takes input a number from user & state whether the number is positive, negative or zero.

let inputNumber = +prompt("Enter any Number");

if (inputNumber > 0) {
  alert(`${inputNumber} is positive number`);
} else if (inputNumber < 0) {
  alert(`${inputNumber} is negative number`);
} else {
  alert(`${inputNumber} is not positive nor negative. It is zero or neutral`);
}


// 4 - Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

let inputCharacter = prompt("Enter any single alphabet");

if (
  inputCharacter.toLowerCase() === "a" ||
  inputCharacter.toLowerCase() === "e" ||
  inputCharacter.toLowerCase() === "i" ||
  inputCharacter.toLowerCase() === "o" ||
  inputCharacter.toLowerCase() === "u"
) {
  alert("true");
} else if (inputCharacter.length > 1) {
  alert("Only 1 character is allowed");
} else {
  alert("false");
}


// 5 - Write a program that
/*
    a. Store correct password in a JS variable.
    b. Asks user to enter his/her password
    c. Validate the two passwords:
    Check if user has entered password. If not, then give message " Please enter your password" Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password". Show "Incorrect password" otherwise.
*/

let correctPassword = 123456;
let userInputPassword = prompt(
  "Please enter a password (Password must be in numbers)"
);

if (!userInputPassword) {
  alert("Please enter your password");
} else if (isNaN(userInputPassword)) {
  alert("Password only contains digits");
} else if (correctPassword === +userInputPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}


// 6 - This if/else statement does not work. Try to fix it:
/*
    var greeting;
    var hour = 13;
    if (hour < 18) {
        greeting = "Good day"; else
        greeting = "Good evening";
    }

 */

let greeting;
let hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// 7 - Write a program that takes time as input from user in 24 hours clock format like: 19:00 = 7pm. Implement the following case using if, else & else if statements

/*
time 19:00
time > 00:00 && time < 12:00  =>  true => "Good morning!"
                false
time >= 12:00 && time < 17:00  =>  true => "Good afternoon!"
                false
time = 17:00  =>  true => "Good evening
time < 2100
false
time>21:00 && time <= 23:59  =>  true => "Good night!"
*/

let inputTime = +prompt("Enter time in 24-hour format (e.g., 1900 for 7pm)");

if (inputTime >= 0 && inputTime < 1200) {
  alert("Good morning!");
} else if (inputTime >= 1200 && inputTime < 1700) {
  alert("Good afternoon!");
} else if (inputTime === 1700) {
  alert("Good evening!");
} else if (inputTime > 1700 && inputTime < 2100) {
  alert("Good evening!");
} else if (inputTime >= 2100 && inputTime <= 2359) {
  alert("Good night!");
} else {
  alert("Invalid time format. Please enter time in 24-hour format.");
}

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////
