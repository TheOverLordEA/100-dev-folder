//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function aang(arr) {
  return arr.map((e) => e).filter((e) => (e % 2 === 0 ? e : 0));
}

//

const word = 348597;
// const lista = String(word);
// const array = lista.split("").reverse().join("");

const bestA = String(word)
  .split("")
  .map((e) => Number(e))
  .reverse();

// console.log(bestA);
const work = [];
function getInt(a) {
  return a
    .map((e) => {
      if (e > 0) {
        return e;
      } else if (e < 0) {
        return 0;
      } else {
        return 0;
      }
    })
    .reduce((sum, current) => sum + current, 0);
}

// console.log(getInt(work));

//code a program that is not non-consectuive

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;

  //   return arr.map((e, i) => {
  //     if (e - 1 !== e) {
  //       return e;
  //       break
  //
}

// console.log(firstNonConsecutive([-10, -9, -8, 3, 4, 6, 7, 8, 9]));

function squareDigit(a) {
  // //convert int to string

  // const intToString = String(a);

  // console.log(intToString);
  // //convert string to array and conver ele to a number
  // const stringAlter = intToString.split("");
  // const newArra = stringAlter.map((e) => {
  //   const num = Number(e * e);
  //   return String(num);
  // });
  // const array = newArra.join("");
  // return console.log(Number(array));

  let inToString = String(a)
    .split("")
    .map((e) => {
      const times = Number(e * e);
      return String(times);
    })
    .join("");
  // console.log(Number(inToString));
}

// squareDigit(3212);

function DNA(a) {
  const RNA = ["A", "T", "C", "G"];
  const stringARR = a.split("");

  //loop a

  for (let i = 0; i < stringARR.length; i++) {}

  //element is equal to
}

console.log(DNA("AAAA"));
