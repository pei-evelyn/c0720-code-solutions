/* eslint-disable no-console */

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

fetch('https://pokeapi.co/api/v2/pokemon/eevee')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
