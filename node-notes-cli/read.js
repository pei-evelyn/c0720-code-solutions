/* eslint-disable no-console */

const fs = require('fs');

const readNotes = () => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const JSONdata = JSON.parse(data);
    const noteList = JSONdata.notes;
    for (const note in noteList) {
      console.log(`${note}: ${noteList[note]}`);
    }
  });
};

module.exports = readNotes;
