/* eslint-disable no-unused-vars */

const zip = (first, second) => {
  let numOfNestedArrs;
  if (first.length < second.length) {
    numOfNestedArrs = first.length;
  } else {
    numOfNestedArrs = second.length;
  }
  const containerArr = [];
  for (let i = 0; i < numOfNestedArrs; i++) {
    const nestedArr = [];
    nestedArr.push(first[i]);
    nestedArr.push(second[i]);
    containerArr.push(nestedArr);
  }
  return containerArr;
};
