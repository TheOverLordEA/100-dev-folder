//Let's write a data structure
const dayAnimal = {
  animal: false,

  myLoop: ["eat", "work", "study", "rtavel", "nap"],
};

//A find the object key
// console.log(
//   Object.keys({
//     animal: false,

//     myLoop: ["eat", "work", "study", "rtavel", "nap"],
//   })
// );

//A animal book

const entry = [];

function dailyUpdate(day, active) {
  entry.push({ day, active });
}

dailyUpdate([1, 100, 10000, 10, 80], 10);

// dailyUpdate("e", "e");

// console.log(entry);
