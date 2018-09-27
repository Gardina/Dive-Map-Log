import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Marker } from "react-google-maps"

import {fetchDiveSites} from 'client/google-map/redux/actions'
import {getCoord} from 'client/create-dive-site/redux/actions'

class DiveSiteMarkers extends Component {
  componentDidMount() {
      this.props.fetchDiveSites()
    }

  renderDivesites(){
    return this.props.diveSites.map((site)=>{
      return (
         <Marker
           position={{lat: site.lat, lng: site.lng}}
           key={site.id}
           label={site.name}
           onClick={this.props.onMarkerClick}/>
        )
      })
   }

   render(){
     return (
       <div>{this.renderDivesites()}</div>
     )
   }
}

function mapStateToProps(state) {
  return {diveSites: state.diveSites}
}

export default connect(mapStateToProps, {fetchDiveSites, getCoord})(DiveSiteMarkers)
