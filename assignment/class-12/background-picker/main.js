let bodyColor = document.body;

document.querySelector(".color1").addEventListener("mouseover", () => {
  bodyColor.style.background = "blue";
});

document.querySelector(".color2").addEventListener("click", () => {
  bodyColor.style.background = "black";
});

document.querySelector(".color3").addEventListener("mouseover", () => {
  bodyColor.style.background = "orange";
});

document.querySelector(".color4").addEventListener("click", () => {
  bodyColor.style.background = "red";
});

document.querySelector(".color5").addEventListener("click", () => {
  bodyColor.style.background = "indigo";
});
