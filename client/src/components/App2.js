import React from 'react';
import DangerForm from './DangerForm'; // Import the DangerForm component

function App2() {
  // Handler function to handle submission of danger data
  const handleAddDanger = async (newDanger) => {
    // Handle adding the danger data (e.g., send it to the server, update state, etc.)
    console.log('New Danger:', newDanger);

    fetch("http://localhost:3000/api/danger", {
      method: "POST",
      body: JSON.stringify(newDanger),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    const res = await fetch("http://localhost:3000/api/dangerGets", {
      method: "GET",
      
    });
    const data = await res.json();
    console.log(data)

    console.log("Request sent")

    
  };

  return (
    <div>
      <DangerForm onAddDanger={handleAddDanger} /> {/* Render the DangerForm component */}
    </div>
  );
}

export default App2;