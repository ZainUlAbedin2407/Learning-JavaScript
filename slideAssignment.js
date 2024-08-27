// Date :- 17-Aug-2024

// Assignment - 1

// Create "firstName" and "lastName" variables
let firstName;
let lastName;

// Assign values
firstName = "Zain Ul Abedin";
lastName = "M. Saleem";

// Create "address" variable and assign "main street" value to it
let address = "main street";
address = "first street";

// log all values in the console
console.log(firstName);
console.log(lastName);
console.log(address);


// Assignment - 2

// Create "street" and "country" variables
let street;
let country;

// Assign your values
street = "Jodia Bazar, Karachi";
country = "Pakistan";

// Create "fullMailingAddress" variable and assign the result of "street + country" (remember about the space)
fullMailingAddress = street + ", " + country;

console.log(fullMailingAddress);

// Date:-27-Aug-2024
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


// Assignment - 4

// create "fruits" arrays and store some fruit values and setup the last item as random number
let fruits = ["Kiwi" , "Mango", "Banana" , "Apple" , "Watermelon" , 9];

// assign first value to the variable 
let firstFruit = fruits[0];

// assign last array item to the actual fruit
fruits[5] = "Pear";

// log firstFruit variable and entire fruits array
console.log(fruits);
console.log(firstFruit);


// Assignment - 5

// create "calculateTotal" function and add two parameters subTotal , tax and then return sum of parameters
function calculateTotal (subTotal, tax){
    return subTotal + tax
}

// create 3 variables by order1,order2,order3 names and call calculateTotal pass some values and assign to each order
let order1 = calculateTotal(100,10);
let order2 = calculateTotal(300,20);
let order3 = calculateTotal(500,30);

// log each order variable
console.log(order1);
console.log(order2);
console.log(order3);