/* eslint-disable no-unused-vars */

const equal = (first, second) => {
  let counter = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      counter++;
    }
  }
  return counter === first.length;
};
