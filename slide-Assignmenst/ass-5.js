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