/* eslint-disable no-unused-vars */

const express = require('express');
const app = express();

app.use((req, res, next) => {
  if (req.originalUrl === '/index.html') {
    res.sendFile('/index.html', { root: __dirname });
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.originalUrl === '/main.js') {
    res.sendFile('/main.js', { root: __dirname });
  } else {
    next();
  }
});

app.use((req, res, next) => {
  if (req.originalUrl === '/styles.css') {
    res.sendFile('/styles.css', { root: __dirname });
  } else {
    next();
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is listening!');
});
