
const express = require('express');
const app = express();

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

const jsonParser = express.json();

app.use(jsonParser);

app.post('/api/grades', (req, res) => {
  const content = req.body;
  content.id = nextId;
  nextId++;
  grades.push(content);
  res.status(201).json(content);
});

const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});
