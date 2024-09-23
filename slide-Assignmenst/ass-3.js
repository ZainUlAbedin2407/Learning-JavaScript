// Assignment - 3

// Part-1
// create score1, score2 , score3 variables and assign values (0-100) 
let score1 = 89;
let score2 = 58;
let score3 = 76;

// calculate totalScore and averageScore and assign them to the variables
let totalScore = score1 + score2 + score3;
let averageScore = totalScore / 3;

// log totalScore and averageScore
console.log(`Total-Score = ${totalScore}`);
console.log(`Average-Score = ${averageScore}`);


// Part-2
// create "plates" variable and assign 20
let plates = 20;

// create "people" variabole and asign 7 
let people = 7;

// calculate remaining plates and assign to the variable
let remainingPlates = plates % people;
remainingPlates++;

// create message variable and display 
let message = `There are ${remainingPlates} plates available`

// log message
console.log(message);