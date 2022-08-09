//Write a program that takes all vowels from a comment

function removeVowel(string) {
  //store all vowel in an array

  const vowel = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",

    A: "A",
    E: "E",
    I: "I",
    O: "O",

    U: "U",
  };

  let a = [];

  //Loop string
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== vowel.e &&
      string[i] !== vowel.i &&
      string[i] !== vowel.o &&
      string[i] !== vowel.a &&
      string[i] !== vowel.u &&
      string[i] !== vowel.O &&
      string[i] !== vowel.A &&
      string[i] !== vowel.E &&
      string[i] !== vowel.I &&
      string[i] !== vowel.U
    ) {
      a.push(string[i]);
    }
  }

  return a.join("");
}

// console.log(removeVowel(`What are you, a communist?`));
