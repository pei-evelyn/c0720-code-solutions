/* eslint-disable no-unused-vars */
const capitalizeWord = word => {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  } else {
    let newWord = word[0].toUpperCase();
    for (let i = 1; i < word.length; i++) {
      newWord += word[i].toLowerCase();
    }
    return newWord;
  }
};
