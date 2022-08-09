//A while loop example code
// let initialization = 0;

// while (initialization <= 10) {
//   console.log(initialization);
//   initialization++;
// }

// let alp = "";
// while (alp !== "A") {
//   apl = prompt("User to Enter a:");
// }

// function codeLoop(a) {
//   for (let i = 0; i <= a; i++) {
//     console.log(`Spin ${i}`);
//   }
// let int = 0;

//   while (int < a) {
//     console.log(`spin ${int}`);
//     int++;
//   }
// }

// console.log(codeLoop(10));

// function parity() {
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(`i is even ${i}`);
//     } else if (i % 3 === 0) {
//       console.log(`i is not even ${i}`);
//     }
//   }
// }

// console.log(parity());

// let number = "";
// let toNUmber = Number(number);
// while (toNUmber !== 100) {
//   toNUmber = prompt("Enter 100 ");
// }

// function increase() {
//   let userData = prompt("Enter a Number: ");
//   for (let i = 1; i <= 10; i++) {
//     const best = userData * i;
//     console.log(`Multiple table ${best}`);
//   }
// }

// increase();

// function yesOrNo() {
//   let userData = "";
//   while (userData !== "yes" && userData !== "no") {
//     userData = prompt("enter: ").toLowerCase();
//   }
// }

// yesOrNo();

// let letter = "";
// while (letter !== "X") {
//   letter = prompt("Type a letter or X to exit:");
// }

function fizzOrBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} fizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`fizz`);
    } else if (i % 5 === 0) {
      console.log(`buzz`);
    } else {
      console.log(i);
    }
  }
}

fizzOrBuzz();
