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
  res.json(notes);
});

// handle get requests for single note

app.get('/api/notes/:id', (req, res) => {
  const parsedId = parseInt(req.params.id);

  if (parsedId < 0) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else {
    const indexNum = notes.findIndex(note => note.id === parsedId);
    if (indexNum === -1) {
      res.status(404).send({
        error: `cannot find note with id ${parsedId}`
      });
    } else {
      res.json(notes[indexNum]);
    }
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
