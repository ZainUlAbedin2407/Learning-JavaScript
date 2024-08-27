// Date :- 18-Aug-2024

// if statement 
// syntax :-
/*if(condition){
    // execution
}*/

// Example :- 
let x = prompt("Where does the Zain Ul Abedin live?")
if( x === "karachi"){
    alert("Correct")
}

// When a condition is met, we execute multiple statements
// For example:-
let studentID = prompt("What is your ID?")
if(studentID === "123"){
    alert("You are the student of this Institute")
    alert("Today is your first day in this Institute")
}

// Comparison operator:-
// ==    --->>> just check the appearance of data
// ===   --->>> it checks the data type too
// For Example :-

let y = prompt("What is your age?")
if(y == 18)(
    alert("You are adult")
); // here if i use (===) operator it shows me error because alert/prompt doesn't have ability to identify the data type. It consider it as a string

// We can check it out by example that it can really give us an error or not
let z = prompt("What is your age?")
if(z === 10)(
    alert("You are child")
); // the alert code cannot be executed because (===) check the type too and prompt consider our age as a string

// We can also compare conditions like this
let studentFirstName = prompt("What is your firstname?")
let studentLastName = prompt("what is your last name?")
fullName = studentFirstName + " " + studentLastName

if(fullName === "Muhammad" + " " + "Azhar"){
    console.log(fullName)
}
if(fullName === studentFirstName + " " + "Azhar"){
    console.log(fullName)
}
if(fullName === "Muhammad" + " " + studentLastName){
    console.log(fullName)
}
if(fullName === studentFirstName + " " + studentLastName){
    console.log(fullName)
}


// !==    --->>> it means not equals to
// For Example :-

let flower1 = "Rose"
let flower2 = "rose"

if(flower1 !== flower2){
    console.log("Flower1 and flower2 are not equal")
}

let personOneAge = 18
let personTwoAge = 17

if(personOneAge !== personTwoAge){
    console.log("PersonOneAge and personTwoAge are not equal")
}


//  >  --->>> is greater than
// For Example :-
let c = 20;
let d = 10;
if (c > d){
    console.log(`${c} is greater than ${d}`)
}

//    <  --->>> is less than
let e = 10;
let f = 20;
if (e < f){
    console.log(`${e} is less than ${f}`)
}

//    >=  --->>>  is greater than or equal to
let adultAge = 27;
if(adultAge >= 18){
    console.log("You are adult")
}

//    <=  --->>>  is less than or equal to 
let childAge = 7;
if(childAge <= 18){
    console.log("You are child")
}


/*
if...else and else if statements 

The if condition execute when the condition will mewt and else code execute when condition will not meet
For Example :-

let studentResult = 200;
if(studentResult >= 150){
    console.log("You are pass")
}else{
    console.log("You are fail")
}           // In this case if condition will be execute

let studentResult = 200;
if(studentResult >= 250){
    console.log("You are pass")
}else{
    console.log("You are fail")
}          // In this case else condition will be execute   
*/