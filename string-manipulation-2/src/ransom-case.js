/* eslint-disable no-unused-vars */
const ransomCase = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
};
