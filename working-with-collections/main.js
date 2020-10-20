/* global _ */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

// const players = [
//   { name: 'Fool' },
//   { name: 'Barp' },
//   { name: 'Meep' },
//   { name: 'Rawr' }
// ];

// const deckOfCards = [];

const createCards = () => {
  const deckOfCards = [];
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

const shuffleCards = deckOfCards => {
  const totalCards = deckOfCards.length;
  for (let i = 0; i < totalCards; i++) {
    const randomNum = Math.floor(Math.random() * totalCards);
    const currentCard = deckOfCards[i];
    deckOfCards[i] = deckOfCards[randomNum];
    deckOfCards[randomNum] = currentCard;
  }
  return deckOfCards;
};

const dealCards = (players, numOfCards, deckOfCards) => {
  players.forEach(player => {
    const cardsDrawn = deckOfCards.splice(0, numOfCards);
    player.hand = cardsDrawn;
  });
  return players;
};

const calculateScore = players => {
  players.forEach(player => {
    player.totalPoints = 0;
    player.hand.forEach(card => {
      switch (card.rank) {
        case 'Ace':
          player.totalPoints += 11;
          break;
        case 'King':
        case 'Queen':
        case 'Jack':
          player.totalPoints += 10;
          break;
        default:
          player.totalPoints += parseInt(card.rank);
      }
    });
  });
  return players;
};

const declareWinner = players => {
  let winner = players[0].name;
  let winningScore = players[0].totalPoints;
  for (let i = 0; i < players.length; i++) {
    if (players[i].totalPoints > winningScore) {
      winner = players[i].name;
      winningScore = players[i].totalPoints;
    }
  }
  console.log(`${winner} wins with ${winningScore} points!`);
};

const startGame = (playerArray, numOfCardsPerHand) => {
  const deckCreated = createCards();
  const shuffledDeck = shuffleCards(deckCreated);
  dealCards(playerArray, numOfCardsPerHand, shuffledDeck);
  calculateScore(playerArray);
  declareWinner(playerArray);
};
