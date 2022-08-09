// *Variables*
// Create a variable and console log the value
const a = 10;

console.log(a);

// Create a variable, add 10 to it, and alert the value
const e = 10 + 10;

console.log(e);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function minusFour(a, b, w, q) {
  const overall = a - b - w - q;
  return overall;
}
console.log(minusFour(10, 18, 10, 18));

// Create a function that divides one number by another and returns the remainder

function total(a, t) {
  let divide = (a / t) % 2;

  return divide;
}
console.log(total(10, 18));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function checkNumbers(a, e) {
  let total = a + e;
  return total < 50 ? "a" : "eee";
}
console.log(checkNumbers(1, 8));

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function best(a, w, t) {
  const total = a + w + t;
  return total % 3 == 1 ? "super" : "crap";
}

console.log(best(19, 10, 10));
