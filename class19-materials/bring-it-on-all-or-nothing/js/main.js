// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const base = false;

// Declare a variable, reassign it to your favorite color, and console log the value
let hue = "blakc";

hue = "blue";

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function rocket(n1, n2, n3, n5) {
  return (n1 + n2 + n3) / n5;
}
// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function jupitor(n1, n10) {
  console.log(n1 * n10);
}

jupitor(10, 100);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function water(box, box10) {
  if (box) {
    console.log(box10);
  } else {
    console.log("yeete");
  }
}
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fire(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("bizz buuue");
    } else if (i % 3 === 0) {
      console.log("bizz");
    } else if (i % 5 === 0) {
      console.log("buuue");
    } else {
      console.log(i);
    }
  }
}

fire(100);
