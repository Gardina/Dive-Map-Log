import React, { Component } from 'react';
import _map from 'lodash.map'
import GoogleMapReact from 'google-map-react';

import API_KEY from '../api_key'
import diveSites from '../fake_data/divesites'

class GoogleMap extends Component {
  static get defaultProps() {
    return{
      center: {
        lat: 5.225367,
        lng: 73.0856298
      },
      zoom: 11,
      diveSites
    }
  };

  renderDivesites(){
    const Divesite = ({ name }) => <div>{name}</div>;
    return _map(this.props.diveSites, site=>site).map((site)=>{
      return (
       <Divesite name={site.name} lat={site.lat} lng={site.lng} key={site.name}/>
      )
    })
 }

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.renderDivesites()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
