const blastOff = () => {
  getFirstName();
  getNickName();

  getLastName();
};

const getFirstName = () => {
  const inputName = document.querySelector(".first-name").value;
  document.querySelector(".infinity").textContent += inputName;
};

const getNickName = () => {
  const inputName = document.querySelector(".nick-name").value;
  document.querySelector(".infinity").textContent += inputName;
};

const getLastName = () => {
  const inputName = document.querySelector(".last-name").value;
  document.querySelector(".infinity").textContent += inputName;
};

document.querySelector(".blast").addEventListener("click", blastOff);
