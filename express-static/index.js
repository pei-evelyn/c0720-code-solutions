/* eslint-disable no-console */

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

console.log(publicPath);

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
