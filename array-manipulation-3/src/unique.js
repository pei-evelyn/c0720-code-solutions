/* eslint-disable no-unused-vars */

const unique = array => {
  const doubleChecker = (element, index) => {
    return array.indexOf(element) === index;
  };
  const resultArr = array.filter(doubleChecker);
  return resultArr;
};
