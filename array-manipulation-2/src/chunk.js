/* eslint-disable no-unused-vars */

const chunk = (array, size) => {
  const containerArr = [];
  const arrLength = array.length;
  for (let i = 0; i < arrLength; i = i + size) {
    if (size === i) {
      containerArr.push(array.slice(i, size + i));
    } else {
      containerArr.push(array.slice(i, size));
    }
  }
  return containerArr;
};

// newArr = [undefined, null, 0]
// i = 0 + 3
// .i = 3
// newArr = []
