//////////////////////////////////////////////Chapter-5 :- Math Expressions///////////////////////////////////////////////

// 1 - Write a program that take two numbers and add them in a new variable.Show the result in your browser.

//For example:Sum of 56 and 16 is 72

let firstNumber = +prompt("Write your first number");
let secondNumber = +prompt("Write your second number");
let sumOfFirstAndSecondnumber = firstNumber + secondNumber;

document.write(`Sum of ${firstNumber} and ${secondNumber} is ${sumOfFirstAndSecondnumber}<br>`)


// 2 - Repeat Task1 for Subtraction, Multiplication, Division and Modulus

// Subtraction
let sub = firstNumber - secondNumber
document.write(`Subtraction of ${firstNumber} and ${secondNumber} is ${sub}<br>`);

// Multiplication
let mul = firstNumber * secondNumber
document.write(`Multiplication of ${firstNumber} and ${secondNumber} is ${mul}<br>`);

// Division
let div = firstNumber / secondNumber
document.write(`Division of ${firstNumber} and ${secondNumber} is ${div}<br>`);

// Modulus
let mod = firstNumber % secondNumber
document.write(`Modulus of ${firstNumber} and ${secondNumber} is ${mod}<br>`);

// 3 - Do the following using JS Mathematic Expressions

// a. Declare a variable.
let value;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write(`Value after variable declaration is ${value}<br>`);

// c. Initialize the variable with some number.
value = 5;

// d. Show the value of variable in your browser like "Initial value: 5".
document.write(`Initial value: ${value}<br>`);

// e. Increment the variable.
value++;

// f. Show the value of variable in your browser like “Value after increment is: 6".
document.write(`Value after increment is: ${value}<br>`);

// g. Add 7 to the variable.
value += 7;

// h. Show the value of variable in your browser like "Value after addition is: 13".
document.write(`Value after addition is: ${value}<br>`);

// i. Decrement the variable.
value--;

// j. Show the value of variable in your browser like "Value after decrement is: 12".
document.write(`Value after decrement is: ${value}<br>`);

// k. Show the remainder after dividing the variable's value by 3.
let remainder = value % 3;

// l. Output: "The remainder is : 0".
document.write(`The remainder is : ${remainder}<br>`);


// 4 - Cost of one movie ticket is 600PKR. Write a script to store ticket price in a variable and calculate the cost of buying 5 tickets to a movie

let ticketPrice = 600;
let quantityOfTickets = 5;
let totalCost = ticketPrice * quantityOfTickets;
document.write(`Total Cost to buy ${quantityOfTickets} tickets to a movie is ${totalCost}<br>`)

// 5 - Write a script to display multiple table of any number in your browser.

/*
For example:
    Table of 4 
    4x1=4
    4x2=8
    4x3=12
    4x4=16
    4x5=20
    4x6=24
    4x7=28
    4x8=32
    4x9=36
    4x10=40
*/

let anyNumberByUser = +prompt("Enter a number to have a table of any number in your browser");

document.write(`Table of ${anyNumberByUser}<br>`);
document.write(`${anyNumberByUser} * 1  = ${anyNumberByUser*1}<br>`);
document.write(`${anyNumberByUser} * 2  = ${anyNumberByUser*2}<br>`);
document.write(`${anyNumberByUser} * 3  = ${anyNumberByUser*3}<br>`);
document.write(`${anyNumberByUser} * 4  = ${anyNumberByUser*4}<br>`);
document.write(`${anyNumberByUser} * 5  = ${anyNumberByUser*5}<br>`);
document.write(`${anyNumberByUser} * 6  = ${anyNumberByUser*6}<br>`);
document.write(`${anyNumberByUser} * 7  = ${anyNumberByUser*7}<br>`);
document.write(`${anyNumberByUser} * 8  = ${anyNumberByUser*8}<br>`);
document.write(`${anyNumberByUser} * 9  = ${anyNumberByUser*9}<br>`);
document.write(`${anyNumberByUser} * 10 = ${anyNumberByUser*10}<br>`);


/* 
    6 - The Temperature Converter: It's hot out! Let's make a converter based on the steps here.
        a. Store a Celsius temperature into a variable.
        b. Convert it to Fahrenheit & output "NNоC is NNоF”.
        c. Now store a Fahrenheit temperature into a variable. 
        d. Convert it to Celsius & output “NNoF is NNоC".

    Conversion Formulae:
        °C = (°F-32) x 5/9
        °F = (°C X9/5)+32

    For example:
        25°C is 77°F
        70°F is 21.11111111111111°C
*/


