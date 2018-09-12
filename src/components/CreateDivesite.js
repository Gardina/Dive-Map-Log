import React, {Component} from 'react';
import GoogleMap from './google_map'

class CreateDivesite extends Component {
  render(){
    return (
      <div>
        <h1>To add location click on the map</h1>
        <GoogleMap />
      </div>
    )
  }
};

export default CreateDivesite;
