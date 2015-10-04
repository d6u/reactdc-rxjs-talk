import React from 'react';
import hljs from 'highlight.js';
import css from '../scss/index.scss';
import { Slide } from './slide';

const Content = ({slideScale, currentSlide}) => {

  return (
    <div>
      <Slide {...{slideScale, currentSlide}} index={0}>
        <h1>Reactive Programing with RxJS</h1>
      </Slide>

      <Slide {...{slideScale, currentSlide}} index={1}>
        <img className={css.slide_1_img} src="/img/reactive-programing.png"/>
      </Slide>

      <Slide {...{slideScale, currentSlide}} index={2}>
        <h2>What Does Reactive Programing Mean?</h2>
        <img className={css.slide_1_img} src="/img/reactive-programing.png"/>
      </Slide>

      <Slide {...{slideScale, currentSlide}} index={3}>
        <pre>
          <code dangerouslySetInnerHTML={{__html: hljs.highlight('javascript', `var i = 123;`).value}}>
          </code>
        </pre>
      </Slide>

      <Slide {...{slideScale, currentSlide}} index={4}>
        <pre>
          <code dangerouslySetInnerHTML={{__html: hljs.highlight('javascript', `var i = 123;`).value}}>
          </code>
        </pre>
      </Slide>
    </div>
  );
};

export default Content;
