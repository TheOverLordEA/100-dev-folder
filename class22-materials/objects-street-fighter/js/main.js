//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function CreateAi(power, speed, fat, health, punch, block, healthIncrease) {
  this.power = power;
  this.speed = speed;
  this.fat = fat;
  this.health = health;

  this.block = function () {
    console.log(`${power}`);
  };

  this.punch = function () {
    console.log(`${power}`);
  };

  this.healthIncrease = function () {
    console.log(`${healthIncrease}`);
  };
}

// const lione = new CreateAi("alien", "fast", true, 100, "punch", "block", "hea");

// console.log(lione.block());
