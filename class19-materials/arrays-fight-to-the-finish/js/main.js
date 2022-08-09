//Create an array of movie titles. Loop through the array and each element to the h2.
const favMovie = ["Travel ", "FAM ", "Dispatch "];

favMovie.forEach((el) => {
  //   document.querySelector("h2").textContent += el;
});
//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let terran = [1, 10, 100, 80, 50];

terran.forEach((e, i) => {
  terran[i] = e + 3;
});

// console.log(terran);

//Find the average of all the numbers from question three

// const average = terran.reduce((sum, a) => {
//   return (sum + a) / terran.length; //   console.log((sum + a) / terran.length);
// });

let overal = 0;

terran.forEach((e) => {
  overal += e;
});

// console.log(overal / terran.length);
