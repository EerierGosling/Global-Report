// LocationContext.js
import { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const useLocationContext = () => {
  return useContext(LocationContext);
};

export const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([
    { id: 1, lat: 37.7749, lng: -122.4194, title: 'Shelter', address: "17 Lakeview Ave, Cambridge, MA" },
    { id: 2, lat: 37.7849, lng: -122.4294, title: 'Supplies', address: "1 Infinite Loop, Cupertino, CA" },
    // Add more locations as needed
  ]);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};
