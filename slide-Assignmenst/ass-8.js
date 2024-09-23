// Assignment - 8

// create function fullName
// accept two parameters "firstName", "lastName"
// add them together (concat) and return result in uppercase
// invoke fullName and pass some values 
// log result
// change the order of arguments


function fullName (firstName, lastName) {
    let result = firstName + " " + lastName;
    return result.toUpperCase();
}

// Invoke the function with some values
let result1 = fullName("John", "Doe");
console.log(result1);  // Output: JOHN DOE

// Change the order of arguments
let result2 = fullName("Doe", "John");
console.log(result2);  // Output: DOE JOHN