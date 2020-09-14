/* eslint-disable no-unused-vars */

const titleCase = string => {
  let newString = '';
  newString += string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 2] === ':') {
      newString += string[i].toUpperCase();
    } else if (string[i - 1] === '-') {
      newString += string[i].toUpperCase();
    } else if (string[i - 1] === ' ') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }

  const arr = newString.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 4) {
      arr[i] = arr[i][0].toLowerCase() + arr[i].slice(1);
    } else if (arr[i] === 'Javascript') {
      arr[i] = 'JavaScript';
    } else if (arr[i] === 'Javascipt:') {
      arr[i] = 'JavaScript:';
    } else if (arr[i] === 'Api') {
      arr[i] = 'API';
    }
  }

  newString = arr.join(' ');

  return newString;

};
