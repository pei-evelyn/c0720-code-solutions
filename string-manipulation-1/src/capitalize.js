/* eslint-disable no-unused-vars */
const capitalize = word => {
  let lowerCase = '';
  for (let i = 1; i < word.length; i++) {
    lowerCase += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + lowerCase;
};
