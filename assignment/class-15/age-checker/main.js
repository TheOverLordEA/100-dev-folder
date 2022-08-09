document.querySelector(".button").addEventListener("click", sprint);

function checkAge() {
  const ageClient = Number(document.querySelector(".age").value);
  const show = document.querySelector(".showText");

  if (ageClient < 18) {
    show.textContent = "Kid";
  } else if (ageClient < 28) {
    show.textContent = "Old";
  } else {
    show.textContent = "older";
  }
}

function sprint() {
  checkAge();
}
