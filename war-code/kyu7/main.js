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

// highLow([2334454, 5]);

//Number of people on the bus
function numberOnBus(a) {
  let assist = [];
  //Loop array

  for (let i = 0; i < a.length; i++) {
    const sum = a[i][0] - a[i][1];
    assist.push(sum);
  }
  //Minus i[0] with i[1]

  //Then push all element

  return assist.reduce((a, b) => a + b, 0);
}

// console.log(
//   numberOnBus([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// );

//write function accumulator
function multiple(str) {
  const arr = str.split("");
  let box = [];
  console.log(arr);

  const aa = arr.map((ele, index) => {
    const ee = ele.repeat(index + 1);

    return ee;
  });

  console.log(aa);

  return box;
}

// console.log(multiple("cwAt"));
