/* eslint-disable no-unused-vars */

const titleCase = title => {
  const word = title.toLowerCase().split(' ');
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > 3) {
      if (word[i] === 'javascript') {
        word[i] = 'JavaScript';
      } else if (word[i] === 'javascript:') {
        word[i] = 'JavaScript:';
      } else {
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
      }
    }
  }
  // const pattern = /Javascript/;
  // word.find;
  return word.join(' ');
};
