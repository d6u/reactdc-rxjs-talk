# Reactive Programing with RxJS

## ![Reactive Stream](/slides/img/reactive-stream.png)

_Image is from [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)_

## What is Reactive Programing?

```js
let a = b + c;
```

After `a` is assigned, changes of `b` or `c` will have no affect on `a`.

```js
// Some imaginary programing language
b + c -> a
```

Future changes of `b` or `c` will change the value of `a`.

## Spreadsheet App Is a Typical Example

![Spreadsheet App](/slides/img/spreadsheet-app.jpg)

## ![The End](/slides/img/the-end.jpg)

## Tools to Implement Reactive Programing in JavaScript

Reactive programing is not new

- Property binding
- EventEmitter pattern
- Node.js streams
- **Reactive Extension**

## [RxJS](http://reactivex.io/)

Reactive extension are a family of libraries that implement similar API in many programing language. RxJS is the one for JavaScript.

## Subject and Observable

_[Demo]()_

```js
// Compose observables
let sb = new Rx.Subject();
let sc = new Rx.Subject();
let sa = Rx.Observable.combineLatest(sb, sc, (b, c) => b + c);

// Subscribe to changes
sa.subscribeOnNext((a) => console.log(a));

// Change value of Subjects
b.onNext(1);
c.onNext(2);
```

_Subject is a special kind of observable._

## ![Reactive Stream](/slides/img/reactive-stream.png)

## What If We Can Subscribe to DOM Events

_[Demo]()_

```js
Rx.Observable.fromEvent($('#text'), 'keypress')
  .map(event => event.target.value)
  .subscribeOnNext(val => console.log(val));
```

> Demo combine latest

_Everything is stream_

## Drag & Drop

> Demo

```js
let box = document.getElementById('box');
let mousedown = Rx.Observable.fromEvent(box, 'mousedown');
let mouseup = Rx.Observable.fromEvent(document.body, 'mouseup');

Rx.Observable.merge(mousedown, mouseup)
  .flatMapLatest(event => {
    if (event.type !== 'mousedown') {
      return Rx.Observable.empty();
    }

    let offsetX = event.pageX - box.offsetLeft;
    let offsetY = event.pageY - box.offsetTop;

    return Rx.Observable.fromEvent(document.body, 'mousemove')
      .map(({pageX, pageY}) => ({x: pageX - offsetX, y: pageY - offsetY}))
  })
  .subscribeOnNext(({x, y}) => {
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
  });
```

## Drag & Drop (No Observable)

> Demo

```js
let box = $('#box');
let body = $('body');

box.on('mousedown', mouseEventHandler);
body.on('mouseup', mouseEventHandler);

let mouseMoveHandler;

function mouseEventHandler(event) {
  if (event.type !== 'mousedown') {
    body.off('mousemove', mouseMoveHandler);
    mouseMoveHandler = null;
    return;
  }

  let offsetX = event.pageX - box[0].offsetLeft;
  let offsetY = event.pageY - box[0].offsetTop;

  mouseMoveHandler = ({pageX, pageY}) => {
    let x = pageX - offsetX;
    let y = pageY - offsetY;

    box[0].style.left = `${x}px`;
    box[0].style.top = `${y}px`;
  };

  body.on('mousemove', mouseMoveHandler);
}
```

## Why Observable is Better?

1. Everything can become observable

2. Functional

3. Composable (easy to add new features)

> Demo Adding Features to

4. Disposable

> Demo

```js
let ajax = Rx.Observable.create(function (observer) {
  let jqXHR = $.get(url);
  jqXHR
    .then(data => {
      observer.onNext(data);
      observer.onCompleted();
    })
    .catch(err => observer.onError(data));
  return function dispose() {
    jqXHR.abort();
  };
});

let disposable = ajax.subscribe();

disposable.dispose(); // Will trigger `abort`
```

5. **One Direction Data Flow**

Sounds like **Flux**?

## Basic Flux

> Counter Demo

## River Flux

> Counter Demo
> Todo Demo
> Chat Demo

Star if you like them

## Other Resources

There are much more inside Rx, e.g. hot vs cold observables, schedulers, operators.

- [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)
- [Cold vs. Hot Observables](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/creating.md#cold-vs-hot-observables)
- [RxMarbles](http://rxmarbles.com/)

## Follow me on Twitter
