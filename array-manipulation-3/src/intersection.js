/* eslint-disable no-unused-vars */

const intersection = (first, second) => {
  const newArr = [];
  for (let firstIndex = 0; firstIndex < first.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < second.length; secondIndex++) {
      if (first[firstIndex] === second[secondIndex]) {
        newArr.push(first[firstIndex]);
      }
    }
  }
  return newArr;
};
