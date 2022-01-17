import React from "react";
import './Button.scss';
import './Navbar.scss';
import "./Gas_price.scss";



const Navbar = () => {

  return (<div className="Navbar" >
    <div>
      <img className="Image" src='../../public/gas_logo.png' width={182} height={64} />
    </div>

    <div className="Logo">
      <h1> Look4Gas </h1>
    </div>

    <div className="rightbutton">
      <button
        className="button">
        Login
      </button>

      <br></br>

      <button
        className="button">
        Register
      </button>
    </div>

  </div>
  );
};

export default Navbar;