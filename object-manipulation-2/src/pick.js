/* eslint-disable no-unused-vars */

const pick = (source, keys) => {
  const newObj = {};
  for (let keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    for (const propName in source) {
      if (keys[keysIndex] === propName) {
        if (source[propName] !== undefined) {
          newObj[propName] = source[propName];
        }
      }
    }
  }
  return newObj;
};
