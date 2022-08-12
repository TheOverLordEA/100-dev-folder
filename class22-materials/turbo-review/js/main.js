// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const strings = "tea";

strings.trim();

// console.log(strings);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

const bucke = ["banna", "grape", "walnut", "turnip", "apple"];
bucke.forEach((e) => (e === "apple" ? e : 0));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

const appl = () => {
  const rnadom = Math.floor(Math.random() * 3);
  const a = ["scissor", "rock", "paper"];

  if (rnadom === 0) {
    return a[0];
  } else if (rnadom === 1) {
    return a[1];
  } else if (rnadom === 2) {
    return a[2];
  }
};

// console.log(appl());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
const pacific = (choice) => {
  choice.toLowerCase();
  if (
    (choice === "paper" && appl() === "scissor") ||
    (choice === "rock" && appl() === "paper") ||
    (choice === "paper" && appl() === "scissor")
  ) {
    return false;
  } else if (choice === appl()) {
    return "no winner now";
  } else {
    return "compute loser";
  }
};

// for (let i = 0; i < 19; i++) {
//   console.log(pacific("rock"));
// }
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function play(x) {
  for (let i = 1; i <= x; i++) {
    console.log(pacific("rock"));
  }
}
// console.log(play(10));
