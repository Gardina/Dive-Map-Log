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
    return this.props.diveSites.diveSites.map((site)=>{
      return (
         <Marker position={{lat: site.lat, lng: site.lng}} key={site.id} title={site.name}/>
        )
      })
   }

   render(){
     return (
       <div>{this.renderDivesites()}</div>
     )
   }
}

function mapStateToProps(diveSites) {
  return {diveSites}
}

export default connect(mapStateToProps, {fetchDiveSites, getCoord})(DiveSiteMarkers)
