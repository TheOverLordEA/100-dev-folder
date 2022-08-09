// *Variables*
// Create a variable and console log the value

const value = 100;

console.log(value);

// Create a variable, add 10 to it, and alert the value

const valueOne = 100;
valueOne + 10;

alert(valueOne);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function minus(one, three, five, ten) {
  alert(one - three - five - ten);
}

minus(10, 100, 1000, 10000);

// Create a function that divides one number by another and returns the remainder
function getAll(a, w) {
  const divide = (a / w) % 1;
  return divide;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add(a, q) {
  const total = a + q;

  if (total > 50) {
    alert("Jumanji");
  }
}
add(100, 10);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loop(string, notWord) {
  for (let i = 0; i < notWord; i++) {
    console.log(string);
  }
}

console.log(loop("Accomplish", 10));
