/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubleAllNumbers = num => num * 2;
const doubled = numbers.map(doubleAllNumbers);
console.log(doubled);

const formatStrings$ = num => '$' + num + '.00';
const prices = numbers.map(formatStrings$);
console.log(prices);

const convertUpperCase = str => str.toUpperCase();
const upperCased = languages.map(convertUpperCase);
console.log(upperCased);

const firstLetterLanguage = str => str[0];
const firstLetters = languages.map(firstLetterLanguage);
console.log(firstLetters);
