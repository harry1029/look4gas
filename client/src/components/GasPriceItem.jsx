import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./GasPriceItem.scss";
import "./Navbar.scss";

import axios from "axios";

import { useEffect } from "react";

import { getUserIdFromPriceUpdate } from "../helpers/selectors";

export default function GasPriceItem(props) {

  const { stationId, name, rating, address, cityId, phone, regular, ultra, premium, priceUpdates } = props;

  const [userInfo, setUserInfo] = useState();


  console.log("Updates: ", priceUpdates);
  const priceSubmitUserId = getUserIdFromPriceUpdate(priceUpdates, stationId);



  console.log("MyFirstName: ", userInfo)

  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${priceSubmitUserId}`)
    .then(response => {
      setUserInfo(response.data);
      console.log(response.data)
    });
  }, []);

  return (
    <div className="main_block">
      <div className="details_block">
        <div>
          <img className="gas_station_image" src='pioneer.png' />
        </div>
        <div className="station_details">
          name: {name} <br></br>
          rating: {rating} <br></br>
          address: {address} <br></br>
          station_phone: {phone}
        </div>
        <div className="gas_price">
          regular_price: {regular} <br></br>
          submitted by: 
          {!userInfo && <p>Loading...</p>}
          {userInfo && <p>{userInfo.first_name}</p>} <br></br>
          2 hours ago <br></br>
        </div>
      </div>
      <div className="details_link ">
        <button
          className="button reviewbutton">
          <Link to="/submit_price">Submit Price</Link>
        </button>

        <br></br>

        <button
          className="button reviewbutton">
          <Link to="/reviews">Details</Link>
        </button>
      </div>
    <Outlet />

    </div>


  );
};