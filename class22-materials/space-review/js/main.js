//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

const lakee = [1, 10, 100, 1000, 10000].reduce((sum, a) => sum + a, 0);

// console.log(lakee);
//Create a function that takes in an array of numbers

function plane(array) {
  return array.map((e) => e * e);
}

//Return a new array of numbers that is every original number squared

//Create a function that takes string
function tacoe(str) {
  console.log(str.split("").reverse());
}
//Print the reverse of that string to the console

//Create a function that takes in a string
function gimme(stq) {
  const stringReverse = stq.split("").reverse().join("");
  console.log(stringReverse);
  return stq === stringReverse ? true : "drop";
}

// console.log(gimme("aa"));
//Alert if the string is a palindrome or not
