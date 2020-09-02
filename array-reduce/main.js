/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sumNum = (accumulator, num) => accumulator + num;
const sum = numbers.reduce(sumNum);
console.log(sum);

const product = numbers.reduce((accumulator, num) => accumulator * num);
console.log(product);

const transaction = (accumulator, acc) => {
  if (acc.type === 'deposit') {
    return accumulator + acc.amount;
  } else {
    return accumulator - acc.amount;
  }
};
const balance = account.reduce(transaction, 0);
console.log(balance);

const combineTraits = (accumulator, trait) => {
  const key = Object.keys(trait);
  const value = trait[key][0];
  accumulator[key] = trait[key];
  return accumulator;
};
const composite = traits.reduce(combineTraits, {});
console.log(composite);
