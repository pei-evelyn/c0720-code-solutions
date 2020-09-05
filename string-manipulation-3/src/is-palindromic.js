/* eslint-disable no-unused-vars */

const isPalindromic = string => {
  const str = string.replaceAll(' ', '');
  const strArr = str.split('');
  const reverseArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseArr.push(strArr[i]);
  }
  const reverseStr = reverseArr.join('');
  return reverseStr === str;
};
