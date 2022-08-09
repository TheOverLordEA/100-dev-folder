//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

let totoal = 1;
function sumindex(a) {
  a.forEach((e) => {
    totoal *= e;
  });
  alert(totoal);
}
// sumindex([1, 10, 1, 5, 18, 10]);

const theory = [1, 10, 80, 100, 18];
theory.shift();

// console.log(theory);

const bestDirector = ["arron", "brady", "mahomes", "elorne", "mathew"];

const bestGOAT = bestDirector.map((e) => "arron");
// console.log(bestGOAT);
