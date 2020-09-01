/* eslint-disable no-unused-vars */
const numVowels = string => {
  if (string) {
    const regex = /[AEIOUaeiou]/g;
    const arr = string.match(regex);
    return arr.length;
  } else {
    return 0;
  }
};
