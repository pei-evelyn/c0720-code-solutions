/* eslint-disable no-unused-vars */
const dropRight = (array, count) => {
  const remainder = array.length - count;
  const newArr = [];
  for (let i = 0; i < remainder; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
