// LocationView.js

import React from 'react';
import './LocationView.css';

const LocationView = ({ location, isSelected, onSelect }) => {
  const handleClick = () => {
    onSelect(location.id);
  };

  return (
    <div
      className={`location-view ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
        {console.log("loading!!" + isSelected)}
      <h1>{location.title}</h1>

      { isSelected ? (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
          <p>More Information: {location.info}</p>
        </div>
      ) : (
        <p>Click to view details</p>
      )}
    </div>
  );
};

export default LocationView;
