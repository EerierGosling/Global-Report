// App.js

import React, { useState } from 'react';
import MyMapComponent from './MyMapComponent';
import LocationList from './LocationList';
import './App3.css'; // Import your CSS file

function App() {

  const defaultCenter = {
    lat: 42.366967,
    lng: -71.105871,
  };

  const circleOptions = [
    {
      center: {
        lat: 37.7749,
        lng: -122.4194,
      },
      radius: 1000,
      fillColor: '#FF0000',
      fillOpacity: 0.4,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      zIndex: 1000,
    },
    {
      center: {
        lat: 37.7749,
        lng: -122.4194,
      },
      radius: 10000,
      fillColor: '#FF0000',
      fillOpacity: 0.4,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      zIndex: 1000,
    },
    {
      center: defaultCenter,
      radius: 400,
      fillColor: '#FF0000',
      fillOpacity: 0.4,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      zIndex: 1000,
    },
  ];

  const locations = [
    { id: 1, lat: 37.7749, lng: -122.4194, title: 'Shelter', address: "1400 Massachusetts Avenue, 1 Brattle St at, Cambridge, MA 02138"},
    { id: 2, lat: 37.7849, lng: -122.4294, title: 'Supplies', address: "1 Infinite Loop, Cupertino, CA"},
    // Add more locations as needed
  ];

  const [selectedLocationId, setSelectedLocationId] = useState(null);

  const handleSelectLocation = (locationId) => {
    console.log('Selected location:', locationId);
    setSelectedLocationId(locationId);
    return locationId;
  };

  const selectedLocation = selectedLocationId !== null ? locations.find(loc => loc.id === selectedLocationId) : null;
  const origin = selectedLocation ? selectedLocation.address : '';

  console.log(selectedLocationId);

  return (
    <div className="app-container">
      <div className="content-container">
        {/* Add your content on the left side */}
        <LocationList
          locations={locations}
          handleSelect={handleSelectLocation}
          selectedLocationId={selectedLocationId}
        />
      </div>
      <div className="map-container">
        <MyMapComponent
          key={selectedLocationId} // Update the key to force remounting
          origin={origin}
          destination="75 Amherst St, Cambridge, MA 02142"
          circles={circleOptions}
          locations={locations}
          mapCenter={defaultCenter}
          selectedLocationId={selectedLocationId}
        />
      </div>
    </div>
  );
}

export default App;
