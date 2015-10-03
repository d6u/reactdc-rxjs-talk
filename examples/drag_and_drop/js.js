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
