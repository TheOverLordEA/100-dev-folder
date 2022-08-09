//Loop input value

document.querySelector(".click").addEventListener("click", rocket);

function clone() {
  const userString = document.querySelector(".price").value;

  const mult = document.querySelector(".shadow").value;

  document.querySelector(".best").textContent = " ";

  for (let i = 0; i < userString; i++) {
    document.querySelector(".best").textContent += mult;
  }
}

function rocket() {
  clone();
}
