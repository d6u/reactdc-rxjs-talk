import Rx from 'rx';
import R from 'ramda';
import { createStore } from 'river-react';
import { navigateSubject } from './actions';
import { currentIndex, history } from './navigation';

const WIDTH = 800;
const HEIGHT = 450;
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

export const currentSlide = createStore(() => {
  return Rx.Observable.fromEvent(document, 'keyup')
    .map(R.prop('keyCode'))
    .filter(keyCode => keyCode === 37 || keyCode === 39)
    .startWith(null)
    .scan((acc, keyCode) => {
      switch (keyCode) {
      case 37: // Left Arrow
        return Math.max(acc - 1, 0);
      case 39: // Right Arrow
        return acc + 1;
      default:
        let index = currentIndex();
        if (index != null) {
          return index;
        } else {
          history.replaceState(null, '/0');
          return 0;
        }
      }
    }, 0)
    .distinctUntilChanged()
    .doOnNext(index => {
      if (currentIndex() !== index) history.pushState(null, `/${index}`);
    });
});
