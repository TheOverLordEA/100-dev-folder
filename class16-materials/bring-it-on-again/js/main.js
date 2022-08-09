// *Variables*
// Declare a variable, assign it a value, and alert the value
const bat = 100;
// Create a variable, divide it by 10, and console log the value
const lion = 1000 / 10;

console.log(lion);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multThree(a, w, val) {
  console.log(a * w * val);
}

multThree(10, 100, 11);
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function tokyo(shi, chi, eli, mli) {
  const total = shi + chi;

  const superCat = eli - mli;

  console.log(total, superCat);
}

tokyo(10, 1000, 100, 1);
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function paris(val1, val2, val3) {
  let add100 = 100;

  add100 + val1;
  add100 - val2;
  add100 / val3;

  if (add100 > 25) {
    console.log("awesome");
  }
}
paris(100000, 1000, 100);
// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function findDay(day) {
  const sanitize = day.toLowerCase();
  if (
    sanitize === "monday" ||
    sanitize === "tuesday" ||
    sanitize === "wendesday" ||
    sanitize === "thrusday" ||
    sanitize == "friday"
  ) {
    console.log("money");
  } else if (sanitize === "saturday" || sanitize === "sunday") {
    console.log("movei");
  } else console.log("hawaii");
}

findDay("MONDAY");
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function la(tor) {
  for (let i = 0; i < tor; i++) {
    console.log(i);
  }
}

la(10);
