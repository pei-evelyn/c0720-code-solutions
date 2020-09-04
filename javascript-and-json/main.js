/* eslint-disable no-console */

const books = [
  {
    isbn: 1,
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    isbn: 2,
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: 3,
    title: 'The Collective',
    author: 'Don Lee'
  }
];

const stringed = JSON.stringify(books);

console.log('JSON string:', stringed);
console.log('Typeof JSON string:', typeof stringed);

const jsonString = '{"name": "Evelyn", "number": 100}';

const parsed = JSON.parse(jsonString);

console.log('JSON parsed:', parsed);
console.log('Typeof JSON parsed:', typeof parsed);
