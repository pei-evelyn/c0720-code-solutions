/* eslint-disable no-unused-vars */
const isLowerCased = word => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      counter++;
    }
  }
  return counter === word.length;
};
