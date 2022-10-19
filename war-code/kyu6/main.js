//A tribnoichi funtion

const tribonichii = (array) => {
  //Loop thorugh array
  //Count the last three ele in the array
  //
};

//Break camelcase progrma
function a(st) {
  let str = "";
  for (let i = 0; i < st.length; i++) {
    if (st[i] === st[i].toUpperCase()) {
      str += " ";
      str += st[i];
    } else {
      str += st[i];
    }
  }
  return str;
}

// console.log(a("camelCasingTest"));

//Function find walk

function findPath(array) {
  let answer = [];

  if (array.length === 10) {
    for (let i = 0; i < array.length; i++) {
      // if (array[i] === "s" || array[i] === "e") {
      //   answer.push(-1);
      // } else {
      //   answer.push(1);
      // }

      array[i] === "s" || array[i] === "e" ? answer.push(-1) : answer.push(1);
    }
    console.log(answer.reduce((a, e) => a + e, 0));
    if (answer.reduce((a, b) => a + b, 0) !== 0) {
      return false;
    }
    return true;
  }
  return false;
}

// console.log(findPath(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((e) => !geese.includes(e));
  // return an array containing all of the strings in the input array except those that match strings in geese
}
console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
