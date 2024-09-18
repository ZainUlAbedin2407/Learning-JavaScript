//////////////////////////////////Chapter # 9-11 :- User Input & Conditional Statement////////////////////////////////////

// 1 - Write a program to take "city" name as input from user. If user enters "Karachi”, welcome the user like this: "Welcome to city of lights"

let cityName = prompt("In which city do you live");

if (cityName === "karachi"){
    console.log("Welcome to city of lights");
}


// 2 - Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma'am.

let gender = prompt("What is your gender? (gender must be male/female and in lowercase)");

if (gender === "male"){
    console.log("Good Morning Sir");
} else if (gender === "female"){
    console.log("Good Morning Ma'am");
} else {
    console.log("Invalid gender");
}


// 3 - Write a program to take input color of road traffic signal from the user & show the message according to this table:
/*
    Signal color     Message 
    Red              Must Stop
    Yellow           Ready to move
    Green            Move now
*/

let trafficSignalColor = prompt("Enter the color of road traffic signal (red,green.yellow)");

if (trafficSignalColor === "red"){
    console.log("Must Stop");
} else if (trafficSignalColor === "yellow") {
    console.log("Ready to move");
} else if (trafficSignalColor === "green") {
    console.log( "Move now");
} else {
    console.log("Invalid color");
}


// 4 - Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message "Please refill the fuel in your car".

let remainingFuel = +prompt("How much fuel availabe in your car? (in litres)")

if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car.");
} else {
    console.log("Enjoy Your Journey");
}


// 5 - Run this script, & check whether alert message would be displayed or not. Record the outputs.
/*
    a. var a=4;
    if (++a ===5){
    alert("given condition for variable a is true");
    }

    b. var b = 82;
    if (b++===83){
    alert("given condition for variable b is true");
    }

    c. var c = 12;
    if (c++ === 13){
    alert("condition 1 is true");
    }
    if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
    alert("condition 3 is true");
    }
    if(c === 14){
    alert("condition 4 is true");
        
    d. var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost){ alert("The cost equals");
    }

    e. if (true){ alert("True");
    }
    if (false) { alert("False");
    }

    f. if("car"<"cat"){
    alert("car is smaller than cat");
    }
*/ 

// Part a
let a = 4;
if (++a ===5){
    alert("given condition for variable a is true");
}   // alert message displayed

// Part b
let b = 82;
if (b++===83){
    alert("given condition for variable b is true");
}   // alert message not displayed

// Part c
let c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}   // alert message not displayed

if (c === 13){
    alert("condition 2 is true");
}   // alert message displayed 

if (++c < 14){
    alert("condition 3 is true");
}   // alert message not displayed


if(c === 14){
    alert("condition 4 is true");
}   // alert message displayed

// Part d
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}   // alert message displayed

// Part e
if (true){
    alert("True");
}   // alert message displayed

if (false) { 
    alert("False");
}   // alert message not displayed

// Part f
if("car"<"cat"){
    alert("car is smaller than cat");
}  // alert message displayed


// 6 - Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
// Percentage %                       Grade               Remarks
// Greater than or equal to 80        A-one               Excellent
// Greater than or equal to 70        A                   Good
// Greater than or equal to 60        B                   You need to improve
//          Less than 60              Fail                Sorry

let subject1Marks = +prompt("How much marks you obtained in Subject1");
let subject2Marks = +prompt("How much marks you obtained in Subject2");
let subject3Marks = +prompt("How much marks you obtained in Subject3");

let totalMarks = 300;
let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
let percentage = (totalObtainedMarks / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write(`Total marks : ${totalMarks}<br> `);
document.write(`Marks Obtained : ${totalObtainedMarks}<br> `);
document.write(`Percentage : ${percentage.toFixed(2)}%<br> `);
document.write(`Grade : ${grade}<br> `);
document.write(`Remarks : ${remarks}<br> `);