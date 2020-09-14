import React from 'react';
import ReactDOM from 'react-dom';

const reactEl = React.createElement(
  'h1', null, 'Hello, React!'
);

const container = document.getElementById('root');

ReactDOM.render(reactEl, container);
