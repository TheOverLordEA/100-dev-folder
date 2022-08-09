//Arrays
let arra = [];
//Create and array of tv shows. Loop through and print each show to the console
arra = ["archer", "shee", "bear"];
for (let a of arra) {
  //   console.log(a);
}

//Create and array of numbers
const arraa = [1, 100, 10000, 11, 1000000];
//Return a new array of numbers that includes every even number from the previous Arrays
for (let e of arraa) {
  if (e % 2 === 0) {
    // console.log(e);
  }
}

//Create a function that takes in an array of numbers
function morty(arra) {
  const newArr = arra.sort((a, b) => a - b);
  console.log(newArr[1], newArr[newArr.length - 2]);
}

// console.log(morty([10, 1, 88, 100, 10001]));
//Alert the sum of the second lowest and the second highest number
