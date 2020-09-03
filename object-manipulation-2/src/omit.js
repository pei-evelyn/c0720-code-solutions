/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  const sourceCopy = source;
  for (const keyName in sourceCopy) {
    for (let i = 0; i < keys.length; i++) {
      if (keyName === keys[i]) {
        delete sourceCopy[keys[i]];
      }
    }
  }
  return sourceCopy;
};
