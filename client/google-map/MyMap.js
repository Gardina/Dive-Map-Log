import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import GoogleMapWrapper from './GoogleMapWrapper'
import {getCoord} from 'client/create-dive-site/redux/actions'
import {getSitePosAndName} from 'client/create-new-dive/redux/actions'

class MyMap extends Component {
  handleMarkerClick(e){
    this.props.location.pathname === '/createNewDive' ? console.log(e) : null
  }

  handleMapClick(e){
    this.props.location.pathname === '/createDivesite' ? this.props.getCoord(e.latLng.lat(), e.latLng.lng()) : null
  }

  render(){
    return(
      <GoogleMapWrapper onMapClick={this.handleMapClick.bind(this)} onMarkerClick={this.handleMarkerClick.bind(this)}/>
    )
  }
}

export default withRouter(connect(null, {getCoord, getSitePosAndName})(MyMap))
