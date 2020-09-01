/* eslint-disable no-unused-vars */
const firstChars = (length, string) => {
  if (string.length < length) {
    return string;
  } else {
    let newString = '';
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
    return newString;
  }
};
