// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let fav;

fav = "salad";
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let ship = "blast";

ship = "travel";
console.log(ship[1]);
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function ste(a, b, w) {
  console.log((a / b) * w);
}

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function burger(a) {
  console.log(Math.pow(a));
}
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthe(a) {
  monthe === "summer" ? console.log("YA") : console.log("loe");
}
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function move(a) {
  for (let i = 1; i < a; i++) {
    if (i % 5 !== 0) console.log(i);
  }
}
