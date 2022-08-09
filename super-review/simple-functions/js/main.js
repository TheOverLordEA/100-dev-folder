//---Easy
//create a function that subtracts two numbers and alerts the difference
const subMul = (a, b) => {
  console.log(a - b);
};
//create a function that divides three numbers and console logs the quotient

const mulDivi = (a, b, w) => {
  console.log(a / b / w);
};
//create a function that multiplys three numbers and returns the product
const muly = (a, b, w) => {
  return a * b * w;
};
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

const blase = (a, e, t) => {
  const aa = a + e;
  return aa % t;
};
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

const cae = (a, w, q, t) => {
  let ttt = a * w;
  if (ttt > 100) {
    console.log(q + t);
  } else if (ttt < 100) {
    console.log(q - t);
  } else if (ttt === 100) {
    let aa = a * w * q;
    console.log(aa % t);
  }
};
