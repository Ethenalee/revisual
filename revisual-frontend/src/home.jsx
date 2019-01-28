import React, {Component} from 'react';
import Intro from './intro.jsx';
import Map from './map.jsx';
import Footer from './footer.jsx';

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