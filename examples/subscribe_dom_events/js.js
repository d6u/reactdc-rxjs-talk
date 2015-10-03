Rx.Observable.fromEvent($('#text'), 'keyup')
  .map(event => event.target.value)
  .subscribeOnNext(val => console.log(val));
