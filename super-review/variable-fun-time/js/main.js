//--- Easy
//create a variable and assign it a number
let value1 = 10;
//minus 10 from that number
value1 -= 10;
//print that number to the console

console.log(value1);
//--- Medium
//create a variable that holds a value from the input
let number = Number(document.querySelector("#danceDanceRevolution").value);
//add 25 to that number
// number + 25;
//alert that number
// alert(number);

//A function to get user input and add 25
const clickInput = document.querySelector(".click");
clickInput.addEventListener("click", () => {
  number += 25;
  alert(number);
});
//--- Hard
//create a variable that holds the h1
const tia = document.querySelector(".tia");
//add an event listener to that element that console logs the sum of the two previous variables
tia.addEventListener("click", () => {
  console.log(number, value1);
});
