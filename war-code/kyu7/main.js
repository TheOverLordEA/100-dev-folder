//Write a program that takes all vowels from a comment

function removeVowel(string) {
  //store all vowel in an array

  const vowel = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",

    A: "A",
    E: "E",
    I: "I",
    O: "O",

    U: "U",
  };

  let a = [];

  //Loop string
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== vowel.e &&
      string[i] !== vowel.i &&
      string[i] !== vowel.o &&
      string[i] !== vowel.a &&
      string[i] !== vowel.u &&
      string[i] !== vowel.O &&
      string[i] !== vowel.A &&
      string[i] !== vowel.E &&
      string[i] !== vowel.I &&
      string[i] !== vowel.U
    ) {
      a.push(string[i]);
    }
  }

  return a.join("");
}

// console.log(removeVowel(`What are you, a communist?`));

//Code a function that takes a string int int
function sayian(str, int, times) {
  //loop string

  return Array(times).fill(str.split(" ")[int]).join("-");

  //multiple
}
// console.log(
//   sayian(
//     "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
//     8,
//     10
//   )
// );

//Sum array odd numbers
const sumOddNumber = (n) => {
  //Find the first digit
  let firstDigit = n * n - (n - 1);

  let answer = 0;
  let count = 0;

  while (count < n) {
    if (firstDigit % 2 !== 0) {
      answer += firstDigit;
      count++;
    }
    firstDigit++;
  }

  return answer;
};

// sumOddNumber(18);

//Know if triangle
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

//Find the highest and minium int in a array

function highLow(array) {
  const minNumber = Math.min(...array);
  const largestNumber = Math.max(...array);
  let total = [];

  total.push(minNumber, largestNumber);
  console.log(total);
}

highLow([2334454, 5]);
