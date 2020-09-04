/* eslint-disable no-console */

const fs = require('fs');

const create = newNote => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const JSONdata = JSON.parse(data);
    const noteList = JSONdata.notes;
    const idNum = JSONdata.nextId;
    noteList[idNum] = newNote;
    JSONdata.nextId++;
    const JSONString = JSON.stringify(JSONdata);
    fs.writeFile('./data.json', JSONString, err => {
      if (err) throw err;
      console.log('Note Added');
    });
  });
};

module.exports = create;
