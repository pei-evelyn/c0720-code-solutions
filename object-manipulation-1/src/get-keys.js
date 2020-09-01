/* eslint-disable no-unused-vars */
function getKeys(object) {
  const keysArr = [];
  for (const keys in object) {
    keysArr.push(keys);
  }
  return keysArr;
}
