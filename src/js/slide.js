import React from 'react';
import { Motion, spring } from 'react-motion';
import classNames from 'classnames';
import hljs from 'highlight.js';
import css from '../scss/index.scss';

export const Slide = ({slideScale, currentSlide, index, children, transparent}) => {
  let x;

  if (currentSlide === index) {
    x = 0;
  } else if (currentSlide < index) {
    x = 100;
  } else {
    x = -100;
  }

  let classes = classNames(css.o_slide__inner, {
    [css.o_slide__inner__transparent]: transparent
  });

  return (
    <Motion defaultStyle={{x: x}} style={{x: spring(x)}}>
      {interpolated =>
        <div className={css.o_slide} style={{transform: `translate3d(${interpolated.x}%, 0, 0)`}}>
          <div
            className={classes}
            style={{transform: `translate3d(-50%, -50%, 0) scale(${slideScale})`}}>
            {children}
          </div>
        </div>
      }
    </Motion>
  );
};

export const Code = ({code}) => {
  return (
    <pre>
      <code dangerouslySetInnerHTML={{__html: hljs.highlight('javascript', code).value}}></code>
    </pre>
  );
};

export const Space = () => {
  return <div className={css.o_slide_space}></div>
};
