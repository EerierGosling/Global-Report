// App.js

import React, { useState, useEffect } from 'react';
import MyMapComponent from './MyMapComponent';
import LocationList from './LocationList';
import './App3.css'; // Import your CSS file

function App3() {

  const defaultCenter = {
    lat: 42.366967,
    lng: -71.105871,
  };

//   const circleOptions = [
//     {
//       center: {
//         lat: 37.7749,
//         lng: -122.4194,
//       },
//       radius: 1000,
//       fillColor: '#FF0000',
//       fillOpacity: 0.4,
//       strokeColor: '#FF0000',
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       zIndex: 1000,
//     },
//     {
//       center: {
//         lat: 37.7749,
//         lng: -122.4194,
//       },
//       radius: 10000,
//       fillColor: '#FF0000',
//       fillOpacity: 0.4,
//       strokeColor: '#FF0000',
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       zIndex: 1000,
//     },
//     {
//       center: defaultCenter,
//       radius: 400,
//       fillColor: '#FF0000',
//       fillOpacity: 0.4,
//       strokeColor: '#FF0000',
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       zIndex: 1000,
//     },
//   ];

//   const locations = [
//     { id: 1, lat: 37.7749, lng: -122.4194, title: 'Shelter', address: "1400 Massachusetts Avenue, 1 Brattle St at, Cambridge, MA 02138"},
//     { id: 2, lat: 37.7849, lng: -122.4294, title: 'Supplies', address: "1 Infinite Loop, Cupertino, CA"},
// lat: 42.362209 long: -71.086258
//     // Add more locations as needed
//   ];

const [circleOptions, setCircleOptions] = useState([]);

  const [locations, setLocations] = useState([]);


  const [selectedLocationId, setSelectedLocationId] = useState(null);

  const handleSelectLocation = (locationId) => {
    console.log('Selected location:', locationId);
    setSelectedLocationId(locationId);
    return locationId;
  };

  const selectedLocation = selectedLocationId !== null ? locations.find(loc => loc.id === selectedLocationId) : null;
  const origin = selectedLocation ? selectedLocation.address : '';

  console.log(selectedLocationId);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/dangerGets", {
          method: "GET",
        });
        const fetchedData = await res.json();
        setData(fetchedData);
  
        // Process data and update the state based on the radius
        const updatedCircleOptions = [];
        const updatedLocations = [];
  
        for (let item = 0; item < fetchedData.length; item++) {
          if (fetchedData[item].radius === 0) {
            updatedLocations.push({
              id: updatedLocations.length,
              lat: fetchedData[item].locationY,
              lng: fetchedData[item].locationX,
              title: 'Supply Location',
              info: "Somewhere where you can get supplies."
            });
          } else {
            updatedCircleOptions.push({
              center: {
                lat: fetchedData[item].locationY,
                lng: fetchedData[item].locationX,
              },
              radius: fetchedData[item].radius,
              fillColor: '#FF0000',
              fillOpacity: 0.4,
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              zIndex: 1000,
            });
          }
        }
  
        // Update the state with the new data
        setCircleOptions(updatedCircleOptions);
        setLocations(updatedLocations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
    <div className="app-container">
      <div className="content-container">
        {/* Add your content on the left side */}
        <LocationList
          locations={locations}
          handleSelect={handleSelectLocation}
          selectedLocationId={selectedLocationId}
        />
        <button onClick={() => window.location.href = '/form'}>Form</button>
      </div>
      <div className="map-container">

        {console.log(locations[selectedLocationId] + "fhpieuawhrfiopaew  " + (selectedLocationId === null ? "" : { lat: locations[selectedLocationId].lat, lng: locations[selectedLocationId].lng} ))}
        <MyMapComponent
          key={selectedLocationId} // Update the key to force remounting
          origin="75 Amherst St, Cambridge, MA 02142"
          destination={ selectedLocationId === null ? "" : {
            lat: locations[selectedLocationId].lat,
            lng: locations[selectedLocationId].lng,
          }}
          circles={circleOptions}
          locations={locations}
          mapCenter={defaultCenter}
          selectedLocationId={selectedLocationId}
        />
      </div>
    </div>
    </div>
  );
}

export default App3;
