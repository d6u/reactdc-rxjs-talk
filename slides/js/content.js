import React from 'react';
import css from '../scss/index.scss';
import { Slide, Code, Space } from './slide';

const Content = ({slideScale, currentSlide}) => {
  const slides = [
    <Slide {...{slideScale, currentSlide}} index={0}>
      <h1>Reactive Programing with RxJS</h1>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={1}>
      <img className={css.slide_1_img} src="img/reactive-stream.png"/>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={2}>
      <h2>What Is Reactive Programing?</h2>
      <Code code={`let a = b + c;`} />
      <p>After `a` is assigned, changes of `b` or `c` will have no affect on `a`.</p>
      <Space />
      <Code code={`// Some imaginary programing language
b + c -> a`} />
      <p>Future changes of `b` or `c` will affect value of `a`.</p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={3}>
      <h2>Spreadsheet App is a Very Typical Example</h2>
      <p className={css.h_horizontal_center}>
        <img className={css.slide_img_excel_spreadsheet} src="img/spreadsheet-app.jpg"/>
      </p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={4} transparent={true}>
      <p className={`${css.h_horizontal_center} ${css.h_full_height}`}>
        <img className={css.h_full_height} src="img/the-end.jpg"/>
      </p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={5}>
      <h2>Tools to Implement Reactive Programing in JavaScript</h2>
      <p>Reactive programing is not new</p>
      <ul>
        <li>Property binding</li>
        <li>EventEmitter pattern</li>
        <li>Node.js streams</li>
        <li><strong>Reactive Extension</strong></li>
      </ul>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={6}>
      <h2>RxJS</h2>
      <p>Reactive extension are a family of libraries that implement similar API in many programing language. RxJS is the one for JavaScript.</p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={7}>
      <h2>Subject and Observable</h2>
      <Code code={`// Compose observables
let sb = new Rx.Subject();
let sc = new Rx.Subject();
let sa = Rx.Observable
  .combineLatest(sb, sc)
  .map(([b, c]) => b + c);

// Subscribe to changes
sa.subscribeOnNext((a) => console.log(a));

// Change value of Subjects
sb.onNext(1);
sc.onNext(2);`} />
      <p><em>Subject is a special kind of observable.</em></p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={8}>
      <img className={css.slide_1_img} src="img/reactive-stream.png"/>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={9}>
      <h2>What if We Subscribe to DOM Events</h2>
      <Code code={`Rx.Observable.fromEvent($('#text'), 'keypress')
  .map(event => event.target.value)
  .subscribeOnNext(val => console.log(val));`} />
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={10}>
      <h2>Drag & Drop</h2>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={11}>
      <h2>Drag & Drop (No Observable)</h2>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={12}>
      <h2>Why Observable is Better?</h2>
      <ol>
        <li>Everything can become observable</li>
        <li>Functional</li>
        <li>Composable (easy to add new features)</li>
        <li>Disposable</li>
        <li><strong>One Direction Data Flow</strong></li>
      </ol>
      <p>Sounds like <strong>Flux</strong>?</p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={13}>
      <h2>Basic Flux with Rx</h2>
      <a href="https://github.com/d6u/rx-chat" target="_blank">Rx Chat Example</a>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={14}>
      <h2>River Flux</h2>
      <a href="https://github.com/d6u/River" target="_blank">River</a>
      <br/>
      <a href="https://github.com/d6u/river-chat" target="_blank">River Chat Example</a>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={15}>
      <h2>Other Resources</h2>
      <p>There are much more inside Rx, e.g. hot vs cold observables, schedulers, operators.</p>
      <ul>
        <li><a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754" target="_blank">The introduction to Reactive Programming you've been missing</a></li>
        <li><a href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables" target="_blank">Cold vs. Hot Observables</a></li>
        <li><a href="http://rxmarbles.com/" target="_blank">RxMarbles</a></li>
      </ul>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={16}>
      <h2>Follow me</h2>
      <p><a href="https://twitter.com/daiweilu">@daiweilu</a></p>
    </Slide>,

    <Slide {...{slideScale, currentSlide}} index={17}>
      <h1>Thank You!</h1>
    </Slide>,
  ];

  return (
    <div>{slides}</div>
  );
};

export default Content;
