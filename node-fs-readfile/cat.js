/* eslint-disable no-console */

const fs = require('fs');

let index = 2;

const id = setInterval(() => {
  if (index < process.argv.length) {
    fs.readFile(process.argv[index], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      index += 1;
    });
  } else if (index === process.argv.length) {
    clearInterval(id);
  }
}, 1000);
