let overAll = Number(document.querySelector("h3").textContent);

// console.log(typeof ov);
if (!overAll) {
  overAll = 0;
  console.log(typeof overAll);
}

document.querySelector("button").addEventListener("click", addMore);

function addMore() {
  overAll += 1;
  console.log(overAll);
}
