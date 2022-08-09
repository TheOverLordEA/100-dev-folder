const cat = document.querySelector(".catImage");
const catBlue = document.querySelector(".catWhite");
const catWhite = document.querySelector(".catBlue");

document.querySelector(".cat").addEventListener("click", showImage);

document.querySelector(".whale").addEventListener("click");

function showImage() {
  cat.classList.toggle("hidden");

  catBlue.classList.add("hidden");
  catWhite.classList.add("hidden");
}
