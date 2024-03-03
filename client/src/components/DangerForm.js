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
      <div className="form-group">
        <label htmlFor="locationX" className="label">Location X:</label>
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
        <label htmlFor="locationY" className="label">Location Y:</label>
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
        <label htmlFor="radius" className="label">Radius:</label>
        <input
          id="radius"
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          required
          className="input"
        />
      </div>
      <button type="submit" className="button">Add Danger</button>
    </form>
  );
}

export default DangerForm;
