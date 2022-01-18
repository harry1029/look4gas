import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NoPage from "./components/NoPage";
import Login from "./components/Login";
import Register from "./components/Register";

export default function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));







/*
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Application from "./components/Application";

ReactDOM.render(<Application />, document.getElementById("root"));*/