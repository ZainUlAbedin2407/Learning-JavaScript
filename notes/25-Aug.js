// /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*Non-Primitive Data Types*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

// 1_Arrays
// It is used to store a multiple values in a single variable
const students = ["Zain", "Ahmed", "Kabeer", "Usman"];
// It also contain multiple data type values in single variable 
const list = ["Potato", "Tomato" , 78 , 90 , true , false , undefined , null]

// 2_Function
// function is a machine which performs execution in a single call. It doesn't require a set of information in every time. we just need to dtore our execution in one time
// For Example :- if i want to order someone to made a coffee for me and he don't know about the recipe of it. I should tell him/her to every time when i want but in function i just store my execution in one time and when i want i just call or inoke it

// Declaration
function makingTea (){
    console.log("Boil a water");
    console.log("Add some sugar");
    console.log("Add some raw tea");
    console.log("After a boil add some milk");
    console.log("Cook it for few minutes");
    console.log("Serve it");
}

// Invokation/Call
makingTea();

// Now the question is about the work of paranthesis
// Don't worry it is use to add parameters during declaration and add arguments during invokation
// we dont declare just parameters or only arguments
// Parameters is just like a variable name and argument is just like a value 

// For example:-
function greet (name){
    console.log(`Hello ${name}`);
}
greet("Zain Ul Abedin");   //Its up to me what i want to put in arguments 

// we also declare multiple parameters and arguments
function fullName (myName,fatherName){
    console.log(`My full-Name is ${myName} ${fatherName}`);
}
fullName("ZainUlAbedin","Saleem") 

// Return
// it ignores all the below lines 
// it takes place of the invokation 

// For Example:-
function calculate (value){
    return value * 5;
    console.log(myName);
    console.log(fatherName);
    // it ignores all the below values
} 
calculate(200);  // by using return keyword calculate(200) means console.log(1000)

// function expression 
// we also declare function in any variable 

const addition = function (num1,num2){
    return num1 + num2;
}
const answer = addition(78,80);
console.log(answer);