import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./NotFound.js";
import Skeleton from "./Skeleton.js";
import App2 from "./App2.js";
import App3 from "./App3.js";
    

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities.js";
import DangerForm from './DangerForm'; // Import the DangerForm component
/**
 * Define the "App" component
 */
const App = () => {

  const handleAddDanger = (newDanger) => {
    // Handle adding the danger data (e.g., send it to the server, update state, etc.)
    console.log('New Danger:', newDanger);
  };

  return (
    <>
      <div className="app"></div>
      <Routes>
        {/* Nested route moved outside App3 */}
        <Route path="/form" element={<App2 />} />
        <Route path="/" element={<App3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Additional content or components can be added here */}
    </>
    
  );
};

export default App;
