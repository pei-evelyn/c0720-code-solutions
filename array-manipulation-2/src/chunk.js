/* eslint-disable no-unused-vars */
const chunk = (array, size) => {
  if (array[0] === '') {
    return array;
  }
  const newArr = [];
  const ogLength = array.length;
  for (let i = 0; i < ogLength; i = i + size) {
    if (i )
    const subArr = array.slice(i, size);
    newArr.push(subArr);

  }
  return newArr;
};

// index = 0,
// array.length = 4;
// i = 2;
// size = 2;
