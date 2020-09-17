/* eslint-disable no-unused-vars */

const titleCase = string => {
  const minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];

  let newString = '';
  newString += string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    if (string[i - 2] === ':') {
      newString += string[i].toUpperCase();
    } else if (string[i - 1] === '-') {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }

  const arr = newString.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'javascript' || arr[i] === 'Javascript') {
      arr[i] = 'JavaScript';
    } else if (arr[i] === 'javascipt:' || arr[i] === 'Javascript:') {
      arr[i] = 'JavaScript:';
    } else if (arr[i] === 'api') {
      arr[i] = 'API';
    } else if (arr[i].length > 4) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    if (!minorWords.includes(arr[i]) && arr[i].length < 4) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }

  newString = arr.join(' ');
  return newString;
};
