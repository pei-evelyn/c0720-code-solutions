/* eslint-disable no-unused-vars */

const titleCase = title => {
  const minorWords = ['in', 'of', 'the', 'for'];
  const words = title.toLowerCase().split(' ');
  const result = [];
  for (let i = 0; i < words.length; i++) {
    switch (words[i]) {
      case minorWords[0]:
      case minorWords[1]:
      case minorWords[2]:
      case minorWords[3]:
        result.push(words[i]);
        break;
      case 'javascript':
        words[i] = 'JavaScript';
        result.push(words[i]);
        break;
      case 'javascript:':
        words[i] = 'JavaScript:';
        result.push(words[i]);
        break;
      case 'api':
        words[i] = 'API';
        result.push(words[i]);
        break;
      case 'in-depth':
        words[i] = 'In-Depth';
        result.push(words[i]);
        break;
      default:
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        result.push(words[i]);
        break;
    }
    if (words[1] === 'the') {
      words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    }
  }
  return result.join(' ');
};
