// Assignment - 7

// Create two objects person1 and person2
// Setup name , age (15-25),
// Status ("resident" , "tourist") keys
// setup if,else condition where age must be bigger than 18 and status must be equal to "resident"
// test with both objects

// Create person1 object
let person1 = {
  name: "Ali",
  age: 20, // Age between 15-25
  status: "resident", // Status is either "resident" or "tourist"
};

// Create person2 object
let person2 = {
  name: "John",
  age: 17, // Age between 15-25
  status: "tourist", // Status is either "resident" or "tourist"
};

// Check person1
if (person1.age > 18 && person1.status === "resident") {
  console.log(person1.name + " is older than 18 and is a resident.");
} else {
  console.log(person1.name + " does not meet the criteria.");
}

// Check person2
if (person2.age > 18 && person2.status === "resident") {
  console.log(person2.name + " is older than 18 and is a resident.");
} else {
  console.log(person2.name + " does not meet the criteria.");
}
