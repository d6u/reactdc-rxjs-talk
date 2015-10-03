// Compose observables
let b = new Rx.Subject();
let c = new Rx.Subject();
let a = Rx.Observable.combineLatest(b, c).map(([valB, valC]) => valB + valC);

// Subscribe to changes
a.subscribeOnNext((val) => console.log(val));

// Change value of Subjects
b.onNext(1);
c.onNext(2);
