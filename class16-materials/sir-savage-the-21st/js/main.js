//Create a function that has a loop that prints '21' 21 times to the console and then call that function
function a() {
  let a = document.querySelector("h2");
  for (let i = 1; i <= 21; i++) {
    a.textContent += i;
  }
}

a();
//Bonus can you make it print '21' 21 times to the dom?
