/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  const newObj = {};
  for (const propName in source) {
    if (keys.indexOf(propName) === -1) {
      newObj[propName] = source[propName];
    }
  }
  return newObj;
};
