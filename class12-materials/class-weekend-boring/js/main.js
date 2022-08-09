document.querySelector("#check").addEventListener("click", check);

function check() {
  const daye = document.querySelector("#day").value;

  //Conditionals go here

  const day = daye.toLowerCase("");
  // const lower = day.toLoweerCase();

  if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wendesday" ||
    day === "thursday" ||
    day === "friday" ||
    day === "saturday" ||
    day === "sunday"
  ) {
    document.querySelector("#placeToSee").textContent = "Good";
    document.querySelector("#day").value = "";
  } else {
    document.querySelector("#placeToSee").textContent = "Fail";
  }
}
