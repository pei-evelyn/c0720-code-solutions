/* eslint-disable no-unused-vars */

const reverseWords = string => {
  const stringArr = string.split(' ');
  const resultArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    const letterArr = Array.from(stringArr[i]);
    const reversed = letterArr.reverse().join('');
    resultArr.push(reversed);
  }
  return resultArr.join(' ');
};
