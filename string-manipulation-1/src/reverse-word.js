/* eslint-disable no-unused-vars */
const reverseWord = word => {
  let newString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
};
