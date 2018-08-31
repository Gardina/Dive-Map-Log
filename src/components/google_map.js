import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import API_KEY from '../api_key'

const Divesites = ({ name, lat, lng }) => <div>{name}</div>;

class GoogleMap extends Component {
  static get defaultProps() {
    return{
      center: {
        lat: 5.225367,
        lng: 73.0856298
      },
      zoom: 11
    }
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Divesites
            lat={5.225367}
            lng={73.0856298}
            name={'Dhigu Thila'}
          />
          <Divesites
            lat={5.183513}
            lng={73.122870}
            name={'Bodu Gaa'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
