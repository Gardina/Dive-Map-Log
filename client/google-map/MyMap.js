import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import GoogleMapWrapper from './GoogleMapWrapper'
import {getCoord} from 'client/create-dive-site/redux/actions'

class MyMap extends Component {
  handleMapClick(e){
    this.props.location.pathname === '/createDivesite' ? this.props.getCoord(e.latLng.lat(), e.latLng.lng()) : null
  }

  render(){
    return(
      <GoogleMapWrapper onMapClick={this.handleMapClick.bind(this)}/>
    )
  }
}

export default withRouter(connect(null, {getCoord})(MyMap))
