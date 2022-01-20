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
import GasPriceItemList from "./GasPriceItemList";
import Reviews from "./Reviews";
import WriteReview from "./WriteReview";
import ReviewItem from "./ReviewItem";
import StationRating from "./Rating";
import SubmitPrice from "./SubmitPrice";


export default function Application(props) {
  console.log("application props", props);

  const {
    state, setState
  } = useApplicationData();


  const currentStations = state.gasStations
  console.log("Current Stations:", currentStations)

  console.log("State Updates: ", state.priceUpdates)

  function formatName(user) {
    return user.first_name + ' ' + user.last_name;
  }


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
        <ul></ul>
        <Routes>
          {/* Pass props to routes */}
            <Route path="/" element={<Home gasStations={state.gasStations} priceUpdates={state.priceUpdates}/>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
            <Route path="gas_price_item" element={<GasPriceItem />} />
            <Route path="gas_price_item_list" element={<GasPriceItemList />} />
            <Route path="reviews/:id" element={<Reviews gasStations={state.gasStations} user={state.currentUser} priceUpdates={state.priceUpdates} reviews={state.reviews}/>} />
            <Route path="reviews_item" element={<ReviewItem reviews={state.reviews} gasStations={state.gasStations} user={state.currentUser}/>} />
            <Route path="write_review/:id" element={<WriteReview user={state.currentUser} gasStations={state.gasStations}/>} />
            <Route path="rating" element={<StationRating gasStations={state.gasStations} reviews={state.reviews}/>} />
            <Route path="submit_price/:id" element={<SubmitPrice gasStations={state.gasStations} user={state.currentUser} priceUpdates={state.priceUpdates} reviews={state.reviews}/>} />


        </Routes>
      </div>
    </BrowserRouter>
  )
};
