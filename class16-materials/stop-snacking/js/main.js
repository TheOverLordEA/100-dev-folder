//Create a function that grabs the number of snacks from the input and tells you to stop that many times
function eat() {
  let ate = document.querySelector("input").value;

  document.querySelector("#stops").textContent = "";

  for (let i = 1; i <= ate; i++) {
    document.querySelector("#stops").textContent += " eat ";
  }
}

function begin() {
  let ate = document.querySelector("input").value;
  if (ate.length > 0) {
    document.querySelector("#stops").textContent = " ";
    document.querySelector("input").value = "";
  }
}
document.querySelector("#help").addEventListener("click", eat);

document.querySelector(".begin").addEventListener("click", begin);
