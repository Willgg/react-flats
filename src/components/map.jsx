import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

const Marker = () => <div className="marker"></div>;

class Map extends Component {

  static defaultProps = {
    center: [48.864716, 2.349014],
    zoom: 12
  };

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="map-container">
        <GoogleMap
          // bootstrapURLKeys={{ key: '' }}
          center={this.props.center} zoom={this.props.zoom} >
          <Marker
            lat={this.props.selectedFlat.lat}
            lng={this.props.selectedFlat.lng}
          />
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
