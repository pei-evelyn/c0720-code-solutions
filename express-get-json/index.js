
const express = require('express');
const path = require('path');

const app = express();

const arr = [
  {
    id: 1,
    name: 'Cody Miller',
    course: 'Web Development',
    grade: 100
  },
  {
    id: 2,
    name: 'Uzair Ashraf',
    course: 'Web Development',
    grade: 99
  }
];

const getHandler = function (req, res) {
  res.json(arr);
};

app.get('/api/grades', getHandler);

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
