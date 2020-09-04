/* eslint-disable no-console */

const fs = require('fs');

const updateNote = (noteId, newNote) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const JSONdata = JSON.parse(data);
    const noteList = JSONdata.notes;
    for (const noteName in noteList) {
      if (noteId === noteName) {
        noteList[noteName] = newNote;
      }
    }
    const JSONString = JSON.stringify(JSONdata);
    fs.writeFile('./data.json', JSONString, err => {
      if (err) throw err;
      console.log(`Note ${noteId} updated successfully.`);
    });
  });
};

module.exports = updateNote;
