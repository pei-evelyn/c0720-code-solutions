/* eslint-disable no-console */

const fs = require('fs');

const numOfFiles = process.argv.length - 2;
let index = 2;
let filesRead = 0;

const readMe = () => {
  fs.readFile(process.argv[index], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    filesRead++;
    index++;
    if (filesRead < numOfFiles) {
      readMe();
    }
  });
};

readMe();
