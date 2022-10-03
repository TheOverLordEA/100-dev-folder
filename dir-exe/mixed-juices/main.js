//E
function cal(amountNeed, arr) {
  //Count the limes based on size

  //A number is reached stop count of limes

  let i = 0;
  let buy = 0;

  let lengthArray = arr.length;

  if (amountNeed === 0) {
    return 0;
  }

  while (i < lengthArray) {
    let a = arr[i];
    i++;

    if (a.length < 1) {
      return 0;
    }

    if (a === "small") {
      buy += 6;
    } else if (a === "medium") {
      buy += 8;
    } else if (a === "large") {
      buy += 10;
    }

    if (buy >= amountNeed) {
      return i;
    }
  }
  return i;

  console.log(buy);
}

// console.log(cal(1, [[]]));

//final task a

function time(timeLeft, orders) {
  let final = timeLeft;

  let e = 0;

  let a = orders.length;

  do {
    final -= timeToMixJuice(orders);
    orders.splice(0, 1);
  } while (e < a);
  {
    e++;
  }
  console.log(orders);
}
console.log(time(5, ["Energizer", "All or Nothing", "Green Garden"]));

function timeToMixJuice(name) {
  let answer = 0;

  switch (name) {
    case "Pure Strawberry Joy":
      answer = 0.5;
      break;
    case "Energizer":
      answer = 1.5;
      break;

    case "Green Garden":
      answer = 1.5;
      break;
    case "Tropical Island":
      answer = 3;
      break;
    case "All or Nothing":
      answer = 5;
      break;
    default:
      answer = 2.5;
      break;
  }

  return answer;
}
