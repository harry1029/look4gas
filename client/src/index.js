import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import Login from "./components/Login";
import Register from "./components/Register";
import GasPriceItem from "./components/GasPriceItem";
import Application from "./components/Application";
import Home from "./components/Home";
import Gas_station_list from "./components/Gas_stations_list";

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gas_price_item" element={<GasPriceItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<AllRoutes />, document.getElementById("root"));







/*
import React from "react";
import ReactDOM from "react-dom";

// Set up react router
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Application from "./components/Application";

ReactDOM.render(<Application />, document.getElementById("root"));*/
