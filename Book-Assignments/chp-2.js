///////////////////////////////////////////Chapter-2 :- Variables for Strings/////////////////////////////////////////////

// 1 - Declare a variable called "userName"

let userName;


// 2 - Declare a variable called "myName" and assign to it a string that represent your fullname

let myName = "Zain Ul Abedin  ";


/* 3 - Write a script to 
    a.Declare a JS variable called message
    b.Assign "Hello world" to variable "message"
    c.Display the message in alert box*/

let message;
message = "Hello world";
alert(message);


// 4 - Write a script to save student's bio data in JS variable and show the data in alert boxes

let studentBio = {
  name: "Zain Ul Abedin",
  age: 17,
  certificate: "Certified Mobile Application development"
}

alert(studentBio.name);
alert(studentBio.age + " " + "year's old");
alert(studentBio.certificate);


/* 5 - Write a script to display the following alert using one JS variable
    PIZZA
    PIZZ
    PIZ
    PI
    P
*/

let food = "PIZZA\nPIZZ\nPIZ\nPI\nP"

alert(food);


// 6 - Declare a varible called email and assign it to the string that represents your email address.Show the below mentioned message in an alert box.(Hint:Use string concatination)

let email = "zainulabedin2407@gmail.com";

alert("My email address is" + " " + email)


// 7 - Declare a variable called "book" and give it to the value "A Smarter way to learn JavaScript". Display the following message in an alert box

let book = "A Smarter way to learn JavaScript";

alert(book);


// 8 - Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript");


// 9 - Store following string in variable and show in alert and browser through JS

// "---------ஜரமாக---------"

let symbols = "---------ஜரமாக---------";

alert(symbols);
document.write(symbols);

///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////