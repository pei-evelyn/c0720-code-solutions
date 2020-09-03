/* eslint-disable no-unused-vars */
const takeRight = (array, count) => {
  const remainder = array.length - count;
  const newArr = [];
  if (array.length === 0) {
    return array;
  }
  for (let i = remainder; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
