/* eslint-disable no-unused-vars */

// const titleCase = title => {
//   const minorWords = ['in', 'of', 'the', 'for'];
//   const words = title.toLowerCase().split(' ');
//   const result = [];
//   for (let i = 0; i < words.length; i++) {
//     switch (words[i]) {
//       case minorWords[0]:
//       case minorWords[1]:
//       case minorWords[2]:
//       case minorWords[3]:
//         result.push(words[i]);
//         break;
//       case 'javascript':
//         words[i] = 'JavaScript';
//         result.push(words[i]);
//         break;
//       case 'javascript:':
//         words[i] = 'JavaScript:';
//         result.push(words[i]);
//         break;
//       case 'api':
//         words[i] = 'API';
//         result.push(words[i]);
//         break;
//       case 'in-depth':
//         words[i] = 'In-Depth';
//         result.push(words[i]);
//         break;
//       default:
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//         result.push(words[i]);
//         break;
//     }
//     if (words[1] === 'the') {
//       words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
//     }
//   }
//   return result.join(' ');
// };

const titleCase = string => {
  // capitalize first word of string and substring :
  // string[0] capitalized
  // string[i - 2] === ':' string[i] capitalized
  string[0].toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      string[i] = string[i].toUpperCase();
    } else if (string[i - 2] === ':') {
      string[i].toUpperCase();
    } else if (string[i - 1] === '-') {
      string[i].toUpperCase();
    }
  }

  return string;
  // capitalize all major words and second part of hyphenated major words
  // string[i-1] === " " string[i] capitalized
  // string[i-1] === "-" string[i]capitalized

  // capitalize all words of four letters or more
  // word.length >= 4

};
