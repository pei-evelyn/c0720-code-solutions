/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

const plus = require('./add');
const minus = require('./subtract');
const times = require('./multiply');
const over = require('./divide');

const output = (operatorStr, str1, str2) => {
  const numParsed1 = parseInt(str1);
  const numParsed2 = parseInt(str2);

  let result;

  if (operatorStr === 'plus') {
    result = plus.add(numParsed1, numParsed2);
  } else if (operatorStr === 'minus') {
    result = minus.subtract(numParsed1, numParsed2);
  } else if (operatorStr === 'times') {
    result = times.multiply(numParsed1, numParsed2);
  } else {
    result = over.divide(numParsed1, numParsed2);
  }

  return result;
};

console.log(output(process.argv[3], process.argv[2], process.argv[4]));
