import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import API_KEY from '../api_key'

const DIVESITES = [
  {lat: 5.225367, lng: 73.1856298, name: "Dhigu2" },
  {lat: 5.125367, lng: 73.1856298, name: "New Rockk" },
  {lat: 4.103259, lng: 73.533590, name: "Cool Rock"}]

const Divesite = ({ name }) => <div>{name}</div>;

class GoogleMap extends Component {
  static get defaultProps() {
    return{
      center: {
        lat: 5.225367,
        lng: 73.0856298
      },
      zoom: 11,
      diveSites: DIVESITES
    }
  };

  renderDivesites(){
     return this.props.diveSites.map((site)=>{
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
