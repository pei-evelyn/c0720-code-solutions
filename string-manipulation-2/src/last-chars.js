/* eslint-disable no-unused-vars */
const lastChars = (length, string) => {
  if (length > string.length) {
    return string;
  } else {
    let newString = '';
    for (let i = string.length - length; i < string.length; i++) {
      newString += string[i];
    }
    return newString;
  }
};
