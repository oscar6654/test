import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Box from './components/Box'
let body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sedullamcorper nibh, id efficitur eros. Suspendisse ultricies est ut mivolutpat, quis faucibus sem malesuada. Pellentesque pellentesque ex atposuere viverra. Nunc maximus massa nec lectus malesuada sodales. Loremipsum dolor sit amet, consectetur adipiscing elit. Cras eget malesuadatortor."
ReactDOM.render(
  <div>
    <Box
      boxClass='wrapper'
      header='I Am the Wrapper'
      paragraph={body}
    />
  </div>,
  document.getElementById('app')
);
