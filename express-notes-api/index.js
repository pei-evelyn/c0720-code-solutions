/* eslint-disable no-unused-vars */

const express = require('express');
const app = express();

const jsonFile = require('./data.json');
const fs = require('fs');

const notes = [];
const nextId = jsonFile.nextId;

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
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else {
    const indexNum = notes.findIndex(note => note.id === parsedId);
    if (indexNum === -1) {
      res.status(404).json({
        error: `cannot find note with id ${parsedId}`
      });
    } else {
      res.json(notes[indexNum]);
    }
  }
});

// parsing from JSON

app.use(express.json());

// handle post req to notes

app.post('/api/notes', (req, res) => {
  const note = req.body;
  if (JSON.stringify(note) === '{}') {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else {
    note.id = nextId;
    const jsonFileNotes = jsonFile.notes;
    jsonFileNotes[nextId] = note;
    jsonFile.nextId++;
    const toJSONString = JSON.stringify(jsonFile, null, '\t');
    fs.writeFile('./data.json', toJSONString, err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(note);
      }
    });
  }
});

// handle delete req

app.delete('/api/notes/:id', (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (parsedId < 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else {
    const indexNum = notes.findIndex(note => note.id === parsedId);
    if (indexNum === -1) {
      res.status(404).json({
        error: `cannot find note with id ${parsedId}`
      });
    } else {
      notes.splice(indexNum, 1);
      delete jsonFile.notes[JSON.stringify(parsedId)];
      const toJSONString = JSON.stringify(jsonFile, null, '\t');
      fs.writeFile('./data.json', toJSONString, err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.sendStatus(204);
        }
      });
    }
  }
});

// handle put request

app.put('/api/notes/:id', (req, res) => {

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
