//---Easy
//create a function that subtracts two numbers and alerts the difference
function minut(one, five) {
  let oberAl = one - five;
  return oberAl;
}

console.log(minut(1, 10, 100));
//create a function that divides three numbers and console logs the quotient
function divide(one, five, net) {
  let be = one / five / net;
  return be;
}

console.log(divide(1, 18, 100));
//create a function that multiplys three numbers and returns the product

function a(a, e, m) {
  let great = a * e * m;
  return great;
}

console.log(a(1, 10, 100));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function greatA(a, e, m) {
  let aa = a + e;
  let lifea = aa % m == 2;
  return lifea;
}

console.log(1, 10, 100);
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function getBest(a, e, w, m) {
  let aa = a * e;
  if (aa > 100) {
    let create = w + m;
    console.log(aa + create);
  } else if (aa < 100) {
    let night = w - m;
    console.log(aa - night);
  }
}

console.log(getBest(10, 100, 1000, 10000));
