const fs = require('fs');

let fileText = '';

fs.readFile(process.argv[2], 'utf8', (err, text) => {
  if (err) throw err;
  fileText += text;
  fs.writeFile(process.argv[3], fileText, err => {
    if (err) throw err;
  });
});
