import React, {Component} from 'react';
import MapImg from './images/map.png';

class Map extends Component {
  
  render() {
    return (
        <div className="map">
          <img className="map-img" alt='' src={MapImg} />
        </div>
    );
  }
}
export default Map;