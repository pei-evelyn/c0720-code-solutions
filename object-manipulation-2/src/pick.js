/* eslint-disable no-unused-vars */

const pick = (source, keys) => {
  const newObj = {};
  const propNames = Object.keys(source);
  for (let keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    for (let propNamesIndex = 0; propNamesIndex < propNames.length; propNamesIndex++) {
      if (keys[keysIndex] === propNames[propNamesIndex]) {
        if (source[keys[keysIndex]] !== undefined) {
          newObj[keys[keysIndex]] = source[keys[keysIndex]];
        }
      }
    }
  }
  return newObj;
};
