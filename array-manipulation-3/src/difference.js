/* eslint-disable no-unused-vars */

const difference = (first, second) => {
  const combinedArr = first.concat(second);
  const result = [];
  for (let i = 0; i < combinedArr.length; i++) {
    if (combinedArr.indexOf(combinedArr[i]) === -1) {
      result.push(combinedArr[i]);
    }
  }
  return result;
};
