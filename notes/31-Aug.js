// /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*Nested if-else statements*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/

// Nested if-else statements are a way to check multiple conditions within one another. Imagine you have a situation where you need to make a decision based on multiple criteria. In simple terms, it's like asking a question, and if the answer is yes or no, you ask another question inside that response.

// Example:
// Suppose you're deciding what to wear based on the weather and temperature.

let weather = "sunny";
let temperature = 30;

if (weather === "sunny") {
    if (temperature > 25) {
        console.log("Wear sunglasses and a t-shirt.");
    } else {
        console.log("Wear sunglasses and a light jacket.");
    }
} else if (weather === "rainy") {
    if (temperature > 20) {
        console.log("Wear a raincoat and light clothes.");
    } else {
        console.log("Wear a raincoat and warm clothes.");
    }
} else {
    console.log("Check the weather report again.");
}

