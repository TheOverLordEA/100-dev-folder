//Create a button that adds 1 to a botScore stored in localStorage

// if (!localStorage.getItem("sum")) {
//   localStorage.setItem("sum", 0);
// }

function buttonAdd() {
  // let sumPlus = Number(localStorage.getItem("sum"));
  // sumPlus += 1;
  // localStorage.setItem("sum", sumPlus);
  // if (localStorage.getItem("sum") > 10) {
  //   localStorage.setItem("sum", 0);
  // }
  const e = Number(document.querySelector("h3").textContent);
}

document.querySelector("button").addEventListener("click", buttonAdd);