let temperatureInCelsius = 80;
let temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
document.write(`${temperatureInCelsius}oC is ${temperatureInFahrenheit}oF<br>`);

let temperatureInFahrenheit2 = 70;
let temperatureInCelsius2 =  (temperatureInFahrenheit2 - 32) * 5/9;
document.write(`${temperatureInFahrenheit2}oF is ${temperatureInCelsius2}oC<br><br><br>`);


/*
7 - Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    a. Price of item 1
    b. Price of item 2
    c. Ordered quantity of item 1
    d. Ordered Quantity of item 2
    e. Shipping charges
Compute the total cost & show the receipt in your browser.
*/

let priceOfItem1 = 700;
let priceOfItem2 = 1000;
let orderedQuantityOfItem1 = 3;
let orderedQuantityOfItem2 = 2;
let shippingCharges = 100;
let totalCostOfAllitems = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2 + shippingCharges)

document.write(`<h1>Shopping Cart</h1>`);
document.write(`Price of item 1 is ${priceOfItem1}<br>`);
document.write(`Quantity of item 1 is ${orderedQuantityOfItem1}<br>`);
document.write(`Price of item 2 is ${priceOfItem2}<br>`);
document.write(`Quantity of item 2 is ${orderedQuantityOfItem2}<br>`);
document.write(`Shipping Charges ${shippingCharges}<br><br>`);
document.write(`Total cost of your order is ${totalCostOfAllitems}<br>`)


// 8 - Store total marks & marks obtained by a student in 2 variables. Compute the percentage and show the result in your browser.

let totalMarks = 1100;
let obtainedMarks = 950;
let percentageOfStudent = (obtainedMarks/totalMarks) * 100

document.write(`<h1>Marks Sheet</h1>`);
document.write(`Total marks: ${totalMarks}<br>`);
document.write(`Marks obtained: ${obtainedMarks}<br>`);
document.write(`Percentage: ${percentageOfStudent}<br>`);


/* 9 - 
    Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
    Perform all calculations in a single expression.
    (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
*/

let totalCurrency = (10*104.80) + (25*28)
document.write(`<h1>Currency in PKR</h1><br>`);
document.write(`Total Currency in PKR: ${totalCurrency}`);


//10 - Write a program to initialize a variable with some number and do arithmetic in following sequence:
/*    
    a. Add 5
    b. Multiply by 10
    c. Divide the result by 2
    Perform all calculations in a single expression
*/

let anyNumber = 10;
document.write(`Result: ${(anyNumber+5)*10/2}`);


// 11 - The Age Calculator: Forgot how old someone is? Calculate it!
/*
    a. Store the current year in a variable.         
    b. Store their birth year in a variable.
    c. Calculate their 2 possible ages based on the stored values.
    Output them to the screen like so: “They  are either NN or NN years old".
*/

let currentYear = 2024;
let birthYear = 2007;
let age1 = currentYear - birthYear;
let age2 = currentYear - (birthYear+1);

document.write(`They  are either ${age1} or ${age2} years old`);


// 12 - The Geometrizer: Calculate properties of a circle.
/*
    a. Store a radius into a variable.
    b. Calculate the circumference based on the radius, and output "The circumference is NN".
    (Hint: Circumference of a circle = 2 π г, π = 3.142)
    Calculate the area based on the radius, and output “The area is NN". (Hint: Area of a circle =  πг2,π=3.142)
*/

document.write("<br><h2>The Geometrizer</h2>");

let radius=20;
let π =3.142;
let circumference=2*π*radius;
let area=π * radius**2;
document.write("<br>Radius of circle:"+radius);
document.write(`<br>Circumference of circle is ${circumference}`);
document.write(`<br>Area of circle is ${area}`);


// 13 - The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply" of your favorite snack is? Wonder no more.
/*    
    a. Store your favorite snack into a variable
    b. Store your current age into a variable.
    c. Store a maximum age into a variable.
    d. Store an estimated amount per day (as a number).
    e. Calculate how many would you eat total for the rest of your life.
    Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN".
*/

document.write("<br><h2>The Lifetime Supply Calculator</h2>");

let favoriteSnack="Chocolate bars";
let currentAge=18;
let maximumAge=120;
let estimatedAmountPerDay=5;
let totalAmount=estimatedAmountPerDay * (maximumAge-currentAge);
document.write(`<br>Favorite snack:${favoriteSnack}`)
document.write(`<br>Current age:${currentAge}`);
document.write(`<br>Maximum age:${maximumAge}`);
document.write(`<br>You will need ${totalAmount} ${favoriteSnack} to last you until the ripe old age of ${maximumAge}`);

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////