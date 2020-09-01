/* eslint-disable no-unused-vars */
const swapChars = (firstIndex, secondIndex, string) => {
  const letter1 = string[secondIndex];
  const letter2 = string[firstIndex];
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += letter1;
    } else if (i === secondIndex) {
      newString += letter2;
    } else {
      newString += string[i];
    }
  }
  return newString;
};
