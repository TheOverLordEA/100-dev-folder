function questionUser(q, y, n) {
  if (confirm(q)) y();
  else n();
}

//A callback function

function ifBest() {
  console.log("Best");
}

function ifNot() {
  console.log("Not");
}

questionUser("What?", ifBest, ifNot);
