import React, { useEffect, useState } from "react";
import './Application.scss';
import useApplicationData from '../hooks/useApplicationData';

// Using react-router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import NoPage from "./NoPage";
import Login from "./Login";
import Register from "./Register";
import GasPriceItem from "./GasPriceItem";
import Home from "./Home";
import Gas_station_list from "./Gas_stations_list";


export default function Application(props) {
  
  const {
    state, setState
  } = useApplicationData();


  const currentStations = state.gasStations
  console.log("Current Stations:", currentStations)

  function formatName(user) {
    return user.first_name + ' ' + user.last_name;
  }

  console.log(state.currentUser.first_name);

  // Display some dummy stations on screen for now
  // const gasStationList = state.gasStations.map((station) => (<li key={station.id} > {station.name} {station.rating} {station.address} </li>));

  useEffect(() => {
    // Try to get user from local storage, returns null of not found
    const storageUser = localStorage.getItem('user');

    if (storageUser) {

      // use JSON.parse to convert string to JSON
      const result = JSON.parse(storageUser)
      setState(prev => ({ ...prev, loggedIn: true, currentUser: result}));
      console.log("IS LOGGED IN: ", state.loggedIn);
    }
  }, [])
  
  return (
    <BrowserRouter>
      <div div className="Application" >
        <Navbar />
        <h1> Currently Logged in as: </h1>
        <ul> {formatName(state.currentUser)} </ul>
        <Routes>
          {/* Pass props to routes */}
            <Route path="/" element={<Home gasStations={state.gasStations}/>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
            <Route path="gas_price_item" element={<GasPriceItem />} />
            <Route path="gas_station_list" element={<Gas_station_list />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
};
