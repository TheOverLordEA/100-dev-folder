//Create a object to store property about the character

const protagonist = {
  name: "Lin",
  cast: "Wizard",
  level: 0,

  //create amethod

  superSaiya() {
    this.level += 10;
    return `${this.level}`;
  },
};

protagonist.superSaiya();
//A console to show action of protagoinst
console.log(
  `${protagonist.name} a ${protagonist.cast} level ${protagonist.level}`
);

//A battle has started
// protagonist.level += 10;

//Main character has increased in level

// console.log(protagonist.level);

//A better way to write the code from before
//Create a method
// function changeLevel(a) {
//   return `The protagonist has increased in level ${a.level}`;
// }

// console.log(changeLevel(protagonist));

// console.log(protagonist.level);
