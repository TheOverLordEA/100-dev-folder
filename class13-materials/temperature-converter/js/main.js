//Write your pseduo code first!
document.querySelector(".enter").addEventListener("click", getHeat);

document.querySelector(".inputClient").value = "";

function getHeat() {
  const inputValue = document.querySelector(".inputClient").value;
  const cold = inputValue * 10;

  document.querySelector(".clientDisplay").textContent = cold;
}
