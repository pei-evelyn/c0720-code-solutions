/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const fs = require('fs');
const JSONdata = require('./data.json');

const read = require('./read');
const add = require('./create');

const action = process.argv[2];

switch (action) {
  case 'read':
    read();
    break;
  case 'create':
    add(process.argv[3]);
    break;
  default:
    console.log(`Sorry, ${action} is not a valid action.`);
}
