import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import * as actions from '../actions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import API_KEY from '../api_key'

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

  componentWillMount(){
    this.props.fetchDiveSites()
    }

  renderDivesites(){
    console.log(this.props.diveSites)
    const Divesite = ({ name }) => <div><h2>{name}</h2></div>;

    return this.props.diveSites.diveSites.map((site)=>{
      return (
       <Divesite name={site.name} lat={site.lat} lng={site.lng} key={site.id}/>
      )
    })
 }

 handleClick(lat, lng){
   this.props.location.pathname === '/createDivesite' ? this.props.createDiveSite(lat, lng) : null
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

function mapStateToProps(diveSites) {
  return {diveSites}
}

export default withRouter(connect(mapStateToProps, actions)(GoogleMap))
