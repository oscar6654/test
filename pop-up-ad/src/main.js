import './app.scss';
import React from 'react';
import ReactDom from 'react-dom';
import Popup from './components/Popup.js';

ReactDom.render(
  <Popup message="Random Songs" />,
  document.getElementById('app')
);
