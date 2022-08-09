let nameFirst = document.querySelector(".nameFirst").value;

let gameName = document.querySelector(".gameName").value;

let middleName = document.querySelector(".middleName").value;

let bestName = document.querySelector(".bestName").value;

let trueName = document.querySelector(".trueName").value;

document.querySelector(".blast").addEventListener("click", checkName);

function checkName() {
  document.querySelector(
    ".answer"
  ).textContent = `${nameFirst}  ${gameName} ${middleName} ${bestName} ${trueName}`;

  const a = document.querySelectorAll(".a").value;

  Array.from(a).forEach((a) => {
    a.textContent = " ";
  });
}
