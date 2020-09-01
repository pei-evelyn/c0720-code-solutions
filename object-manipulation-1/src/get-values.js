/* eslint-disable no-unused-vars */
function getValues(object) {
  const propertyArr = [];
  for (const keys in object) {
    propertyArr.push(object[keys]);
  }
  return propertyArr;
}
