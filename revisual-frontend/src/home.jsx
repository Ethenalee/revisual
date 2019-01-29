import React, {Component} from 'react';
import Intro from './MainIntro.jsx';
import Map from './MainMap.jsx';
import Footer from './MainFooter.jsx';

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