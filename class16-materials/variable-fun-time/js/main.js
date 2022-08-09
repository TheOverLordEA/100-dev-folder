//--- Easy
//create a variable and assign it a number
let money = 100;

//minus 10 from that number
money -= 10;
//print that number to the console
console.log(money);
//--- Medium
//create a variable that holds a value from the input

//add 25 to that number

//alert that number

//--- Hard
//create a variable that holds the h1
const ELEMENT = document.querySelector("h1");

ELEMENT.addEventListener("click", () => {
  let USER_INPUT = document.querySelector("#danceDanceRevolution").value;
  let a = Number(USER_INPUT) + 25;

  console.log(money + a);
});
//add an event listener to that element that console logs the sum of the two previous variables
