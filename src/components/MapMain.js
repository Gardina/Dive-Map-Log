import React from 'react';
import GoogleMap from './google_map'
import LogBook from './log_book/LogBook'

const MapMain = () => {
  return (
    <div>
      <h1>MAP MAIN</h1>
      <GoogleMap />
      <LogBook />
    </div>
  );
};

export default MapMain;
