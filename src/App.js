import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Calculator/>
      </div>
    );
  }
}

export default App;
