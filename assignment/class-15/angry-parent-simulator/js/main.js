document.querySelector(".btn").addEventListener("click", blastOffCode);

// function betterColor() {

// }

function advance() {
  const show = document.querySelector(".loud");

  const parentInput1 = document.querySelector(".parentInput1").value;
  const parentInput5 = document.querySelector(".parentInput1").value;
  const parentInput10 = document.querySelector(".parentInput10").value;
  const parentInput11 = document.querySelector(".parentInput11").value;

  const parentInput100 = document.querySelector(".parentInput100").value;

  show.textContent = `${parentInput1} ${parentInput5} ${parentInput10} ${parentInput11} ${parentInput100}`;
}

function blastOffCode() {
  advance();
}
