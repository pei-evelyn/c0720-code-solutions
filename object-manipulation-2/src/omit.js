/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  const newObj = {};
  for (const keyName in source) {
    for (let i = 0; i < keys.length; i++) {
      if (keyName !== keys[i]) {
        newObj[keyName] = keyName;
      }
    }
  }
  return newObj;
};
