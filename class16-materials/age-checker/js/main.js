//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too
document.querySelector("h1").addEventListener("click", ageChecker);

function ageChecker() {
  const AGE = document.querySelector("#danceDanceRevolution").value;
  const show = document.querySelector("p");

  if (AGE < 16) {
    show.textContent = `You can't drive`;
  } else if (AGE < 18) {
    show.textContent = "Club fail";
  } else if (AGE < 21) {
    show.textContent = "Fail wine";
  } else if (AGE < 25) {
    show.textContent = "Fail Car";
  } else if (AGE < 30) {
    show.textContent = "Fail Best";
  } else {
    show.textContent = "A";
  }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
