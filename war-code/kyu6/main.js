//A tribnoichi funtion

const tribonichii = (array) => {
  //Loop thorugh array
  //Count the last three ele in the array
  //
};

//Break camelcase progrma
function a(st) {
  let str = "";
  for (let i = 0; i < st.length; i++) {
    if (st[i] === st[i].toUpperCase()) {
      str += " ";
      str += st[i];
    } else {
      str += st[i];
    }
  }
  return str;
}

console.log(a("camelCasingTest"));
