/* eslint-disable no-unused-vars */
const capitalizeWords = string => {
  const stringArr = string.split(' ');
  let output = '';
  for (let arrIndex = 0; arrIndex < stringArr.length; arrIndex++) {
    const eachString = stringArr[arrIndex];
    let newString = '';
    for (let stringIndex = 0; stringIndex < eachString.length; stringIndex++) {
      if (stringIndex === 0) {
        newString += eachString[stringIndex].toUpperCase();
      } else {
        newString += eachString[stringIndex].toLowerCase();
      }
    }
    if (arrIndex === stringArr.length - 1) {
      output += newString;
    } else {
      output += newString + ' ';
    }
  }
  return output;
};
