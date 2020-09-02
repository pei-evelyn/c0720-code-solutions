/* eslint-disable no-unused-vars */
// const chunk = (array, size) => {
//   if (array[0] === '') {
//     return array;
//   }
//   const newArr = [];
//   const ogLength = array.length;
//   for (let i = 0; i < ogLength; i = i + size) {
//     const subArr = array.slice(i, size);
//     newArr.push(subArr);
//   }
//   return newArr;
// };

// const chunk = (array, size) => {
//   const numOfArr = Math.ceil(array.length / size);
//   const containerArr = [];
//   for (let i = 0; i < numOfArr; i++) {
//     const newArr = [];
//     containerArr.push(newArr);
//   }

//   return containerArr;
// };

const chunk = (array, size) => {
  const containerArr = [];
  for (let i = 0; i < array.length; i += size) {
    const newArr = array.slice(i);
  }
};
