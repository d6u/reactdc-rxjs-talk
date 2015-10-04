import Rx from 'rx';
import { createStore } from 'river-react';

const WIDTH = 1600;
const HEIGHT = 900;
const ASPECT_RATIO = WIDTH / HEIGHT;
const PADDING = 20;

export const slideScale = Rx.Observable.fromEvent(window, 'resize')
  .startWith(null)
  .map(() => {
    let width = document.body.clientWidth - PADDING * 2;
    let height = document.body.clientHeight - PADDING * 2;
    let _width = height * ASPECT_RATIO;

    return Math.min(_width, width) / WIDTH;
  });

// export const currentSlide = Rx.Observable.from([1])

export const currentSlide = createStore(() => {
  return Rx.Observable.fromEvent(document, 'keyup')
    .map(({keyCode}) => keyCode)
    .filter(keyCode => keyCode === 37 || keyCode === 39)
    .scan((acc, keyCode) => {
      switch (keyCode) {
      case 37: // Left Arrow
        return Math.max(acc - 1, 0);
      case 39: // Right Arrow
        return acc + 1;
      default:
        // No default
      }
    }, 0)
    .startWith(0);
});
