import React, {Component} from 'react';
import Intro from './components/main/MainIntro.jsx/index.js';
import Map from './components/main/MainMap.jsx/index.js';
import Footer from './components/main/MainFooter.jsx/index.js';

class Home extends Component {

  render() {
    return (
        <div className="home">
          <Intro/>
          <Map />
          <Footer />
        </div>
    );
  }
}
export default Home;
