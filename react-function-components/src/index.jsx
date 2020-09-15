import React from 'react';
import ReactDOM from 'react-dom';

const CustomButton = () => <button>Click Me!</button>;

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
