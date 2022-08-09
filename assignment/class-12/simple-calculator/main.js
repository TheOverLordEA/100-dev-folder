document.querySelector(".num-0").addEventListener("click", makeZero);

let total = 0;
document.querySelector(".num-1").addEventListener("click", makeOne);
document.querySelector(".num-2").addEventListener("click", makeTwo);
document.querySelector(".num-3").addEventListener("click", makeThree);

document.querySelector(".num-5").addEventListener("click", make);

let numberDisplay = document.querySelector(".display_Number");

function makeZero() {
  total = 0;
  numberDisplay.textContent = "";
}

function makeOne() {
  total += 1;
  numberDisplay.textContent = total;
}

function makeTwo() {
  total += 2;
  numberDisplay.textContent = total;
}

function makeThree() {
  total += 3;
  numberDisplay.textContent = total;
}

function make() {
  total += 5;

  numberDisplay.textContent = total;
}
