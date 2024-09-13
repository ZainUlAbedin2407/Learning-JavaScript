///////////////////////////////////////////Chapter-4 :- Variables names:Legal & Illegal///////////////////////////////////

// 1 - Declare 3 variables in one statement

let name = "Zain", rollno = 261991 , isPass = true;


// 2 - Declare 5 legal and 5 illegal variable names

// Legal variableNames
let myName = "Zain";
let myAge = 17;
let isStudent = true;
let result = undefined; 
let marks = null;

// Illegal variableNames

/*
    let 1name = "Zain";
    let function = "My Function";
    let @email = "xyz@gmail.com";
    let !abc=abc;
    let 3a="34"
*/


// 3 -  Declare this in your browser

/*
    a)A heading stating "Rules for naming JS Variables"
    b)Variable names can only contain letters, numbers,underscores and $ signs.For example:$my1stVariable
    c)Variables must begin with a letter,underscores or $ sign.For example: $my1stVariable _my1stVariable my1stVariable
    d)Variable names are case-sensitive
    e)Variable names should not be JS keywords
*/

document.write("<h2>Rules for naming JS Variables</h2>");
document.write("<p>Variable names can only contain letters, numbers,underscores and $ signs.For example: $my1stVariable</p>");
document.write("<p>Variables must begin with a letter,underscores or $ sign.For example: _my1stVariable my1stVariable my1stVariable</p>");
document.write("<p>Variable names are case-sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");
 
///////////////////////////////////////////////////////END////////////////////////////////////////////////////////////////