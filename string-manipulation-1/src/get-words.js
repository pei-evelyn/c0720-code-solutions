/* eslint-disable no-unused-vars */
const getWords = string => {
  const newArr = string.split(' ');
  if (newArr[0] === '') {
    return [];
  } else {
    return newArr;
  }
};
