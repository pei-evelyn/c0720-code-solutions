/* eslint-disable no-unused-vars */
const isVowel = char => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toUpperCase() === vowels[i]) {
      return true;
    }
  }
  return false;
};
