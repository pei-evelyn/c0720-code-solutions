/* eslint-disable no-unused-vars */

const difference = (first, second) => {
  const diff1 = first.filter(element => !second.includes(element));
  const diff2 = second.filter(element => !first.includes(element));
  return diff1.concat(diff2);
};
