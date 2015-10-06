import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rx';

//// Action
let addSubject = new Rx.Subject();

//// Stream (a.k.a. Store in Flux)
let counterStream = addSubject
  .scan((count, _) => count + 1, 0)
  .startWith(0);

//// React Component using 0.14 function component style
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    counterStream.subscribeOnNext(count => {
      this.setState({count});
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }

  add() {
    addSubject.onNext(null);
  }
}

ReactDOM.render(<App />, document.getElementById('react'));
