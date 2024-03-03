import React, { useState } from 'react';
import './DangerForm.css'; // Import CSS file for styling

function DangerForm({ onAddDanger }) {
  // State to store input values
  const [locationX, setLocationX] = useState('');
  const [locationY, setLocationY] = useState('');
  const [radius, setRadius] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a danger object with input values
    const newDanger = {
      location: { x: Number(locationX), y: Number(locationY) },
      radius: Number(radius),
    };

    // Call the onAddDanger function with the newDanger object
    onAddDanger(newDanger);

    // Reset input fields after submission
    setLocationX('');
    setLocationY('');
    setRadius('');
  };

  return (
    <form onSubmit={handleSubmit} className="danger-form">
        <h1>Submit Your Danger Zone or Supply Location</h1>
      <div className="form-group">
        <label htmlFor="locationY" className="label">Latitude:</label>
        <input
          id="locationY"
          type="number"
          value={locationY}
          onChange={(e) => setLocationY(e.target.value)}
          required
          className="input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="locationX" className="label">Longitude:</label>
        <input
          id="locationX"
          type="number"
          value={locationX}
          onChange={(e) => setLocationX(e.target.value)}
          required
          className="input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="radius" className="label">Radius (0 if a supply location):</label>
        <input
          id="radius"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          required
          className="input"
        />
      </div>
      <button type="submit" className="button">Submit</button>
    </form>
  );
}

export default DangerForm;
