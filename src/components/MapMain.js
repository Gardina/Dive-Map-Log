import React from 'react';
import GoogleMap from './google_map'
import LogBook from './log_book/LogBook'

const MapMain = () => {
  return (
    <div>
      <GoogleMap />
      <LogBook />
    </div>
  );
};

export default MapMain;
