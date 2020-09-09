/* eslint-disable no-unused-vars */

const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is listening');
});
