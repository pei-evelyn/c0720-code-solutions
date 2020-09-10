/* eslint-disable no-unused-vars */

const express = require('express');
const app = express();

const jsonFile = require('./data.json');

const notes = [];

for (const note in jsonFile.notes) {
  notes.push(jsonFile.notes[note]);
}

// handle get requests for API notes array

app.get('/api/notes', (req, res) => {
  res.send(notes);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
