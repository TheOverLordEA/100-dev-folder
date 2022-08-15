//Code a function that will replace every letter in a string === 0
let example = "45385593107843568";

const fakebin = (a) =>
  a
    .split("")
    .map((el) => {
      parseInt(el, 10);

      return el < 5 ? 0 : 1;
    })
    .join("");

// console.log(fakebin(example));

//A reverse a string

const reverseString = (str) => str.split("").reverse().join("");

// console.log(reverseString("eeeea"));

//A get average of array

function getAverage(a) {
  const newArr = a.reduce((sum, b) => sum + b) / a.length;
  return newArr;
}

// console.log(getAverage([1, 2, 3, 4]));

function permiterOrRectangle(l, w) {
  if (l === w) {
    return l * w;
  } else {
    return l + l + w + w;
  }
}

// console.log(permiterOrRectangle(10, 10));

function makeIntNegative(a) {
  return a < 0 ? a : -a;
}

// console.log(makeIntNegative(10));

//Make el * el

function makeEl(a) {
  return a.map((e) => e + e);
}

// console.log(makeEl([1, 2, 3]));

function literMuch(a) {
  return Math.floor(a * 0.5);
}

//
function getSum(a, b) {
  if (a === b) {
    return a;
  }

  const arr = [];

  arr.push(a, b);

  const arrSort = [];

  const arrSum = [];

  const intMin = Math.min(...arr);

  const intMax = Math.max(...arr);

  for (let i = intMin; i <= intMax; i++) {
    arrSort.push(i);
    arrSum.push(i);
  }

  const sum = arrSum.reduce((sum, now) => sum + now, 0);

  return sum;

  //Good luck!
}
console.log(getSum(-1, 2));

function locateAndAdd(a, b) {
  if (a === b) {
    return a;
  }
  //Create array to keep the result of loop
  const arr = [];

  const betterArr = [];
  const everyThing = [];
  arr.push(a, b);
  const smallestInt = Math.min(...arr);

  const largestArr = Math.max(...arr);

  for (let i = smallestInt; i <= largestArr; i++) {
    betterArr.push(i);
    everyThing.push(i);
  }

  const sum = everyThing.reduce((a, w) => a + w, 0);
  return sum;
}

// console.log(locateAndAdd(0, -1));

//Price of Car

function priceOfCar(sale, used) {
  let amountSale = 0;
  if (used < 3) {
    amountSale = 80;
  } else if (used > 10) {
    amountSale = 50;
  } else if (used >= 3 && used <= 10) {
    amountSale = 70;
  }

  const value = (amountSale / 100) * sale;
  return value;
}

// console.log(priceOfCar(1000, 11));

//convert let to a string

function make(e) {
  const a = String(e);
}

// console.log(make(true));

//A program that count every first and secon el
function getEl(arr) {
  let arre = 0;

  const below = [];

  const opene = [];

  if (arr.length === 0 || arr.length === null) {
    return [];
  }

  if (arr.length === 1 && arr[0] === 0) {
    return arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      arre++;
    }
    if (arr[i] < 0) {
      below.push(arr[i]);
    }
  }
  const answer = below.reduce((a, b) => a + b, 0);
  opene.push(arre, answer);

  console.log(opene);
}

// console.log(getEl([0]));

// function countPositivesSumNegatives(input) {
//   let intSum = 0;

//   const answer = [];

//   if (input.length === 1 && input[0] === 0) {
//     return 0;
//   }

//   for (let e of input) {
//     if (e === null) {
//       return [];
//     }
//   }

//   input.forEach((e) => (e > 0 ? intSum++ : 0));

//   const newArr = input
//     .filter((e) => (e < 0 ? e : 0))
//     .reduce((a, b) => a + b, 0);

//   answer.push(intSum, newArr);
//   return answer;
//   // your code here
// }

// console.log(countPositivesSumNegatives([0, 0]));

//

//A sum a num to

function sumInt(num) {
  let sum = 0;

  const newArr = [];

  for (let i = 1; i <= num; i++) {
    sum += 1;
    newArr.push(sum);
  }

  return newArr.reduce((a, b) => a + b, 0);
}

// console.log(sumInt());
