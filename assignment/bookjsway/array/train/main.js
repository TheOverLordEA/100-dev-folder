//Create an array to store three strings
const muskateers = ["Athos", "Porthos", "Aramis"];

// for (let i = 0; i <= muskateers.length; i++) {
//   console.log(muskateers[i]);
// }

muskateers.push("D'Artagnan");

// muskateers.forEach((e) => {
//   console.log(e);
// });

muskateers.splice(0, 1);

// for (const muskateer of muskateers) {
//   console.log(muskateer);
// }

//Create program that finds sum of all the elements in the array
// const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

const re = (a, cur) => a + cur;

// console.log(values.reduce(re));

// console.log(sum);

//A
//A find the maxium number

const values = [3, 11, 7, 2, 9, 10];
//A sort array from min to max
//Then take the last index element drop it in a let
values.sort((a, b) => {
  return a - b;
});

// console.log(values.slice(-1));

//A program that asks for a word
//A array to hold the user input

//A function that runs everytime to check the array with

let word = [];

// document.querySelector(".button").addEventListener("click", makeSure);

function makeSure() {
  // const client = document.querySelector(".input").value.toLowerCase();

  // let party = document.querySelector(".showCorrect");

  String(client);

  if (client === "stop") {
    party.textContent = "Yeah";
  } else {
    word.push(client);
    party.textContent = "fail";
    console.log(word);
  }

  // document.querySelector(".input").value = " ";
}

// const runA = [1, 1, 3, 4, 5];

// const aa = runA.indexOf(5)

// runA.splice(3, aa);

// console.log(runA);

const laker = ["levron", "jordan", "bird", "allen", "nelon"].forEach(
  (el, index, array) => {
    // console.log(`${el} ${index} ${array}`);
  }
);

//A turn string into array and camelLize

//A test string
const stringExample = "background-color";
//Turn to array
let firstArray = stringExample.split("");
// console.log(firstArray);
//Find the index of '-
let newWord = firstArray.findIndex((el) => el === "-") - 1;

//Find the index of the next letter
const indexOfLastWord = (newWord += 1);

// console.log(indexOfLastWord);

//Use loop to replace all -
// console.log(firstArray.splice(newWord, 1));
// console.log(firstArray);
//Capitalize all letter after -
const sub = firstArray[indexOfLastWord].toUpperCase();

firstArray.splice(indexOfLastWord, 1, sub);

// console.log(firstArray.join(""));

//Make array into string after
function makeCamelCase(a) {
  //Make string to array
  return a
    .split("-")
    .map((e, i) => (i === 0 ? e : e[0].toUpperCase() + e.slice(1)))
    .join("");
}

// console.log(makeCamelCase("background-color"));

function findstring(arr, a, b) {
  arr = [5, 3, 8, 1];
  const highArray = arr.map((e) => e > a);
  console.log(highArray);
  const lowerArray = arr.map((e) => e < b);

  return `${highArray} ${lowerArray}`;
}

console.log(findstring(1, 4));
