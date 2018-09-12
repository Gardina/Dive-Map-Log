import React, { Component } from 'react';
import _map from 'lodash.map'
import GoogleMapReact from 'google-map-react';
import * as actions from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

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
    const Divesite = ({ name }) => <div><h2>{name}</h2></div>;

    return _map(this.props.diveSites, site=>site).map((site)=>{
      return (
       <Divesite name={site.name} lat={site.lat} lng={site.lng} key={site.name}/>
      )
    })
 }

 handleClick(lat, lng){
   this.props.location.pathname === '/createDivesite' ? console.log(lat,lng) : null
 }

  render() {

    return (
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          onClick={({x, y, lat, lng, event}) => {this.handleClick(lat,lng)}}
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

function mapStateToProps(createSiteCoord) {
  return {createSiteCoord}
}

export default withRouter(connect(mapStateToProps, actions)(GoogleMap))
