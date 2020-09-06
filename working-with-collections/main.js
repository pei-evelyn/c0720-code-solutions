/* global _ */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  {
    name: 'Foo',
    hand: {}
  },
  {
    name: 'Bar',
    hand: {}
  },
  {
    name: 'Meep',
    hand: {}
  },
  {
    name: 'Rawr',
    hand: {}
  }
];

const createCards = () => {
  const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  const suits = ['club', 'diamond', 'heart', 'spade'];
  for (let i = 0; i < suits.length; i++) {
    for (let k = 0; k < ranks.length; k++) {
      const newObj = {};
      newObj.suit = suits[i];
      newObj.rank = ranks[k];
      this.cards.push(newObj);
    }
  }
};
