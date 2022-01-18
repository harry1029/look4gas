import React, { useEffect, useState } from "react";
import './Application.scss';
import useApplicationData from '../hooks/useApplicationData';
import Navbar from './Navbar';
import GasPriceItem from './GasPriceItem';

// Using react-router
import { Routes, Route, Link } from "react-router-dom";

export default function Application(props) {
  
  const {
    state
  } = useApplicationData();


  const currentStations = state.gasStations
  console.log("Current Stations:", currentStations)

  // Display some dummy stations on screen for now
  const gasStationList = state.gasStations.map((station) => (<li key={station.id} > {station.name} {station.rating} {station.address} </li>));

  useEffect(() => {

  }, [])
  
  return (<div className="Application" >
    <Navbar/>
    <h1> Gas Stations </h1>
    <ul> {gasStationList} </ul>
  </div >
  );
};
