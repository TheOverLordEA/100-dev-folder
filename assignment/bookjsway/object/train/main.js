//Dog object addtion

// const myBud = {
//   name: "bud",
//   species: "lynxe",
//   makeNoise() {
//     this.talk += "What up mate";
//   },

//   talk: "",
// };

// myBud.makeNoise();

// console.log(`${myBud.name} ${myBud.species} ${myBud.talk}`);

//A circle

// let useInput = 10;

// const cirtcle = {
//   getRadius() {
//     return (useInput += 10);
//   },
//   getArea() {
//     return useInput + 18;
//   },
// };

// console.log(cirtcle.getRadius(), cirtcle.getRadius());

//Build a bank using an object

const bOA = {
  naem: "Alex",
  balance: 0,

  amount: 1,
  credit() {
    Number(this.amount);
    if (this.amount === 0) {
      this.balance -= this.amount;
    } else if (this.amount > 0) {
      this.balance += this.amount;
    } else {
      console.log(false);
    }
  },

  describe() {
    return `The client ${this.naem} has ${this.balance} Account `;
  },
};

bOA.credit();

console.log(bOA.describe());
