/* eslint-disable no-console */

let currentCount = 3;

function decrement(count) {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(decrement, 1000);
