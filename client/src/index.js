import React from "react";
import ReactDOM from "react-dom";

// Set up react router
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import Application from "./components/Application";

ReactDOM.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter> , document.getElementById("root")
);