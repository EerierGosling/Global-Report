// LocationList.js

import React, { useState } from 'react';
import LocationView from './LocationView';
import './LocationList.css';

const LocationList = ({ locations, handleSelect, selectedLocationId}) => {

  return (
    <div className="location-list">
      <h1>Location List</h1>
      {locations.map((location) => (
        <LocationView
          key={location.id}
          location={location}
          isSelected={location.id === selectedLocationId}
          onSelect={handleSelect}
        />
      ))}
      {console.log("printing!!" + selectedLocationId)}
    </div>
  );
};

export default LocationList;
