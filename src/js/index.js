import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';
import { subscribe } from 'river-react';
import { slideScale, currentSlide } from './stores';
import Content from './content';

let AppContainer = subscribe(Content, {slideScale, currentSlide}, {
  slideScale: 1,
  currentSlide: 0
});

ReactDOM.render(<AppContainer />, document.getElementById('app'));
