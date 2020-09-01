/* eslint-disable no-unused-vars */

const truncate = (length, string) => {
  let newString = '';
  if (string.length < length) {
    newString = string;
  } else {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
  }
  return newString + '...';
};
