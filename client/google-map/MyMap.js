import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import GoogleMapWrapper from "./GoogleMapWrapper";
import { getCoord } from "client/create-dive-site/redux/actions";
import { getSitePosAndName } from "client/create-new-dive/redux/actions";

class MyMap extends Component {
  handleMarkerClick(e) {
    if (this.props.location.pathname === "/createNewDive") {
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();
      let name = this.props.diveSites.filter(divesite => {
        return divesite.id === `${lat}${lng}`;
      })[0].name;
      this.props.getSitePosAndName(lat, lng, name);
    }
  }

  handleMapClick(e) {
    this.props.location.pathname === "/createDivesite"
      ? this.props.getCoord(e.latLng.lat(), e.latLng.lng())
      : null;
  }

  render() {
    return (
      <GoogleMapWrapper
        onMapClick={this.handleMapClick.bind(this)}
        onMarkerClick={this.handleMarkerClick.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return { diveSites: state.diveSites };
}

export default withRouter(
  connect(
    mapStateToProps,
    { getCoord, getSitePosAndName }
  )(MyMap)
);
