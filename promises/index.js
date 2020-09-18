/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const name = takeAChance('Evelyn');

name.then(value => console.log(value));

name.catch(error => console.log(error.message));
