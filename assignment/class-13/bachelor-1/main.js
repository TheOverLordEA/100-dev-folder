const animals = document.querySelectorAll(".animal");

Array.from(animals).forEach((animal) => {
  animal.addEventListener("click", getAnswer);
});

function getAnswer(find) {
  const cat = document.querySelector(".visible");
  if (find.target.classList.contains("water")) {
    cat.classList.toggle("visible");
    document.body.style.backgroundColor = "yellow";
  } else {
    prompt("vvvv");
  }
}
