/* eslint-disable no-unused-vars */

const isAnagram = (firstString, secondString) => {
  const firstArr = firstString.replaceAll(' ', '').split('').sort().join('');
  const secondArr = secondString.replaceAll(' ', '').split('').sort().join('');
  return firstArr === secondArr;
};
