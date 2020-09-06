/* eslint-disable no-unused-vars */

const flatten = inputArray => {
  return inputArray.reduce((accumulator, currentVal) => accumulator.concat(currentVal), []);
};
