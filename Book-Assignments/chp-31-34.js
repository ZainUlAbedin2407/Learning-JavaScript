/* /////////////////////////////////////////////Chapter-31-34 :- Date Methods////////////////////////////////////////////////

// 1 - Write a program that displays current date and time in your browser.

let currentDateAndTime = new Date();
document.write(currentDateAndTime);

// 2 - Write a program that alerts the current month in words.
// For example - Current month: December

let currentMonthIndex = new Date().getMonth();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
alert("Current month: " + months[currentMonthIndex]);

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

let currentDayIndex = new Date().getDay();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert("Today is " + days[currentDayIndex]);

// 4 - Write a program that displays a message "It's Fun day" if its saturday or sunday today.

if (days[currentDayIndex]  === "Sat"|| days[currentDayIndex] === "Sun") {
  console.log("It's Fun day");
} else {
  console.log("It's working day");
}

// 5 - Write a program that shows the message "First fifteen days of the month" if the date is less than 16th of the month else shows "Last days of the month"

let currentDateIndex = new Date().getDate();

if (currentDateIndex < 16) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}

// 6 - Write a program that determines the minute since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the date.


// 7 - Write a program that tests whether it's before noon and alert "It's AM" else "It's PM".

let currentHour = new Date().getHours();
if (currentHour < 12) {
  console.log("It's AM");
} else {
  console.log("It's PM");
}

// 8 - write a program that creates a Date object for the last day of the last month of 2023 and assigns it to variable named laterDate.

let laterDate = new Date(2023,11,31);
console.log(`Later Date: ${laterDate}`);

// 9 - Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on 12th-March-2024

let startingDate = new Date(2024, 2, 12);
let currentDate = new Date();

let passedDays = (currentDate - startingDate);
let convertIntoDays = Math.floor(passedDays / (24 * 60 * 60 * 1000));

console.log(`${convertIntoDays} days have passed since 1st Ramadan, 2024`);


// 10 - Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2025

let referencedDate = new Date(2024,11,18);
let beginningof2025 = new Date(2025,0,1);

let timeDifference = beginningof2025 - referencedDate;
let remainingTime = timeDifference / 1000;
console.log(remainingTime);

// 11 - Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

let currentDateTime = new Date();
let currentHours = currentDateTime.getHours();
console.log(`current date: ${currentDateTime}`);

currentDateTime.setHours(currentHours + 1);
console.log(`1 hour ago, it will ${currentDateTime}`);

// 12 - Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

let currentDateTime = new Date();
let currentYear = currentDateTime.getFullYear();
console.log(`current date: ${currentDateTime}`);

currentDateTime.setFullYear(currentYear - 100);
console.log(`100 years back, it was ${currentDateTime}`);
*/

// 13 - Write a program to ask the user about his age. Calculate and show his birth year in your browser.

let userAge = +prompt("What is your Age?")

let birthYear = userAge