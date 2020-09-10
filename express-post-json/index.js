
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
  res.status(201).json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on Port 3000!');
});
