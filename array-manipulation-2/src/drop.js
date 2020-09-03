/* eslint-disable no-unused-vars */
const drop = (array, count) => {
  const newArr = [];
  if (array.length === 0) {
    return array;
  }
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
};
