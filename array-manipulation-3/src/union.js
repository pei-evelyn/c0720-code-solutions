/* eslint-disable no-unused-vars */

const union = (first, second) => {
  const concat = first.concat(second);
  const result = concat.filter((element, index) => {
    return concat.indexOf(element) === index;
  });
  return result;
};
