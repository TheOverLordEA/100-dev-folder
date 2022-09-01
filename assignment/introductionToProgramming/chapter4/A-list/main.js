//Create fluid data structure
function arrToList(arr) {
  console.log(arr[0]);
  const listO = {
    value: arr[0],
    rest: {
      value: arr[1],
      rest: {
        value: arr[2],
      },
    },
  };
  return listO;
}

function listToArr(list) {
  return Object.entries(list);
}
// console.log(arrToList([1, 2, 3]));

const list = {
  value: 0,
  rest: {
    value: 1,
    rest: {
      value: 10,
    },
  },
};

// console.log(listToArr(list));
