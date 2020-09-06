/* global _ */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = [
  { name: 'Fool' },
  { name: 'Barp' },
  { name: 'Meep' },
  { name: 'Rawr' }
];

const deckOfCards = [];

const createCards = () => {
  const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  const suits = ['club', 'diamond', 'heart', 'spade'];
  for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (let ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      const card = {};
      card.suit = suits[suitsIndex];
      card.rank = ranks[ranksIndex];
      deckOfCards.push(card);
    }
  }
  return deckOfCards;
};

const shuffleCards = () => {
  const totalCards = deckOfCards.length;
  for (let i = 0; i < totalCards; i++) {
    const randomNum = Math.floor(Math.random() * totalCards);
    const currentCard = deckOfCards[i];
    deckOfCards[i] = deckOfCards[randomNum];
    deckOfCards[randomNum] = currentCard;
  }
  return deckOfCards;
};

const dealCards = () => {
  players.forEach(player => {
    const cardsDrawn = deckOfCards.splice(0, 2);
    player.hand = cardsDrawn;
  });
  return players;
};

const calculateScore = () => {
  players.forEach(player => {
    let totalPoints = 0;
    for (let i = 0; i < players.hand.length; i++) {
      if (player.hand[i].rank === 'Ace') {
        totalPoints += 11;
      } else if (player.hand[i].rank === 'Jack') {
        totalPoints += 10;
      } else {
        totalPoints += parseInt(player.hand[i].rank);
      }
    }
  });
};
