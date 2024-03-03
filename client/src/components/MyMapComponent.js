import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Polygon, Circle, Marker } from '@react-google-maps/api';

const MyMapComponent = ({origin, destination, circles, locations, mapCenter}) => {
  const mapContainerStyle = {
    width: '100%',
    height: '100vh',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [directions, setDirections] = useState(null);
  const [googleMap, setGoogleMap] = useState(null);

  const directionsCallback = useCallback((response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    } else {
      console.error('Error fetching directions:', response);
    }
  }, []);

  const handleLoadMap = (map) => {
    setGoogleMap(map);
  };

  const handleMarkerClick = (location) => {
    console.log('Marker clicked:', location);
    // Add your custom logic for marker click here
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBTlxvB62XGYgvgfUeIbpfh2rIZJURlj1g"
      id="script-loader"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={14}
        onLoad={(map) => handleLoadMap(map)}
      >
        {googleMap && (
          <>
            {circles.map((circle) => (<Circle options={circle} />))}

            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => handleMarkerClick(location)}
              />
            ))}

            {console.log(destination)}

            {directions === null && (
              <DirectionsService
                options={{
                  origin: origin,
                  destination: destination,
                  travelMode: "WALKING",
                }}
                callback={directionsCallback}
                map={googleMap}
              />
            )}

            {directions && <DirectionsRenderer directions={directions} />}
          </>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
