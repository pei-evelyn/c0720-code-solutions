/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

const fs = require('fs');

const readNote = require('./read');
const addNote = require('./create');
const deleteNote = require('./delete');
const updateNote = require('./update');

const action = process.argv[2];

switch (action) {
  case 'read':
    readNote();
    break;
  case 'create':
    addNote(process.argv[3]);
    break;
  case 'delete':
    deleteNote(process.argv[3]);
    break;
  case 'update':
    updateNote(process.argv[3], process.argv[4]);
    break;
  default:
    console.log(`Sorry, ${action} is not a valid action.`);
}
