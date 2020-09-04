/* eslint-disable no-unused-vars */
const fs = require('fs');
const JSONdata = require('./data.json');

const read = require('./read');

if (process.argv[2] === 'read') {
  read();
}
