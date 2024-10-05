///////////////////////////////////////////////Chapter-14-16 :- Arrays//////////////////////////////////////////////////

// 1 - Declare an empty array using JS literal notation to store student names in future.

let students = [];


// 2 - Declare an empty array using JS object notation to store student names in future.

let students2 = {};


// 3 - Declare and initialize a strings array.

let stringArray = ["Zain" , "Ahmed" , "Kabeer"];


// 4 - Declare and initialize a numbers array.
 
let numbersArray = [1, 2, 3, 4, 5];


// 5 - Declare and initialize a booleans array.

let booleansArray = [true, false, true, false];


// 6 - Declare and initialize a mixed array.

let mixedArray = ["Zain", 1, true, false, "Ahmed"];


// 7 - Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser:

let availableEducationInPakistan = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications</h2>");
document.write("<br>", "1) ",availableEducationInPakistan[0]);
document.write("<br>", "2) ",availableEducationInPakistan[1]);
document.write("<br>", "3) ",availableEducationInPakistan[2]);
document.write("<br>", "4) ",availableEducationInPakistan[3]);
document.write("<br>", "5) ",availableEducationInPakistan[4]);
document.write("<br>", "6) ",availableEducationInPakistan[5]);
document.write("<br>", "7) ",availableEducationInPakistan[6]);
document.write("<br>", "8) ",availableEducationInPakistan[7]);


// 8 - Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
// // Score of Michael is 320. Percentage: 64%
// // Score of John is 230. Percentage: 46%
// // Score of Tony is 480. Percentage: 96%

let studentsName = ["Michael", "John", "Tony"];
let studentsScore = [320, 230, 480];
let totalMarks = 500;

document.write(`<br><br>Score of ${studentsName[0]} is ${studentsScore[0]}. Percentage: ${(studentsScore[0]/totalMarks)*100}%`)
document.write(`<br>Score of ${studentsName[1]} is ${studentsScore[1]}. Percentage: ${(studentsScore[1]/totalMarks)*100}%`)
document.write(`<br>Score of ${studentsName[2]} is ${studentsScore[2]}. Percentage: ${(studentsScore[2]/totalMarks)*100}%`)


// 9 - Initialize an array with color names. Display the array elements in your browser.
/*
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
c. Add two more color to the beginning of the array. Display the updated array in your browser.
d. Delete the first color in the array. Display the updated array in your browser.
e. Delete the last color in the array. Display the updated array in your browser.
f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index.. Display the updated array in your browser.
*/

let colors = ["Red", "Green", "Blue", "Yellow", "Black", "White"];
document.write("<h2>Colors</h2>");
document.write(colors);

// a. Ask the user what color he/she wants to add to the beginning & add that color
let colorToAddBeginning = prompt("Enter a color to add at the beginning");
colors.unshift(colorToAddBeginning);
document.write("<br>", colors);

// b. Ask the user what color he/she wants to add to the end & add that color
let colorToAddEnd = prompt("Enter a color to add at the end");
colors.push(colorToAddEnd);
document.write("<br>", colors);

// c. Add two more color to the beginning of the array
colors.unshift("Purple", "Orange");
document.write("<br>", colors);

// d. Delete the first color in the array
colors.shift();
document.write("<br>", colors);

// e. Delete the last color in the array
colors.pop();
document.write("<br>", colors);

// f. Ask the user at which index he/she wants to add a color & color name.
let indexToAdd = +prompt("Enter the index to add a color");
let colorToAdd = prompt("Enter the color name");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("<br>", colors);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
let indexToDelete = +prompt("Enter the index to delete a color");
let numToDelete = +prompt("Enter the number of colors to delete");
colors.splice(indexToDelete, numToDelete);
document.write("<br>", colors);


// 10 - Write a program to store student scores in an array & sort the array in ascending order using Array's sort method.
/*
Scores of Students: 320,230,480,120
Ordered Scores of Students: 120,230,320,480
*/

let scores = [320, 230, 480, 120];
document.write(`<br>Scores of Students: ${scores}`)
scores.sort((a, b) => a - b);
document.write(`<br>Ordered Scores of Students: ${scores}`);


// 11 - Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

let cities = ["Karachi", "Multan", "Islamabad", "Rawalpindi", "Lahore", "Kashmir"];
let selectedCities = cities.slice(0, 3);
document.write(`<h3>Cities list:</h3>`);
document.write(cities);
document.write(`<h3>Selected Cities list:</h3>`);


// 12 - Write a program to create a single string from the below mentioned array:
/*
var arr=["This","is","a","cat"];
(User array's join method)
*/
let arr = ["This", "is", "a", "cat"];
document.write(arr.join(" "));


// 13 - Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored(FIFO-First In First Out).

let fifoArray = [];

// Adding values one by one using push (FIFO behavior)
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

document.write("<h4>Devices:</h4>");
document.write(fifoArray,"<br>");

document.write("<h4>Out:</h4>");
document.write(fifoArray.shift());
document.write("<h4>Out:</h4>");
document.write(fifoArray.shift());
document.write("<h4>Out:</h4>");
document.write(fifoArray.shift());
document.write("<h4>Out:</h4>");
document.write(fifoArray.shift());


// 14 - Write a program to create a new array.Store values one by one in such a way that you can access the values in the reverse order of their original order.(LIFO-Last In First Out)

let lifoArray = [];

// Adding values one by one using push (LIFO behavior)
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");

document.write("<h4>Devices:</h4>");
document.write(lifoArray);

document.write("<h4>Out:</h4>");
document.write(lifoArray.pop());
document.write("<h4>Out:</h4>");
document.write(lifoArray.pop());
document.write("<h4>Out:</h4>");
document.write(lifoArray.pop());
document.write("<h4>Out:</h4>");
document.write(lifoArray.pop());


// 15 - Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write(`
    <br><select>
        <option>${manufacturers[0]}</option>
        <option>${manufacturers[1]}</option>
        <option>${manufacturers[2]}</option>
        <option>${manufacturers[3]}</option>
        <option>${manufacturers[4]}</option>
        <option>${manufacturers[5]}</option>
    </select>
`);


///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////