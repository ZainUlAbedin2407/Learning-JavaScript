// Assignment - 6

// Create car object
// add make, model, year, colors (array), hybrid (boolean) keys
// add two methods (drive and stop)
// in the function body setup log with random text
// log make
// log first color
// invoke both methods

// Create car object
let car = {
  make: "Toyota", // Car manufacturer
  model: "Camry", // Car model
  year: 2023, // Manufacturing year
  colors: ["Red", "Black", "White"], // Array of available colors
  hybrid: true, // Boolean value indicating if it's a hybrid car or not

  // Method to simulate driving
  drive: function () {
    console.log("The car is now driving smoothly!"); // Random text
  },

  // Method to simulate stopping
  stop: function () {
    console.log("The car has stopped."); // Random text
  },
};

// Log the car make
console.log("Car make:", car.make);

// Log the first color in the colors array
console.log("First color:", car.colors[0]);

// Invoke the drive method
car.drive();

// Invoke the stop method
car.stop();
