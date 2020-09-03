/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  for (const keyName in source) {
    for (let i = 0; i < keys.length; i++) {
      if (keyName === keys[i]) {
        delete source[keys[i]];
      }
    }
  }
  return source;
};
