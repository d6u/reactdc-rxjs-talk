import React from 'react';
import { Slide } from './slide';
import css from '../scss/index.scss';

const Content = ({slideScale, currentSlide}) => {

  return (
    <div>
      <Slide {...{slideScale, currentSlide}} index={0}>
        <img className={css.slide_1_img} src="/img/reactive-programing.png"/>
      </Slide>
      <Slide {...{slideScale, currentSlide}} index={1}>

      </Slide>
    </div>
  );
};

export default Content;
