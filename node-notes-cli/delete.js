/* eslint-disable no-console */

const fs = require('fs');

const deleteNote = noteId => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const JSONdata = JSON.parse(data);
    const noteList = JSONdata.notes;
    for (const noteName in noteList) {
      if (noteId === noteName) {
        delete noteList[noteName];
      }
    }
    const JSONstring = JSON.stringify(JSONdata);
    fs.writeFile('./data.json', JSONstring, err => {
      if (err) throw err;
      console.log(`Note ${noteId} deleted successfully.`);
    });
  });
};

module.exports = deleteNote;
