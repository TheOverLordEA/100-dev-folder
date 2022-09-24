//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const poke1 = document.querySelector("#poke1").value;
  const poke2 = document.querySelector("#poke2").value;
  const url = "https://pokeapi.co/api/v2/pokemon/" + poke1;
  const url2 = "https://pokeapi.co/api/v2/pokemon/" + poke2;
  let pokeStore = [];
  let pokeImg = [];

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      pokeStore.push(data.types[0].type.name);
      pokeImg.push(data.sprites.front_shiny);

      createCard(data.types[0].type.name, data.sprites.front_shiny);

      console.log(data.types[0].type.name);

      fetch(url2)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
          pokeStore.push(data.types[0].type.name);
          pokeImg.push(data.sprites.front_shiny);

          if (pokeStore[0] === "grass" && pokeStore[1] === "water") {
            document.querySelector("#pokeImg1").src = pokeImg[0];
            document.querySelector("#pokeImg2").src = pokeImg[1];
            document.querySelector("h2").innerText = " 2x > ";
          }
        })
        .catch((err) => {
          console.log(`error ${err}`);
        });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });

  console.log(pokeStore);
  console.log(pokeImg);
}

function createCard(pokeone, ima) {
  const divEl = document.createElement("div");
  document.body.append(divEl);
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  divEl.append(h1);
  divEl.append(img);
  h1.textContent = pokeone;

  img.src = ima;
}
