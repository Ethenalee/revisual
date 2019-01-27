import React, { Component } from 'react';
import './App.css';
import Intro from './intro.jsx';
import Map from './map.jsx';
import Footer from './footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro/>
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
