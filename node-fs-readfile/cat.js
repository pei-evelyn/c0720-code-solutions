/* eslint-disable no-console */

const fs = require('fs');

const paths = [];

for (let index = 2; index < process.argv.length; index++) {
  paths.push(process.argv[index]);
}

for (let counter = 0; counter < paths.length; counter++) {
  fs.readFile(paths[counter], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
