import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Gas_price from "./components/Gas_price";

export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gas_price" element={<Gas_price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));







/*
import React from "react";
import ReactDOM from "react-dom";

// Set up react router
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Application from "./components/Application";

ReactDOM.render(<Application />, document.getElementById("root"));*/
