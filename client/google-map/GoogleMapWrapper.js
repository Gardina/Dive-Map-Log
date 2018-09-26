import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import API_KEY from './api_key'
import DiveSiteMarkers from './DiveSiteMarkers'

const GoogleMapWrapper = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `900px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 5.225367, lng: 73.0856298 }}
    onClick={props.onMapClick}
  >
    <DiveSiteMarkers onMarkerClick={props.onMarkerClick}/>
  </GoogleMap>
)

export default GoogleMapWrapper
