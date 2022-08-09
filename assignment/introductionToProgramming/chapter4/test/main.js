//Write program that takes a start number and end

const findNum = (start, end, ints) => {
  let airport = [];
  //Loop from start
  for (let i = start; i < end; i += ints) {
    start += ints;

    airport.push(start);
  }
  return airport;
};

// console.log(findNum(1, 10, 3));
//Make a array from start

//A function that adds all the elements

const findSum = (ints) => {
  let sum = 0;
  for (let e of ints) {
    sum += e;
  }

  return sum;
};

// console.log(findSum([1, 1, 1, 10, 10]));

function reverseArray(a) {
  let turnAround = [];

  a.forEach((e) => {
    e >= 0 ? turnAround.push(Number(`-${e}`)) : turnAround.push(Math.abs(e));

    // if (e >= 0) {
    //   turnAround.push(Number(`-${e}`));
    // } else {
    //   turnAround.push(Math.abs(e));
    // }
  });

  return turnAround;
}

// console.log(reverseArray([1, -2, 0, 4, 5]));
