// *Variables*
// Create a variable and console log the value
let n1 = 10;

console.log(n1);
// Create a variable, add 10 to it, and alert the value

let n5 = 10 + 10;

console.log(n5);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub5(n1, n5, n10, n15) {
  console.log(n1 - n5 - n10 - n15);
}
// Create a function that divides one number by another and returns the remainder

function one(n1, n5, n100) {
  return (n1 / n5) % n100;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function loop10(n1, n100) {
  const nOverA = n1 + n100;
  if (nOverA > 50) {
    console.log("Mbaaa");
  }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function ente(n1, n10, n100) {
  const nBue = n1 * n10 * n100;

  if (nBue % 3 == 0) {
    console.log("eagle");
  }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function aloo(word, n1) {
  for (let i = 0; i < n1; i++) {
    console.log(word);
  }
}
