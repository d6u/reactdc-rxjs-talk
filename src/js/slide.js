import React from 'react';
import { Motion, spring } from 'react-motion';
import css from '../scss/index.scss';

export const Slide = ({slideScale, currentSlide, index, children}) => {
  let x;

  if (currentSlide === index) {
    x = 0;
  } else if (currentSlide < index) {
    x = 100;
  } else {
    x = -100;
  }

  return (
    <Motion defaultStyle={{x: x}} style={{x: spring(x)}}>
      {interpolated =>
        <div className={css.o_slide} style={{transform: `translate3d(${interpolated.x}%, 0, 0)`}}>
          <div
            className={css.o_slide__inner}
            style={{transform: `translate3d(-50%, -50%, 0) scale(${slideScale})`}}>
            {children}
          </div>
        </div>
      }
    </Motion>
  );
};
