import React from 'react';
import ReactDOM from 'react-dom';
import Accordian from './accordion';

const topics = [
  {
    name: 'Hypertext Markup Language',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.`,
    id: 1
  },
  {
    name: 'Cascading Style Sheets',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.`,
    id: 2
  },
  {
    name: 'JavaScript',
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non labore
              velit veniam, eius saepe, quisquam distinctio deleniti optio maxime
              suscipit eveniet libero aliquam et tempora at reprehenderit cum,
              eligendi tenetur.`,
    id: 3
  }
];

ReactDOM.render(
  <Accordian topics={topics}/>,
  document.getElementById('root')
);
