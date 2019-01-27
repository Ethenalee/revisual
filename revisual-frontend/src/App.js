import React, { Component } from 'react';
import './App.css';
import Intro from './intro.jsx';
import Map from './map.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro/>
        <Map />
      </div>
    );
  }
}

export default App;
