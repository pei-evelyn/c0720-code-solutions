/* eslint-disable no-unused-vars */

const chunk = (array, size) => {
  const containerArr = [];
  for (let i = 0; i < array.length; i += size) {
    if (size > i) {
      containerArr.push(array.slice(i, size));
    } else {
      containerArr.push(array.slice(i, size + i));
    }
  }
  return containerArr;
};
