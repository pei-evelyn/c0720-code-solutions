import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU3MDA3MDg3MzYzNzE4/neko-atsume-character-profile-fred.png',
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU1NTM2ODY2MDQzNTI2/neko-atsume-character-profile-socks.png',
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU3MDA0MTM0MzExMjcy/neko-atsume-character-profile-spots.png',
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU3NTkxNzM5NDU5MjA2/neko-atsume-character-profile-spud.png',
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU3MDA2NTUwNDI3Mjcw/neko-atsume-character-profile-sunny.png'
];

ReactDOM.render(
  <Carousel images={images}/>,
  document.querySelector('#root')
);
