/* eslint-disable no-unused-vars */
const isUpperCased = word => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      counter++;
    }
  }
  return counter === word.length;
};
