//A user question
// const userValue = Number(prompt("Enter A number "));

// if (userValue > 0) {
//   console.log("be");
// }

// const day = "monday";

// function a(a) {
//   switch (a) {
//     case "monday":
//       return `Work`;
//     case "Friday":
//       return "Not Work";
//     case "Saturday":
//       return "NOt Wokr";

//     default:
//       return "create";
//   }
// }

// console.log(a(day));

// function findNumber(a, e) {
//   if (a < e) {
//     return "a is larger";
//   } else if (a > e) {
//     return "a is tiny";
//   } else {
//     return "apple";
//   }
// }
// console.log(findNumber(10, 8));

// function numberOfDays(a) {
//   switch (a) {
//     case 1:
//       return "month one";
//     case 2:
//       return "month three";
//     case 3:
//       return "month five";
//     case 10:
//       return "month ten";

//     default:
//       return "too lazy";
//   }
// }

// console.log(numberOfDays(10));

function toHourMinSec(hour, minute, sec) {
  sec++;
  return `${hour}Hour ${minute}Min ${sec}Sec`;
}

console.log(toHourMinSec(1, 10, 100));
