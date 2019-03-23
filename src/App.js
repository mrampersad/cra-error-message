import React, { Component } from 'react';
import './App.css';

const test_nowarn = <Test />
const test_warn = React.createElement(Test, null)

class App extends Component {
  render() {
    return (
      <div className="App">
        {test_nowarn}
        {test_warn}
      </div>
    );
  }
}

class Test extends React.Component {
  render() {
    return "This is a test!"
  }
}

export default App;
