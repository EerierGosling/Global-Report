import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";

import NotFound from "./NotFound.js";
import Skeleton from "./Skeleton.js";
import App2 from "./App2.js";

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
      <Routes>
        <Route
          path="/"
          element={
            <App2/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
};

export default App;
