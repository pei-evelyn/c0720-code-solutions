const express = require('express');
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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
